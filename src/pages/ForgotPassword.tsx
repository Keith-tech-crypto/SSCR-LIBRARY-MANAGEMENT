import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make an API call to send a reset email
      setResetSent(true);
      toast({
        title: "Reset link sent!",
        description: `Password reset instructions have been sent to ${data.email}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset instructions. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="w-full max-w-md px-4">
          <div
            className="font-bebas text-2xl md:text-3xl text-sscr-red mb-4 text-center tracking-wider"
            style={{
              color: "#CF1C27",
              letterSpacing: "0.03em",
              fontWeight: 700,
              fontFamily: '"Bebas Neue", sans-serif',
              textShadow: "1px 1px 0 #fff8, 2px 4px 4px #0001",
            }}
          >
            RESET PASSWORD
          </div>
          
          {resetSent ? (
            <div className="text-center">
              <p className="text-black mb-6">
                Check your email for the password reset link. If you don't see it, check your spam folder.
              </p>
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
          ) : (
            <>
              <p className="text-black text-center mb-6">
                Enter your email and we'll send you instructions to reset your password.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input 
                              placeholder="your.email@example.com" 
                              {...field} 
                              className="bg-white pl-10"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-sscr-red hover:bg-red-700 text-white font-bold rounded"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </div>
                </form>
              </Form>

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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
