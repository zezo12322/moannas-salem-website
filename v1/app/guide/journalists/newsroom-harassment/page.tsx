import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "التحرش في بيئة التحرير — دليل الحقوق — مؤنث سالم",
  description: "دليل عملي للتعامل مع التحرش في غرف الأخبار — التوثيق، التصعيد الداخلي، قانون ١٥٠/٢٠٢٠، وخيارات الدعم النفسي.",
};

export default function NewsroomHarassmentPage() {
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
            <Link href="/guide/journalists" className="hover:text-[#4B245E] transition-colors">للصحفيات</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">التحرش في بيئة التحرير</span>
          </nav>

          {/* Privacy safety note */}
          <div className="flex gap-3 items-start bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-6">
            <span className="text-[#4F7C68] flex-shrink-0 mt-0.5 font-bold text-[16px]" aria-hidden="true">🔒</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>ملاحظة الخصوصية والسلامة:</strong> هذه الصفحة تتناول موضوعًا حساسًا. إذا كنتِ تتصفحينها من جهاز عمل
              أو شبكة مشتركة، فكّري في استخدام وضع التصفح الخاص أو جهازك الشخصي.
              جميع التواصل مع فريقنا سري تمامًا.
            </p>
          </div>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للصحفيات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            التحرش في بيئة التحرير
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-2">
            غرف الأخبار ليست محصّنة من التحرش — بل إن طبيعة العمل الصحفي وبيئة الضغط المستمر
            تجعل التحرش أكثر تعقيدًا وأصعب إثباتًا. هذا الدليل يساعدكِ على فهم حقوقك وخياراتك.
          </p>
          <p className="text-[13px] text-[#6B5D6E] mb-8">وقت القراءة: ٩ دقائق</p>

          {/* Legal disclaimer */}
          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-8">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هذا الدليل للمعلومات العامة فقط وليس استشارة قانونية رسمية.
              إذا واجهتِ موقفًا قانونيًا محددًا،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">
                اطلبي استشارة من فريقنا القانوني
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">أشكال التحرش الخاصة ببيئة التحرير</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                التحرش في غرفة الأخبار يأخذ أشكالًا قد لا تبدو واضحة دائمًا بسبب ديناميكيات السلطة والضغط المهني:
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">التحرش التحريري</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      تعليقات ذات طابع جنسي على العمل، إقصاء الصحفيات من التغطيات المهمة بسبب الجنس،
                      تقليل قيمة عملهن علنًا أمام الفريق، تحميلهن مهام لا علاقة لها بالوصف الوظيفي.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">التحرش من المصادر</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      تحرش المصادر أثناء المقابلات أو التغطية الميدانية — سواء جسديًا أو لفظيًا أو رقميًا.
                      المؤسسة الإعلامية ملزمة بحمايتك وعدم الضغط عليكِ للصمت حفاظًا على العلاقة مع المصدر.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">التحرش الرقمي المرتبط بالعمل</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      رسائل غير لائقة عبر قنوات العمل، مجموعات واتساب المهنية، أو البريد الإلكتروني.
                      هذا تحرش في مكان العمل حتى لو حدث خارج ساعاته.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">التحرش من الزملاء في الميدان</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      التحرش أثناء التغطيات المشتركة أو الرحلات الميدانية — بيئة منعزلة تُصعّب الإبلاغ لكنها لا تُلغيه.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">توثيق الحوادث — الخطوة الأولى والأهم</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                التوثيق الجيد هو الفارق بين شكوى تُسمع وأخرى تُحفظ. ابدئي فور حدوث أي حادثة.
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">سجّلي بأسرع ما تستطيعين:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>التاريخ والوقت والمكان بدقة.</li>
                  <li>اسم الشخص أو الأشخاص المتورطين ووصفهم الوظيفي.</li>
                  <li>ما حدث بالتفصيل بكلماتك الخاصة — لا تُعدّلي أو تُنقّحي لاحقًا.</li>
                  <li>أسماء أي شهود كانوا حاضرين.</li>
                  <li>أي أدلة مادية: رسائل، صور، مقاطع صوتية (تأكدي من مشروعية التسجيل في سياقك).</li>
                  <li>أي أثر جسدي أو نفسي لاحظتيه.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                احفظي التوثيق في مكان خارج شبكة العمل — بريد شخصي أو ملف مشفّر على هاتفك.
                لا تحذفي أي رسالة أو مراسلة مرتبطة بالحادثة.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">التصعيد الداخلي — الخيارات والترتيب</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                قبل التوجه للجهات الخارجية، لديكِ مسارات داخلية في المؤسسة قد تكون أسرع وأقل كلفة.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <span className="font-semibold text-[#211A22]">إدارة الموارد البشرية:</span>{" "}
                    قدّمي شكوى رسمية مكتوبة. المؤسسة ملزمة بفتح تحقيق داخلي وفق قانون العمل.
                    احتفظي بنسخة من شكواكِ موقّعة باستلامها.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">رئيسة التحرير أو المديرة المباشرة:</span>{" "}
                    إذا كان المتحرش ليس رئيستك المباشرة. وثّقي الاجتماع كتابيًا بعده.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">مجلس الإدارة أو المسؤول القانوني:</span>{" "}
                    إذا أُهملت شكواكِ من الإدارة المباشرة، اصعدي للمستوى التالي.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">نقابة الصحفيين:</span>{" "}
                    النقابة تملك صلاحية التدخل في النزاعات المهنية وإلزام المؤسسة بالتحقيق.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">القانون المصري وحمايته لكِ — المادة ٣٠٦ من قانون ١٥٠/٢٠٢٠</h2>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما تقوله المادة ٣٠٦ مكررًا (أ):</p>
                <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                  أضاف القانون رقم ١٥٠ لسنة ٢٠٢٠ إلى قانون العقوبات مادة تُجرّم التحرش الجنسي صراحةً،
                  وتُعرّفه بأنه كل تصرف أو قول أو إيحاء ذي طابع جنسي ضد شخص دون رضاه.
                  العقوبة تتراوح بين الحبس وغرامة مالية، وتُشدَّد إذا كان المتحرش في موضع سلطة وظيفية.
                </p>
              </div>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما يُشكّل تحرشًا قابلًا للملاحقة القانونية:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>الإيماءات الجنسية أو اللمس غير المرغوب فيه.</li>
                  <li>التعليقات والنكات ذات الطابع الجنسي المتكررة.</li>
                  <li>الرسائل أو الصور ذات المحتوى الجنسي عبر أي وسيلة.</li>
                  <li>الابتزاز الجنسي — ربط المزايا المهنية بالامتثال.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">كيف ومتى تتقدمين بشكوى رسمية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الشكوى الجنائية تختلف عن الشكوى العمالية الداخلية. يمكنك تقديمهما معًا أو الاختيار بينهما.
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">مسار الشكوى الجنائية:</p>
                <ol className="list-decimal list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>التوجه لأقرب مركز شرطة وتقديم محضر بالوقائع.</li>
                  <li>التحقيق يُحال إلى النيابة العامة التي تقرر الاتهام.</li>
                  <li>في حالات التحرش في مكان العمل، يُنصح بالاستعانة بمحامية متخصصة من البداية.</li>
                  <li>يحق لكِ تقديم دعوى مدنية موازية للمطالبة بالتعويض.</li>
                </ol>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الدعم النفسي — أنتِ لستِ وحدك</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                التعامل مع التحرش مُرهق نفسيًا. طلب الدعم النفسي ليس ضعفًا — هو جزء من المعالجة الصحية للحدث.
              </p>
              <ul className="list-none flex flex-col gap-2 text-[14px] text-[#6B5D6E]">
                {[
                  "فريق الدعم النفسي في مؤنث سالم متاح للتحدث بسرية تامة.",
                  "لا يُشترط تقديم شكوى رسمية للحصول على الدعم النفسي.",
                  "إذا شعرتِ بالخطر الفوري، تواصلي مع شخص تثقين به أولًا.",
                  "تحدثي مع صديقة أو زميلة موثوقة — العزل يُصعّب التعافي.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#4F7C68] font-bold flex-shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Legal disclaimer bottom */}
          <div className="mt-10 flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>تنبيه قانوني مهم:</strong> المعلومات الواردة هنا توعوية عامة ولا تُغني عن الاستشارة القانونية المتخصصة.
              كل حالة تختلف في تفاصيلها. للدعم القانوني الشخصي،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">تواصلي مع فريقنا</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل مررتِ بتجربة تحرش في العمل؟ نحن هنا.
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
                احكي شهادتك بسرية <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link
              href="/guide/journalists"
              className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors"
            >
              ← العودة إلى دليل الصحفيات
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
