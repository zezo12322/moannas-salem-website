import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "التمييز والترقيات — قضايانا — مؤنث سالم",
  description: "السقف الزجاجي حقيقي. نوثّق التمييز في الترقيات والمهام وثقافة الإقصاء في بيئات العمل.",
};

const whatWeDocument = [
  "إهمال ترشيح النساء للمناصب القيادية رغم الكفاءة",
  "توزيع المهام الكبرى والمشاريع المميزة بشكل غير متكافئ",
  "الاستثناء من الاجتماعات المهمة واتخاذ القرار",
  "التمييز في معايير تقييم الأداء بين الجنسين",
  "عدم الأخذ بجدية توصيات النساء في الاجتماعات",
  "شروط ترقية غير معلنة وغير موثّقة تُفسَّر بشكل تمييزي",
];

export default function DiscriminationPage() {
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
            <span className="text-[#211A22]">التمييز والترقيات</span>
          </nav>

          <span className="inline-block bg-[rgba(107,93,110,0.1)] text-[#6B5D6E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            قضايانا
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            السقف الزجاجي ليس قدرًا — هو سياسة يمكن تغييرها
          </h1>

          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            كثير من النساء يواجهن تمييزًا غير مرئي في الترقيات والمهام — ليس بقانون مكتوب،
            بل بثقافة مؤسسية تُقلّل من كفاءتهن وتُبعدهن عن دوائر القرار. نحن نوثّق هذه
            الأنماط ونحوّلها إلى أدلة تضغط على التغيير.
          </p>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">ما نوثّقه</h2>
            <div className="flex flex-col gap-2">
              {whatWeDocument.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#6B5D6E] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
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
                قانون العمل المصري يحظر التمييز على أساس الجنس في التوظيف والترقية والتدريب
                والأجر. إثبات التمييز يحتاج إلى توثيق دقيق — تواريخ، وثائق، شهود. فريقنا
                القانوني يمكنه مساعدتك في بناء ملفك.
              </p>
            </div>
          </section>

          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل تشعرين بالتمييز في بيئة عملك؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support/legal" className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors">
                استشارة قانونية <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/report" className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                وثّقي شهادتك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">قضايا ذات صلة</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/issues/fair-pay" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">الأجر العادل</Link>
              <Link href="/issues/motherhood" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">الأمومة والعمل</Link>
              <Link href="/issues/workplace-violence" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">التحرش والعنف في العمل</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
