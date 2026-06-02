import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الأجر العادل — كيف تطالبين بحقك — مؤنث سالم",
  description: "كيف تتعرّفين على فجوة الرواتب وتطالبين بأجر عادل في مصر؟ أدوات البحث والتفاوض والحماية القانونية.",
};

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
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide/working-women" className="hover:text-[#4B245E] transition-colors">للنساء العاملات</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">الأجر العادل</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للنساء العاملات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الأجر العادل — كيف تطالبين بحقك
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-2">
            وقت القراءة: ٧ دقائق
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {["الأجر العادل", "التفاوض", "فجوة الرواتب"].map((t) => (
              <span key={t} className="text-[11px] text-[#C66B7D] bg-[rgba(198,107,125,0.1)] px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6">
            المطالبة بأجر عادل ليست وقاحةً — هي حق. ومعرفة ما يستحقه عملكِ فعلاً هي
            الخطوة الأولى لاسترداده. إليكِ كيف تبدئين.
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
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ابحثي عن قيمة دورك في السوق</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                قبل أي محادثة عن الراتب، احتاجين إلى بيانات — لا إحساسًا بالغبن. البيانات
                تحوّل طلبكِ من شكوى شخصية إلى حجة موضوعية.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">مصادر لمعرفة متوسطات الرواتب في مصر:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <strong className="text-[#211A22]">LinkedIn Salary Insights:</strong>{" "}
                    يُتيح عوامل التصفية حسب المسمى الوظيفي والقطاع والموقع الجغرافي.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">Glassdoor و Payscale:</strong>{" "}
                    تحتويان على بيانات من موظفين مصريين وإن كانت تغطيتهما للسوق المحلي محدودة.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">Wuzzuf و Bayt.com:</strong>{" "}
                    راجعي الوظائف المشابهة لدورك لمعرفة نطاق الرواتب المُعلن عنه.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">تقارير الرواتب القطاعية:</strong>{" "}
                    بعض الجمعيات المهنية والغرف التجارية تصدر مسوحات رواتب سنوية.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">شبكتك المهنية:</strong>{" "}
                    الحديث عن الرواتب مع زميلات موثوقات في قطاعك — أكثر البيانات دقةً.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">كيف تتعرفين على فجوة الراتب في وضعكِ</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                فجوة الراتب قد تكون بينكِ وبين زميل يشغل دورًا مماثلاً، أو بينكِ وبين ما
                يدفعه السوق لخبرتكِ. لتحديدها بدقة:
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>قارني راتبكِ الإجمالي (الأساسي + البدلات) بمتوسط السوق لذات الدور والخبرة.</li>
                  <li>إذا كان الراتب الأساسي منخفضًا، احسبي نسبة الفجوة — حتى ١٠٪ فجوة تتفاقم مع كل علاوة.</li>
                  <li>تحققي من آخر مرة رُفع فيها راتبكِ قياسًا بمعدل التضخم السنوي.</li>
                  <li>إذا أمكن، قارني الكيفية التي يحسب بها صاحب العمل العلاوات — هل النسبة المئوية ذاتها للجميع؟</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">طلب مراجعة الراتب خطوة بخطوة</h2>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-3">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <strong className="text-[#211A22]">اطلبي اجتماعًا رسميًا:</strong>{" "}
                    لا تطرحي الموضوع في ممر أو في نهاية اجتماع. أرسلي بريدًا إلكترونيًا
                    تطلبين فيه اجتماعًا لمناقشة مسيرتك المهنية وتعويضك.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">جهّزي حجتك مكتوبةً:</strong>{" "}
                    قائمة إنجازاتكِ الموثقة في الفترة الأخيرة، مع بيانات السوق الداعمة لطلبكِ.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">حددي رقمًا واضحًا:</strong>{" "}
                    لا تقولي "أريد زيادة" — قولي "أطلب راتبًا يبلغ [X جنيه] بناءً على [السبب]".
                  </li>
                  <li>
                    <strong className="text-[#211A22]">استمعي واسألي:</strong>{" "}
                    إذا رُفض الطلب، اسألي عن المعايير التي يجب استيفاؤها وفي أي إطار زمني.
                  </li>
                  <li>
                    <strong className="text-[#211A22]">وثّقي الاجتماع:</strong>{" "}
                    بعد الاجتماع، أرسلي بريدًا يُلخص ما اتُّفق عليه أو ما قيل.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">تكتيكات التفاوض — ما يُجدي وما لا يُجدي</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-3">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما يُجدي:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>ربط الطلب بالإنجازات الموثقة لا بالاحتياج الشخصي.</li>
                  <li>استخدام بيانات السوق كمرجعية موضوعية.</li>
                  <li>التفاوض على الحزمة الكاملة إذا كان الراتب الأساسي محدودًا (بدلات، مرونة، تطوير مهني).</li>
                  <li>إعطاء صاحب العمل وقتًا للتفكير دون أن تتركي الأمر مفتوحًا إلى الأبد.</li>
                </ul>
              </div>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما لا يُجدي:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>التهديد باستقالة لا تنوينها فعلاً.</li>
                  <li>إفشاء راتب زميل بالاسم — يُحوّل النقاش إلى خلاف شخصي.</li>
                  <li>الاعتذار عن طلب الزيادة أو التقليل من شأن الطلب.</li>
                  <li>قبول الرفض دون طلب خارطة طريق واضحة.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ماذا يقول القانون المصري عن مساواة الأجور؟</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                المادة ٨٨ من قانون العمل ١٢/٢٠٠٣ تنص صراحةً على حق المرأة في أجر مساوٍ
                للرجل عن العمل ذاته. كذلك تحظر المادة ١٢٠ التمييز في أي شروط العمل.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] text-[#6B5D6E] mb-2">
                  <strong className="text-[#211A22]">الواقع العملي:</strong>{" "}
                  إثبات الفجوة القائمة على النوع الاجتماعي يتطلب دليلاً مقارنًا — وهو ما يصعب
                  جمعه دون شفافية في الرواتب. لهذا يكون المسار التفاوضي غالبًا أسرع وأقل
                  تكلفةً من المسار القانوني.
                </p>
                <p className="text-[14px] text-[#6B5D6E]">
                  غير أن وجود فجوة موثقة بين راتبكِ وراتب زميل يشغل الدور ذاته يُشكّل أساسًا
                  قانونيًا صحيحًا للشكوى لمكتب العمل.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إذا رُفض طلبكِ — ما الخطوات التالية؟</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>اطلبي أسباب الرفض كتابيًا — وإن لم يردوا، سجّلي ما قيل شفهيًا.</li>
                  <li>حددي جدولاً زمنياً لإعادة طرح الموضوع مع اشتراطات واضحة.</li>
                  <li>إذا اعتقدتِ أن الرفض مرتبط بجنسكِ لا بأدائكِ، وثّقي الأنماط وتواصلي معنا.</li>
                  <li>قيّمي خياراتك خارج المنشأة — معرفة قيمتك في السوق تُعزز موقفكِ دائمًا.</li>
                </ul>
              </div>
            </section>

          </div>

          {/* Summary box */}
          <div className="mt-10 bg-white border-2 border-[#4F7C68] rounded-[16px] p-6">
            <p className="text-[15px] font-bold text-[#4F7C68] mb-4">حقوقك باختصار</p>
            <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#211A22] ms-2">
              <li>القانون المصري يكفل أجرًا مساويًا للعمل ذاته بصرف النظر عن الجنس.</li>
              <li>بيانات السوق حجة موضوعية — جمعيها قبل أي محادثة.</li>
              <li>الطلب المكتوب يُوثّق موقفكِ ويُلزم صاحب العمل بالرد.</li>
              <li>الرفض دون أسباب موضوعية قد يُشكّل أساسًا للشكوى.</li>
              <li>لا تعتذري عن طلب ما تستحقينه — هو حق وليس طلبًا استثنائيًا.</li>
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
              تشكّين في وجود فجوة راتب غير عادلة في عملك؟
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
