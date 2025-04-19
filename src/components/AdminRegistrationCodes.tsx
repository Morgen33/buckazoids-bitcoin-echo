
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { toast } from "@/components/ui/sonner";

type RegistrationCode = {
  id: string;
  code: string;
  created_at: string;
  expires_at: string | null;
  is_used: boolean;
  used_at: string | null;
};

export default function AdminRegistrationCodes() {
  const [codes, setCodes] = useState<RegistrationCode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCodes();
  }, []);

  async function fetchCodes() {
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
  }

  async function generateNewCode() {
    try {
      const { data: generatedCode, error: generateError } = await supabase
        .rpc('generate_admin_code');

      if (generateError) throw generateError;

      // Insert the generated code into the admin_registration_codes table
      const { error: insertError } = await supabase
        .from('admin_registration_codes')
        .insert({ code: generatedCode });

      if (insertError) throw insertError;

      toast.success("New registration code generated");
      fetchCodes(); // Refresh the list
    } catch (error) {
      console.error('Error generating registration code:', error);
      toast.error("Failed to generate registration code");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-buckazoid-navy">Admin Registration Codes</h2>
        <Button onClick={generateNewCode}>Generate New Code</Button>
      </div>

      {loading ? (
        <p>Loading registration codes...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Used At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {codes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell className="font-mono">{code.code}</TableCell>
                  <TableCell>{format(new Date(code.created_at), 'PPp')}</TableCell>
                  <TableCell>
                    {code.expires_at ? format(new Date(code.expires_at), 'PPp') : 'Never'}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      code.is_used ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {code.is_used ? 'Used' : 'Available'}
                    </span>
                  </TableCell>
                  <TableCell>
                    {code.used_at ? format(new Date(code.used_at), 'PPp') : '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
