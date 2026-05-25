import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { deleteGuideArticle } from "@/app/actions/content-mutations";
import Link from "next/link";

type Article = {
  id: string; title: string; slug: string; category: string; status: string; created_at: string;
};

const CAT_LABELS: Record<string, string> = {
  journalists: "للصحفيات",
  "working-women": "للنساء العاملات",
  "digital-safety": "السلامة الرقمية",
  general: "عام",
};
const STATUS_COLORS: Record<string, string> = {
  published: "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]",
  draft: "bg-[rgba(217,150,61,0.12)] text-[#D9963D]",
};

async function getArticles(): Promise<Article[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("guide_articles")
      .select("id, title, slug, category, status, created_at")
      .order("created_at", { ascending: false });
    return (data as Article[]) ?? [];
  } catch { return []; }
}

export default async function GuidesAdminPage() {
  const articles = await getArticles();

  return (
    <div className="p-8 max-w-[800px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px] font-bold text-[#211A22] mb-1">مقالات الدليل</h1>
          <p className="text-[13px] text-[#6B5D6E]">{articles.length} مقال</p>
        </div>
        <Link href="/admin/content/guides/new"
          className="bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-[10px] hover:bg-[#3A1A4A] transition-colors">
          + إضافة مقال
        </Link>
      </div>

      {articles.length === 0 && (
        <p className="text-[14px] text-[#6B5D6E]">لا توجد مقالات بعد. المقالات الجديدة تظهر على /guide/articles/[slug]</p>
      )}

      <div className="flex flex-col gap-2">
        {articles.map((a) => (
          <div key={a.id} className="bg-white border border-[#DDD3CC] rounded-[12px] px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[14px] font-semibold text-[#211A22]">{a.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${STATUS_COLORS[a.status]}`}>
                  {a.status === "published" ? "منشور" : "مسودة"}
                </span>
              </div>
              <p className="text-[11px] text-[#6B5D6E]">
                {CAT_LABELS[a.category]} · /guide/articles/{a.slug}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link href={`/admin/content/guides/${a.id}`}
                className="text-[12px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-3 py-1 hover:bg-[rgba(75,36,94,0.06)] transition-colors">
                تعديل
              </Link>
              <form action={deleteGuideArticle}>
                <input type="hidden" name="id" value={a.id} />
                <button type="submit"
                  className="text-[12px] text-red-700 border border-red-300 rounded-[6px] px-3 py-1 hover:bg-red-50 transition-colors">
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
