import { createClient } from "@supabase/supabase-js";

// Service-role client — bypasses RLS. Server-only. NEVER import in client components.
// Requires SUPABASE_SERVICE_ROLE_KEY in .env.local (never use NEXT_PUBLIC_ prefix).
export function createAdminSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not configured. Add it to .env.local from the Supabase dashboard → Project Settings → API."
    );
  }
  return createClient(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
