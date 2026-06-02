import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import Link from "next/link";

async function getCounts() {
  try {
    const admin = createAdminSupabaseClient();
    const [
      { count: newTestimonies },
      { count: pendingPublish },
      { count: newSupport },
      { count: newContacts },
    ] = await Promise.all([
      admin
        .from("testimonies")
        .select("*", { count: "exact", head: true })
        .eq("status", "new"),
      admin
        .from("testimonies")
        .select("*", { count: "exact", head: true })
        .eq("status", "under-review"),
      admin
        .from("support_requests")
        .select("*", { count: "exact", head: true })
        .eq("status", "new"),
      admin
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("status", "new"),
    ]);
    return {
      newTestimonies: newTestimonies ?? 0,
      pendingPublish: pendingPublish ?? 0,
      newSupport: newSupport ?? 0,
      newContacts: newContacts ?? 0,
    };
  } catch {
    return { newTestimonies: 0, pendingPublish: 0, newSupport: 0, newContacts: 0 };
  }
}

const statCards = [
  {
    label: "شهادات جديدة",
    key: "newTestimonies" as const,
    href: "/admin/testimonies",
    color: "#C66B7D",
    bg: "rgba(198,107,125,0.08)",
  },
  {
    label: "شهادات قيد المراجعة",
    key: "pendingPublish" as const,
    href: "/admin/testimonies",
    color: "#D9963D",
    bg: "rgba(217,150,61,0.08)",
  },
  {
    label: "طلبات دعم جديدة",
    key: "newSupport" as const,
    href: "/admin/support-requests",
    color: "#4B245E",
    bg: "rgba(75,36,94,0.08)",
  },
  {
    label: "رسائل تواصل جديدة",
    key: "newContacts" as const,
    href: "/admin/contacts",
    color: "#4F7C68",
    bg: "rgba(79,124,104,0.08)",
  },
];

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  return (
    <div className="p-8 max-w-[800px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-1">لوحة التحكم</h1>
      <p className="text-[14px] text-[#6B5D6E] mb-8">ملخص الطلبات الواردة</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 hover:shadow-[0_4px_12px_rgba(33,26,34,0.08)] transition-shadow"
          >
            <p className="text-[13px] text-[#6B5D6E] mb-2">{card.label}</p>
            <p
              className="text-[36px] font-bold leading-none"
              style={{ color: card.color }}
            >
              {counts[card.key]}
            </p>
          </Link>
        ))}
      </div>

      <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
        <p className="text-[13px] text-[#211A22] leading-[1.7]">
          <strong>تذكير:</strong> لا تُنشر أي شهادة تلقائيًا.
          المراجعة اليدوية والنشر اليدوي إلزاميان في كل الأحوال.
        </p>
      </div>
    </div>
  );
}
