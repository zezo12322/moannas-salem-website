import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "للصحافة والإعلام — مؤنث سالم",
  description: "للصحفيين الراغبين في التواصل مع مؤنث سالم — بيانات صحفية، اقتباسات معتمدة، وأصول بصرية.",
};

const pressQuotes = [
  {
    quote: "مؤنث سالم تملأ فراغًا حقيقيًا — مساحة آمنة ومنهجية لتوثيق ما تعانيه المرأة العاملة في مصر يوميًا.",
    attribution: "باحثة في حقوق الإنسان",
  },
  {
    quote: "الصحفيات في مصر يحتجن إلى صوت مؤسسي يتحدث عنهن — وهذا بالضبط ما تقدمه مؤنث سالم.",
    attribution: "صحفية استقصائية",
  },
];

export default function PressPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">للصحافة والإعلام</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            للصحافة والإعلام
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            نرحب بتواصل الصحفيين والإعلاميين الراغبين في تغطية قضايا المرأة في بيئة العمل.
            نسعد بتقديم المعلومات والتحليل والاقتباسات المعتمدة.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Press contact */}
            <section>
              <h2 className="text-[18px] font-bold text-[#211A22] mb-4">التواصل الصحفي</h2>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="text-[12px] text-[#6B5D6E]">البريد الصحفي</p>
                    <p className="text-[14px] text-[#211A22] font-medium">press@muanathsalem.org</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="text-[12px] text-[#6B5D6E]">وقت الاستجابة</p>
                    <p className="text-[14px] text-[#211A22] font-medium">خلال ٢٤–٤٨ ساعة عمل</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#4B245E] text-white font-semibold text-[13px] px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors w-fit"
                >
                  نموذج التواصل <span aria-hidden="true">←</span>
                </Link>
              </div>
            </section>

            {/* Key facts */}
            <section>
              <h2 className="text-[18px] font-bold text-[#211A22] mb-4">حقائق سريعة</h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "تأسست", value: "٢٠٢٢" },
                  { label: "التركيز", value: "الصحفيات والنساء العاملات في مصر" },
                  { label: "الخدمات", value: "دعم نفسي، قانوني، توثيق، مناصرة" },
                  { label: "التمويل", value: "منح مستقلة، تبرعات فردية" },
                ].map((f) => (
                  <div key={f.label} className="flex gap-2 text-[14px]">
                    <span className="text-[#6B5D6E] min-w-[90px]">{f.label}:</span>
                    <span className="text-[#211A22] font-medium">{f.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Approved quotes */}
          <section className="mb-12">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-5">اقتباسات معتمدة للاستخدام الصحفي</h2>
            <div className="flex flex-col gap-4">
              {pressQuotes.map((q, i) => (
                <blockquote key={i} className="bg-white border border-[#DDD3CC] border-s-4 border-s-[#4B245E] rounded-[14px] p-5">
                  <p className="text-[14px] text-[#211A22] leading-[1.9] italic mb-3">
                    "{q.quote}"
                  </p>
                  <footer className="text-[12px] text-[#6B5D6E]">— {q.attribution}</footer>
                </blockquote>
              ))}
            </div>
            <p className="text-[12px] text-[#6B5D6E] mt-3">
              للاقتباسات المنسوبة لمؤنث سالم مباشرةً، تواصلي معنا مسبقًا.
            </p>
          </section>

          {/* Key issues reference */}
          <section className="mb-12">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">القضايا التي نعمل عليها</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/issues/motherhood", label: "الأمومة والعمل" },
                { href: "/issues/fair-pay", label: "الأجر العادل" },
                { href: "/issues/digital-violence", label: "العنف الرقمي" },
                { href: "/issues/workplace-violence", label: "التحرش والعنف في العمل" },
                { href: "/issues/discrimination", label: "التمييز والترقيات" },
              ].map((issue) => (
                <Link
                  key={issue.href}
                  href={issue.href}
                  className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
                >
                  {issue.label}
                </Link>
              ))}
            </div>
          </section>

          {/* Assets */}
          <section>
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">الأصول البصرية</h2>
            <div className="bg-[#F0E9E0] rounded-[16px] p-5 flex flex-col gap-3">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                الشعار، الأصول البصرية، وملف التعريف بالمؤسسة متاحة للصحفيين والإعلاميين
                عند الطلب. تواصلي معنا بالبريد الصحفي أو نموذج التواصل.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#4B245E] text-[#4B245E] font-semibold text-[13px] px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors w-fit"
              >
                اطلبي الأصول البصرية <span aria-hidden="true">←</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
