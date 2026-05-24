"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitTestimony, type ActionResult } from "@/app/actions/support";
import PrivacyNoticeStrip from "./PrivacyNoticeStrip";

const VIOLATION_TYPES = [
  "التمييز بسبب الحمل أو الأمومة",
  "فجوة الأجر أو عدم المساواة في الراتب",
  "التحرش أو العنف في مكان العمل",
  "العنف الرقمي أو التحرش الإلكتروني",
  "منع الترقية أو التهميش المهني",
  "الفصل التعسفي",
  "التنمر أو الضغط النفسي",
  "أخرى",
];

const SECTORS = [
  { value: "", label: "اختاري مجال عملك (اختياري)" },
  { value: "media", label: "إعلام وصحافة" },
  { value: "government", label: "حكومي" },
  { value: "private", label: "قطاع خاص" },
  { value: "ngo", label: "منظمة مجتمع مدني" },
  { value: "informal", label: "قطاع غير رسمي" },
  { value: "other", label: "أخرى" },
];

function SuccessMessage() {
  return (
    <div className="bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[16px] p-8 text-center">
      <div className="text-[#4F7C68] flex justify-center mb-4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <h2 className="text-[22px] font-bold text-[#211A22] mb-3">وصلت شهادتك بأمان ✓</h2>
      <p className="text-[15px] text-[#211A22] leading-[1.8] mb-3">
        شكرًا على ثقتك.
        <br />
        شهادتك ستُقرأ من فريق التوثيق في مؤنث سالم فقط.
        <br />
        <strong>لن يُنشر أي شيء دون العودة إليكِ أولًا.</strong>
      </p>
      <div className="flex items-center justify-center gap-2 text-[#4F7C68] text-[12px] mt-5">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        يمكنكِ في أي وقت طلب حذف شهادتك بالتواصل معنا.
      </div>
    </div>
  );
}

export default function TestimonyForm() {
  const [state, formAction, isPending] = useActionState(
    submitTestimony,
    null as ActionResult | null
  );

  const [needsSupport, setNeedsSupport] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [textLength, setTextLength] = useState(0);

  if (state?.success) return <SuccessMessage />;

  return (
    <form action={formAction} noValidate>
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

      <PrivacyNoticeStrip variant="testimony" />

      {/* Intro */}
      <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6 bg-[#F0E9E0] rounded-[12px] px-4 py-3">
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
          الاسم (أو اسم مستعار) <span className="text-[#C0392B]">*</span>
        </label>
        <input
          id="pseudonym"
          name="pseudonym"
          type="text"
          required
          placeholder="أي اسم تختارينه"
          className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
        />
        <p className="text-[12px] text-[#6B5D6E] mt-1">لا يُشترط اسمك الحقيقي.</p>
      </div>

      {/* ── Field 2: Publication consent ──────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          هل توافقين على نشر شهادتك (بعد إخفاء الهوية الكاملة)؟ <span className="text-[#C0392B]">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {[
            { value: "yes", label: "نعم، أوافق على النشر بعد إخفاء هويتي" },
            { value: "no", label: "لا، لا أوافق على أي نشر — للتوثيق الداخلي فقط" },
            { value: "pending", label: "لا أعرف بعد — يمكنكم التواصل معي لاحقًا" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-start gap-3 cursor-pointer group">
              <input type="radio" name="publication_consent" value={opt.value} required className="w-4 h-4 mt-0.5 accent-[#4B245E] cursor-pointer flex-shrink-0" />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.5]">{opt.label}</span>
            </label>
          ))}
        </div>
        <p className="text-[12px] text-[#6B5D6E] mt-2">حتى لو اخترتِ "نعم"، سنتواصل معكِ قبل أي نشر للمراجعة والتأكيد.</p>
      </fieldset>

      {/* ── Field 3: Violation types ─────────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          ما نوع الانتهاك الذي تودين توثيقه؟ <span className="text-[#C0392B]">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {VIOLATION_TYPES.map((type) => (
            <label key={type} className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="violation_types" value={type} className="w-4 h-4 mt-0.5 accent-[#4B245E] cursor-pointer flex-shrink-0" />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.5]">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Field 4: Sector (optional) ───────────────── */}
      <div className="mb-5">
        <label htmlFor="sector" className="block text-[14px] font-medium text-[#211A22] mb-1">
          مجال العمل <span className="text-[#6B5D6E] font-normal text-[12px]">(اختياري)</span>
        </label>
        <select
          id="sector"
          name="sector"
          className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] text-[#211A22] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all appearance-none"
        >
          {SECTORS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* ── Field 5: Approximate date (optional) ─────── */}
      <div className="mb-5">
        <label htmlFor="approximate_date" className="block text-[14px] font-medium text-[#211A22] mb-1">
          متى حدث هذا تقريبًا؟ <span className="text-[#6B5D6E] font-normal text-[12px]">(اختياري)</span>
        </label>
        <input
          id="approximate_date"
          name="approximate_date"
          type="text"
          placeholder="مثال: مارس ٢٠٢٤"
          className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
        />
        <p className="text-[12px] text-[#6B5D6E] mt-1">لا نحتاج التاريخ بدقة — فقط سياق زمني تقريبي إذا كنتِ مرتاحة.</p>
      </div>

      {/* ── Field 6: Testimony text ──────────────────── */}
      <div className="mb-5">
        <label htmlFor="testimony_text" className="block text-[14px] font-medium text-[#211A22] mb-1">
          احكي ما حدث بكلماتك <span className="text-[#C0392B]">*</span>
        </label>
        <textarea
          id="testimony_text"
          name="testimony_text"
          required
          rows={6}
          minLength={30}
          placeholder="اكتبي بالطريقة التي تريحك — لا توجد طريقة خاطئة."
          onChange={(e) => setTextLength(e.target.value.length)}
          className="w-full bg-white border border-[#DDD3CC] rounded-[12px] px-4 py-3 text-[15px] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all resize-y min-h-[140px]"
        />
        <div className="flex justify-between mt-1">
          <p className="text-[12px] text-[#6B5D6E]">لا تحتاجين تفاصيل قانونية دقيقة. الشهادة الإنسانية لها قيمة كبيرة.</p>
          <span className={`text-[11px] ${textLength < 30 && textLength > 0 ? "text-[#C0392B]" : "text-[#6B5D6E]"}`}>
            {textLength < 30 && textLength > 0 ? `${30 - textLength} حرف متبقية` : ""}
          </span>
        </div>
      </div>

      {/* ── Field 7: Needs support ───────────────────── */}
      <fieldset className="mb-5">
        <legend className="block text-[14px] font-medium text-[#211A22] mb-2">
          هل تريدين طلب دعم نفسي أو قانوني؟ <span className="text-[#C0392B]">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {[
            { value: "yes", label: "نعم، أريد طلب دعم أيضًا" },
            { value: "no", label: "لا، أريد فقط توثيق ما حدث" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="needs_support"
                value={opt.value}
                required
                onChange={() => setNeedsSupport(opt.value)}
                className="w-4 h-4 accent-[#4B245E] cursor-pointer"
              />
              <span className="text-[14px] text-[#211A22] group-hover:text-[#4B245E] transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
        {needsSupport === "yes" && (
          <p className="mt-2 text-[12px] text-[#4B245E] bg-[#4B245E]/5 border border-[#4B245E]/20 rounded-[8px] px-3 py-2">
            سيتواصل معكِ الفريق لترتيب الدعم المناسب بعد استلام شهادتك.
          </p>
        )}
      </fieldset>

      {/* ── Field 8: Contact (optional) ──────────────── */}
      <div className="mb-5">
        <label htmlFor="contact_method_opt" className="block text-[14px] font-medium text-[#211A22] mb-1">
          هل تريدين أن نتواصل معكِ؟ <span className="text-[#6B5D6E] font-normal text-[12px]">(اختياري)</span>
        </label>
        <select
          id="contact_method_opt"
          name="contact_method"
          onChange={(e) => setContactMethod(e.target.value)}
          className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] text-[#211A22] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all appearance-none"
        >
          <option value="">لا، شكرًا</option>
          <option value="whatsapp">واتساب</option>
          <option value="email">بريد إلكتروني</option>
          <option value="signal">Signal</option>
        </select>
        <p className="text-[12px] text-[#6B5D6E] mt-1">إذا تركتِ هذا الحقل فارغًا، سنوثّق شهادتك دون تواصل مسبق.</p>

        {contactMethod && (
          <div className="mt-2">
            <input
              name="contact_value"
              type={contactMethod === "email" ? "email" : "text"}
              placeholder={contactMethod === "email" ? "example@domain.com" : "رقم الهاتف"}
              className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] px-4 text-[15px] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
            />
          </div>
        )}
      </div>

      {/* ── Field 9: Consent ──────────────────────────── */}
      <div className="mb-7">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="consent" value="yes" required className="w-4 h-4 mt-0.5 accent-[#4B245E] cursor-pointer flex-shrink-0" />
          <span className="text-[14px] text-[#211A22] leading-[1.6]">
            أوافق على{" "}
            <Link href="/privacy" className="text-[#4B245E] underline hover:text-[#3A1A4A]">سياسة الخصوصية</Link>{" "}
            وأفهم كيف تُعالج بياناتي. <span className="text-[#C0392B]">*</span>
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
          <>إرسال الشهادة <span aria-hidden="true">←</span></>
        )}
      </button>
    </form>
  );
}
