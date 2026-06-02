import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "مش ذنبي إني أم — حملاتنا — مؤنث سالم",
  description: "حملة ضد التمييز والفصل في العمل بسبب الأمومة. نوثّق الانتهاكات ونطالب بتطبيق حقوق الأمومة.",
};

const voices = [
  {
    quote: "طلبوا مني الاستقالة بعد ما رجعت من إجازة الأمومة بأسبوعين. قالوا 'مش هتقدري تشتغلي بالكفاءة نفسها.' أنا أكثر كفاءة — بس الإدارة مش مستعدة تعترف.",
    role: "صحفية من القاهرة، ٢٠٢٤",
  },
  {
    quote: "لما أخبرت مديري إني حامل، وجهه اتغير. في الاجتماع الجاي استثنوني من مشروع كنت أنا اللي بدأته.",
    role: "محررة في إحدى الصحف المصرية، ٢٠٢٣",
  },
];

export default function NotMyFaultImAMotherPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/campaigns" className="hover:text-[#4B245E] transition-colors">حملاتنا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">مش ذنبي إني أم</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(79,124,104,0.12)] text-[#4F7C68]">جارية</span>
            <span className="text-[13px] text-[#6B5D6E]">حملة · الأمومة والعمل</span>
          </div>

          <h1 className="text-[28px] md:text-[38px] font-bold text-[#4B245E] mb-6 leading-[1.3]">
            مش ذنبي إني أم
          </h1>

          {/* One-liner */}
          <p className="text-[17px] font-semibold text-[#C66B7D] leading-[1.6] mb-8 border-s-4 border-[#C66B7D] ps-4">
            الأمومة حق إنساني — وليست جريمة يُعاقَب عليها في بيئة العمل.
          </p>

          {/* Context */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">لماذا هذه الحملة؟</h2>
            <p className="text-[15px] text-[#6B5D6E] leading-[1.9]">
              رصدنا عشرات الحالات لنساء فُصلن أو تعرّضن للضغط للاستقالة بسبب حملهن أو
              عودتهن من إجازة الأمومة. رغم أن القانون المصري يحظر ذلك صراحةً، لا يزال
              التطبيق ضعيفًا وكثير من النساء لا يعرفن حقوقهن.
            </p>
          </section>

          {/* Problem */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">المشكلة</h2>
            <div className="bg-[#FAF5EF] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                غياب الوعي الحقوقي + غياب سياسات مؤسسية واضحة + ضعف الإنفاذ القانوني =
                نساء تصمتن خوفًا من فقدان عملهن أصلًا. الصمت يُبقي الانتهاك.
              </p>
            </div>
          </section>

          {/* What we did */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">ماذا فعلنا حتى الآن</h2>
            <ul className="flex flex-col gap-3">
              {[
                "جمعنا وحللنا ٤٠+ شهادة موثّقة لانتهاكات حقوق الأمومة",
                "أطلقنا دليل الحقوق الخاص بحقوق الأمومة في العمل",
                "تواصلنا مع جهات حقوقية لدعم الحالات القانونية",
                "نشرنا مقالات توعوية عن حقوق الأمومة وصلت لآلاف النساء",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#4F7C68] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <p className="text-[14px] text-[#211A22]">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Voices */}
          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">أصوات من الواقع</h2>
            <div className="flex flex-col gap-4">
              {voices.map((v, i) => (
                <blockquote key={i} className="bg-white border border-[#DDD3CC] border-s-4 border-s-[#C66B7D] rounded-[14px] p-5">
                  <p className="text-[14px] text-[#211A22] leading-[1.9] italic mb-3">"{v.quote}"</p>
                  <footer className="text-[12px] text-[#6B5D6E] font-medium">{v.role}</footer>
                </blockquote>
              ))}
            </div>
            <p className="text-[12px] text-[#6B5D6E] mt-3">
              جميع الشهادات مجهولة الهوية ومُنشرة بموافقة صريحة.
            </p>
          </section>

          {/* How to participate */}
          <div className="bg-[#4B245E] rounded-[20px] p-6 text-center">
            <p className="text-[16px] font-bold text-white mb-2">شاركي في الحملة</p>
            <p className="text-[13px] text-white/70 mb-5">
              شهادتك — حتى بدون نشر — تُقوّي ملفنا للمناصرة وتساعد في تغيير السياسات.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/support/report" className="inline-flex items-center justify-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors">
                شاركي شهادتك <span aria-hidden="true">←</span>
              </Link>
              <Link href="/guide/working-women/maternity-rights" className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                دليل حقوق الأمومة <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/campaigns" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← كل الحملات</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
