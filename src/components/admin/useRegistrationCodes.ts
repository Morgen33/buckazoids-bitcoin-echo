
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import type { RegistrationCode } from "./types";

export function useRegistrationCodes() {
  const [codes, setCodes] = useState<RegistrationCode[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCodes = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_registration_codes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error('Error fetching registration codes:', error);
      toast.error("Failed to load registration codes");
    } finally {
      setLoading(false);
    }
  };

  const generateNewCode = async () => {
    try {
      const { data: generatedCode, error: generateError } = await supabase
        .rpc('generate_admin_code');

      if (generateError) throw generateError;

      const { error: insertError } = await supabase
        .from('admin_registration_codes')
        .insert({ code: generatedCode });

      if (insertError) throw insertError;

      toast.success("New registration code generated");
      fetchCodes();
    } catch (error) {
      console.error('Error generating registration code:', error);
      toast.error("Failed to generate registration code");
    }
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  return {
    codes,
    loading,
    generateNewCode
  };
}
