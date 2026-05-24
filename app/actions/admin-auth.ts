"use server";

import { createAuthSupabaseClient } from "@/lib/supabase/ssr-server";
import { redirect } from "next/navigation";

export async function loginAdmin(
  _prev: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get("email")?.toString().trim() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!email || !password) {
    return { error: "البريد الإلكتروني وكلمة المرور مطلوبان." };
  }

  const supabase = await createAuthSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "بيانات الدخول غير صحيحة." };
  }

  redirect("/admin");
}

export async function logoutAdmin(): Promise<void> {
  const supabase = await createAuthSupabaseClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
