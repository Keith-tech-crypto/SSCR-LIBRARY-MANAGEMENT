import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, User, Mail, Key } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const signUpSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false
    }
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make an API call to create the account
      toast({
        title: "Account created!",
        description: "Your account has been created successfully. Please log in with your credentials.",
      });
      
      // Navigate to login page after successful registration
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again later.",
      });
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
            CREATE ACCOUNT
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input 
                            placeholder="First Name" 
                            {...field} 
                            className="bg-white pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input 
                            placeholder="Last Name" 
                            {...field} 
                            className="bg-white pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
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
                          type="email"
                          {...field} 
                          className="bg-white pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input 
                          placeholder="Password" 
                          type="password"
                          {...field} 
                          className="bg-white pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input 
                          placeholder="Confirm Password" 
                          type="password"
                          {...field} 
                          className="bg-white pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        I accept the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-sscr-red hover:bg-red-700 text-white font-bold rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="flex items-center w-full mt-8">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
