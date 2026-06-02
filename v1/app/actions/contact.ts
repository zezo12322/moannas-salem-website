"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ContactResult = { success: boolean; message?: string };

const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRate(key: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(key);
  if (!entry || entry.resetAt < now) {
    rateMap.set(key, { count: 1, resetAt: now + 3600_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

function sanitize(val: FormDataEntryValue | null, max: number): string {
  if (!val || typeof val !== "string") return "";
  return val.trim().slice(0, max);
}

const TOPICS = ["استفسار عام", "شراكة مؤسسية", "تطوع", "إعلام وصحافة", "أخرى"];

export async function submitContactMessage(
  _prev: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  // Honeypot
  if (formData.get("website")) return { success: false };

  const name = sanitize(formData.get("name"), 100);
  const topic = sanitize(formData.get("topic"), 50);
  const message = sanitize(formData.get("message"), 2000);
  const contactInfo = sanitize(formData.get("contact_info"), 200);

  if (!name || name.length < 2) {
    return { success: false, message: "الاسم مطلوب (حرفان على الأقل)." };
  }
  if (topic && !TOPICS.includes(topic)) {
    return { success: false, message: "الموضوع غير صالح." };
  }
  if (!message || message.length < 10) {
    return { success: false, message: "الرسالة مطلوبة (١٠ أحرف على الأقل)." };
  }

  const rateKey = name.slice(0, 4).toLowerCase();
  if (!checkRate(rateKey)) {
    return { success: false, message: "وصلت إلى الحد الأقصى. حاولي لاحقًا." };
  }

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      topic: topic || null,
      message,
      contact_info: contactInfo || null,
    });
    if (error) throw error;
    return { success: true };
  } catch {
    return { success: false, message: "حدث خطأ أثناء الإرسال. حاولي مرة أخرى." };
  }
}
