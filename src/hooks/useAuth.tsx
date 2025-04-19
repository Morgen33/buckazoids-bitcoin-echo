
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

export function useAuth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (values: FormData) => {
    try {
      let response;
      if (isSignUp) {
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

          // Then use the service_role key or a stored procedure to insert the profile with admin role
          // This is a direct insert - not using RPC anymore since it's not defined in the database
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
