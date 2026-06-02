import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "دليل النساء العاملات — مؤنث سالم",
  description: "حقوق المرأة في بيئة العمل — الأمومة، الأجر العادل، التمييز، والفصل التعسفي.",
};

const articles = [
  {
    href: "/guide/working-women/maternity-rights",
    title: "حقوق الأمومة في العمل",
    summary: "إجازة الأمومة، الحماية من الفصل، ساعات الرضاعة، ودور الحضانة — ما يكفله القانون.",
    readingTime: "٩ دقائق",
    tags: ["إجازة الأمومة", "الفصل", "الرضاعة"],
  },
  {
    href: "/guide/working-women/unfair-dismissal",
    title: "الفصل التعسفي — حقوقك وخياراتك",
    summary: "الفصل المشروع وغير المشروع، نافذة الـ٩٠ يومًا، لجان النزاعات، وتعويض نهاية الخدمة.",
    readingTime: "٩ دقائق",
    tags: ["الفصل التعسفي", "قانون العمل ١٢", "التعويض"],
  },
  {
    href: "/guide/working-women/promotion-discrimination",
    title: "التمييز في الترقيات — كيف توثّقينه",
    summary: "أنماط السقف الزجاجي، بناء سجل إثبات، التقديم للموارد البشرية، والخيارات القانونية.",
    readingTime: "٨ دقائق",
    tags: ["التمييز", "الترقيات", "السقف الزجاجي", "التوثيق"],
  },
  {
    href: "/guide/working-women/fair-pay",
    title: "الأجر العادل — كيف تطالبين بحقك",
    summary: "مقارنة الرواتب، كيفية طلب مراجعة الراتب، تكتيكات التفاوض، والموقف القانوني.",
    readingTime: "٧ دقائق",
    tags: ["الأجر العادل", "التفاوض", "فجوة الرواتب"],
  },
  {
    href: "/guide/working-women/workplace-stress",
    title: "الضغط النفسي في العمل والحدود القانونية",
    summary: "الفرق بين الضغط المهني والإساءة النفسية — التعرف على الأنماط، التوثيق، والحماية القانونية.",
    readingTime: "٩ دقائق",
    tags: ["الإساءة النفسية", "الضغط المهني", "حدود قانونية"],
  },
];

const comingSoon: string[] = [];

export default function WorkingWomenGuidePage() {
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
            <span className="text-[#211A22]">للنساء العاملات</span>
          </nav>

          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للنساء العاملات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حقوقك في بيئة العمل — بلغة بشرية
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-10">
            دليل عملي لكل امرأة عاملة في مصر — ليس قاموسًا قانونيًا، بل إجابات واضحة على
            أسئلة حقيقية: ماذا أفعل الآن؟
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
                      <span key={t} className="text-[11px] text-[#C66B7D] bg-[rgba(198,107,125,0.1)] px-2 py-0.5 rounded-full">
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
              المعلومات للتوعية العامة فقط. لدعم شخصي،{" "}
              <Link href="/support" className="text-[#4B245E] underline">اطلبي الدعم الآمن</Link>.
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
