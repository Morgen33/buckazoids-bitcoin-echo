
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { toast } from "@/components/ui/sonner";

type RpcFunctions = "is_admin" | "generate_admin_code" | "validate_admin_code" | "setup_admin_profile";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      
      if (!session) {
        navigate('/auth');
        return;
      }
      
      try {
        // Check if the user is an admin
        const { data: adminStatus, error } = await supabase
          .rpc('is_admin' as RpcFunctions, { user_id: session.user.id });
        
        if (error) throw error;
        
        if (!adminStatus) {
          toast.error("You don't have permission to access this area");
          navigate('/');
          return;
        }
        
        setIsAdmin(true);
      } catch (error) {
        console.error("Error checking admin status:", error);
        toast.error("Error verifying admin permissions");
        navigate('/');
      } finally {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) navigate('/auth');
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-buckazoid-navy mx-auto"></div>
        <p className="mt-2">Verifying admin access...</p>
      </div>
    </div>;
  }

  return isAdmin && session ? <>{children}</> : null;
}
