import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "دليل الحقوق — مؤنث سالم",
  description: "دليل عملي وواضح لحقوق الصحفيات والنساء العاملات في مصر. بلغة بشرية، يجيب على سؤال واحد: ماذا أفعل الآن؟",
};

const categories = [
  {
    href: "/guide/journalists",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "للصحفيات",
    body: "حقوق خاصة ببيئة الإعلام والتحرير — التغطية الميدانية، التعاقد، العمل الحر.",
    color: "#4B245E",
    articles: [
      { href: "/guide/journalists/press-rights", label: "حقوق الصحفيات في الميدان" },
    ],
  },
  {
    href: "/guide/working-women",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "للنساء العاملات",
    body: "حقوق تخص بيئة العمل عمومًا — الأجر، الأمومة، التمييز، الفصل التعسفي.",
    color: "#C66B7D",
    articles: [
      { href: "/guide/working-women/maternity-rights", label: "حقوق الأمومة في العمل" },
    ],
  },
  {
    href: "/guide/digital-safety",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "السلامة الرقمية",
    body: "حماية من التحرش والعنف الإلكتروني — حسابات آمنة، ابتزاز، مطاردة رقمية.",
    color: "#4F7C68",
    articles: [
      { href: "/guide/digital-safety/online-harassment", label: "التعامل مع التحرش الإلكتروني" },
    ],
  },
  {
    href: "/guide/templates",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: "نماذج جاهزة",
    body: "وثائق يمكن تنزيلها والاستخدام الفوري — شكاوى، تظلمات، طلبات رسمية.",
    color: "#D9963D",
    articles: [],
    badge: "قريبًا",
  },
];

export default function GuidePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">دليل الحقوق</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            اعرفي حقكِ — دليل عملي وواضح
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            دليل مؤنث سالم للحقوق ليس قاموسًا قانونيًا. هو دليل عملي، بلغة بشرية،
            يجيب على سؤال واحد: <strong className="text-[#211A22]">ماذا أفعل الآن؟</strong>
          </p>

          <h2 className="text-[20px] font-bold text-[#211A22] mb-5">ابحثي أو اختاري موضوعًا</h2>

          <div className="flex flex-col gap-4 mb-10">
            {categories.map((cat) => (
              <div key={cat.href} className="bg-white border border-[#DDD3CC] rounded-[16px] overflow-hidden shadow-[0_1px_3px_rgba(33,26,34,0.08)]">
                <Link
                  href={cat.badge ? "#" : cat.href}
                  className="group flex items-start gap-4 p-5 hover:bg-[#FAF5EF] transition-colors border-s-4"
                  style={{ borderInlineStartColor: cat.color }}
                  aria-disabled={!!cat.badge}
                >
                  <div style={{ color: cat.color }} className="flex-shrink-0 mt-0.5">
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[17px] font-bold text-[#211A22]">{cat.title}</h3>
                      {cat.badge && (
                        <span className="text-[11px] bg-[#DDD3CC] text-[#6B5D6E] px-2 py-0.5 rounded-full font-medium">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-[#6B5D6E]">{cat.body}</p>
                  </div>
                  {!cat.badge && (
                    <span className="text-[#4B245E] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </span>
                  )}
                </Link>

                {/* Direct article links */}
                {cat.articles.length > 0 && (
                  <div className="px-5 pb-4 flex flex-wrap gap-2 border-t border-[#F0E9E0] pt-3">
                    {cat.articles.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="text-[12px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1 rounded-full transition-colors font-medium"
                      >
                        {a.label} ←
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trust note */}
          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هذا الدليل للمعلومات فقط وليس استشارة قانونية رسمية.{" "}
              إذا احتجتِ دعمًا قانونيًا شخصيًا،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
                اطلبي استشارة قانونية من فريقنا
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
