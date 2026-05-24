import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الأجر العادل — قضايانا — مؤنث سالم",
  description: "فجوة الأجور بين الجنسين حقيقية وموثّقة. نناضل من أجل شفافية الرواتب وتكافؤ الأجر.",
};

const whatWeDocument = [
  "فجوة الأجر بين المرأة والرجل في نفس المنصب",
  "عدم الشفافية في سلّم الرواتب والمكافآت",
  "التمييز في المنح الدراسية والتدريبات المدفوعة",
  "تفاوت الأجر بين العاملات بعقد ثابت والعاملات الحرات على نفس العمل",
  "غياب سياسة أجر واضحة في المؤسسة",
  "عقوبة الأجر غير الرسمية بعد إجازة الأمومة",
];

export default function FairPayPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/issues" className="hover:text-[#4B245E] transition-colors">قضايانا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">الأجر العادل</span>
          </nav>

          <span className="inline-block bg-[rgba(217,150,61,0.12)] text-[#D9963D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            قضايانا
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الأجر العادل ليس امتيازًا — هو حق
          </h1>

          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            لا تزال المرأة في مصر تحصل في المتوسط على أجر أقل من الرجل مقابل نفس العمل.
            هذه ليست مصادفة — هي نتاج سياسات غير شفافة وثقافة مؤسسية تُسكت الحديث عن الأجور.
            نحن نوثّق ونضغط من أجل شفافية حقيقية.
          </p>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">ما نوثّقه</h2>
            <div className="flex flex-col gap-2">
              {whatWeDocument.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </span>
                  <p className="text-[14px] text-[#211A22] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حقوقك باختصار</h2>
            <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                قانون العمل المصري يحظر التمييز في الأجر على أساس الجنس. لكل عاملة الحق
                في الاطلاع على سلم الدرجات الوظيفية في مؤسستها وطلب التظلم إذا رأت تمييزًا.
                إذا كنتِ تشكّين في وجود فجوة أجرية في مؤسستك، ابدئي بتوثيق الأدلة.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حملتنا في هذه القضية</h2>
            <Link
              href="/campaigns/fair-pay-is-a-right"
              className="group flex items-center gap-4 bg-white border border-[#D9963D] rounded-[14px] p-5 hover:bg-[rgba(217,150,61,0.04)] transition-colors"
            >
              <div className="flex-1">
                <p className="text-[15px] font-bold text-[#4B245E] mb-0.5 group-hover:text-[#3A1A4A]">الأجر العادل حق</p>
                <p className="text-[13px] text-[#6B5D6E]">حملة لتوثيق فجوة الأجور والمطالبة بشفافية الرواتب في بيئات العمل.</p>
              </div>
              <span className="text-[#4B245E] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
              </span>
            </Link>
          </section>

          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل تعتقدين أنك تحصلين على أجر أقل مما تستحقين؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support/legal" className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors">
                استشارة قانونية <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/report" className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                وثّقي الانتهاك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">قضايا ذات صلة</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/issues/discrimination" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">التمييز والترقيات</Link>
              <Link href="/issues/motherhood" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">الأمومة والعمل</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
