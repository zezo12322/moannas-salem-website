import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "التحرش والعنف في العمل — قضايانا — مؤنث سالم",
  description: "التحرش الجنسي والعنف النفسي واللفظي في بيئة العمل — نوثّق ونناضل لجعل العمل مكانًا آمنًا.",
};

const whatWeDocument = [
  "التحرش الجنسي اللفظي والجسدي من زملاء أو مسؤولين",
  "العنف اللفظي والتنمر المتعمد من الإدارة",
  "الضغط النفسي الممنهج لإجبار العاملة على المغادرة",
  "بيئات العمل التي تُسكت من يتحدثن عن الانتهاكات",
  "انتقام أصحاب العمل من من قدّمن شكاوى",
  "التغاضي المؤسسي عن سلوك المتحرشين والمعتدين",
];

export default function WorkplaceViolencePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/issues" className="hover:text-[#4B245E] transition-colors">قضايانا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">التحرش والعنف في العمل</span>
          </nav>

          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            قضايانا
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            بيئة العمل لا يجب أن تكون مكانًا مؤلمًا
          </h1>

          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            التحرش الجنسي والعنف النفسي في بيئات العمل ليست حوادث فردية — هي أنماط
            ممنهجة في مؤسسات تفتقر إلى سياسات واضحة وآليات تظلم فعّالة. كل امرأة تتحدث
            تجعل المساحة أكثر أمانًا للقادمات.
          </p>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">ما نوثّقه</h2>
            <div className="flex flex-col gap-2">
              {whatWeDocument.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#4B245E] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <p className="text-[14px] text-[#211A22] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حقوقك القانونية</h2>
            <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                قانون العمل المصري يحظر التمييز والتحرش في بيئة العمل. قانون مكافحة التحرش
                الجنسي يُجرّم التحرش في الأماكن العامة وبيئات العمل. الشكوى لوزارة العمل
                أو النيابة العامة هي حقك المكفول — وليست خيانة لمؤسستك.
              </p>
            </div>
          </section>

          {/* Psychological note */}
          <div className="flex gap-3 items-start bg-[rgba(198,107,125,0.08)] border border-[#C66B7D] rounded-[12px] p-4 mb-8">
            <span className="text-[#C66B7D] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              الأثر النفسي للتحرش والعنف في العمل حقيقي وخطير. إذا كنتِ تعانين من صعوبة
              نفسية بسبب ما تعرّضتِ له،{" "}
              <Link href="/support/mental-health" className="text-[#4B245E] underline">
                الدعم النفسي متاح لك
              </Link>
              {" "}بسرية تامة.
            </p>
          </div>

          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل تعرّضتِ للتحرش أو العنف في عملك؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support/mental-health" className="inline-flex items-center gap-1.5 bg-[#C66B7D] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#a85268] transition-colors">
                دعم نفسي <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/legal" className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors">
                دعم قانوني <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/report" className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                احكي شهادتك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">قضايا ذات صلة</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/issues/digital-violence" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">العنف الرقمي</Link>
              <Link href="/issues/discrimination" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">التمييز والترقيات</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
