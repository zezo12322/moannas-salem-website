import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "دليل الصحفيات — مؤنث سالم",
  description: "حقوق خاصة ببيئة الإعلام والتحرير — التغطية الميدانية، التعاقد، والسلامة الرقمية للصحفيات.",
};

const articles = [
  {
    href: "/guide/journalists/press-rights",
    title: "حقوق الصحفيات في الميدان",
    summary: "التغطية، الاعتقال، مصادرة المعدات، وحماية المصادر — دليل عملي لكل صحفية.",
    readingTime: "٨ دقائق",
    tags: ["التغطية الميدانية", "الاعتقال", "المصادر"],
  },
  {
    href: "/guide/journalists/freelance-rights",
    title: "حقوق الصحفيات المستقلات (الفريلانس)",
    summary: "العقود، الفواتير، ملكية المحتوى، وسبل الانتصاف عند عدم الدفع — حقوقك كصحفية مستقلة.",
    readingTime: "٧ دقائق",
    tags: ["فريلانس", "العقود", "حقوق المحتوى"],
  },
  {
    href: "/guide/journalists/media-contracts",
    title: "التعاقد مع المؤسسات الإعلامية",
    summary: "ما يجب أن يتضمنه عقد عمل عادل — بنود ملكية المحتوى، حقوق الاسم، وعلامات التحذير.",
    readingTime: "٨ دقائق",
    tags: ["عقد العمل", "بنود تعاقدية", "الملكية الفكرية"],
  },
  {
    href: "/guide/journalists/newsroom-harassment",
    title: "التحرش في بيئة التحرير",
    summary: "أشكال التحرش في غرف الأخبار، التوثيق، التصعيد الداخلي، وقانون ١٥٠/٢٠٢٠.",
    readingTime: "٩ دقائق",
    tags: ["التحرش", "التوثيق", "قانون العمل"],
  },
  {
    href: "/guide/journalists/field-digital-safety",
    title: "السلامة الرقمية أثناء التغطية",
    summary: "تأمين الجهاز قبل الميدان، سيجنال، حماية المصادر، VPN، وبروتوكول مصادرة الجهاز.",
    readingTime: "٨ دقائق",
    tags: ["OPSEC", "سيجنال", "حماية المصادر", "الحقل"],
  },
];

const comingSoon: string[] = [];

export default function JournalistsGuidePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">للصحفيات</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full">
              للصحفيات
            </span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الصحفية تعرف حقها
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-10">
            مقالات مخصصة لبيئة الإعلام والتحرير — من التغطية الميدانية إلى التعاقد
            إلى الحماية القانونية والرقمية للصحفيات.
          </p>

          {/* Published articles */}
          <section className="mb-8">
            <h2 className="text-[18px] font-bold text-[#211A22] mb-4">المقالات المنشورة</h2>
            <div className="flex flex-col gap-4">
              {articles.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group bg-white border border-[#DDD3CC] rounded-[16px] p-5 hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[#FAF5EF] transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-[16px] font-bold text-[#211A22] group-hover:text-[#4B245E] transition-colors">
                      {a.title}
                    </h3>
                    <span className="text-[11px] text-[#6B5D6E] flex-shrink-0 bg-[#F0E9E0] px-2 py-0.5 rounded-full">
                      {a.readingTime}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#6B5D6E] leading-[1.7] mb-3">{a.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span key={t} className="text-[11px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Coming soon */}
          {comingSoon.length > 0 && (
            <section className="mb-8">
              <h2 className="text-[18px] font-bold text-[#211A22] mb-4">قريبًا</h2>
              <div className="flex flex-col gap-2">
                {comingSoon.map((title) => (
                  <div key={title} className="flex items-center gap-3 bg-[#FAF5EF] border border-[#DDD3CC] rounded-[12px] px-4 py-3">
                    <span className="text-[11px] bg-[#DDD3CC] text-[#6B5D6E] px-2 py-0.5 rounded-full font-medium flex-shrink-0">قريبًا</span>
                    <p className="text-[14px] text-[#6B5D6E]">{title}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Trust note */}
          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-8">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              المعلومات في هذا الدليل للتوعية العامة. لدعم قانوني شخصي،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">تواصلي مع فريقنا</Link>.
            </p>
          </div>

          <div className="text-center">
            <Link href="/guide" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← دليل الحقوق الرئيسي</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
