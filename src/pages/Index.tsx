
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", { email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side removed (no picture on left) */}
      <div className="hidden md:block w-1/2 bg-sscr-yellow" />

      {/* Right Side - Yellow Background with Form */}
      <div className="w-full md:w-1/2 bg-sscr-yellow p-8 flex flex-col items-center justify-center relative">
        {/* San Sebastian College logo centered above the heading */}
        <div className="mb-4 flex justify-center w-full">
          <img
            src="/lovable-uploads/279838fe-eb35-465a-ab85-fd3312906e24.png"
            alt="San Sebastian College Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        <h3
          className="font-bebas text-3xl text-sscr-red text-center mb-8 tracking-wider select-none"
          style={{ color: "#CF1C27" }}
        >
          ENTER YOUR DETAILS
        </h3>

        <form onSubmit={handleSignup} className="w-full max-w-md">
          <div className="mb-6 relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="flex items-center px-4 py-2">
                <Mail className="h-6 w-6 mr-2" />
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-xl text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-6 w-6 mr-2" />
                <Input
                  type="password"
                  placeholder="PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-xl text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-8 relative">
            <div className="bg-white rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="flex items-center px-4 py-2">
                <Lock className="h-6 w-6 mr-2" />
                <Input
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  className="border-none shadow-none focus-visible:ring-0 font-bebas text-xl text-sscr-red placeholder:text-sscr-red placeholder:opacity-100 pl-0 placeholder:tracking-wider"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-sscr-red hover:bg-sscr-red/90 font-bebas text-2xl py-2 px-12 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] tracking-wider"
            >
              SIGNUP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

