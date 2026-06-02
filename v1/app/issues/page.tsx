import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "قضايانا — مؤنث سالم",
  description: "خمس قضايا محورية تواجه النساء في بيئة العمل المصرية — من الأمومة إلى الأجر العادل إلى العنف الرقمي.",
};

const issues = [
  {
    href: "/issues/motherhood",
    title: "الأمومة والعمل",
    body: "الفصل أثناء الحمل، الضغط للاستقالة بعد الولادة، وحرمان الأمهات من فرص الترقي.",
    color: "#C66B7D",
    tag: "motherhood",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    href: "/issues/fair-pay",
    title: "الأجر العادل",
    body: "فجوة الأجور بين الجنسين، وعدم الشفافية في الرواتب، والتمييز في المكافآت.",
    color: "#D9963D",
    tag: "fair-pay",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    href: "/issues/digital-violence",
    title: "العنف الرقمي",
    body: "التحرش الإلكتروني، الابتزاز، المطاردة الرقمية، والحملات المنسّقة لإسكات الصحفيات.",
    color: "#4F7C68",
    tag: "digital-violence",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
  },
  {
    href: "/issues/workplace-violence",
    title: "التحرش والعنف في العمل",
    body: "التحرش الجنسي، العنف اللفظي والنفسي، والبيئات المؤسسية التي تُسكت الضحايا.",
    color: "#4B245E",
    tag: "workplace-violence",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    href: "/issues/discrimination",
    title: "التمييز والترقيات",
    body: "السقف الزجاجي، التمييز في الترقيات والمهام، وثقافة بيئة العمل التي تُقصي النساء.",
    color: "#6B5D6E",
    tag: "discrimination",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
];

export default function IssuesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">قضايانا</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            قضايانا
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            نركّز على القضايا التي تواجهها الصحفيات والنساء العاملات بشكل يومي —
            نوثّقها، نناضل ضدها، ونحوّلها إلى مطالب تغيير.
          </p>

          <div className="flex flex-col gap-4">
            {issues.map((issue) => (
              <Link
                key={issue.href}
                href={issue.href}
                className="group flex items-start gap-4 bg-white border border-[#DDD3CC] rounded-[16px] p-5 shadow-[0_1px_3px_rgba(33,26,34,0.06)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[#FAF5EF] transition-all duration-200 border-s-4"
                style={{ borderInlineStartColor: issue.color }}
              >
                <div style={{ color: issue.color }} className="flex-shrink-0 mt-0.5">
                  {issue.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-[17px] font-bold text-[#211A22] mb-1 group-hover:text-[#4B245E] transition-colors">
                    {issue.title}
                  </h2>
                  <p className="text-[14px] text-[#6B5D6E] leading-[1.7]">{issue.body}</p>
                </div>
                <span className="text-[#4B245E] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-10 bg-[#4B245E] rounded-[20px] p-6 text-center">
            <p className="text-[15px] font-semibold text-white mb-2">
              هل تعرّضتِ لأي من هذه الانتهاكات؟
            </p>
            <p className="text-[13px] text-white/70 mb-5">
              يمكنكِ طلب الدعم أو توثيق ما حدث بسرية تامة.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors"
              >
                اطلبي دعمًا آمنًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/report"
                className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
              >
                احكي شهادتك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
