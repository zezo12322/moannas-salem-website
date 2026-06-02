import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "الشهادات — مؤنث سالم",
  description: "أصوات حقيقية من نساء شاركن تجاربهن — منشورة بموافقتهن الصريحة ومجهولة الهوية تمامًا.",
  robots: { index: false }, // privacy default per sitemap doc
};

type PublicTestimony = {
  id: string;
  published_quote: string;
  published_role: string | null;
  approximate_date: string | null;
  violation_types: string[];
};

async function getPublishedTestimonies(): Promise<PublicTestimony[]> {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("public_testimonies")
      .select("id, published_quote, published_role, approximate_date, violation_types")
      .order("id", { ascending: false })
      .limit(50);
    if (error) return [];
    return (data as PublicTestimony[]) ?? [];
  } catch {
    return [];
  }
}

const violationLabels: Record<string, string> = {
  "harassment": "تحرش",
  "discrimination": "تمييز",
  "unfair-dismissal": "فصل تعسفي",
  "digital-violence": "عنف رقمي",
  "maternity": "انتهاك حقوق أمومة",
  "fair-pay": "تمييز في الأجر",
  "other": "أخرى",
};

export default async function StoriesPage() {
  const testimonies = await getPublishedTestimonies();

  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">الشهادات</span>
      </nav>

      <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
        أصوات لا تُسكَت
      </h1>
      <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-4">
        هذه الشهادات مُنشرة بموافقة صريحة من أصحابها — ومجهولة الهوية تمامًا. لا يظهر
        اسم حقيقي أو اسم مؤسسة في أي منها.
      </p>

      {/* Privacy badge */}
      <div className="flex gap-3 items-center bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-10">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="flex-shrink-0">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p className="text-[13px] text-[#4F7C68]">
          كل شهادة مراجعة يدويًا من الفريق ومعتمدة بموافقة خطية قبل النشر.
        </p>
      </div>

      {testimonies.length === 0 ? (
        /* Empty state */
        <div className="text-center py-16 bg-[#FAF5EF] rounded-[20px]">
          <div className="w-16 h-16 rounded-full bg-[#F0E9E0] flex items-center justify-center mx-auto mb-4" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className="text-[18px] font-bold text-[#211A22] mb-2">
            الشهادات ستُنشر هنا قريبًا
          </h2>
          <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-6 max-w-[400px] mx-auto">
            نراجع الشهادات المُرسَلة بعناية قبل النشر لضمان الخصوصية التامة.
          </p>
          <Link
            href="/support/report"
            className="inline-flex items-center gap-2 bg-[#4B245E] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors"
          >
            شاركي شهادتك <span aria-hidden="true">←</span>
          </Link>
        </div>
      ) : (
        /* Testimonies grid */
        <div className="flex flex-col gap-5">
          {testimonies.map((t) => (
            <blockquote
              key={t.id}
              className="bg-white border border-[#DDD3CC] border-s-4 border-s-[#4B245E] rounded-[16px] p-6"
            >
              <p className="text-[15px] text-[#211A22] leading-[1.9] italic mb-4">
                "{t.published_quote}"
              </p>
              <footer className="flex flex-wrap items-center gap-3">
                {t.published_role && (
                  <span className="text-[13px] font-semibold text-[#6B5D6E]">
                    — {t.published_role}
                  </span>
                )}
                {t.approximate_date && (
                  <span className="text-[12px] text-[#6B5D6E]">{t.approximate_date}</span>
                )}
                {t.violation_types?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1 w-full">
                    {t.violation_types.slice(0, 3).map((v) => (
                      <span
                        key={v}
                        className="text-[11px] text-[#4B245E] bg-[rgba(75,36,94,0.08)] px-2 py-0.5 rounded-full"
                      >
                        {violationLabels[v] ?? v}
                      </span>
                    ))}
                  </div>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      )}

      {/* Share your story */}
      <div className="mt-12 bg-[#F0E9E0] rounded-[16px] p-6 text-center">
        <p className="text-[15px] font-semibold text-[#211A22] mb-2">
          هل لديكِ قصة تريدين مشاركتها؟
        </p>
        <p className="text-[14px] text-[#6B5D6E] mb-5">
          يمكنك توثيق شهادتك بسرية تامة. النشر اختياري دائمًا — وبموافقتك فقط.
        </p>
        <Link
          href="/support/report"
          className="inline-flex items-center gap-2 bg-[#4B245E] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors"
        >
          احكي شهادتك <span aria-hidden="true">←</span>
        </Link>
      </div>

      {/* Privacy note */}
      <p className="text-[12px] text-[#6B5D6E] text-center mt-6">
        لا تظهر بيانات شخصية في هذه الصفحة.{" "}
        <Link href="/support/privacy-faq" className="text-[#4B245E] hover:text-[#3A1A4A] underline">
          اعرفي كيف نحمي خصوصيتك
        </Link>
      </p>
    </div>
  );
}
