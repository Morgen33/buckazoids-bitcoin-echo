
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  adminCode: z.string().optional()
});

export default function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      adminCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let response;
      if (isSignUp) {
        // Validate admin registration code
        if (values.adminCode) {
          const { data, error: validateError } = await supabase
            .rpc('validate_admin_code', { registration_code: values.adminCode });

          if (validateError || !data) {
            toast.error("Invalid or expired admin registration code");
            return;
          }
        } else {
          toast.error("Admin registration code is required");
          return;
        }

        // Signup process
        response = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });

        if (response.error) throw response.error;

        if (response.data.user) {
          // Mark the registration code as used
          const { error: updateCodeError } = await supabase
            .from('admin_registration_codes')
            .update({ 
              is_used: true, 
              used_by: response.data.user.id,
              used_at: new Date().toISOString()
            })
            .eq('code', values.adminCode);

          if (updateCodeError) {
            console.error("Error updating registration code:", updateCodeError);
          }

          // Insert admin profile - Using direct insert instead of RPC
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: response.data.user.id,
              is_admin: true
            });

          if (profileError) {
            console.error("Error creating admin profile:", profileError);
            toast.error("Failed to set up admin account");
            return;
          }

          toast.success("Admin registration successful!");
          navigate("/admin");
        }
      } else {
        // Login process
        response = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        
        if (response.error) throw response.error;
        
        toast.success("Login successful!");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error(error instanceof Error ? error.message : "Authentication failed");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-buckazoid-navy">
              {isSignUp ? "Admin Registration" : "Admin Login"}
            </h1>
            <p className="text-gray-600 mt-2">
              {isSignUp
                ? "Use the admin registration code to create an admin account"
                : "Login to access admin dashboard"}
            </p>
            {isSignUp && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4" role="alert">
                <p className="font-bold">First Time Admin Setup</p>
                <p>For your first admin account, use the code: ADMIN123456</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" type="email" {...field} />
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
                        <Input placeholder="******" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isSignUp && (
                  <FormField
                    control={form.control}
                    name="adminCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Admin Registration Code</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter admin registration code" 
                            type="text" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <Button type="submit" className="w-full">
                  {isSignUp ? "Register Admin" : "Login"}
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-gray-600 hover:underline"
              >
                {isSignUp
                  ? "Already have an admin account? Login"
                  : "Need to create an admin account? Register"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
