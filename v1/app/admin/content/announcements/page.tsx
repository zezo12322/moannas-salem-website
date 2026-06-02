import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { createAnnouncement, deleteAnnouncement, toggleAnnouncementStatus } from "@/app/actions/content-mutations";

type Announcement = { id: string; date_label: string; title: string; summary: string; status: string };

async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("announcements")
      .select("id, date_label, title, summary, status")
      .order("created_at", { ascending: false });
    return (data as Announcement[]) ?? [];
  } catch { return []; }
}

export default async function AnnouncementsAdminPage() {
  const items = await getAnnouncements();

  return (
    <div className="p-8 max-w-[800px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-6">الإعلانات والبيانات</h1>

      <div className="flex flex-col gap-3 mb-8">
        {items.map((a) => (
          <div key={a.id} className="bg-white border border-[#DDD3CC] rounded-[12px] p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="text-[11px] text-[#6B5D6E] mb-0.5">{a.date_label}</p>
                <p className="text-[14px] font-semibold text-[#211A22]">{a.title}</p>
                <p className="text-[12px] text-[#6B5D6E] mt-0.5 line-clamp-2">{a.summary}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                a.status === "published"
                  ? "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]"
                  : "bg-[rgba(217,150,61,0.12)] text-[#D9963D]"
              }`}>
                {a.status === "published" ? "منشور" : "مسودة"}
              </span>
            </div>
            <div className="flex gap-2">
              <form action={toggleAnnouncementStatus}>
                <input type="hidden" name="id" value={a.id} />
                <input type="hidden" name="status" value={a.status === "published" ? "draft" : "published"} />
                <button type="submit"
                  className="text-[11px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-2 py-0.5 hover:bg-[rgba(75,36,94,0.06)] transition-colors">
                  {a.status === "published" ? "إخفاء" : "نشر"}
                </button>
              </form>
              <form action={deleteAnnouncement}>
                <input type="hidden" name="id" value={a.id} />
                <button type="submit"
                  className="text-[11px] text-red-600 border border-red-200 rounded-[6px] px-2 py-0.5 hover:bg-red-50 transition-colors">
                  حذف
                </button>
              </form>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-[13px] text-[#6B5D6E]">لا توجد إعلانات بعد.</p>}
      </div>

      <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[16px] p-5">
        <h2 className="text-[16px] font-bold text-[#211A22] mb-4">إضافة إعلان جديد</h2>
        <form action={createAnnouncement} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input name="date_label" required placeholder="مايو ٢٠٢٦"
              className={inputCls} />
            <select name="status" className={inputCls}>
              <option value="draft">مسودة</option>
              <option value="published">منشور فورًا</option>
            </select>
          </div>
          <input name="title" required placeholder="عنوان الإعلان أو البيان" className={inputCls} />
          <textarea name="summary" required placeholder="ملخص..." rows={3}
            className={`${inputCls} resize-y`} />
          <button type="submit"
            className="self-start bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-[8px] hover:bg-[#3A1A4A] transition-colors">
            إضافة
          </button>
        </form>
      </div>
    </div>
  );
}

const inputCls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] w-full";
