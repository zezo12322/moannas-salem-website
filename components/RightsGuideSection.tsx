import Link from "next/link";

const articles = [
  {
    title: "ماذا تفعلين إذا تعرضتِ للتمييز بسبب الحمل؟",
    category: "للنساء العاملات",
    categoryColor: "#4B245E",
    readTime: "٥ دقائق",
    href: "/guide/working-women/discrimination-pregnancy",
  },
  {
    title: "كيف توثّقين التحرش في مكان العمل؟",
    category: "للنساء العاملات",
    categoryColor: "#4B245E",
    readTime: "٧ دقائق",
    href: "/guide/working-women/document-harassment",
  },
  {
    title: "كيف تحمين نفسك من العنف الرقمي؟",
    category: "السلامة الرقمية",
    categoryColor: "#4F7C68",
    readTime: "٦ دقائق",
    href: "/guide/digital-safety/protect-from-digital-violence",
  },
  {
    title: "ماذا تفعلين إذا رُفض طلب ترقيتك ظلمًا؟",
    category: "للنساء العاملات",
    categoryColor: "#4B245E",
    readTime: "٤ دقائق",
    href: "/guide/working-women/unfair-promotion-rejection",
  },
];

const filterChips = [
  { label: "للصحفيات", href: "/guide/journalists" },
  { label: "للنساء العاملات", href: "/guide/working-women" },
  { label: "السلامة الرقمية", href: "/guide/digital-safety" },
  { label: "نماذج جاهزة", href: "/guide/templates" },
];

export default function RightsGuideSection() {
  return (
    <section
      className="bg-[#FAF5EF] py-16 md:py-20"
      aria-labelledby="guide-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2
              id="guide-heading"
              className="text-[28px] md:text-[32px] font-bold text-[#211A22] mb-2"
            >
              دليل الحقوق — اعرفي حقك
            </h2>
            <p className="text-[16px] text-[#6B5D6E]">
              معلومات واضحة وعملية. لأن المعرفة هي أول خطوة في المواجهة.
            </p>
          </div>
          <Link
            href="/guide"
            className="inline-flex items-center gap-1 text-[#4B245E] text-[15px] font-semibold hover:underline whitespace-nowrap"
          >
            كل المقالات
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <label htmlFor="guide-search" className="sr-only">
            البحث في دليل الحقوق
          </label>
          <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B5D6E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            id="guide-search"
            type="search"
            placeholder='ابحثي عن موضوع… مثال: "تحرش"، "إجازة أمومة"، "فجوة الأجر"'
            className="w-full h-12 bg-white border border-[#DDD3CC] rounded-[12px] pe-12 ps-4 text-[15px] text-[#211A22] placeholder:text-[#6B5D6E] focus:outline-none focus:border-[#4B245E] focus:ring-[3px] focus:ring-[#4B245E]/15 transition-all"
          />
        </div>

        {/* Filter chips */}
        <div
          className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1"
          role="list"
          aria-label="تصفية المقالات"
        >
          {filterChips.map((chip) => (
            <Link
              key={chip.href}
              href={chip.href}
              role="listitem"
              className="flex-shrink-0 inline-flex items-center px-4 py-1.5 rounded-full border border-[#4B245E] text-[#4B245E] text-[14px] font-medium hover:bg-[#4B245E] hover:text-white transition-colors duration-[200ms]"
            >
              {chip.label}
            </Link>
          ))}
        </div>

        {/* Article cards */}
        <div className="flex flex-col gap-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex items-center justify-between bg-white border border-[#DDD3CC] rounded-[12px] p-5 hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.04)] transition-all duration-[250ms]"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                    <span className="text-[12px] text-[#6B5D6E]">
                      {article.readTime} قراءة
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.5]">
                    {article.title}
                  </h3>
                </div>
              </div>
              <span
                className="text-[#4B245E] flex-shrink-0 ms-4 opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
