import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "شروط الاستخدام — مؤنث سالم",
  description: "شروط استخدام موقع مؤنث سالم وإخلاء المسؤولية.",
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">شروط الاستخدام</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-3 leading-[1.3]">
            شروط الاستخدام
          </h1>
          <p className="text-[13px] text-[#6B5D6E] mb-10">
            آخر تحديث: مايو ٢٠٢٦
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">١. من يمكنه استخدام هذا الموقع؟</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                موقع مؤنث سالم مُوجَّه للصحفيات والنساء العاملات في مصر اللواتي يبحثن عن
                دعم أو معلومات، وللمؤسسات والأفراد المهتمين بقضايا المرأة في بيئة العمل.
                الاستخدام مفتوح للجميع بدون تسجيل.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٢. طبيعة الخدمة — إخلاء من المسؤولية القانونية</h2>
              <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] text-[#211A22] leading-[1.7]">
                  <strong className="text-[#D9963D]">مهم:</strong>{" "}
                  المحتوى المنشور على هذا الموقع — بما في ذلك دليل الحقوق — هو{" "}
                  <strong>للمعلومات العامة فقط</strong> وليس استشارة قانونية رسمية.
                  لا تُعدّ المعلومات المقدمة هنا بديلًا عن التشاور مع محامية متخصصة.
                </p>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                الدعم النفسي المقدَّم عبر نماذج الموقع هو دعم أوّلي وتوجيه فقط، وليس
                علاجًا نفسيًا أو تشخيصًا طبيًا. في الحالات الطارئة، يرجى التواصل مع
                متخصص/ة صحة نفسية أو خط طوارئ مناسب.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٣. ليس خط أزمات فوري</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                مؤنث سالم ليست خط أزمات فوريًا. إذا كنتِ في خطر جسدي مباشر،
                تواصلي مع الطوارئ أو جهة أمان محلية. نستجيب لطلبات الدعم في أقرب وقت ممكن
                ضمن ساعات العمل، لكننا لا نضمن استجابة فورية على مدار الساعة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٤. المحتوى والملكية الفكرية</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                جميع المحتويات المنشورة على الموقع — نصوص، تقارير، دليل الحقوق — ملك لمؤنث سالم.
                يُسمح باقتباسها مع الإشارة إلى المصدر. إعادة النشر الكامل أو الاستخدام
                التجاري يستلزم إذنًا مسبقًا.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٥. الاستخدام المقبول</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-2">يُحظر استخدام الموقع لـ:</p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                <li>نشر معلومات مضللة أو مضرّة بالمستخدمات.</li>
                <li>محاولة الوصول لبيانات مستخدمات أخريات.</li>
                <li>أي نشاط مخالف للقانون المصري أو يُلحق أذى بالآخرين.</li>
                <li>محاولات اختراق أو التلاعب بالأنظمة التقنية للموقع.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٦. المحتوى الذي ترسلينه</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                بإرسال شهادة أو طلب دعم، أنتِ توافقين على{" "}
                <Link href="/privacy" className="text-[#4B245E] underline hover:text-[#3A1A4A]">سياسة الخصوصية</Link>.
                لا تُنشر الشهادات دون موافقتك الصريحة. يمكنكِ طلب حذف ما أرسلتِه في أي وقت.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٧. تحديد المسؤولية</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                تقدّم مؤنث سالم خدماتها بحسن نية وبأفضل ما تستطيع. لا تتحمّل المؤسسة
                مسؤولية أي قرارات قانونية أو شخصية تتخذها المستخدمة بناءً على المعلومات
                المنشورة على الموقع دون استشارة متخصصة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٨. التحديثات</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                قد تُحدَّث هذه الشروط أحيانًا. التحديثات الجوهرية تُعلَن على الموقع.
                تاريخ آخر تحديث مذكور أعلاه.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٩. التواصل</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                لأي استفسار عن هذه الشروط،{" "}
                <Link href="/contact" className="text-[#4B245E] underline hover:text-[#3A1A4A]">تواصلي معنا</Link>.
              </p>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center text-[13px] text-[#6B5D6E]">
            <Link href="/privacy" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
              سياسة الخصوصية
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/support/privacy-faq" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
              أسئلة شائعة عن السرية
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
              تواصلي معنا
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
