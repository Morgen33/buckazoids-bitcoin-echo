
export type RegistrationCode = {
  id: string;
  code: string;
  created_at: string;
  expires_at: string | null;
  is_used: boolean;
  used_at: string | null;
};
