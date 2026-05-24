import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "القصة — مؤنث سالم",
  description: "كيف وُلدت مؤنث سالم، ولماذا، وما الذي تسعى إليه. رسالتنا وقيمنا.",
};

const values = [
  {
    icon: "🔒",
    title: "الأمان أولًا",
    body: "لا نجمع معلومات لا نحتاجها، ولا نشارك بيانات بدون موافقة.",
  },
  {
    icon: "👂",
    title: "الاستماع قبل الحكم",
    body: "نسمع بدون توجيه، وندعم بدون إملاء.",
  },
  {
    icon: "📚",
    title: "المعرفة سلاح",
    body: "نحوّل الشهادات إلى تقارير، والتقارير إلى حجج تغيير.",
  },
  {
    icon: "✨",
    title: "الكرامة في كل خطوة",
    body: "من أول كلمة في النموذج إلى آخر كلمة في التقرير.",
  },
  {
    icon: "🌐",
    title: "الشفافية مع الشركاء والجمهور",
    body: "ننشر تقارير عملنا وتمويلنا بشكل دوري.",
  },
];

export default function AboutStoryPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">القصة</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-6 leading-[1.3]">
            من نحن — وكيف بدأنا
          </h1>

          {/* Opening */}
          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            مؤنث سالم مساحة نسوية آمنة وُلدت من حاجة حقيقية: الصحفيات والنساء العاملات
            في مصر يواجهن انتهاكات يومية، بدون سند قانوني واضح، وبدون مكان آمن يسمعهن.
          </p>

          {/* Name explanation */}
          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <h2 className="text-[18px] font-bold text-[#4B245E] mb-3">
              لماذا "مؤنث سالم"؟
            </h2>
            <p className="text-[15px] text-[#211A22] leading-[1.8]">
              الاسم يحمل دلالتين متكاملتين: <strong>"مؤنث"</strong> — نسوي، يتحدث عن النساء
              وإليهن. <strong>"سالم"</strong> — آمن، سليم، غير مؤذى. الاسم بأكمله هو الهدف:
              مساحة نسوية يخرج منها كل من دخلها سالمًا — مسموعًا، مدعومًا، ومُصانًا.
            </p>
          </div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#4B245E]" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <h2 className="text-[16px] font-bold text-[#4B245E]">رسالتنا</h2>
              </div>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                ندافع عن حق كل صحفية وامرأة عاملة في بيئة عمل آمنة وعادلة — من خلال
                الاستماع، التوثيق، الدعم، والمناصرة.
              </p>
            </div>
            <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#4F7C68]" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <h2 className="text-[16px] font-bold text-[#4F7C68]">رؤيتنا</h2>
              </div>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                مصر يكون فيها كل مكان عمل آمنًا للنساء — بسياسات واضحة، وثقافة مؤسسية
                تحترم الإنسانية.
              </p>
            </div>
          </div>

          {/* Values */}
          <h2 className="text-[22px] font-bold text-[#211A22] mb-5">قيمنا</h2>
          <div className="flex flex-col gap-3 mb-10">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 items-start bg-white border border-[#DDD3CC] rounded-[14px] p-4"
              >
                <span className="text-[24px] flex-shrink-0 leading-none mt-0.5" aria-hidden="true">
                  {v.icon}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-[#211A22] mb-0.5">{v.title}</h3>
                  <p className="text-[14px] text-[#6B5D6E] leading-[1.7]">{v.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#4B245E] rounded-[20px] p-6 md:p-8 text-center">
            <p className="text-[16px] font-semibold text-white mb-5">
              أنتِ لستِ وحدك — ومؤنث سالم هنا لك
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-6 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors"
              >
                اطلبي دعمًا آمنًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold text-[14px] px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors"
              >
                اعرفي حقوقك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
