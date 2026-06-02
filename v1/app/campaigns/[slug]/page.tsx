import type { Metadata } from "next";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type Campaign = {
  id: string; title: string; slug: string; status: string;
  summary: string; body: string; tagline: string | null;
  issue_ref: string | null; accent_color: string;
};

const STATUS_LABELS: Record<string, string> = { active: "جارية", ended: "منتهية", draft: "مسودة" };

async function getCampaign(slug: string): Promise<Campaign | null> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin.from("campaigns").select("*").eq("slug", slug).single();
    return data as Campaign | null;
  } catch { return null; }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = await getCampaign(slug);
  if (!campaign) return {};
  return {
    title: `${campaign.title} — حملاتنا — مؤنث سالم`,
    description: campaign.summary,
  };
}

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = await getCampaign(slug);
  if (!campaign) notFound();

  const paragraphs = campaign.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const statusColor =
    campaign.status === "active" ? "#4F7C68" :
    campaign.status === "ended" ? "#6B5D6E" : "#D9963D";
  const statusBg =
    campaign.status === "active" ? "rgba(79,124,104,0.12)" :
    campaign.status === "ended" ? "rgba(107,93,110,0.10)" : "rgba(217,150,61,0.12)";

  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/campaigns" className="hover:text-[#4B245E] transition-colors">حملاتنا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">{campaign.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ color: statusColor, backgroundColor: statusBg }}
            >
              {STATUS_LABELS[campaign.status]}
            </span>
            {campaign.issue_ref && (
              <span className="text-[13px] text-[#6B5D6E]">حملة · {campaign.issue_ref}</span>
            )}
          </div>

          <h1
            className="text-[28px] md:text-[38px] font-bold mb-6 leading-[1.3]"
            style={{ color: campaign.accent_color }}
          >
            {campaign.title}
          </h1>

          {campaign.tagline && (
            <p
              className="text-[17px] font-semibold leading-[1.6] mb-8 border-s-4 ps-4"
              style={{ color: campaign.accent_color, borderColor: campaign.accent_color }}
            >
              {campaign.tagline}
            </p>
          )}

          {paragraphs.length > 0 && (
            <div className="flex flex-col gap-5 text-[15px] text-[#211A22] leading-[1.9] mb-10">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6 text-center">
            <p className="text-[15px] font-semibold text-[#211A22] mb-2">كيف يمكنك المشاركة؟</p>
            <p className="text-[14px] text-[#6B5D6E] mb-5">شاركي شهادتك، ادعمي عملنا، أو تطوّعي معنا.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/support/report"
                className="inline-flex items-center justify-center gap-2 bg-[#4B245E] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors">
                شاركي شهادتك <span aria-hidden="true">←</span>
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#4B245E] text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
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
