// src/types.ts
export interface Extension {
  id: string; // UUID from Supabase
  logo: string; // Path to the extension's logo
  name: string;
  description: string;
  isActive: boolean; // Boolean status for active/inactive
}
