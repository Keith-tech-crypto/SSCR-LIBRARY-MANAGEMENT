
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPw, setNewPw] = useState("");
  const navigate = useNavigate();

  // Simple demo: alerts for all actions.
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code || !newPw) return alert("Please fill all fields!");
    alert("Password reset attempted!");
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
            src="/lovable-uploads/841d3fe5-6f2b-485b-ac29-23f7e56ddf20.png"
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
          FORGOT PASSWORD
        </div>
        <form
          onSubmit={handleSendCode}
          className="w-full max-w-xs flex flex-col items-center"
          autoComplete="off"
        >
          {/* EMAIL */}
          <div className="mb-5 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <User className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
          </div>
          {/* CODE */}
          <div className="mb-5 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="text"
                  placeholder="CODE"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          {/* NEW PASSWORD */}
          <div className="mb-6 w-full relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-7 w-7 mr-2 text-black" />
                <Input
                  type="password"
                  placeholder="NEW PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-lg text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={newPw}
                  onChange={e => setNewPw(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-sscr-red hover:bg-sscr-red/90 text-sscr-white font-bebas text-xl py-2 rounded-md tracking-wider w-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] transition"
          >
            SEND CODE
          </Button>
          <div className="flex items-center w-full mt-8">
            <Button
              type="button"
              variant="secondary"
              className="gap-2 text-sscr-red font-bebas text-base bg-white hover:bg-gray-100 border border-black px-4 py-1 rounded shadow"
              onClick={() => navigate("/")}
            >
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
