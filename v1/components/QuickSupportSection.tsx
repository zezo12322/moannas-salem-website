import Link from "next/link";

const supportCards = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "دعم نفسي",
    body: "استمعي لما تشعرين به مع متخصصة في الدعم النفسي.",
    cta: "اطلبي دعمًا نفسيًا",
    href: "/support/mental-health",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <path d="M4 4l4 4" />
      </svg>
    ),
    title: "دعم قانوني",
    body: "فهمي حقوقك القانونية وما يمكنك فعله في وضعك.",
    cta: "اطلبي استشارة قانونية",
    href: "/support/legal",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "سلامة رقمية",
    body: "احمي نفسك من التحرش الإلكتروني والتهديدات الرقمية.",
    cta: "اقرئي دليل السلامة",
    href: "/guide/digital-safety",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "مشاركة شهادة",
    body: "شهادتك قد تصنع تغييرًا. احكي بأمان وبالطريقة التي تختارينها.",
    cta: "احكي شهادتك",
    href: "/support/report",
  },
];

export default function QuickSupportSection() {
  return (
    <section
      className="bg-[#F0E9E0] py-16 md:py-20"
      aria-labelledby="quick-support-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section title */}
        <h2
          id="quick-support-heading"
          className="text-[28px] md:text-[32px] font-bold text-[#4B245E] mb-10 text-center"
        >
          أنا محتاجة…
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {supportCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block bg-[#FAF5EF] border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.06)] transition-all duration-[250ms] border-s-4 border-s-[#C66B7D]"
            >
              <div className="text-[#4B245E] mb-4">{card.icon}</div>
              <h3 className="text-[18px] font-bold text-[#211A22] mb-2">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-4">
                {card.body}
              </p>
              <span className="inline-flex items-center gap-1 text-[#4B245E] text-[14px] font-semibold group-hover:underline">
                {card.cta}
                <span aria-hidden="true">←</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Volunteer card — wider */}
        <div className="sm:col-span-2 lg:col-span-4">
          <Link
            href="/get-involved"
            className="group flex items-center gap-4 bg-[#FAF5EF] border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.06)] transition-all duration-[250ms] border-s-4 border-s-[#4F7C68]"
          >
            <div className="text-[#4F7C68] flex-shrink-0">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-bold text-[#211A22] mb-1">
                تطوع أو تعاون
              </h3>
              <p className="text-[14px] text-[#6B5D6E]">
                انضمي إلينا كمتطوعة أو شريكة مؤسسية.
              </p>
            </div>
            <span
              className="text-[#4B245E] text-[14px] font-semibold group-hover:underline hidden sm:inline-flex items-center gap-1"
              aria-hidden="true"
            >
              تعرفي على طرق المشاركة ←
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
