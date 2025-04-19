
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { RegistrationCode } from "./types";

type CodeListProps = {
  codes: RegistrationCode[];
  loading: boolean;
};

export default function CodeList({ codes, loading }: CodeListProps) {
  if (loading) {
    return <p>Loading registration codes...</p>;
  }

  return (
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
  );
}
