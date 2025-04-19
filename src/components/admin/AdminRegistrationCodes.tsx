
import { Button } from "@/components/ui/button";
import CodeList from "./CodeList";
import { useRegistrationCodes } from "./useRegistrationCodes";

export default function AdminRegistrationCodes() {
  const { codes, loading, generateNewCode } = useRegistrationCodes();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-buckazoid-navy">Admin Registration Codes</h2>
        <Button onClick={generateNewCode}>Generate New Code</Button>
      </div>

      <CodeList codes={codes} loading={loading} />
    </div>
  );
}
