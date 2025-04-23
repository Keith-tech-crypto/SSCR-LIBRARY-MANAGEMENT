import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pw || !pw2) return toast({ title: "Missing fields", description: "Please complete all fields." });
    if (pw !== pw2) return toast({ title: "Password mismatch", description: "Passwords do not match." });
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password: pw });
    setLoading(false);
    if (error) {
      toast({ title: "Sign up failed", description: error.message });
      return;
    }
    toast({ title: "Sign up successful", description: "Check your email to confirm your registration." });
    setEmail("");
    setPw("");
    setPw2("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* LEFT */}
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
          <img
            src="/lovable-uploads/b49445c8-a152-4b26-8e1e-e5a0192c91e1.png"
            alt="Monk Illustration"
            className="w-[280px] md:w-[350px] lg:w-[360px] max-w-full h-auto mt-5 mb-4"
            draggable={false}
          />
        </div>
      </div>
      {/* RIGHT */}
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
        {/* "Enter your details" */}
        <div
          className="font-bebas text-xl md:text-2xl text-sscr-red mb-8 mt-3 tracking-wider select-none text-center"
          style={{
            color: "#CF1C27",
            letterSpacing: "0.03em",
            fontWeight: 700,
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: "1px 1px 0 #fff8, 2px 4px 4px #0001",
          }}
        >
          ENTER YOUR DETAILS
        </div>
        {/* SIGNUP FORM */}
        <form
          onSubmit={handleSignup}
          className="w-full max-w-xs flex flex-col items-center"
          autoComplete="off"
        >
          {/* EMAIL */}
          <div className="mb-4 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <User className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
          </div>
          {/* PASSWORD */}
          <div className="mb-4 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="password"
                  placeholder="PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
          {/* CONFIRM PASSWORD */}
          <div className="mb-6 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={pw2}
                  onChange={(e) => setPw2(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full mb-2">
            <Button
              type="submit"
              className="bg-sscr-red hover:bg-sscr-red/90 text-sscr-white font-bebas text-xl py-2 rounded-md tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] transition"
            >
              SIGNUP
            </Button>
          </div>
          <div className="flex items-center w-full mt-6">
            <Button
              type="button"
              variant="secondary"
              className="gap-2 text-sscr-red font-bebas text-base bg-white hover:bg-gray-100 border border-black px-4 py-1 rounded shadow"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
