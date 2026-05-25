import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";

export const metadata: Metadata = {
  title: "المرصد والتقارير — مؤنث سالم",
  description: "المرصد — توثيق منهجي لانتهاكات بيئة العمل في مصر. تقارير، بيانات ومواقف، ومؤشرات بيئة العمل.",
};

type Stat = { id: string; number_text: string; label: string; source_label: string | null; accent_color: string };
type Statement = { id: string; date_label: string; title: string; summary: string };

async function getData() {
  try {
    const admin = createAdminSupabaseClient();
    const [{ data: stats }, { data: statements }] = await Promise.all([
      admin.from("observatory_stats").select("id, number_text, label, source_label, accent_color").order("display_order"),
      admin.from("observatory_statements").select("id, date_label, title, summary").eq("status", "published").order("created_at", { ascending: false }),
    ]);
    return { stats: (stats as Stat[]) ?? [], statements: (statements as Statement[]) ?? [] };
  } catch {
    return { stats: [], statements: [] };
  }
}

export default async function ObservatoryPage() {
  const { stats, statements } = await getData();
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">المرصد</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            المرصد — لأن ما لا يُقاس لا يتغير
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            نوثّق انتهاكات بيئة العمل بشكل منهجي. نجمع البيانات، نحللها، وننشرها لتصبح
            حججًا في مواجهة أصحاب العمل والمشرّعين والرأي العام.
          </p>

          {/* Privacy note */}
          <div className="flex gap-3 items-center bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="flex-shrink-0">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <p className="text-[13px] text-[#4F7C68]">
              كل البيانات المنشورة في المرصد مجمّعة ومجهولة الهوية. لا تظهر بيانات شخصية في أي تقرير.
            </p>
          </div>

          {/* Indicators */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#211A22] mb-6">مؤشرات بيئة العمل</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((ind) => (
                <div
                  key={ind.id}
                  className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 text-center shadow-[0_1px_3px_rgba(33,26,34,0.06)]"
                >
                  <p className="text-[42px] font-bold leading-none mb-3" style={{ color: ind.accent_color }}>
                    {ind.number_text}
                  </p>
                  <p className="text-[13px] text-[#211A22] leading-[1.7] mb-2">{ind.label}</p>
                  {ind.source_label && <p className="text-[11px] text-[#6B5D6E]">{ind.source_label}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Reports */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[22px] font-bold text-[#211A22]">تقارير</h2>
              <span className="text-[12px] text-[#6B5D6E]">يُحدَّث دوريًا</span>
            </div>
            <div className="flex flex-col gap-4">
              {/* Placeholder — first report coming soon */}
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-[rgba(75,36,94,0.1)] flex items-center justify-center" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[15px] font-bold text-[#211A22]">
                      تقرير: انتهاكات حقوق المرأة في بيئات العمل ٢٠٢٥
                    </h3>
                    <span className="text-[11px] bg-[rgba(217,150,61,0.12)] text-[#D9963D] px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                      قريبًا
                    </span>
                  </div>
                  <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">
                    تقريرنا السنوي الأول — تحليل للشهادات الموثّقة وأبرز الأنماط والتوصيات.
                    يُنشر في الربع الأخير من ٢٠٢٦.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Statements */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[22px] font-bold text-[#211A22]">بيانات ومواقف</h2>
            </div>
            <div className="flex flex-col gap-3">
              {statements.map((s) => (
                <div key={s.id} className="bg-white border border-[#DDD3CC] rounded-[14px] p-5">
                  <p className="text-[12px] text-[#6B5D6E] mb-1.5">{s.date_label}</p>
                  <h3 className="text-[15px] font-semibold text-[#211A22] mb-1.5">{s.title}</h3>
                  <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">{s.summary}</p>
                </div>
              ))}
              {statements.length === 0 && (
                <p className="text-[14px] text-[#6B5D6E]">لا توجد بيانات منشورة بعد.</p>
              )}
            </div>
          </section>

          {/* Contribute data */}
          <div className="bg-[#4B245E] rounded-[20px] p-6 text-center">
            <p className="text-[16px] font-bold text-white mb-2">ساهمي في بناء صورة أوضح</p>
            <p className="text-[13px] text-white/70 mb-5">
              كل شهادة تُضاف إلى تحليلاتنا — مجهولة الهوية — تُقوّي حججنا للتغيير.
            </p>
            <Link
              href="/support/report"
              className="inline-flex items-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors"
            >
              احكي شهادتك <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
