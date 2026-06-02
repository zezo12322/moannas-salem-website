import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الأجر العادل حق — حملاتنا — مؤنث سالم",
  description: "حملة لكشف فجوة الأجور والمطالبة بشفافية الرواتب في بيئات العمل المصرية.",
};

const voices = [
  {
    quote: "اكتشفت بالصدفة إن زميلي في نفس المنصب براتب أكبر مني بـ٣٠٪. لما سألت، قالوا 'هو عنده خبرة أكثر.' هو متخرّج نفس السنة مني.",
    role: "محاسبة في شركة خاصة، ٢٠٢٤",
  },
  {
    quote: "في مؤسستنا الإعلامية، الصحفيات الفريلانس بيأخذن سعر كلمة أقل من الرجال. مش مكتوب، بس كلنا عارفين.",
    role: "صحفية مستقلة، ٢٠٢٣",
  },
];

export default function FairPayIsARightPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/campaigns" className="hover:text-[#4B245E] transition-colors">حملاتنا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">الأجر العادل حق</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(79,124,104,0.12)] text-[#4F7C68]">جارية</span>
            <span className="text-[13px] text-[#6B5D6E]">حملة · الأجر العادل</span>
          </div>

          <h1 className="text-[28px] md:text-[38px] font-bold text-[#4B245E] mb-6 leading-[1.3]">
            الأجر العادل حق
          </h1>

          <p className="text-[17px] font-semibold text-[#D9963D] leading-[1.6] mb-8 border-s-4 border-[#D9963D] ps-4">
            نفس الكفاءة، نفس العمل، نفس الأجر — هذه ليست مطالبة مبالغ فيها. هذا ما يكفله القانون.
          </p>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">لماذا هذه الحملة؟</h2>
            <p className="text-[15px] text-[#6B5D6E] leading-[1.9]">
              الدراسات تُظهر أن فجوة الأجور بين الجنسين في مصر تصل إلى ٣٠٪ في بعض
              القطاعات. هذه الفجوة ليست ظاهرة طبيعية — هي نتاج سياسات غير شفافة وثقافة
              مؤسسية تُقلّل من قيمة عمل المرأة. نحن نوثّق ونطالب.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">المشكلة</h2>
            <div className="bg-[#FAF5EF] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                في كثير من المؤسسات، الرواتب سرية — النقاش عنها "ممنوع" أو "غير لائق".
                هذا السر يحمي فجوة الأجور ويمنع النساء من اكتشاف التمييز. الشفافية في
                الرواتب هي أول خطوة نحو العدالة.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">ماذا فعلنا حتى الآن</h2>
            <ul className="flex flex-col gap-3">
              {[
                "جمعنا بيانات مجمّعة عن فجوة الأجور في قطاعات متعددة",
                "أطلقنا حملة توعوية عن الحق في مناقشة الرواتب",
                "قدّمنا مطالب لعدد من المؤسسات بوضع سياسة أجر شفافة",
                "أعددنا دليل المطالبة بالأجر العادل للنساء العاملات",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#4F7C68] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <p className="text-[14px] text-[#211A22]">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">أصوات من الواقع</h2>
            <div className="flex flex-col gap-4">
              {voices.map((v, i) => (
                <blockquote key={i} className="bg-white border border-[#DDD3CC] border-s-4 border-s-[#D9963D] rounded-[14px] p-5">
                  <p className="text-[14px] text-[#211A22] leading-[1.9] italic mb-3">"{v.quote}"</p>
                  <footer className="text-[12px] text-[#6B5D6E] font-medium">{v.role}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <div className="bg-[#4B245E] rounded-[20px] p-6 text-center">
            <p className="text-[16px] font-bold text-white mb-2">شاركي في الحملة</p>
            <p className="text-[13px] text-white/70 mb-5">
              هل تعتقدين أنك تحصلين على أجر أقل مما يستحقه عملك؟ شهادتك مهمة.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/support/report" className="inline-flex items-center justify-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors">
                شاركي شهادتك <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/legal" className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                استشارة قانونية <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/campaigns" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← كل الحملات</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
