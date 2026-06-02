import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "التعاقد مع المؤسسات الإعلامية — دليل الحقوق — مؤنث سالم",
  description: "ما يجب أن يتضمنه عقد العمل الإعلامي العادل — بنود الملكية الفكرية، الإسناد، الحصرية، وعلامات التحذير قبل التوقيع.",
};

export default function MediaContractsPage() {
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
            <span className="text-[#211A22]">التعاقد مع المؤسسات</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للصحفيات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            التعاقد مع المؤسسات الإعلامية
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-2">
            التوقيع على عقد عمل إعلامي قرار مهني مصيري. افهمي كل بند قبل أن توقّعي —
            لأن ما تتنازلين عنه اليوم قد يكون حقوقك لسنوات.
          </p>
          <p className="text-[13px] text-[#6B5D6E] mb-8">وقت القراءة: ٨ دقائق</p>

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
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ما يجب أن يتضمنه عقد العمل العادل</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                عقد العمل الصحفي في مصر يخضع لقانون العمل رقم ١٢ لسنة ٢٠٠٣ إذا كانت العلاقة تبعية دائمة.
                العقد العادل يجب أن يُحدّد بوضوح:
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <div className="flex flex-col gap-3">
                  {[
                    { title: "المسمى الوظيفي والمهام", desc: "وصف دقيق للدور — ماذا تعملين، لمن تتبعين، وما نطاق مسؤوليتك." },
                    { title: "الراتب والمزايا", desc: "الأساسي، البدلات، العلاوات الدورية، وأي مزايا عينية (تأمين صحي، انتقالات)." },
                    { title: "ساعات العمل", desc: "القانون يُحدّد الحد الأقصى بثماني ساعات يوميًا وثمانية وأربعين أسبوعيًا." },
                    { title: "الإجازات", desc: "السنوية (٢١ يومًا بعد سنة عمل)، المرضية، والطارئة." },
                    { title: "التأمينات الاجتماعية", desc: "التحقق من أن المؤسسة مُشتركة في نظام التأمينات الاجتماعية باسمك." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <span className="text-[#4F7C68] font-bold flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="text-[14px] font-semibold text-[#211A22]">{item.title}</p>
                        <p className="text-[13px] text-[#6B5D6E]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">بنود الملكية الفكرية والإسناد</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                هذا من أكثر البنود التي تُتجاهلها الصحفيات عند التوقيع وأكثرها أثرًا على مسيرتهن.
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">اسأليهم صراحةً عن:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>هل اسمك (Byline) يظهر على كل مادة تكتبينها أم يمكن حذفه؟</li>
                  <li>هل تستطيعين إعادة نشر مواد كتبتِها في مكان آخر بعد فترة معينة؟</li>
                  <li>هل تحق لكِ إدراج المواد في محفظتك المهنية (Portfolio)؟</li>
                  <li>ماذا يحدث لحقوق المواد بعد انتهاء عقد العمل؟</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                حق الإسناد حق أدبي لا يمكن التنازل عنه وفق قانون حقوق الملكية الفكرية المصري رقم ٨٢ لسنة ٢٠٠٢.
                أي بند يسلب منكِ هذا الحق هو بند باطل قانونًا.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">فخ الحصرية وبنود عدم المنافسة</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                بنود الحصرية تمنعكِ من العمل مع جهات أخرى أثناء العقد أو بعده.
                انتبهي لهذه الصياغات الشائعة في عقود الإعلام المصري:
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[14px] font-semibold text-[#C66B7D] mb-1">"يحظر على الموظف العمل لدى أي جهة منافسة خلال مدة العقد وبعدها بـ[مدة]"</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      قد تُقيّدكِ لسنوات. اطلبي تحديد "المنافسة" بوضوح وتقليص المدة لا تتجاوز ستة أشهر بعد الانتهاء.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#C66B7D] mb-1">"لا يحق للموظف الكتابة أو النشر خارج المؤسسة إلا بإذن كتابي مسبق"</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      بند مقيّد يُضيّق مساحة عملك. حاولي تعديله ليقتصر على المنافسين المباشرين فقط.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#C66B7D] mb-1">"جميع أفكار المواد المُنتجة خلال فترة التعاقد ملك المؤسسة"</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      بند شامل قد يُصادر أفكارك حتى خارج وقت العمل. اطلبي تخصيصه للمواد المُنجزة فعلًا لصالح المؤسسة.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">فترات الإخطار وإنهاء العقد</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                قانون العمل المصري يُنظّم إنهاء العقود، لكن العقد قد يُضيف شروطًا أكثر تقييدًا.
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما يجب أن تعرفيه:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>الإخطار المسبق: القانون يُلزم بإخطار شهرين للعقود الدائمة. العقد قد يمدّدها — هذا مقبول إذا كان متبادلًا.</li>
                  <li>مكافأة نهاية الخدمة: شهر راتب عن كل سنة عمل وفق قانون العمل.</li>
                  <li>حالات الفصل التعسفي: إذا أُنهي عقدك بدون سبب مشروع يحق لكِ التعويض أمام المحكمة العمالية.</li>
                  <li>احتفظي بنسخة موقّعة من عقدك في مكان آمن خارج مقر العمل.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">علامات التحذير — متى ترفضين التوقيع</h2>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-3">
                  أوقفي التوقيع وراجعي محامية إذا وجدتِ أيًا مما يلي:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "ضغط لإنهاء التوقيع بسرعة دون إتاحة وقت للمراجعة.",
                    "رفض تزويدك بنسخة من العقد قبل التوقيع.",
                    "بنود مبهمة تمنح المؤسسة صلاحيات مطلقة غير محددة.",
                    "غياب أي ذكر للراتب أو المزايا بشكل صريح.",
                    "بنود تُلغي كل حقوق الملكية الفكرية بلا مقابل إضافي.",
                    "شروط تعديل أحادية تتيح للمؤسسة تغيير بنود العقد دون موافقتك.",
                    "عقد شفهي فقط دون توثيق كتابي.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 items-start">
                      <span className="text-[#C66B7D] font-bold flex-shrink-0 mt-0.5">✗</span>
                      <p className="text-[14px] text-[#6B5D6E]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ماذا تفعلين قبل التوقيع</h2>
              <ul className="list-none flex flex-col gap-2 text-[14px] text-[#6B5D6E]">
                {[
                  "اطلبي نسخة العقد قبل موعد التوقيع بثلاثة أيام على الأقل.",
                  "اقرئيه كاملًا بهدوء — لا تتجاوزي أي بند غير مفهوم.",
                  "اعرضيه على محامية عمل أو صديقة تعرف القانون.",
                  "دوّني الملاحظات والبنود التي تريدين تعديلها — التفاوض حقك.",
                  "إذا رفضوا أي تعديل جوهري دون مبرر، هذا مؤشر على بيئة عمل مشكلة.",
                  "وقّعي فقط على النسخة التي تحمل التعديلات المتفق عليها — وليس نسخة أخرى.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#4B245E] font-bold flex-shrink-0 mt-0.5">—</span>
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
              هل تحتاجين مراجعة عقد أو دعمًا في نزاع عمالي؟
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
