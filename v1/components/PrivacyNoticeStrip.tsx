import Link from "next/link";

interface Props {
  variant?: "support" | "testimony";
}

export default function PrivacyNoticeStrip({ variant = "support" }: Props) {
  return (
    <div
      className="flex gap-3 items-start bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-6"
      role="note"
      aria-label="إشعار الخصوصية"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4F7C68"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="flex-shrink-0 mt-0.5"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <div>
        <p className="text-[14px] font-bold text-[#4F7C68] mb-1">
          {variant === "testimony" ? "شهادتك محمية" : "بياناتك محمية"}
        </p>
        <p className="text-[13px] text-[#4F7C68] leading-[1.7]">
          {variant === "testimony" ? (
            <>
              يرى هذا المحتوى فريق توثيق محدود فقط. لن تُنشر أي معلومات دون
              موافقتك. لكِ الحق في سحب شهادتك في أي وقت.
            </>
          ) : (
            <>
              يرى هذه المعلومات فريق محدود ومدرّب فقط. لا نشر، لا مشاركة، لا
              استخدام خارج المساعدة المطلوبة.
            </>
          )}
          {" "}
          <Link
            href="/support/privacy-faq"
            className="underline font-medium hover:text-[#3d6152] transition-colors"
          >
            اقرئي سياسة الخصوصية الكاملة
          </Link>
        </p>
      </div>
    </div>
  );
}
