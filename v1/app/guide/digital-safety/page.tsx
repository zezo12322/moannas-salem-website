import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "دليل السلامة الرقمية — مؤنث سالم",
  description: "حماية من التحرش والعنف الإلكتروني — حسابات آمنة، ابتزاز، مطاردة رقمية.",
};

const articles = [
  {
    href: "/guide/digital-safety/online-harassment",
    title: "التعامل مع التحرش الإلكتروني",
    summary: "توثيق الانتهاك، الإبلاغ على المنصات، الإجراءات القانونية، وتأمين حساباتك.",
    readingTime: "١٠ دقائق",
    tags: ["التحرش", "الابتزاز", "الإبلاغ", "السلامة الرقمية"],
  },
  {
    href: "/guide/digital-safety/account-security",
    title: "تأمين حساباتك على وسائل التواصل الاجتماعي",
    summary: "المصادقة الثنائية، كلمات المرور، مراجعة الأذونات، والتعامل مع اختراق الحسابات.",
    readingTime: "٨ دقائق",
    tags: ["المصادقة الثنائية", "كلمات المرور", "حماية الحساب"],
  },
  {
    href: "/guide/digital-safety/cyberstalking",
    title: "المطاردة الرقمية — كيف تكتشفينها وتوقفينها",
    summary: "علامات المطاردة الرقمية، الكشف عن برامج التجسس، التوثيق، والخيارات القانونية.",
    readingTime: "١٠ دقائق",
    tags: ["مطاردة رقمية", "برامج التجسس", "القانون ١٧٥"],
  },
  {
    href: "/guide/digital-safety/field-safety",
    title: "السلامة الرقمية للصحفيات في الميدان",
    summary: "تحضير الجهاز قبل التغطية، تشفير الاتصالات، OPSEC وبروتوكولات الحماية.",
    readingTime: "٩ دقائق",
    tags: ["الميدان", "سيجنال", "التشفير", "OPSEC"],
  },
  {
    href: "/guide/digital-safety/identity-protection",
    title: "حماية هويتك عند نشر شهادات حساسة",
    summary: "إزالة البيانات الوصفية، قنوات مجهولة الهوية، SecureDrop، والتعامل مع الدوكسينج.",
    readingTime: "٩ دقائق",
    tags: ["البيانات الوصفية", "الدوكسينج", "المصادر", "سيكيور دروب"],
  },
];

const comingSoon: string[] = [];

export default function DigitalSafetyGuidePage() {
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
            <span className="text-[#211A22]">السلامة الرقمية</span>
          </nav>

          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حماية رقمية عملية — بخطوات واضحة
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-10">
            الفضاء الرقمي ليس مساحة آمنة تلقائيًا — لكن يمكن جعله أكثر أمانًا. دليلنا
            يُرشدك بخطوات عملية لحماية نفسك والتعامل مع التهديدات.
          </p>

          {/* Emergency note */}
          <div className="flex gap-3 items-start bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-8">
            <span className="text-[#C0392B] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong className="text-[#C0392B]">إذا تعرّضتِ للابتزاز الآن:</strong>{" "}
              لا تدفعي ولا تنفّذي المطالب. وثّقي كل شيء فورًا.{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">
                تواصلي معنا للدعم العاجل
              </Link>.
            </p>
          </div>

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
                      <span key={t} className="text-[11px] text-[#4F7C68] bg-[rgba(79,124,104,0.1)] px-2 py-0.5 rounded-full">
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

          <div className="text-center">
            <Link href="/guide" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← دليل الحقوق الرئيسي</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
