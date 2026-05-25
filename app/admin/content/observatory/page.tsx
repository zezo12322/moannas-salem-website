import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import {
  createStat, deleteStat,
  createStatement, deleteStatement, toggleStatementStatus,
} from "@/app/actions/content-mutations";

type Stat = { id: string; number_text: string; label: string; source_label: string | null; accent_color: string; display_order: number };
type Statement = { id: string; date_label: string; title: string; summary: string; status: string };

const COLOR_OPTIONS = [
  { label: "بنفسجي", value: "#4B245E" },
  { label: "وردي", value: "#C66B7D" },
  { label: "أخضر", value: "#4F7C68" },
  { label: "ذهبي", value: "#D9963D" },
];

async function getData() {
  try {
    const admin = createAdminSupabaseClient();
    const [{ data: stats }, { data: statements }] = await Promise.all([
      admin.from("observatory_stats").select("*").order("display_order"),
      admin.from("observatory_statements").select("*").order("created_at", { ascending: false }),
    ]);
    return { stats: (stats as Stat[]) ?? [], statements: (statements as Statement[]) ?? [] };
  } catch {
    return { stats: [], statements: [] };
  }
}

export default async function ObservatoryAdminPage() {
  const { stats, statements } = await getData();

  return (
    <div className="p-8 max-w-[800px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-8">المرصد</h1>

      {/* ── Stats ── */}
      <section className="mb-10">
        <h2 className="text-[18px] font-bold text-[#211A22] mb-4">مؤشرات بيئة العمل</h2>

        <div className="flex flex-col gap-2 mb-6">
          {stats.map((s) => (
            <div key={s.id} className="bg-white border border-[#DDD3CC] rounded-[12px] px-4 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[20px] font-bold" style={{ color: s.accent_color }}>{s.number_text}</span>
                <div>
                  <p className="text-[13px] text-[#211A22]">{s.label}</p>
                  {s.source_label && <p className="text-[11px] text-[#6B5D6E]">{s.source_label}</p>}
                </div>
              </div>
              <form action={deleteStat}>
                <input type="hidden" name="id" value={s.id} />
                <button type="submit" className="text-[11px] text-red-600 border border-red-200 rounded-[6px] px-2 py-0.5 hover:bg-red-50 transition-colors flex-shrink-0">
                  حذف
                </button>
              </form>
            </div>
          ))}
          {stats.length === 0 && <p className="text-[13px] text-[#6B5D6E]">لا توجد مؤشرات.</p>}
        </div>

        <details className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-4">
          <summary className="text-[13px] font-semibold text-[#4B245E] cursor-pointer">+ إضافة مؤشر</summary>
          <form action={createStat} className="flex flex-col gap-3 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <input name="number_text" required placeholder="٣٠٪" className={inputCls} />
              <input name="display_order" type="number" placeholder="ترتيب" defaultValue="0" className={inputCls} />
            </div>
            <input name="label" required placeholder="فجوة الأجور بين الجنسين..." className={inputCls} />
            <input name="source_label" placeholder="المصدر — تقديرات أولية، ٢٠٢٥" className={inputCls} />
            <select name="accent_color" className={inputCls}>
              {COLOR_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
            <button type="submit" className="self-start bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-[8px] hover:bg-[#3A1A4A] transition-colors">
              إضافة
            </button>
          </form>
        </details>
      </section>

      {/* ── Statements ── */}
      <section>
        <h2 className="text-[18px] font-bold text-[#211A22] mb-4">بيانات ومواقف</h2>

        <div className="flex flex-col gap-2 mb-6">
          {statements.map((s) => (
            <div key={s.id} className="bg-white border border-[#DDD3CC] rounded-[12px] p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-[11px] text-[#6B5D6E] mb-0.5">{s.date_label}</p>
                  <p className="text-[14px] font-semibold text-[#211A22]">{s.title}</p>
                  <p className="text-[12px] text-[#6B5D6E] mt-0.5 line-clamp-2">{s.summary}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                  s.status === "published" ? "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]" : "bg-[rgba(217,150,61,0.12)] text-[#D9963D]"
                }`}>
                  {s.status === "published" ? "منشور" : "مسودة"}
                </span>
              </div>
              <div className="flex gap-2">
                <form action={toggleStatementStatus}>
                  <input type="hidden" name="id" value={s.id} />
                  <input type="hidden" name="status" value={s.status === "published" ? "draft" : "published"} />
                  <button type="submit" className="text-[11px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-2 py-0.5 hover:bg-[rgba(75,36,94,0.06)] transition-colors">
                    {s.status === "published" ? "إخفاء" : "نشر"}
                  </button>
                </form>
                <form action={deleteStatement}>
                  <input type="hidden" name="id" value={s.id} />
                  <button type="submit" className="text-[11px] text-red-600 border border-red-200 rounded-[6px] px-2 py-0.5 hover:bg-red-50 transition-colors">
                    حذف
                  </button>
                </form>
              </div>
            </div>
          ))}
          {statements.length === 0 && <p className="text-[13px] text-[#6B5D6E]">لا توجد بيانات.</p>}
        </div>

        <details className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-4">
          <summary className="text-[13px] font-semibold text-[#4B245E] cursor-pointer">+ إضافة بيان</summary>
          <form action={createStatement} className="flex flex-col gap-3 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <input name="date_label" required placeholder="مايو ٢٠٢٦" className={inputCls} />
              <select name="status" className={inputCls}>
                <option value="draft">مسودة</option>
                <option value="published">منشور</option>
              </select>
            </div>
            <input name="title" required placeholder="عنوان البيان" className={inputCls} />
            <textarea name="summary" required placeholder="ملخص البيان..." rows={3} className={`${inputCls} resize-y`} />
            <button type="submit" className="self-start bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-[8px] hover:bg-[#3A1A4A] transition-colors">
              إضافة
            </button>
          </form>
        </details>
      </section>
    </div>
  );
}

const inputCls = "border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] w-full";
