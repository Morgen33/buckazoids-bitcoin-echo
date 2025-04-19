
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import type { ContactSubmission } from "../types/contact-submission";

export function useContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchSubmissions() {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  }

  async function toggleRead(id: string, currentRead: boolean) {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ read: !currentRead })
        .eq('id', id);

      if (error) throw error;
      
      setSubmissions(submissions.map(sub => 
        sub.id === id ? { ...sub, read: !currentRead } : sub
      ));
      
      toast.success(`Message marked as ${!currentRead ? 'read' : 'unread'}`);
    } catch (error) {
      console.error('Error updating submission:', error);
      toast.error("Failed to update submission");
    }
  }

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return {
    submissions,
    loading,
    toggleRead
  };
}
