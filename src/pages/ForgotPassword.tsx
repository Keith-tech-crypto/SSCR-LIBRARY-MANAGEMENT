
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const navigate = useNavigate();

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
          PASSWORD RESET IS DISABLED FOR DEMO.<br />Use <b>admin</b> / <b>1234</b>
        </div>
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
      </div>
    </div>
  );
};

export default ForgotPassword;
