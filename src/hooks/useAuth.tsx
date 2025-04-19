
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  adminCode: z.string().optional()
});

export type FormData = z.infer<typeof formSchema>;

// Extend the types to include our new function
type RpcFunctions = "is_admin" | "generate_admin_code" | "validate_admin_code" | "setup_admin_profile";

export function useAuth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (values: FormData) => {
    try {
      let response;
      if (isSignUp) {
        if (values.adminCode) {
          const { data, error: validateError } = await supabase
            .rpc('validate_admin_code' as RpcFunctions, { registration_code: values.adminCode });

          if (validateError || !data) {
            toast.error("Invalid or expired admin registration code");
            return;
          }
        } else {
          toast.error("Admin registration code is required");
          return;
        }

        response = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });

        if (response.error) throw response.error;

        if (response.data.user) {
          // First update the registration code to mark it as used
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

          // Using a server-side SQL function approach to bypass RLS policies
          // This will create the admin profile without running into RLS issues
          const { error: profileSetupError } = await supabase.rpc(
            'setup_admin_profile' as RpcFunctions,
            { 
              user_id: response.data.user.id 
            }
          );

          if (profileSetupError) {
            console.error("Error creating admin profile:", profileSetupError);
            toast.error("Failed to set up admin account");
            return;
          }

          toast.success("Admin registration successful! Please verify your email before logging in.");
          setIsSignUp(false); // Switch to login view after successful registration
        }
      } else {
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
  };

  return {
    isSignUp,
    setIsSignUp,
    handleAuth
  };
}
