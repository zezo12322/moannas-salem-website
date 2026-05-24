import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "حقوق الصحفيات المستقلات (الفريلانس) — دليل الحقوق — مؤنث سالم",
  description: "دليل عملي لحماية الصحفيات المستقلات في مصر — العقود، الفواتير، ملكية المحتوى، وسبل الانتصاف عند عدم الدفع.",
};

export default function FreelanceRightsPage() {
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
            <span className="text-[#211A22]">حقوق الفريلانس</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للصحفيات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حقوق الصحفيات المستقلات (الفريلانس)
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-2">
            العمل الحر في الصحافة يمنحكِ حرية واسعة، لكنه يضعكِ في وضع قانوني أكثر هشاشة.
            معرفة حقوقك في العقود والفواتير وملكية محتواكِ هي درعكِ الأول.
          </p>
          <p className="text-[13px] text-[#6B5D6E] mb-8">وقت القراءة: ٧ دقائق</p>

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
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">عقد الفريلانس مقابل عقد العمل الدائم</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                الصحفية المستقلة لا تُغطّيها قانونيًا أحكام قانون العمل المصري رقم ١٢ لسنة ٢٠٠٣
                بالقدر ذاته الذي تُغطّي فيه الموظفة الدائمة. العلاقة بينك وبين جهة النشر تُنظَّم بالعقد المدني
                أو عقد الخدمة، لا بعقد العمل.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-3">الفرق العملي بين الوضعين:</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex gap-3">
                    <span className="text-[#C66B7D] font-bold flex-shrink-0">✗</span>
                    <p className="text-[14px] text-[#6B5D6E]">لا تأمين اجتماعي تلقائي — مسؤوليتك الاشتراك بنفسك في صندوق التأمينات للعمالة غير المنتظمة.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#C66B7D] font-bold flex-shrink-0">✗</span>
                    <p className="text-[14px] text-[#6B5D6E]">لا مكافأة نهاية خدمة ولا إجازة مدفوعة ما لم تنصّ عليها العقد صراحةً.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#4F7C68] font-bold flex-shrink-0">✓</span>
                    <p className="text-[14px] text-[#6B5D6E]">تحتفظين بملكية عملك الفكري ما لم تتنازلي عنه كتابيًا.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#4F7C68] font-bold flex-shrink-0">✓</span>
                    <p className="text-[14px] text-[#6B5D6E]">تحق لكِ المطالبة بأتعابك أمام المحاكم المدنية إذا أخلّت جهة النشر بالاتفاق.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ما يجب أن يتضمنه كل عقد فريلانس</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                حتى المراسلة الإلكترونية الموثّقة تُعدّ عقدًا في القانون المصري. ومع ذلك، احرصي دائمًا على وثيقة كتابية واضحة تشمل:
              </p>
              <ul className="list-none flex flex-col gap-2 text-[14px] text-[#6B5D6E]">
                {[
                  "وصف المهمة: الموضوع، الطول، الإطار الزمني للتسليم.",
                  "الأتعاب المتفق عليها ومواعيد الدفع (لا تقبلي 'بعد النشر' بلا سقف زمني).",
                  "من يملك حق إعادة النشر ولكم مرة وفي أي منصات.",
                  "ماذا يحدث إذا رُفض الموضوع بعد التسليم — هل تُدفع نسبة من الأتعاب؟",
                  "حق الإسناد: اسمك يظهر على المادة.",
                  "آلية التعديلات — كم مرة وبأي حد.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#4B245E] font-bold flex-shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الفواتير وحق المطالبة بالأتعاب</h2>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما يجب أن تتضمنه فاتورتك:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>اسمك الكامل وبيانات التواصل.</li>
                  <li>اسم جهة النشر والشخص المسؤول.</li>
                  <li>وصف العمل المُنجَز مع تاريخ التسليم.</li>
                  <li>المبلغ المستحق وتاريخ الاستحقاق.</li>
                  <li>رقم الحساب البنكي أو وسيلة الاستلام المفضلة.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                أرسلي الفاتورة فور التسليم ولا تنتظري المطالبة. احتفظي بسجل للمراسلات والفواتير المدفوعة وغير المدفوعة.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ملكية القصة والمحتوى الصحفي</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                وفق قانون حماية حقوق الملكية الفكرية المصري رقم ٨٢ لسنة ٢٠٠٢،
                المؤلِّفة تمتلك حق الملكية الأدبية على عملها بصورة تلقائية.
                جهة النشر لا تملك إلا ما منحته إياها العقد صراحةً.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-3">تنبيه: احذري هذه الصياغات في العقود</p>
                <div className="flex flex-col gap-2">
                  {[
                    { flag: "\"نقل كامل حقوق الملكية\"", explain: "تعني أنك لن تستطيعي إعادة نشر عملك في أي مكان آخر." },
                    { flag: "\"المادة المنتجة ملك حصري للمؤسسة\"", explain: "بند تعسفي في غياب مقابل عادل." },
                    { flag: "\"تتنازل المؤلِّفة عن جميع حقوقها\"", explain: "تنازل مطلق — تجنبيه أو قيّديه بمنصة واحدة ومدة زمنية محددة." },
                  ].map((item) => (
                    <div key={item.flag} className="flex gap-2 items-start">
                      <span className="text-[#C66B7D] flex-shrink-0 mt-0.5 font-bold">!</span>
                      <p className="text-[14px] text-[#6B5D6E]">
                        <span className="font-semibold text-[#211A22]">{item.flag}</span> — {item.explain}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إذا لم تتلقي أتعابك — ماذا تفعلين؟</h2>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">الخطوات بالترتيب:</p>
                <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>أرسلي تذكيرًا رسميًا مكتوبًا (بريد إلكتروني أو رسالة موثّقة) بتاريخ محدد للدفع.</li>
                  <li>إذا لم يستجب الطرف الآخر خلال أسبوع، أرسلي إنذارًا رسميًا عبر محامية.</li>
                  <li>تقديم شكوى لنقابة الصحفيين إذا كانت جهة النشر عضوًا فيها.</li>
                  <li>رفع دعوى مدنية أمام المحكمة الابتدائية للمطالبة بالأتعاب والتعويض.</li>
                </ol>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                احتفظي بكل المراسلات والوثائق. المراسلات الإلكترونية مقبولة كدليل في المحاكم المصرية.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">العمل بدون تأمين اجتماعي — كيف تحمين نفسك</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الصحفيات المستقلات لسن ملزَمات بتأمين اجتماعي من جهة النشر، لكن يحق لهن الاشتراك بأنفسهن.
              </p>
              <ul className="list-none flex flex-col gap-2 text-[14px] text-[#6B5D6E]">
                {[
                  "التسجيل في صندوق التأمين الاجتماعي للعمالة غير المنتظمة عبر المنافذ الحكومية المختصة.",
                  "الانضمام لنقابة الصحفيين يمنحكِ تغطية تأمينية إضافية وحماية مهنية.",
                  "خصّصي ادخارًا شخصيًا يعادل ١٠–١٥٪ من دخلك لتغطية فترات انقطاع العمل.",
                  "وثّقي دخلك وأنشطتك المهنية لأغراض ضريبية ومهنية.",
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
              هل تحتاجين دعمًا في موضوع عقد أو أتعاب غير مدفوعة؟
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
