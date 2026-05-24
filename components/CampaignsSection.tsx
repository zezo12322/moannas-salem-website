import Link from "next/link";

const campaigns = [
  {
    title: "مش ذنبي إني أم",
    context:
      "في غرف تحرير مصر، فقدت نساء وظائفهن لمجرد أنهن أصبحن أمهات.",
    action: "جمعنا الشهادات، وثّقنا الانتهاكات، وأطلقنا نقاشًا وطنيًا.",
    href: "/campaigns/not-my-fault-im-a-mother",
    featured: true,
    color: "#C66B7D",
  },
  {
    title: "أمان قلمي",
    context: "الصحفيات تحت ضغط مضاعف — مهني وشخصي وأمني.",
    action: "دليل السلامة الرقمية الأول للصحفيات المصريات.",
    href: "/campaigns/aman-qalami",
    featured: false,
    color: "#4F7C68",
  },
  {
    title: "الأجر العادل حق",
    context: "في نفس المؤسسة، نفس العمل، أجر مختلف — بسبب الجنس.",
    action: "وثّقنا الفجوة وطالبنا بسياسات الأجر المتساوي.",
    href: "/campaigns/fair-pay-is-a-right",
    featured: false,
    color: "#4B245E",
  },
];

export default function CampaignsSection() {
  const [featured, ...rest] = campaigns;

  return (
    <section
      className="bg-[#F0E9E0] py-16 md:py-20"
      aria-labelledby="campaigns-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <h2
              id="campaigns-heading"
              className="text-[28px] md:text-[32px] font-bold text-[#211A22] mb-2"
            >
              حملاتنا — قصص تغيير حقيقية
            </h2>
            <p className="text-[16px] text-[#6B5D6E]">
              كل حملة بدأت بشهادة. ولم تنتهِ حتى صارت معرفة مشتركة.
            </p>
          </div>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-1 text-[#4B245E] text-[15px] font-semibold hover:underline whitespace-nowrap"
          >
            كل الحملات
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        {/* Featured campaign */}
        <div className="mb-5">
          <div
            className="relative rounded-[20px] overflow-hidden bg-[#4B245E] text-white p-8 md:p-12 min-h-[280px] flex flex-col justify-end"
            style={{
              background: `linear-gradient(135deg, #4B245E 0%, #3A1A4A 60%, #C66B7D 100%)`,
            }}
          >
            {/* Decorative shape */}
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-block bg-[#C66B7D] text-white text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
                حملة مميزة
              </span>
              <h3 className="text-[24px] md:text-[32px] font-bold mb-3">
                {featured.title}
              </h3>
              <p className="text-[16px] text-white/85 mb-2 max-w-lg">
                {featured.context}
              </p>
              <p className="text-[14px] text-white/70 mb-5">{featured.action}</p>
              <Link
                href={featured.href}
                className="inline-flex items-center gap-2 bg-white text-[#4B245E] text-[15px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors duration-[250ms]"
              >
                اقرئي عن الحملة
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Smaller campaigns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((campaign) => (
            <div
              key={campaign.href}
              className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] hover:bg-[rgba(198,107,125,0.04)] transition-all duration-[250ms] group border-s-4"
              style={{ borderInlineStartColor: campaign.color }}
            >
              <h3 className="text-[18px] font-bold text-[#211A22] mb-2">
                {campaign.title}
              </h3>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-2">
                {campaign.context}
              </p>
              <p className="text-[13px] text-[#6B5D6E] mb-4">{campaign.action}</p>
              <Link
                href={campaign.href}
                className="inline-flex items-center gap-1 text-[#4B245E] text-[14px] font-semibold hover:underline"
              >
                اقرئي عن الحملة
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
