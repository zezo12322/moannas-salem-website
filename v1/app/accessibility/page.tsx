import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "إمكانية الوصول — مؤنث سالم",
  description: "بيان إمكانية الوصول لموقع مؤنث سالم — التزامنا بـ WCAG 2.1 AA والتحسينات المستمرة.",
};

export default function AccessibilityPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">إمكانية الوصول</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            إمكانية الوصول
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            نؤمن أن المعلومات والدعم يجب أن يكونا متاحَين للجميع. نسعى إلى أن يكون
            موقعنا قابلًا للوصول وفق معايير{" "}
            <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 المستوى AA.
          </p>

          {/* Commitment */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">التزامنا</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "التوافق مع قارئات الشاشة", detail: "الصفحات مبنية بـ HTML دلالي وسمات ARIA حيثما يلزم." },
                { label: "التنقل بلوحة المفاتيح", detail: "يمكن الوصول إلى جميع الوظائف التفاعلية دون فأرة." },
                { label: "نسبة التباين اللوني", detail: "الألوان الأساسية تستوفي نسبة تباين 4.5:1 على الأقل." },
                { label: "نص بديل للصور", detail: "الصور المعلوماتية تحمل نصًا بديلًا وصفيًا." },
                { label: "حجم النص", detail: "يمكن تكبير النص حتى 200٪ دون فقدان المحتوى أو الوظيفة." },
                { label: "الاتجاه RTL", detail: "الموقع مصمم أساسًا للعربية من اليمين لليسار." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start bg-[#FAF5EF] rounded-[12px] p-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22]">{item.label}</p>
                    <p className="text-[13px] text-[#6B5D6E]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Known limitations */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">القيود المعروفة</h2>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-4">
              على الرغم من جهودنا، لا يزال هناك بعض القيود التي نعمل على تحسينها:
            </p>
            <div className="flex flex-col gap-3">
              {[
                "بعض الرسوم البيانية في المرصد قد تفتقر إلى نص بديل وافٍ — قيد مؤقت يُحسَّن مع إضافة كل مؤشر.",
                "نماذج التواصل لا تتضمن بعد رسائل خطأ مُضمّنة بجانب كل حقل — ستُضاف في الإصدار القادم.",
                "مقاطع الفيديو المستقبلية ستحتاج إلى ترجمات — سيُضاف هذا مع نشر أي محتوى مرئي.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-[#D9963D] mt-0.5 flex-shrink-0 text-[16px]" aria-hidden="true">⚠</span>
                  <p className="text-[14px] text-[#6B5D6E] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical info */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">التقنية المستخدمة</h2>
            <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
              <div className="flex flex-col gap-3 text-[14px]">
                {[
                  { label: "المعيار المستهدف", value: "WCAG 2.1 المستوى AA" },
                  { label: "تاريخ آخر مراجعة", value: "مايو ٢٠٢٦" },
                  { label: "المتصفحات المختبَرة", value: "Chrome، Firefox، Safari (macOS وiOS)" },
                  { label: "قارئات الشاشة المختبَرة", value: "NVDA (Windows)، VoiceOver (iOS)" },
                  { label: "إطار العمل", value: "Next.js + HTML دلالي + سمات ARIA" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-2">
                    <span className="text-[#6B5D6E] min-w-[150px] flex-shrink-0">{row.label}:</span>
                    <span className="text-[#211A22] font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Report issue */}
          <section className="mb-10">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">أبلغينا عن مشكلة</h2>
            <div className="bg-[#F0E9E0] rounded-[16px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-4">
                إذا واجهتِ عقبة في الوصول إلى أي جزء من الموقع، أخبرينا. تساعدنا تقاريرك
                في التحسين المستمر.
              </p>
              <div className="flex flex-col gap-2 text-[14px] mb-4">
                <div className="flex gap-2 items-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:accessibility@muanathsalem.org" className="text-[#4B245E] hover:text-[#3A1A4A] underline">
                    accessibility@muanathsalem.org
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#4B245E] text-[#4B245E] font-semibold text-[13px] px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors w-fit"
              >
                نموذج التواصل <span aria-hidden="true">←</span>
              </Link>
            </div>
          </section>

          {/* Formal statement */}
          <div className="border-t border-[#DDD3CC] pt-8">
            <p className="text-[12px] text-[#6B5D6E] leading-[1.8]">
              هذا البيان صادر عن مؤنث سالم ويسري على موقع{" "}
              <span className="font-medium text-[#211A22]">muanathsalem.org</span>.
              آخر تحديث: مايو ٢٠٢٦.
              إذا لم تحصلي على رد خلال ٥ أيام عمل، تواصلي معنا مجددًا عبر{" "}
              <Link href="/contact" className="text-[#4B245E] hover:text-[#3A1A4A] underline">
                نموذج التواصل
              </Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
