import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { updateCampaign, deleteCampaign } from "@/app/actions/content-mutations";
import { notFound } from "next/navigation";
import Link from "next/link";

type Campaign = {
  id: string; title: string; slug: string; status: string;
  summary: string; body: string; tagline: string | null;
  issue_ref: string | null; accent_color: string; display_order: number;
};

const COLOR_OPTIONS = [
  { label: "بنفسجي", value: "#4B245E" },
  { label: "وردي", value: "#C66B7D" },
  { label: "أخضر", value: "#4F7C68" },
  { label: "ذهبي", value: "#D9963D" },
];

async function getCampaign(id: string): Promise<Campaign | null> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin.from("campaigns").select("*").eq("id", id).single();
    return data as Campaign | null;
  } catch { return null; }
}

export default async function EditCampaignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = await getCampaign(id);
  if (!campaign) notFound();

  return (
    <div className="p-8 max-w-[680px]">
      <Link href="/admin/content/campaigns"
        className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] mb-6 inline-block">
        ← العودة إلى الحملات
      </Link>
      <h1 className="text-[22px] font-bold text-[#211A22] mb-6">تعديل: {campaign.title}</h1>

      <form action={updateCampaign} className="flex flex-col gap-5">
        <input type="hidden" name="id" value={campaign.id} />

        <Field label="عنوان الحملة *" name="title" required defaultValue={campaign.title} />
        <Field label="المسار (slug) *" name="slug" required defaultValue={campaign.slug} dir="ltr"
          hint="تغيير المسار يكسر الروابط القديمة" />
        <Field label="ملخص قصير *" name="summary" textarea required rows={3} defaultValue={campaign.summary} />
        <Field label="الشعار (Tagline)" name="tagline" defaultValue={campaign.tagline ?? ""} />
        <Field label="المحتوى التفصيلي" name="body" textarea rows={10} defaultValue={campaign.body} />
        <Field label="القضية المرتبطة" name="issue_ref" defaultValue={campaign.issue_ref ?? ""} />

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">الحالة</label>
          <select name="status" defaultValue={campaign.status}
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]">
            <option value="draft">مسودة</option>
            <option value="active">جارية</option>
            <option value="ended">منتهية</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#211A22]">لون التمييز</label>
          <select name="accent_color" defaultValue={campaign.accent_color}
            className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]">
            {COLOR_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>{c.label} ({c.value})</option>
            ))}
          </select>
        </div>

        <Field label="ترتيب العرض" name="display_order" type="number"
          defaultValue={String(campaign.display_order)} />

        <div className="flex gap-3 pt-2">
          <button type="submit"
            className="bg-[#4B245E] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] hover:bg-[#3A1A4A] transition-colors">
            حفظ التعديلات
          </button>
          <Link href="/admin/content/campaigns"
            className="text-[14px] text-[#6B5D6E] px-6 py-2.5 rounded-[10px] hover:bg-[#FAF5EF] transition-colors">
            إلغاء
          </Link>
        </div>
      </form>

      <div className="mt-8 border border-red-200 rounded-[12px] p-4">
        <p className="text-[12px] text-[#6B5D6E] mb-3">حذف الحملة نهائيًا.</p>
        <form action={deleteCampaign}>
          <input type="hidden" name="id" value={campaign.id} />
          <button type="submit"
            className="text-[13px] text-red-700 border border-red-300 rounded-[8px] px-3 py-1.5 hover:bg-red-50 transition-colors">
            حذف الحملة
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label, name, required, defaultValue, hint, textarea, rows, type, dir,
}: {
  label: string; name: string; required?: boolean; defaultValue?: string;
  hint?: string; textarea?: boolean; rows?: number; type?: string; dir?: string;
}) {
  const cls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-[#211A22]">{label}</label>
      {hint && <p className="text-[11px] text-[#6B5D6E]">{hint}</p>}
      {textarea ? (
        <textarea name={name} required={required} defaultValue={defaultValue}
          rows={rows ?? 4} dir={dir} className={`${cls} resize-y`} />
      ) : (
        <input name={name} type={type ?? "text"} required={required}
          defaultValue={defaultValue} dir={dir} className={cls} />
      )}
    </div>
  );
}
