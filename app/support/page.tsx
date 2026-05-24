import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "اطلبي دعمًا آمنًا — مؤنث سالم",
  description: "أنتِ لستِ وحدك. اختاري نوع الدعم الذي تحتاجينه — نفسي، قانوني، أو توثيق شهادة.",
  robots: { index: false }, // Privacy: don't index /support pages
};

const supportOptions = [
  {
    href: "/support/mental-health",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "دعم نفسي",
    body: "تحدثي مع متخصصة في الدعم النفسي.",
    color: "#C66B7D",
  },
  {
    href: "/support/legal",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "دعم قانوني",
    body: "استفسري عن حقوقك القانونية.",
    color: "#4B245E",
  },
  {
    href: "/support/report",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "بلاغ أو شهادة سرية",
    body: "وثّقي ما حدث معكِ بأمان تام.",
    color: "#4F7C68",
  },
  {
    href: "/support/privacy-faq",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "لا أعرف من أين أبدأ",
    body: "اقرئي الأسئلة الشائعة أو تواصلي معنا مباشرة.",
    color: "#D9963D",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">اطلبي دعمًا آمنًا</span>
      </nav>

      {/* Heading */}
      <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-3 leading-[1.3]">
        أنتِ لستِ وحدك — ونحن هنا
      </h1>
      <p className="text-[16px] text-[#211A22] leading-[1.8] mb-2">
        سواء كنتِ تمرين بضغط في العمل، أو واجهتِ انتهاكًا، أو تحتاجين فقط إلى
        من يسمعك — هنا يمكنك البدء.
      </p>
      <p className="text-[15px] font-semibold text-[#4B245E] mb-8">
        بياناتك سرية. يمكنك استخدام اسم مستعار. لن تُنشر أي معلومات دون موافقتك.
      </p>

      {/* Emergency callout */}
      <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.1)] border border-[#D9963D] rounded-[12px] p-4 mb-8" role="alert">
        <span className="text-[#D9963D] text-[18px] flex-shrink-0" aria-hidden="true">⚠️</span>
        <p className="text-[13px] text-[#211A22] leading-[1.7]">
          <strong className="text-[#D9963D]">إذا كنتِ في خطر فوري أو جسدي</strong>، تواصلي مع الطوارئ أو جهة أمان محلية مناسبة.
          مؤنث سالم ليست خط أزمات فوريًا، لكننا نستجيب في أقرب وقت ممكن.
        </p>
      </div>

      {/* Support type selector */}
      <h2 className="text-[20px] font-bold text-[#211A22] mb-5">
        ما الذي تحتاجينه الآن؟
      </h2>

      <div className="flex flex-col gap-4">
        {supportOptions.map((opt) => (
          <Link
            key={opt.href}
            href={opt.href}
            className="group flex items-center gap-5 bg-white border border-[#DDD3CC] rounded-[16px] p-5 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.04)] transition-all duration-[250ms] border-s-4"
            style={{ borderInlineStartColor: opt.color }}
          >
            <div style={{ color: opt.color }} className="flex-shrink-0">
              {opt.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-[#211A22] mb-0.5">{opt.title}</h3>
              <p className="text-[14px] text-[#6B5D6E]">{opt.body}</p>
            </div>
            <span className="text-[#4B245E] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Privacy line */}
      <div className="flex items-center gap-2 text-[#4F7C68] text-[12px] mt-8">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>بياناتك لا تُباع ولا تُشارك خارج الفريق المختص.</span>
      </div>
    </div>
  );
}
