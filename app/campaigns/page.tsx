import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";

export const metadata: Metadata = {
  title: "حملاتنا — مؤنث سالم",
  description: "حملات مؤنث سالم لحقوق المرأة في بيئة العمل — من حقوق الأمومة إلى الأجر العادل إلى أمان الصحفيات.",
};

type Campaign = {
  id: string; title: string; slug: string; status: string;
  summary: string; issue_ref: string | null; accent_color: string;
};

const STATUS_LABELS: Record<string, string> = { active: "جارية", ended: "منتهية", draft: "مسودة" };
const STATUS_COLORS: Record<string, { color: string; bg: string }> = {
  active: { color: "#4F7C68", bg: "rgba(79,124,104,0.12)" },
  ended: { color: "#6B5D6E", bg: "rgba(107,93,110,0.10)" },
  draft: { color: "#D9963D", bg: "rgba(217,150,61,0.12)" },
};

async function getCampaigns(): Promise<Campaign[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("campaigns")
      .select("id, title, slug, status, summary, issue_ref, accent_color")
      .in("status", ["active", "ended"])
      .order("display_order", { ascending: true });
    return (data as Campaign[]) ?? [];
  } catch {
    return [];
  }
}

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">حملاتنا</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حملاتنا
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            نحوّل الشهادات والبيانات إلى حملات مناصرة — في مواجهة أصحاب العمل والمشرّعين
            والرأي العام. كل حملة تبدأ من صوت امرأة لم تصمت.
          </p>

          <div className="flex flex-col gap-5">
            {campaigns.map((c) => {
              const sc = STATUS_COLORS[c.status] ?? STATUS_COLORS.active;
              return (
                <Link
                  key={c.id}
                  href={`/campaigns/${c.slug}`}
                  className="group bg-white border border-[#DDD3CC] rounded-[18px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.06)] hover:shadow-[0_4px_16px_rgba(33,26,34,0.10)] transition-all duration-200 border-s-4"
                  style={{ borderInlineStartColor: c.accent_color }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-[18px] font-bold text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.3]">
                      {c.title}
                    </h2>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ color: sc.color, backgroundColor: sc.bg }}
                    >
                      {STATUS_LABELS[c.status]}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-4">{c.summary}</p>
                  <div className="flex items-center justify-between">
                    {c.issue_ref && (
                      <span className="text-[12px] text-[#6B5D6E]">
                        القضية:{" "}
                        <span className="font-medium text-[#211A22]">{c.issue_ref}</span>
                      </span>
                    )}
                    <span className="text-[13px] text-[#4B245E] font-semibold group-hover:underline flex items-center gap-1 ms-auto">
                      اقرئي التفاصيل <span aria-hidden="true">←</span>
                    </span>
                  </div>
                </Link>
              );
            })}
            {campaigns.length === 0 && (
              <p className="text-[15px] text-[#6B5D6E]">لا توجد حملات نشطة حاليًا.</p>
            )}
          </div>

          {/* Participation */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6 text-center">
            <p className="text-[15px] font-semibold text-[#211A22] mb-2">
              كيف يمكنك المشاركة؟
            </p>
            <p className="text-[14px] text-[#6B5D6E] mb-5">
              شاركي شهادتك، ادعمي عملنا، أو تطوّعي معنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/support/report" className="inline-flex items-center justify-center gap-2 bg-[#4B245E] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors">
                شاركي شهادتك <span aria-hidden="true">←</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#4B245E] text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                تطوّعي معنا <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
