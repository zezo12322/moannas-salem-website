"use client";

import { useActionState } from "react";
import { submitContactMessage, type ContactResult } from "@/app/actions/contact";

const TOPICS = ["استفسار عام", "شراكة مؤسسية", "تطوع", "إعلام وصحافة", "أخرى"];

function SuccessMessage() {
  return (
    <div
      role="alert"
      className="bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[16px] p-6 text-center"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4F7C68"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto mb-3"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <p className="text-[17px] font-bold text-[#4F7C68] mb-1">تم إرسال رسالتك</p>
      <p className="text-[14px] text-[#4F7C68]">
        سنتواصل معك قريبًا. شكرًا لتواصلك مع مؤنث سالم.
      </p>
    </div>
  );
}

export default function ContactForm({ defaultTopic }: { defaultTopic?: string } = {}) {
  const [state, formAction, isPending] = useActionState<ContactResult | null, FormData>(
    submitContactMessage,
    null
  );

  if (state?.success) return <SuccessMessage />;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Error banner */}
      {state && !state.success && state.message && (
        <div role="alert" className="bg-[rgba(192,57,43,0.08)] border border-[#C0392B] rounded-[10px] px-4 py-3 text-[13px] text-[#C0392B]">
          {state.message}
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-[14px] font-semibold text-[#211A22]">
          الاسم (أو اسم مستعار) <span className="text-[#C0392B]" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="off"
          placeholder="أي اسم تختارينه"
          className="border border-[#DDD3CC] rounded-[10px] px-4 py-2.5 text-[14px] text-[#211A22] placeholder:text-[#B0A8B0] focus:outline-none focus:border-[#4B245E] focus:ring-2 focus:ring-[rgba(75,36,94,0.15)] bg-white"
        />
      </div>

      {/* Topic */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-topic" className="text-[14px] font-semibold text-[#211A22]">
          موضوع الرسالة <span className="text-[#6B5D6E] font-normal">(اختياري)</span>
        </label>
        <select
          id="contact-topic"
          name="topic"
          defaultValue={defaultTopic ?? ""}
          className="border border-[#DDD3CC] rounded-[10px] px-4 py-2.5 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] focus:ring-2 focus:ring-[rgba(75,36,94,0.15)] bg-white"
        >
          <option value="">اختاري موضوعًا</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-[14px] font-semibold text-[#211A22]">
          رسالتك <span className="text-[#C0392B]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="اكتبي رسالتك هنا..."
          className="border border-[#DDD3CC] rounded-[10px] px-4 py-2.5 text-[14px] text-[#211A22] placeholder:text-[#B0A8B0] focus:outline-none focus:border-[#4B245E] focus:ring-2 focus:ring-[rgba(75,36,94,0.15)] bg-white resize-y min-h-[120px]"
        />
      </div>

      {/* Contact info */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-info" className="text-[14px] font-semibold text-[#211A22]">
          كيف يمكننا الرد عليكِ؟ <span className="text-[#6B5D6E] font-normal">(اختياري)</span>
        </label>
        <input
          id="contact-info"
          name="contact_info"
          type="text"
          autoComplete="off"
          placeholder="بريد إلكتروني أو واتساب أو سيجنال — أو اتركيه فارغًا"
          className="border border-[#DDD3CC] rounded-[10px] px-4 py-2.5 text-[14px] text-[#211A22] placeholder:text-[#B0A8B0] focus:outline-none focus:border-[#4B245E] focus:ring-2 focus:ring-[rgba(75,36,94,0.15)] bg-white"
        />
        <p className="text-[12px] text-[#6B5D6E]">
          بياناتك لا تُشارك خارج الفريق. يمكنك ترك هذا الحقل فارغًا.
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-[#4B245E] text-white font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-[#3A1A4A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? "جارٍ الإرسال..." : <>إرسال الرسالة <span aria-hidden="true">←</span></>}
      </button>
    </form>
  );
}
