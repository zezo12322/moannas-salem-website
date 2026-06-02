import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "حقوق الأمومة في العمل — دليل الحقوق — مؤنث سالم",
  description: "ما حقوقك القانونية كأم عاملة في مصر؟ إجازة الأمومة، الحماية من الفصل، وحقوق الرضاعة.",
};

export default function MaternityRightsPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide/working-women" className="hover:text-[#4B245E] transition-colors">للنساء العاملات</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">حقوق الأمومة</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للنساء العاملات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حقوق الأمومة في العمل
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6">
            الأمومة ليست مرضًا — ولا سببًا للفصل. القانون المصري يكفل حقوقًا واضحة
            للمرأة الحامل والأم العاملة. إليكِ ما تحتاجين معرفته.
          </p>

          {/* Legal disclaimer */}
          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-8">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هذا الدليل للمعلومات العامة فقط. للدعم القانوني الشخصي،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">
                تواصلي مع فريقنا
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إجازة الأمومة</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">المدة المكفولة قانونًا:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li><strong className="text-[#211A22]">العاملات في القطاع الحكومي:</strong> ٩٠ يومًا بأجر كامل.</li>
                  <li><strong className="text-[#211A22]">العاملات في القطاع الخاص:</strong> ٩٠ يومًا وفق قانون العمل رقم ١٢ لسنة ٢٠٠٣.</li>
                  <li>الإجازة تُمنح مرتين فقط طوال مدة الخدمة في نفس المنشأة.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                <strong className="text-[#211A22]">ملاحظة مهمة:</strong>{" "}
                كثير من أصحاب العمل يتحايلون على هذا الحق. وثّقي طلبك للإجازة كتابيًا
                واحتفظي بنسخة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الحماية من الفصل</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                يحظر قانون العمل المصري فصل المرأة بسبب الزواج أو الحمل أو الولادة.
                الفصل أثناء إجازة الأمومة باطل قانونًا.
              </p>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                <strong className="text-[#211A22]">علامات التحايل التي يجب الانتباه لها:</strong>
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>الضغط على الاستقالة بدل الفصل الصريح.</li>
                <li>تقليص المهام أو تغيير الوصف الوظيفي عند العودة.</li>
                <li>حرمانها من الترقيات أو العلاوات بعد العودة.</li>
                <li>ظروف عمل مقصودة لإجبارها على المغادرة.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                إذا وقع أي من هذا، <Link href="/support/report" className="text-[#4B245E] underline">وثّقيه</Link>{" "}
                فورًا وتواصلي{" "}
                <Link href="/support/legal" className="text-[#4B245E] underline">مع فريقنا القانوني</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">حق الرضاعة</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                يكفل القانون للأم العاملة ساعتين يوميًا لإرضاع طفلها — مجمّعتين أو مجزّأتين —
                خلال فترة لا تقل عن ٢٤ شهرًا من تاريخ الولادة.
                هذا الحق مدفوع ولا يجوز خصمه من الراتب.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">دور الحضانة في بيئة العمل</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                المنشآت التي تضم ١٠٠ عاملة فأكثر مُلزَمة بإنشاء دار حضانة أو التعاقد مع
                حضانة قريبة على نفقة المنشأة. إذا كانت شركتك تُطبّق هذا، هذا حق مكفول لك.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الإجازة المرضية للحوامل</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                المضاعفات الصحية أثناء الحمل تُعدّ مرضًا مهنيًا يستحق إجازة مرضية مدفوعة
                وفق اللوائح. احصلي على تقرير طبي موثق من أي حالة واحتفظي بنسخه.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ماذا تفعلين إذا انتُهكت حقوقك؟</h2>
              <ol className="list-decimal list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li><strong className="text-[#211A22]">وثّقي كل شيء:</strong> رسائل، إيميلات، شهود، تواريخ.</li>
                <li><strong className="text-[#211A22]">تقدّمي بشكوى للموارد البشرية</strong> كتابيًا واحتفظي بنسخة.</li>
                <li><strong className="text-[#211A22]">تواصلي مع نقابتك</strong> أو مؤنث سالم لدعم قانوني.</li>
                <li><strong className="text-[#211A22]">الشكوى لوزارة العمل</strong> ممكنة وهي مجانية.</li>
              </ol>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل تعرّضتِ لانتهاك في بيئة عملك بسبب الأمومة؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/report"
                className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors"
              >
                وثّقي شهادتك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Article nav */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">مقالات ذات صلة</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guide/journalists/press-rights"
                className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
              >
                حقوق الصحفيات في الميدان
              </Link>
              <Link
                href="/guide/digital-safety/online-harassment"
                className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
              >
                التعامل مع التحرش الإلكتروني
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
