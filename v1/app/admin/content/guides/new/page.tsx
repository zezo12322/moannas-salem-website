import { createGuideArticle } from "@/app/actions/content-mutations";
import Link from "next/link";

export default function NewGuideArticlePage() {
  return (
    <div className="p-8 max-w-[680px]">
      <Link href="/admin/content/guides"
        className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] mb-6 inline-block">
        ← العودة إلى المقالات
      </Link>
      <h1 className="text-[22px] font-bold text-[#211A22] mb-6">إضافة مقال جديد</h1>

      <form action={createGuideArticle} className="flex flex-col gap-5">
        <F label="عنوان المقال *" name="title" required placeholder="حقوق الصحفيات في الميدان" />
        <F label="المسار (slug) *" name="slug" required placeholder="journalists-field-rights"
          hint="أحرف إنجليزية وشرطات — يُستخدم في الرابط /guide/articles/[slug]" dir="ltr" />
        <F label="ملخص قصير" name="summary" textarea rows={2}
          placeholder="وصف مختصر يظهر في قائمة المقالات." />
        <F label="محتوى المقال *" name="body" textarea required rows={14}
          placeholder={"اكتبي المحتوى هنا.\n\nافصلي الفقرات بسطر فارغ.\n\nيمكنك استخدام Markdown:\n# عنوان رئيسي\n## عنوان فرعي\n- بند أول\n- بند ثاني\n**نص عريض**"} />

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">القسم</label>
          <select name="category"
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]">
            <option value="journalists">للصحفيات</option>
            <option value="working-women">للنساء العاملات</option>
            <option value="digital-safety">السلامة الرقمية</option>
            <option value="general">عام</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">الحالة</label>
          <select name="status"
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]">
            <option value="draft">مسودة</option>
            <option value="published">منشور</option>
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit"
            className="bg-[#4B245E] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] hover:bg-[#3A1A4A] transition-colors">
            حفظ المقال
          </button>
          <Link href="/admin/content/guides"
            className="text-[14px] text-[#6B5D6E] px-6 py-2.5 rounded-[10px] hover:bg-[#FAF5EF] transition-colors">
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

function F({ label, name, required, placeholder, hint, textarea, rows, dir }: {
  label: string; name: string; required?: boolean; placeholder?: string;
  hint?: string; textarea?: boolean; rows?: number; dir?: string;
}) {
  const cls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-[#211A22]">{label}</label>
      {hint && <p className="text-[11px] text-[#6B5D6E]">{hint}</p>}
      {textarea
        ? <textarea name={name} required={required} placeholder={placeholder} rows={rows ?? 4} dir={dir} className={`${cls} resize-y`} />
        : <input name={name} type="text" required={required} placeholder={placeholder} dir={dir} className={cls} />}
    </div>
  );
}
