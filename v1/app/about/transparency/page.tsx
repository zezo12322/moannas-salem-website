import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الشفافية والشركاء — مؤنث سالم",
  description: "من يموّل مؤنث سالم؟ من هم شركاؤها؟ تقارير سنوية مفتوحة.",
};

const commitments = [
  "ننشر تقريرًا سنويًا عن أنشطتنا وأثرنا.",
  "نُفصح عن مصادر تمويلنا بشكل دوري.",
  "لا يؤثر أي ممول على محتوى تقاريرنا أو قرارات الدعم.",
  "لا تُشارك بيانات المستخدمات مع أي شريك أو ممول في أي ظرف.",
  "استقلاليتنا التحريرية والمهنية غير قابلة للتفاوض.",
];

export default function TransparencyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/about/story" className="hover:text-[#4B245E] transition-colors">من نحن</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">الشفافية والشركاء</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الشفافية والشركاء
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            ننشر تقارير عملنا وتمويلنا بشكل دوري. الشفافية ليست شعارًا — هي أساس الثقة.
          </p>

          {/* Commitments */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-5">التزاماتنا</h2>
            <div className="flex flex-col gap-3">
              {commitments.map((c, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#4F7C68] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="text-[14px] text-[#211A22] leading-[1.7]">{c}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Funding */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">مصادر التمويل</h2>
            <div className="bg-[#FAF5EF] rounded-[16px] p-6">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-4">
                مؤنث سالم مؤسسة مستقلة لا تقبل تمويلًا يُشترط عليه قيود تحريرية أو على
                قرارات الدعم. مصادر تمويلنا تشمل:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>منح من مؤسسات حقوق الإنسان الدولية</li>
                <li>تبرعات فردية</li>
                <li>شراكات مؤسسية مع منظمات تشاركنا قيم الاستقلالية</li>
              </ul>
              <p className="mt-4 text-[13px] text-[#6B5D6E]">
                التفاصيل الكاملة للتمويل تُنشر في التقرير السنوي.
              </p>
            </div>
          </section>

          {/* Annual reports */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">التقارير السنوية</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between bg-white border border-[#DDD3CC] rounded-[14px] p-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#4B245E]" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22]">التقرير السنوي ٢٠٢٦</p>
                    <p className="text-[12px] text-[#6B5D6E]">قيد الإعداد — يُنشر نهاية العام</p>
                  </div>
                </div>
                <span className="text-[11px] bg-[#DDD3CC] text-[#6B5D6E] px-2.5 py-1 rounded-full font-medium">
                  قريبًا
                </span>
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">الشركاء</h2>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-4">
              نتعاون مع منظمات ومؤسسات تشاركنا الالتزام ببيئة عمل آمنة وعادلة للنساء.
              قائمة الشركاء قيد التحديث.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-[#F0E9E0] rounded-[12px] flex items-center justify-center"
                >
                  <p className="text-[12px] text-[#6B5D6E]">شريك {i}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#6B5D6E] mt-3">
              هل مؤسستك مهتمة بالشراكة؟{" "}
              <Link href="/contact" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
                تواصلي معنا
              </Link>
            </p>
          </section>

          {/* About nav */}
          <div className="pt-8 border-t border-[#DDD3CC] flex flex-wrap gap-3">
            <Link href="/about/story" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← القصة</Link>
            <Link href="/about/team" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← الفريق</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
