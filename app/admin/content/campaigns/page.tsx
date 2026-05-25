import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { deleteCampaign } from "@/app/actions/content-mutations";
import Link from "next/link";

type Campaign = {
  id: string;
  title: string;
  slug: string;
  status: string;
  summary: string;
  accent_color: string;
  display_order: number;
  created_at: string;
};

const STATUS_LABELS: Record<string, string> = {
  active: "جارية",
  ended: "منتهية",
  draft: "مسودة",
};
const STATUS_COLORS: Record<string, string> = {
  active: "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]",
  ended: "bg-[rgba(75,36,94,0.08)] text-[#6B5D6E]",
  draft: "bg-[rgba(217,150,61,0.12)] text-[#D9963D]",
};

async function getCampaigns(): Promise<Campaign[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("campaigns")
      .select("id, title, slug, status, summary, accent_color, display_order, created_at")
      .order("display_order", { ascending: true });
    return (data as Campaign[]) ?? [];
  } catch {
    return [];
  }
}

export default async function CampaignsAdminPage() {
  const campaigns = await getCampaigns();

  return (
    <div className="p-8 max-w-[800px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px] font-bold text-[#211A22] mb-1">الحملات</h1>
          <p className="text-[13px] text-[#6B5D6E]">{campaigns.length} حملة</p>
        </div>
        <Link
          href="/admin/content/campaigns/new"
          className="bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-[10px] hover:bg-[#3A1A4A] transition-colors"
        >
          + إضافة حملة
        </Link>
      </div>

      {campaigns.length === 0 && (
        <p className="text-[14px] text-[#6B5D6E]">لا توجد حملات بعد.</p>
      )}

      <div className="flex flex-col gap-3">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-[#DDD3CC] rounded-[14px] p-4 border-s-4 flex items-start justify-between gap-4"
            style={{ borderInlineStartColor: c.accent_color }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[15px] font-bold text-[#211A22]">{c.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${STATUS_COLORS[c.status]}`}>
                  {STATUS_LABELS[c.status]}
                </span>
              </div>
              <p className="text-[12px] text-[#6B5D6E] line-clamp-1 mb-1">{c.summary}</p>
              <p className="text-[11px] text-[#6B5D6E] font-mono">/campaigns/{c.slug}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href={`/admin/content/campaigns/${c.id}`}
                className="text-[12px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-3 py-1 hover:bg-[rgba(75,36,94,0.06)] transition-colors"
              >
                تعديل
              </Link>
              <form action={deleteCampaign}>
                <input type="hidden" name="id" value={c.id} />
                <button
                  type="submit"
                  className="text-[12px] text-red-700 border border-red-300 rounded-[6px] px-3 py-1 hover:bg-red-50 transition-colors"
                >
                  حذف
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
