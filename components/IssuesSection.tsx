import Link from "next/link";

const issues = [
  {
    title: "الأمومة والعمل",
    body: "الفصل، الضغط، والعقاب على الأمومة — لسنا وحيدات.",
    href: "/issues/motherhood",
    emoji: "🤱",
  },
  {
    title: "الأجر العادل",
    body: "أجر أقل لنفس العمل — هذا تمييز، وله حل.",
    href: "/issues/fair-pay",
    emoji: "⚖️",
  },
  {
    title: "العنف الرقمي",
    body: "التحرش والتهديد والابتزاز الإلكتروني — لها خطوات عملية.",
    href: "/issues/digital-violence",
    emoji: "🛡️",
  },
  {
    title: "التحرش والعنف في العمل",
    body: "لستِ مسؤولة عما حدث. وهناك خطوات يمكنك اتخاذها.",
    href: "/issues/workplace-violence",
    emoji: "🚫",
  },
  {
    title: "التمييز والترقيات",
    body: "منعوكِ من الترقية؟ غيّروا مسارك المهني قسرًا؟ هذا تمييز.",
    href: "/issues/discrimination",
    emoji: "📈",
  },
];

export default function IssuesSection() {
  return (
    <section
      className="bg-[#FAF5EF] py-16 md:py-20"
      aria-labelledby="issues-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2
            id="issues-heading"
            className="text-[28px] md:text-[32px] font-bold text-[#211A22] mb-2"
          >
            القضايا التي نناضل من أجلها
          </h2>
          <p className="text-[16px] text-[#6B5D6E]">
            لأن الظلم له اسم — ونحن نسمّيه ونواجهه.
          </p>
        </div>

        {/* Issues grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues.map((issue) => (
            <div
              key={issue.href}
              className="bg-white border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.04)] transition-all duration-[250ms] group"
            >
              <div className="text-2xl mb-3" aria-hidden="true">
                {issue.emoji}
              </div>
              <h3 className="text-[18px] font-bold text-[#211A22] mb-2">
                {issue.title}
              </h3>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-4">
                {issue.body}
              </p>
              <Link
                href={issue.href}
                className="inline-flex items-center gap-1 text-[#4B245E] text-[14px] font-semibold hover:underline transition-colors"
              >
                اعرفي حقوقك
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
