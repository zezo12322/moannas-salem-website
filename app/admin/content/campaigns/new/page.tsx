import { createCampaign } from "@/app/actions/content-mutations";
import Link from "next/link";

const COLOR_OPTIONS = [
  { label: "بنفسجي", value: "#4B245E" },
  { label: "وردي", value: "#C66B7D" },
  { label: "أخضر", value: "#4F7C68" },
  { label: "ذهبي", value: "#D9963D" },
];

export default function NewCampaignPage() {
  return (
    <div className="p-8 max-w-[680px]">
      <Link
        href="/admin/content/campaigns"
        className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] mb-6 inline-block"
      >
        ← العودة إلى الحملات
      </Link>
      <h1 className="text-[22px] font-bold text-[#211A22] mb-6">إضافة حملة جديدة</h1>

      <form action={createCampaign} className="flex flex-col gap-5">
        <Field label="عنوان الحملة *" name="title" required placeholder="مش ذنبي إني أم" />
        <Field
          label="المسار (slug) *"
          name="slug"
          required
          placeholder="not-my-fault-im-a-mother"
          hint="أحرف إنجليزية وشرطات فقط — يُستخدم في الرابط"
          dir="ltr"
        />
        <Field label="ملخص قصير *" name="summary" textarea required rows={3}
          placeholder="وصف مختصر يظهر في قائمة الحملات." />
        <Field label="الشعار (Tagline)" name="tagline"
          placeholder="الأمومة حق إنساني — وليست جريمة." />
        <Field label="المحتوى التفصيلي" name="body" textarea rows={8}
          placeholder="محتوى صفحة الحملة — افصلي الفقرات بسطر فارغ." />
        <Field label="القضية المرتبطة" name="issue_ref" placeholder="الأمومة والعمل" />

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">الحالة</label>
          <select
            name="status"
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]"
          >
            <option value="draft">مسودة</option>
            <option value="active">جارية</option>
            <option value="ended">منتهية</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">لون التمييز</label>
          <select
            name="accent_color"
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]"
          >
            {COLOR_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>{c.label} ({c.value})</option>
            ))}
          </select>
        </div>

        <Field label="ترتيب العرض" name="display_order" type="number" placeholder="0" />

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-[#4B245E] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] hover:bg-[#3A1A4A] transition-colors"
          >
            حفظ الحملة
          </button>
          <Link
            href="/admin/content/campaigns"
            className="text-[14px] text-[#6B5D6E] px-6 py-2.5 rounded-[10px] hover:bg-[#FAF5EF] transition-colors"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

function Field({
  label, name, required, placeholder, hint, textarea, rows, type, dir,
}: {
  label: string; name: string; required?: boolean; placeholder?: string;
  hint?: string; textarea?: boolean; rows?: number; type?: string; dir?: string;
}) {
  const cls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-[#211A22]">
        {label}
      </label>
      {hint && <p className="text-[11px] text-[#6B5D6E]">{hint}</p>}
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder}
          rows={rows ?? 4} dir={dir}
          className={`${cls} resize-y`} />
      ) : (
        <input name={name} type={type ?? "text"} required={required}
          placeholder={placeholder} dir={dir}
          className={cls} />
      )}
    </div>
  );
}
