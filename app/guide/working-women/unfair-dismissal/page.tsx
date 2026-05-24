import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الفصل التعسفي — حقوقك وخياراتك — مؤنث سالم",
  description: "ما الذي يُعدّ فصلاً تعسفيًا في مصر؟ حقوقك وفق قانون العمل ١٢/٢٠٠٣، مهلة التقديم، ولجان فض النزاعات.",
};

export default function UnfairDismissalPage() {
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
            <span className="text-[#211A22]">الفصل التعسفي</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للنساء العاملات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الفصل التعسفي — حقوقك وخياراتك
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-2">
            وقت القراءة: ٩ دقائق
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {["الفصل التعسفي", "قانون العمل ١٢", "التعويض"].map((t) => (
              <span key={t} className="text-[11px] text-[#C66B7D] bg-[rgba(198,107,125,0.1)] px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6">
            فقدان العمل صدمة — لكن الفصل غير القانوني لا يُعني العجز. القانون المصري يمنحكِ
            حقوقًا واضحة وآليات لاستردادها. إليكِ ما تحتاجين معرفته قبل أن تغادري مبنى
            العمل.
          </p>

          {/* Warning disclaimer */}
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

            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ما الذي يُعدّ فصلاً تعسفيًا؟</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                وفق قانون العمل المصري رقم ١٢ لسنة ٢٠٠٣، الفصل التعسفي هو إنهاء عقد العمل
                دون مسوّغ قانوني مشروع أو دون اتباع الإجراءات القانونية المقررة.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-3">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">أمثلة على الفصل التعسفي:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>الفصل بسبب الزواج أو الحمل أو إجازة الأمومة.</li>
                  <li>الفصل بسبب المطالبة بحقوق قانونية (الأجر، الإجازة، السلامة المهنية).</li>
                  <li>الفصل الانتقامي بعد تقديم شكوى داخلية أو لوزارة العمل.</li>
                  <li>الفصل دون إشعار مسبق أو مكافأة نهاية خدمة.</li>
                  <li>الفصل الجماعي دون اتباع إجراءات الإخطار القانونية.</li>
                  <li>إجبارك على الاستقالة تحت ضغط أو تهديد (الفصل الضمني).</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                <strong className="text-[#211A22]">تنبيه:</strong>{" "}
                إجبارك على التوقيع على استقالة تحت الضغط لا يُسقط حقك — يمكن الطعن فيها قانونًا.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الفصل المشروع مقابل غير المشروع</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-3">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">أسباب الفصل التي يعتبرها القانون مشروعة:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>ارتكاب مخالفة جسيمة ثابتة ومحددة في اللائحة الداخلية.</li>
                  <li>الغياب المتكرر دون مبرر مشروع وفق الضوابط القانونية.</li>
                  <li>السرقة أو الاختلاس أو الإضرار العمدي الموثق بممتلكات جهة العمل.</li>
                  <li>إفشاء أسرار الشركة بعد التحقق والإجراءات التأديبية.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                حتى في حالات الفصل المشروع، يجب على صاحب العمل اتباع إجراءات التحقيق والإخطار
                المقررة قانونًا، وإلا بقي الفصل عرضةً للطعن.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مهلة الـ ٩٠ يومًا — لا تتجاوزيها</h2>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] text-[#6B5D6E] mb-3">
                  يمنحكِ القانون <strong className="text-[#211A22]">٩٠ يومًا فقط</strong> من تاريخ
                  الفصل لتقديم شكواكِ لمكتب العمل المختص. تجاوز هذه المهلة يُسقط حقكِ القانوني
                  في المطالبة بالتعويض عن الفصل التعسفي.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>احسبي المهلة من اليوم الأول لانقطاع العمل — لا من تاريخ استلام خطاب الفصل.</li>
                  <li>قدّمي الشكوى كتابيًا واحتفظي بإيصال التسليم الموقوع.</li>
                  <li>لا توقّعي على أي إبراء ذمة قبل استشارة قانونية.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">لجان فض المنازعات العمالية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                عند تقديم الشكوى، يُحيلها مكتب العمل إلى <strong className="text-[#211A22]">لجنة فض
                المنازعات العمالية</strong> لمحاولة التسوية الودية خلال ٢١ يومًا.
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">مراحل النزاع:</p>
                <ol className="list-decimal list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>تقديم الشكوى لمكتب العمل (خلال ٩٠ يومًا).</li>
                  <li>جلسة التوفيق أمام اللجنة — حضور الطرفين.</li>
                  <li>في حال الفشل: الإحالة إلى المحكمة العمالية.</li>
                  <li>حكم المحكمة قابل للاستئناف.</li>
                </ol>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مكافأة نهاية الخدمة — كيف تُحسب؟</h2>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-3">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">قاعدة الحساب للقطاع الخاص:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>شهر كامل عن كل سنة من السنوات الخمس الأولى.</li>
                  <li>شهر ونصف عن كل سنة من السنوات التالية.</li>
                  <li>تُحسب على أساس آخر راتب شامل (يشمل البدلات الثابتة).</li>
                  <li>سنوات الخدمة المكسورة تُحسب بالأشهر.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                إضافةً إلى مكافأة نهاية الخدمة، يحق لكِ التعويض عن الفصل التعسفي الذي يحدده
                القضاء وقد يصل إلى شهرين عن كل سنة خدمة في حالات الفصل الجسيم.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">وثّقي قبل أن تغادري</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                اللحظة التي تعلمين فيها بقرار الفصل هي الأهم — ما تجمعينه الآن هو سلاحك القانوني.
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما تجمعينه فورًا:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>نسخة من عقد العمل وأي ملاحق أو تعديلات.</li>
                  <li>خطاب الفصل أو أي مراسلة خطية تتعلق بإنهاء الخدمة.</li>
                  <li>كشوف الرواتب لآخر ٦ أشهر على الأقل.</li>
                  <li>رسائل بريد إلكتروني أو رسائل تتضمن أسباب الفصل.</li>
                  <li>أسماء وبيانات التواصل مع الزملاء الذين كانوا شهودًا.</li>
                  <li>أي تقييمات أداء سابقة (إيجابية تُعزز موقفك).</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الفصل المرتبط بالحمل والأمومة</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                يُعدّ الفصل بسبب الحمل أو إجازة الأمومة أشد صور الفصل التعسفي التي يحكم
                عليها القضاء. يحظر القانون صراحةً فصل المرأة أثناء الحمل أو إجازة الأمومة
                أو خلال الأشهر الستة التالية للعودة.
              </p>
              <p className="text-[14px] text-[#6B5D6E]">
                لمزيد من التفاصيل حول هذا النوع تحديدًا، اقرئي{" "}
                <Link href="/guide/working-women/maternity-rights" className="text-[#4B245E] underline">
                  دليل حقوق الأمومة
                </Link>.
              </p>
            </section>

          </div>

          {/* Summary box */}
          <div className="mt-10 bg-white border-2 border-[#4F7C68] rounded-[16px] p-6">
            <p className="text-[15px] font-bold text-[#4F7C68] mb-4">حقوقك باختصار</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#211A22] ms-2">
              <li>لديكِ ٩٠ يومًا من تاريخ الفصل لتقديم الشكوى لمكتب العمل.</li>
              <li>الفصل بسبب الحمل أو الزواج أو المطالبة بحقوق باطل قانونًا.</li>
              <li>يحق لكِ مكافأة نهاية خدمة بصرف النظر عن سبب إنهاء العقد.</li>
              <li>الاستقالة تحت الإكراه لا تُسقط حقكِ في الطعن.</li>
              <li>لا توقّعي على أي إبراء ذمة قبل استشارة قانونية.</li>
              <li>لجان فض النزاعات مجانية وإجراءاتها أسرع من المحكمة.</li>
            </ul>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-6 flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>تنبيه قانوني مهم:</strong> المعلومات الواردة هنا للتوعية العامة وليست
              استشارة قانونية. كل حالة فردية وقد تختلف التفاصيل. لا تتخذي قرارات قانونية
              دون الرجوع إلى مختص.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تعرّضتِ للفصل التعسفي وتحتاجين مساعدة؟
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

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link
              href="/guide/working-women"
              className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors"
            >
              ← العودة إلى دليل النساء العاملات
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
