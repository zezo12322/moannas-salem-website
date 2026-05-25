import Link from "next/link";

const sections = [
  {
    href: "/admin/content/campaigns",
    title: "الحملات",
    description: "أضيفي وعدّلي وأوقفي حملات المناصرة.",
    color: "#C66B7D",
  },
  {
    href: "/admin/content/observatory",
    title: "المرصد",
    description: "مؤشرات بيئة العمل والبيانات والمواقف.",
    color: "#4F7C68",
  },
  {
    href: "/admin/content/guides",
    title: "مقالات الدليل",
    description: "أضيفي مقالات جديدة لدليل الحقوق.",
    color: "#4B245E",
  },
  {
    href: "/admin/content/announcements",
    title: "الإعلانات والبيانات",
    description: "مواقف وبيانات صحفية وأخبار للنشر.",
    color: "#D9963D",
  },
];

export default function ContentHubPage() {
  return (
    <div className="p-8 max-w-[700px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-1">إدارة المحتوى</h1>
      <p className="text-[14px] text-[#6B5D6E] mb-8">
        اختاري القسم الذي تريدين تعديله.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 hover:shadow-sm hover:bg-[#FAF5EF] transition-all border-s-4"
            style={{ borderInlineStartColor: s.color }}
          >
            <h2 className="text-[16px] font-bold text-[#211A22] mb-1">{s.title}</h2>
            <p className="text-[13px] text-[#6B5D6E] leading-[1.6]">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
