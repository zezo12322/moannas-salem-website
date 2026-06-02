import type { Metadata } from "next";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type Article = {
  id: string; title: string; slug: string; summary: string;
  body: string; category: string; status: string;
};

const CAT_LABELS: Record<string, string> = {
  journalists: "للصحفيات",
  "working-women": "للنساء العاملات",
  "digital-safety": "السلامة الرقمية",
  general: "عام",
};
const CAT_HREF: Record<string, string> = {
  journalists: "/guide/journalists",
  "working-women": "/guide/working-women",
  "digital-safety": "/guide/digital-safety",
  general: "/guide",
};
const CAT_COLOR: Record<string, string> = {
  journalists: "#4B245E",
  "working-women": "#C66B7D",
  "digital-safety": "#4F7C68",
  general: "#D9963D",
};

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("guide_articles")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();
    return data as Article | null;
  } catch { return null; }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — دليل الحقوق — مؤنث سالم`,
    description: article.summary,
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const color = CAT_COLOR[article.category] ?? "#4B245E";
  const catHref = CAT_HREF[article.category] ?? "/guide";
  const catLabel = CAT_LABELS[article.category] ?? "دليل الحقوق";

  const paragraphs = article.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href={catHref} className="hover:text-[#4B245E] transition-colors">{catLabel}</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">{article.title}</span>
          </nav>

          <span
            className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full mb-4"
            style={{ color, backgroundColor: `${color}18` }}
          >
            {catLabel}
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold mb-4 leading-[1.3]" style={{ color }}>
            {article.title}
          </h1>

          {article.summary && (
            <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">{article.summary}</p>
          )}

          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-8">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هذا الدليل للمعلومات العامة فقط وليس استشارة قانونية رسمية.
              إذا احتجتِ دعمًا،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">
                اطلبي استشارة من فريقنا
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-[15px] text-[#211A22] leading-[1.9]">
            {paragraphs.map((p, i) => {
              if (p.startsWith("# ")) return (
                <h2 key={i} className="text-[22px] font-bold mt-2" style={{ color }}>{p.slice(2)}</h2>
              );
              if (p.startsWith("## ")) return (
                <h3 key={i} className="text-[18px] font-bold mt-1 text-[#211A22]">{p.slice(3)}</h3>
              );
              if (p.startsWith("- ")) {
                const items = p.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
                return (
                  <ul key={i} className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                );
              }
              return <p key={i} className="text-[14px] text-[#6B5D6E]">{p}</p>;
            })}
          </div>

          <div className="mt-10 flex gap-3 items-start bg-[rgba(75,36,94,0.06)] border border-[#4B245E] rounded-[12px] p-4">
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هل تحتاجين مساعدة؟{" "}
              <Link href="/support" className="text-[#4B245E] underline font-medium">
                تواصلي مع فريق الدعم ←
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
