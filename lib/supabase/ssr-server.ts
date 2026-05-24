import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Auth-aware Supabase client for App Router — manages session cookies.
// Use this in Server Components, Server Actions, and the proxy.
export async function createAuthSupabaseClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // In Server Components, cookies cannot be set — safe to ignore here.
          }
        },
      },
    }
  );
}
