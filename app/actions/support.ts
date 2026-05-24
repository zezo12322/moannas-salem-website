"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ActionResult = {
  success: boolean;
  message?: string;
};

// ── Simple in-memory rate limiter (per server instance, MVP only) ─────────
// For production, replace with Redis-based rate limiting.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string, maxPerHour = 5): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }
  if (entry.count >= maxPerHour) return false;
  entry.count++;
  return true;
}

// ── Sanitize helpers ─────────────────────────────────────────────────────
function sanitizeText(val: unknown, maxLen = 500): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

function sanitizeArray(val: unknown): string[] {
  if (!Array.isArray(val)) return [];
  return val.filter((v): v is string => typeof v === "string").map((s) => s.trim()).slice(0, 20);
}

// ── Support Request (Form 1: mental-health / legal) ──────────────────────
export async function submitSupportRequest(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  // Honeypot check — bots fill this, humans don't
  const honeypot = formData.get("website");
  if (honeypot) return { success: false, message: "حدث خطأ. يرجى المحاولة مرة أخرى." };

  const formType = sanitizeText(formData.get("form_type"));
  if (!["mental-health", "legal"].includes(formType)) {
    return { success: false, message: "نوع النموذج غير صحيح." };
  }

  // Rate limit by pseudonym prefix (best effort — no IP in server actions)
  const pseudonym = sanitizeText(formData.get("pseudonym"), 100);
  if (!pseudonym) return { success: false, message: "الاسم مطلوب." };

  const rateLimitKey = `support:${pseudonym.slice(0, 8).toLowerCase()}`;
  if (!checkRateLimit(rateLimitKey)) {
    return { success: false, message: "تم إرسال طلبات كثيرة. يرجى المحاولة لاحقًا." };
  }

  const contactMethod = sanitizeText(formData.get("contact_method"));
  if (!["whatsapp", "email", "signal", "form_only"].includes(contactMethod)) {
    return { success: false, message: "وسيلة التواصل غير صحيحة." };
  }

  const contactValue =
    contactMethod !== "form_only"
      ? sanitizeText(formData.get("contact_value"), 200)
      : null;

  const supportTypes = sanitizeArray(formData.getAll("support_types"));
  if (supportTypes.length === 0) {
    return { success: false, message: "يرجى اختيار نوع الدعم المطلوب." };
  }

  const description = sanitizeText(formData.get("description"), 500) || null;
  const isUrgentRaw = formData.get("is_urgent");
  const isUrgent = isUrgentRaw === "yes";
  const preferredTimes = sanitizeArray(formData.getAll("preferred_times"));
  const consent = formData.get("consent");
  if (!consent) return { success: false, message: "الموافقة على سياسة الخصوصية مطلوبة." };

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("support_requests").insert({
      pseudonym,
      contact_method: contactMethod,
      contact_value: contactValue,
      support_types: supportTypes,
      description,
      is_urgent: isUrgent,
      preferred_times: preferredTimes.length > 0 ? preferredTimes : null,
      form_type: formType,
      status: "new",
    });

    if (error) {
      console.error("[support_request] Supabase error:", error.code);
      return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
    }

    return { success: true };
  } catch {
    return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
  }
}

// ── Testimony / Report (Form 2) ───────────────────────────────────────────
export async function submitTestimony(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const honeypot = formData.get("website");
  if (honeypot) return { success: false, message: "حدث خطأ. يرجى المحاولة مرة أخرى." };

  const pseudonym = sanitizeText(formData.get("pseudonym"), 100);
  if (!pseudonym) return { success: false, message: "الاسم مطلوب." };

  const rateLimitKey = `testimony:${pseudonym.slice(0, 8).toLowerCase()}`;
  if (!checkRateLimit(rateLimitKey)) {
    return { success: false, message: "تم إرسال طلبات كثيرة. يرجى المحاولة لاحقًا." };
  }

  const publicationConsent = sanitizeText(formData.get("publication_consent"));
  if (!["yes", "no", "pending"].includes(publicationConsent)) {
    return { success: false, message: "يرجى تحديد موافقتك على النشر." };
  }

  const violationTypes = sanitizeArray(formData.getAll("violation_types"));
  if (violationTypes.length === 0) {
    return { success: false, message: "يرجى اختيار نوع الانتهاك." };
  }

  const sector = sanitizeText(formData.get("sector"), 100) || null;
  const approximateDate = sanitizeText(formData.get("approximate_date"), 50) || null;

  const testimonyText = sanitizeText(formData.get("testimony_text"), 10000);
  if (testimonyText.length < 30) {
    return { success: false, message: "الشهادة قصيرة جدًا. يرجى الكتابة بشكل أكثر تفصيلًا." };
  }

  const needsSupport = formData.get("needs_support") === "yes";
  const contactMethod = sanitizeText(formData.get("contact_method"), 50) || null;
  const contactValue =
    contactMethod ? sanitizeText(formData.get("contact_value"), 200) || null : null;

  const consent = formData.get("consent");
  if (!consent) return { success: false, message: "الموافقة على سياسة الخصوصية مطلوبة." };

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("testimonies").insert({
      pseudonym,
      publication_consent: publicationConsent,
      violation_types: violationTypes,
      sector,
      approximate_date: approximateDate,
      testimony_text: testimonyText,
      needs_support: needsSupport,
      contact_method: contactMethod,
      contact_value: contactValue,
      status: "new",
    });

    if (error) {
      console.error("[testimony] Supabase error:", error.code);
      return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
    }

    return { success: true };
  } catch {
    return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
  }
}
