import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الضغط النفسي في العمل والحدود القانونية — مؤنث سالم",
  description: "الفرق بين الضغط المهني الطبيعي والإساءة النفسية في العمل — التوثيق، الحدود القانونية، والدعم المتاح.",
};

export default function WorkplaceStressPage() {
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
            <span className="text-[#211A22]">الضغط النفسي في العمل</span>
          </nav>

          {/* Mental health support note */}
          <div className="flex gap-3 items-start bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              إذا كنتِ في وضع صعب نفسيًا الآن، فريق الدعم النفسي متاح لك بسرية تامة.{" "}
              <Link href="/support/mental-health" className="text-[#4B245E] underline">اطلبي الدعم</Link>.
            </p>
          </div>

          <span className="inline-block bg-[rgba(198,107,125,0.12)] text-[#C66B7D] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للنساء العاملات
          </span>

          <div className="flex flex-wrap gap-2 mb-4">
            {["الإساءة النفسية", "الضغط المهني", "حدود قانونية"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#C66B7D] bg-[rgba(198,107,125,0.1)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">٩ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الضغط النفسي في العمل — متى يصبح انتهاكًا؟
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
            الحد الفاصل بين الضغط المهني الطبيعي والإساءة النفسية ليس دائمًا واضحًا —
            لكنه حد حقيقي وله أثر على صحتك وحقوقك القانونية.
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الفرق بين الضغط المهني والإساءة النفسية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                ليس كل ضغط في العمل انتهاكًا — لكن هناك خط فاصل يعبره السلوك ليصبح إساءة.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[14px] p-4">
                  <p className="text-[13px] font-bold text-[#4F7C68] mb-2">ضغط مهني طبيعي</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-1">
                    <li>ملاحظات نقدية على جودة العمل.</li>
                    <li>مواعيد نهائية ضيقة في فترات الذروة.</li>
                    <li>طلب إعادة العمل أو تعديله.</li>
                    <li>تقييم سلبي في مراجعة الأداء مع تبرير واضح.</li>
                  </ul>
                </div>
                <div className="bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[14px] p-4">
                  <p className="text-[13px] font-bold text-[#C0392B] mb-2">إساءة نفسية في العمل</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-1">
                    <li>إهانة علنية أمام الزملاء بشكل متكرر.</li>
                    <li>أهداف مستحيلة تُحدَّد بقصد الفشل.</li>
                    <li>العزل المتعمد من الاجتماعات والمعلومات.</li>
                    <li>تهديدات مستمرة بالفصل كأسلوب سيطرة.</li>
                    <li>نسب إنجازات موظفة لشخص آخر بشكل ممنهج.</li>
                    <li>النقد الذي يستهدف الشخصية لا العمل.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">التعرّف على الأنماط الممنهجة</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الإساءة النفسية في العمل نادرًا ما تكون حادثة واحدة — إنها نمط متكرر.
                انتبهي إلى:
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <div className="flex flex-col gap-3 text-[14px] text-[#6B5D6E]">
                  {[
                    { label: "الإذلال العلني", detail: "التوبيخ أمام الفريق بطريقة تستهدف كرامتك وليس تصحيح السلوك المهني." },
                    { label: "تعطيل التقدم المهني", detail: "حجب فرص التدريب، العمل على المشاريع المهمة، أو الترقيات بشكل مستمر وغير مبرر." },
                    { label: "العزل والتهميش", detail: "إقصاؤك من مجموعات العمل أو الاجتماعات أو المعلومات التي يحتاجها باقي الفريق." },
                    { label: "تغيير التعليمات المتكرر", detail: "تغيير المتطلبات باستمرار لجعل النجاح مستحيلًا ثم لومك على النتائج." },
                    { label: "الرقابة المفرطة", detail: "مراقبة كل تفصيل صغير وتتبع تحركاتك وأنشطتك بما يتجاوز متطلبات الإدارة." },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-semibold text-[#211A22] mb-0.5">{item.label}</p>
                      <p className="text-[13px]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">توثيق الإساءة النفسية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الإساءة النفسية أصعب إثباتًا من الإساءة الجسدية — لذا التوثيق المنهجي أهم.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">سجّل يوميًا كل حادثة تتضمن:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>التاريخ والوقت والمكان بدقة.</li>
                  <li>ما قيل أو حدث بالتفصيل — بكلماتك الخاصة فور حدوثه.</li>
                  <li>أسماء الشهود إن وُجدوا.</li>
                  <li>الأثر عليكِ — اضطراب النوم، القلق، الإحجام عن الذهاب للعمل.</li>
                  <li>أي رسائل أو بريد إلكتروني ذو صلة — احتفظي بنسخة خارج شبكة العمل.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E] mt-3">
                احتفظي بسجلك في مكان شخصي — بريد خاص أو تطبيق ملاحظات مشفّر.
                لا تتركيه على حاسوب العمل.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الإطار القانوني في مصر</h2>
              <div className="bg-white border border-[#4F7C68] border-s-4 rounded-[14px] p-5 mb-4">
                <p className="text-[14px] font-bold text-[#4F7C68] mb-2">حقوقك باختصار</p>
                <ul className="list-none flex flex-col gap-2 text-[14px] text-[#6B5D6E]">
                  {[
                    "المادة ٤٢ من قانون العمل ١٢/٢٠٠٣: صاحب العمل ملزم بتوفير بيئة عمل آمنة نفسيًا وجسديًا.",
                    "الإساءة النفسية المتكررة قد ترقى إلى «الفصل التعسفي الضمني» إذا اضطرّتك للاستقالة.",
                    "الأثر الصحي الموثّق للإساءة (تقرير طبي) يُقوّي أي دعوى تعويض.",
                    "لجان النزاعات العمالية في وزارة العمل تقبل شكاوى بيئة العمل.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-[#4F7C68] font-bold flex-shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                إذا اضطرّتك الإساءة النفسية المتكررة للاستقالة، قد يكون ذلك «فصلًا تعسفيًا ضمنيًا»
                (Constructive Dismissal) — راجعي{" "}
                <Link href="/guide/working-women/unfair-dismissal" className="text-[#4B245E] underline">
                  دليل الفصل التعسفي
                </Link>{" "}
                لمعرفة حقوقك.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الخطوات العملية — من أين تبدئين؟</h2>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <span className="font-semibold text-[#211A22]">ابدئي بالتوثيق الآن:</span>{" "}
                    حتى لو لم تقرري تقديم شكوى بعد، السجل المفصّل يحمي خياراتك المستقبلية.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">استشيري متخصصة:</span>{" "}
                    تحدثي مع معالجة نفسية أو استشارية لتقييم ما تمرّين به — وللحصول على تقرير موثّق إذا احتجتِ لاحقًا.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">موارد البشرية أو الجهة الأعلى:</span>{" "}
                    قدّمي شكوى رسمية مكتوبة مع وقائع محددة وتواريخ. احتفظي بنسخة موقّعة باستلامها.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">تواصلي مع مؤنث سالم:</span>{" "}
                    فريقنا القانوني والنفسي يمكنه مساعدتك في تقييم وضعك وخياراتك بسرية تامة.
                  </li>
                </ol>
              </div>
            </section>

          </div>

          <div className="mt-10 flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>تنبيه قانوني مهم:</strong> المعلومات هنا توعوية عامة.
              كل حالة تختلف — للدعم القانوني الشخصي،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">تواصلي مع فريقنا</Link>.
            </p>
          </div>

          <div className="mt-8 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تمرّين بضغط نفسي في عملك؟ نحن هنا.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/mental-health"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا نفسيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors"
              >
                استشارة قانونية <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link href="/guide/working-women" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors">
              ← العودة إلى دليل النساء العاملات
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
