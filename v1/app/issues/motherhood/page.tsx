import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الأمومة والعمل — قضايانا — مؤنث سالم",
  description: "الأمومة ليست مرضًا ولا سببًا للفصل. نوثّق انتهاكات حقوق الأمهات العاملات ونناضل من أجل تغييرها.",
};

const whatWeDocument = [
  "الفصل أثناء الحمل أو إجازة الأمومة",
  "الضغط للاستقالة بعد العودة من الإجازة",
  "تقليص الراتب أو الدرجة الوظيفية بعد الولادة",
  "الإقصاء من الاجتماعات أو الفرص المهنية بسبب الأمومة",
  "الضغط النفسي والتنمر المرتبط بالحمل أو الرضاعة",
  "الحرمان من ساعات الرضاعة المكفولة قانونًا",
];

const relatedIssues = [
  { href: "/issues/fair-pay", label: "الأجر العادل" },
  { href: "/issues/discrimination", label: "التمييز والترقيات" },
];

export default function MotherhoodPage() {
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
            <span className="text-[#211A22]">الأمومة والعمل</span>
          </nav>

          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            قضايانا
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الأمومة ليست مرضًا — ولا سببًا للفصل
          </h1>

          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            في كثير من بيئات العمل، تُعاقَب المرأة على قرارها بأن تصبح أمًا. هذا يأخذ
            أشكالًا كثيرة: الضغط للاستقالة، تقليص المهام، منع الترقية، أو الفصل المباشر.
            نحن نوثّق هذه الانتهاكات لأن ما يُسجَّل يمكن تغييره.
          </p>

          {/* What we document */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">ما نوثّقه</h2>
            <div className="flex flex-col gap-2">
              {whatWeDocument.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#C66B7D] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </span>
                  <p className="text-[14px] text-[#211A22] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Your rights */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حقوقك باختصار</h2>
            <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-3">
                القانون المصري يكفل للمرأة العاملة إجازة أمومة مدفوعة ٩٠ يومًا، وحظر
                الفصل بسبب الحمل أو الولادة، وساعتي رضاعة يوميًا لمدة سنتين. انتهاك هذه
                الحقوق جريمة يُعاقب عليها القانون.
              </p>
              <Link
                href="/guide/working-women/maternity-rights"
                className="inline-flex items-center gap-1.5 text-[#4B245E] text-[13px] font-semibold hover:text-[#3A1A4A] transition-colors"
              >
                اقرئي دليل حقوق الأمومة الكامل <span aria-hidden="true">←</span>
              </Link>
            </div>
          </section>

          {/* Campaign link */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حملتنا في هذه القضية</h2>
            <Link
              href="/campaigns/not-my-fault-im-a-mother"
              className="group flex items-center gap-4 bg-white border border-[#C66B7D] rounded-[14px] p-5 hover:bg-[rgba(198,107,125,0.04)] transition-colors"
            >
              <div className="flex-1">
                <p className="text-[15px] font-bold text-[#4B245E] mb-0.5 group-hover:text-[#3A1A4A]">
                  مش ذنبي إني أم
                </p>
                <p className="text-[13px] text-[#6B5D6E]">
                  حملة لوثائق الانتهاكات ومطالبة أصحاب العمل بالامتثال لقانون الأمومة.
                </p>
              </div>
              <span className="text-[#4B245E] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
            </Link>
          </section>

          {/* CTAs */}
          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل واجهتِ انتهاكًا يتعلق بالأمومة في عملك؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support/legal" className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors">
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/report" className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                احكي شهادتك <span aria-hidden="true">←</span>
              </Link>
              <Link href="/guide/working-women/maternity-rights" className="inline-flex items-center gap-1.5 border border-[#DDD3CC] text-[#6B5D6E] text-[13px] px-4 py-2 rounded-full hover:border-[#4B245E] hover:text-[#4B245E] transition-colors">
                دليل حقوق الأمومة <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Related issues */}
          <div className="pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">قضايا ذات صلة</p>
            <div className="flex flex-wrap gap-2">
              {relatedIssues.map((r) => (
                <Link key={r.href} href={r.href} className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
