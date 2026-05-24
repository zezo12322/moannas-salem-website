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

  // Wrap Supabase call in try-catch so missing env vars or network errors
  // return a user-visible message rather than an unhandled server action throw
  // (a thrown server action leaves useActionState state unchanged → no error shown).
  let authFailed = false;
  try {
    const supabase = await createAuthSupabaseClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) authFailed = true;
  } catch {
    return { error: "خطأ في الاتصال بالخادم. تأكدي من إعدادات البيئة." };
  }

  if (authFailed) {
    return { error: "بيانات الدخول غير صحيحة." };
  }

  // redirect() throws intentionally — must be outside try-catch.
  redirect("/admin");
}

export async function logoutAdmin(): Promise<void> {
  try {
    const supabase = await createAuthSupabaseClient();
    await supabase.auth.signOut();
  } catch {
    // ignore — redirect regardless
  }
  redirect("/admin/login");
}
