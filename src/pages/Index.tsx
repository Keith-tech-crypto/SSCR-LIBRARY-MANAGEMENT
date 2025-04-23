
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded admin credentials
    if (username === "admin" && password === "1234") {
      toast({ title: "Success!", description: "Logged in as admin." });
      navigate("/home");
      return;
    }

    // Regular Supabase login
    if (!username || !password) {
      toast({ title: "Missing info", description: "Please provide credentials." });
      return;
    }
    
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });
    
    if (error) {
      toast({ title: "Login failed", description: error.message });
      return;
    }
    
    toast({ title: "Success!", description: "Logged in." });
    navigate("/home");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white py-8 px-6">
        <div className="w-full flex flex-col items-center justify-center mb-8 mt-8 md:mt-0 animate-fade-in">
          <h1
            className="text-[3.3rem] md:text-[4rem] font-bold italic"
            style={{
              color: "#FFDC3D",
              textShadow: "0px 5px 0px #beae22, 2px 3px 8px #cf1c27cc",
              letterSpacing: "0.08em",
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            WELCOME
          </h1>
          <h2
            className="text-2xl md:text-4xl font-bold tracking-widest"
            style={{
              color: "#CF1C27",
              fontFamily: '"Bebas Neue", sans-serif',
              textShadow: "0px 2px 0px #0002",
            }}
          >
            SSCR LIBRARY
          </h2>
          {/* Image placed at the bottom of SSCR LIBRARY heading */}
          <img
            src="/lovable-uploads/d74c3427-8ff0-464f-ae1a-daafa1e1ea32.png"
            alt="Saint Thomas of Villanova Reading"
            className="w-[280px] md:w-[350px] lg:w-[360px] max-w-full h-auto mt-4 mb-4"
            draggable={false}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col bg-sscr-yellow items-center px-4 pt-8 pb-4 justify-start md:justify-center">
        {/* Logo */}
        <div className="w-full flex justify-center mb-2">
          <img
            src="/lovable-uploads/279838fe-eb35-465a-ab85-fd3312906e24.png"
            alt="San Sebastian College Logo"
            className="w-24 h-24 object-contain"
            draggable={false}
          />
        </div>
        {/* Heading */}
        <h3
          className="font-bebas text-xl md:text-2xl text-sscr-red mb-8 mt-3 tracking-wider select-none text-center"
          style={{
            color: "#CF1C27",
            letterSpacing: "0.03em",
            fontWeight: 700,
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: "1px 1px 0 #fff8, 2px 4px 4px #0001",
          }}
        >
          WELCOME! LOGIN TO YOUR ACCOUNT
        </h3>
        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-xs flex flex-col items-center"
          autoComplete="off"
        >
          {/* Username */}
          <div className="mb-4 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <User className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="text"
                  placeholder="USERNAME"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>
          </div>
          {/* Password */}
          <div className="mb-6 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="password"
                  placeholder="PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full mb-2">
            <Button
              type="submit"
              className="bg-sscr-red/90 hover:bg-sscr-red text-sscr-white font-bebas text-xl py-2 rounded-md tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] transition"
            >
              LOGIN
            </Button>
            <Button
              type="button"
              className="bg-sscr-red hover:bg-sscr-red/90 text-sscr-white font-bebas text-xl py-2 rounded-md tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] transition"
              onClick={handleSignup}
            >
              SIGN UP
            </Button>
          </div>
          {/* Options */}
          <div className="flex justify-between items-center w-full mt-2 gap-2">
            <button
              type="button"
              className="text-xs text-sscr-red font-bebas tracking-wider hover:underline bg-transparent outline-none border-none cursor-pointer"
              style={{ color: "#CF1C27" }}
              onClick={() => navigate("/forgot-password")}
            >
              FORGOT PASSWORD?
            </button>
            <label className="flex items-center ml-auto cursor-pointer">
              <input
                type="checkbox"
                className="mx-2 accent-sscr-red scale-125"
                checked={remember}
                onChange={() => setRemember((v) => !v)}
              />
              <span
                className="text-xs text-sscr-red font-bebas tracking-wider"
                style={{ color: "#CF1C27" }}
              >
                REMEMBER ME?
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
