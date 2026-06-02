import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { updateGuideArticle, deleteGuideArticle } from "@/app/actions/content-mutations";
import { notFound } from "next/navigation";
import Link from "next/link";

type Article = {
  id: string; title: string; slug: string; summary: string;
  body: string; category: string; status: string;
};

async function getArticle(id: string): Promise<Article | null> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin.from("guide_articles").select("*").eq("id", id).single();
    return data as Article | null;
  } catch { return null; }
}

export default async function EditGuideArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) notFound();

  const cls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors";

  return (
    <div className="p-8 max-w-[680px]">
      <Link href="/admin/content/guides"
        className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] mb-6 inline-block">
        ← العودة إلى المقالات
      </Link>
      <h1 className="text-[22px] font-bold text-[#211A22] mb-6">تعديل: {article.title}</h1>

      <form action={updateGuideArticle} className="flex flex-col gap-5">
        <input type="hidden" name="id" value={article.id} />

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">عنوان المقال *</label>
          <input name="title" required defaultValue={article.title} className={cls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">المسار (slug) *</label>
          <p className="text-[11px] text-[#6B5D6E]">تغيير المسار يكسر الروابط القديمة</p>
          <input name="slug" required defaultValue={article.slug} dir="ltr" className={cls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">ملخص قصير</label>
          <textarea name="summary" defaultValue={article.summary} rows={2} className={`${cls} resize-y`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">محتوى المقال *</label>
          <textarea name="body" required defaultValue={article.body} rows={16} className={`${cls} resize-y`} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">القسم</label>
          <select name="category" defaultValue={article.category} className={cls}>
            <option value="journalists">للصحفيات</option>
            <option value="working-women">للنساء العاملات</option>
            <option value="digital-safety">السلامة الرقمية</option>
            <option value="general">عام</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">الحالة</label>
          <select name="status" defaultValue={article.status} className={cls}>
            <option value="draft">مسودة</option>
            <option value="published">منشور</option>
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit"
            className="bg-[#4B245E] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] hover:bg-[#3A1A4A] transition-colors">
            حفظ التعديلات
          </button>
          <Link href="/admin/content/guides"
            className="text-[14px] text-[#6B5D6E] px-6 py-2.5 rounded-[10px] hover:bg-[#FAF5EF] transition-colors">
            إلغاء
          </Link>
        </div>
      </form>

      <div className="mt-8 border border-red-200 rounded-[12px] p-4">
        <p className="text-[12px] text-[#6B5D6E] mb-3">حذف المقال نهائيًا.</p>
        <form action={deleteGuideArticle}>
          <input type="hidden" name="id" value={article.id} />
          <button type="submit"
            className="text-[13px] text-red-700 border border-red-300 rounded-[8px] px-3 py-1.5 hover:bg-red-50 transition-colors">
            حذف المقال
          </button>
        </form>
      </div>
    </div>
  );
}
