"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitSupportRequest, type ActionResult } from "@/app/actions/support";
import PrivacyNoticeStrip from "./PrivacyNoticeStrip";
import EmergencyDisclaimer from "./EmergencyDisclaimer";

const SUPPORT_TYPES = [
  "دعم نفسي (التحدث مع متخصصة)",
  "دعم قانوني (استشارة أو معلومات)",
  "السلامة الرقمية",
  "توثيق ما حدث معي",
  "لا أعرف بعد — أحتاج أن أتحدث أولًا",
];

const CONTACT_METHODS = [
  { value: "whatsapp", label: "واتساب (رقم الهاتف)" },
  { value: "email", label: "بريد إلكتروني" },
  { value: "signal", label: "رسالة Signal" },
  { value: "form_only", label: "أفضّل التواصل عبر هذا النموذج فقط" },
];

const PREFERRED_TIMES = ["صباحًا", "ظهرًا", "مساءً", "أي وقت مناسب"];

interface Props {
  formType: "mental-health" | "legal";
}

function SuccessMessage() {
  return (
    <div className="bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[16px] p-8 text-center">
      <div className="text-[#4F7C68] flex justify-center mb-4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <h2 className="text-[22px] font-bold text-[#211A22] mb-3">وصل طلبك بأمان ✓</h2>
      <p className="text-[15px] text-[#211A22] leading-[1.8] mb-3">
        شكرًا لثقتك بنا.
        <br />
        سيتواصل معكِ أحد أعضاء فريق مؤنث سالم خلال ٣ أيام عمل عبر الوسيلة التي اخترتِها.
      </p>
      <p className="text-[13px] text-[#6B5D6E]">
        إذا لم تتلقي أي رد خلال ٥ أيام،{" "}
        <Link href="/contact" className="text-[#4B245E] underline">تواصلي معنا مباشرة</Link>.
      </p>
      <div className="flex items-center justify-center gap-2 text-[#4F7C68] text-[12px] mt-5">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        لن تُشارك أي معلومات أرسلتِها مع أي جهة خارج الفريق المختص.
      </div>
    </div>
  );
}

export default function SupportRequestForm({ formType }: Props) {
  const [state, formAction, isPending] = useActionState(
    submitSupportRequest,
    null as ActionResult | null
  );

  const [contactMethod, setContactMethod] = useState("");
  const [isUrgent, setIsUrgent] = useState("");
  const [descLength, setDescLength] = useState(0);

  if (state?.success) return <SuccessMessage />;

  return (
    <form action={formAction} noValidate>
      {/* Honeypot — hidden from humans, visible to bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />
      <input type="hidden" name="form_type" value={formType} />

      <PrivacyNoticeStrip variant="support" />
      <EmergencyDisclaimer />

      {/* Safe browsing note */}
      <p className="text-[12px] text-[#6B5D6E] bg-[#F0E9E0] rounded-[8px] px-3 py-2 mb-6 leading-[1.7]">
        💡 إذا كنتِ تستخدمين جهاز مشترك، يمكنك استخدام نافذة التصفح الخاص (Incognito) للحفاظ على خصوصيتك.
      </p>

      {/* Global error */}
      {state && !state.success && state.message && (
        <div role="alert" className="flex items-start gap-2 text-[#C0392B] text-[14px] mb-5 bg-[rgba(192,57,43,0.07)] border border-[#C0392B]/30 rounded-[8px] p-3">
          <span aria-hidden="true">⚠️</span>
          <span>{state.message}</span>
        </div>
      )}

      {/* ── Field 1: Name ──────────────────────────────── */}
      <div className="mb-5">
        <label htmlFor="pseudonym" className="block text-[14px] font-medium text-[#211A22] mb-1">
          الاسم (أو اسم مستعار) <span className="text-[#C0392B]" aria-label="مطلوب">*</span>
        </label>
        <input
          id="pseudonym"
          name="pseudonym"
          type="text"
          required
          placeholder="أي اسم تختارينه"
          className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] text-[#211A22] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
        />
        <p className="text-[12px] text-[#6B5D6E] mt-1">لا يُشترط اسمك الحقيقي. يمكنك كتابة أي اسم أو كلمة.</p>
      </div>

      {/* ── Field 2: Contact method ────────────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          كيف يمكننا التواصل معكِ بأمان؟ <span className="text-[#C0392B]" aria-label="مطلوب">*</span>
        </legend>
        <p className="text-[12px] text-[#6B5D6E] mb-3">اختاري وسيلة تشعرين أنها أكثر أمانًا لكِ.</p>
        <div className="flex flex-col gap-2">
          {CONTACT_METHODS.map((m) => (
            <label key={m.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="contact_method"
                value={m.value}
                required
                onChange={() => setContactMethod(m.value)}
                className="w-4 h-4 accent-[#4B245E] cursor-pointer"
              />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors">{m.label}</span>
            </label>
          ))}
        </div>

        {/* Conditional contact value */}
        {contactMethod && contactMethod !== "form_only" && (
          <div className="mt-3">
            <label htmlFor="contact_value" className="block text-[13px] font-medium text-[#211A22] mb-1">
              {contactMethod === "whatsapp" ? "رقم الواتساب" : contactMethod === "email" ? "البريد الإلكتروني" : "رقم Signal"}
              {" "}<span className="text-[#C0392B]">*</span>
            </label>
            <input
              id="contact_value"
              name="contact_value"
              type={contactMethod === "email" ? "email" : "text"}
              placeholder={contactMethod === "email" ? "example@domain.com" : "+20 xxx xxx xxxx"}
              className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] text-[#211A22] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
            />
          </div>
        )}
      </fieldset>

      {/* ── Field 3: Support types ────────────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          ما نوع الدعم الذي تحتاجينه؟ <span className="text-[#C0392B]" aria-label="مطلوب">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {SUPPORT_TYPES.map((type) => (
            <label key={type} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="support_types"
                value={type}
                className="w-4 h-4 mt-0.5 accent-[#4B245E] cursor-pointer flex-shrink-0"
              />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.5]">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Field 4: Description (optional) ──────────── */}
      <div className="mb-5">
        <label htmlFor="description" className="block text-[14px] font-medium text-[#211A22] mb-1">
          هل تريدين إخبارنا بشيء قبل التواصل؟{" "}
          <span className="text-[#6B5D6E] font-normal text-[12px]">(اختياري)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          maxLength={500}
          placeholder="يمكنك الكتابة باختصار — أو ترك هذا الحقل فارغًا تمامًا."
          onChange={(e) => setDescLength(e.target.value.length)}
          className="w-full bg-white border border-[#DDD3CC] rounded-[12px] px-4 py-3 text-[15px] text-[#211A22] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all resize-y min-h-[100px]"
        />
        <p className="text-[11px] text-[#6B5D6E] mt-1 text-left">{descLength}/500</p>
        <p className="text-[12px] text-[#6B5D6E] mt-0.5">لا يُشترط أي تفاصيل هنا. هذا مجرد سياق إضافي يساعد الفريق.</p>
      </div>

      {/* ── Field 5: Urgency ─────────────────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          هل توجد خطر فوري تريدين إخبارنا به؟ <span className="text-[#C0392B]">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {[
            { value: "no", label: "لا، الوضع مستقر حاليًا" },
            { value: "yes", label: "نعم، أحتاج استجابة أسرع" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="is_urgent"
                value={opt.value}
                required
                onChange={() => setIsUrgent(opt.value)}
                className="w-4 h-4 accent-[#4B245E] cursor-pointer"
              />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
        {isUrgent === "yes" && (
          <p className="mt-2 text-[12px] text-[#D9963D] bg-[rgba(217,150,61,0.08)] border border-[#D9963D]/40 rounded-[8px] px-3 py-2 leading-[1.7]">
            سنحاول التواصل معكِ في أقرب وقت ممكن. إذا كان الوضع خطيرًا جدًا، نرجو التواصل مع الطوارئ أو جهة أمان محلية فورًا.
          </p>
        )}
      </fieldset>

      {/* ── Field 6: Preferred contact time (optional) ── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          ما أفضل وقت للتواصل معكِ؟{" "}
          <span className="text-[#6B5D6E] font-normal text-[12px]">(اختياري)</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {PREFERRED_TIMES.map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="preferred_times"
                value={t}
                className="w-4 h-4 accent-[#4B245E] cursor-pointer"
              />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors">{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Field 7: Consent ──────────────────────────── */}
      <div className="mb-7">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            className="w-4 h-4 mt-0.5 accent-[#4B245E] cursor-pointer flex-shrink-0"
          />
          <span className="text-[14px] text-[#211A22] leading-[1.6]">
            أوافق على{" "}
            <Link href="/privacy" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
              سياسة الخصوصية
            </Link>{" "}
            وأفهم كيف تُعالج بياناتي.{" "}
            <span className="text-[#C0392B]">*</span>
          </span>
        </label>
      </div>

      {/* ── Submit ────────────────────────────────────── */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-[#4B245E] text-white text-[16px] font-semibold py-3.5 rounded-full hover:bg-[#3A1A4A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-[250ms]"
      >
        {isPending ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            جارٍ الإرسال…
          </>
        ) : (
          <>إرسال الطلب <span aria-hidden="true">←</span></>
        )}
      </button>
    </form>
  );
}
