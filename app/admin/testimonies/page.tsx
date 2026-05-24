import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import Link from "next/link";

const STATUS_LABELS: Record<string, string> = {
  new: "جديدة",
  "under-review": "قيد المراجعة",
  published: "منشورة",
  rejected: "مرفوضة",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-[rgba(198,107,125,0.12)] text-[#C66B7D]",
  "under-review": "bg-[rgba(217,150,61,0.12)] text-[#D9963D]",
  published: "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]",
  rejected: "bg-[rgba(75,36,94,0.08)] text-[#6B5D6E]",
};

type Testimony = {
  id: string;
  pseudonym: string;
  publication_consent: string;
  violation_types: string[];
  sector: string | null;
  approximate_date: string | null;
  status: string;
  needs_support: boolean;
  is_urgent?: boolean;
  created_at: string;
};

async function getTestimonies(): Promise<Testimony[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("testimonies")
      .select(
        "id, pseudonym, publication_consent, violation_types, sector, approximate_date, status, needs_support, created_at"
      )
      .order("created_at", { ascending: false });
    return (data as Testimony[]) ?? [];
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function TestimoniesListPage() {
  const testimonies = await getTestimonies();

  const byStatus = {
    new: testimonies.filter((t) => t.status === "new"),
    "under-review": testimonies.filter((t) => t.status === "under-review"),
    published: testimonies.filter((t) => t.status === "published"),
    rejected: testimonies.filter((t) => t.status === "rejected"),
  };

  return (
    <div className="p-8">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-1">الشهادات</h1>
      <p className="text-[14px] text-[#6B5D6E] mb-6">
        {testimonies.length} شهادة إجمالًا
      </p>

      {testimonies.length === 0 && (
        <p className="text-[14px] text-[#6B5D6E]">لا توجد شهادات بعد.</p>
      )}

      {(["new", "under-review", "published", "rejected"] as const).map((status) => {
        const group = byStatus[status];
        if (group.length === 0) return null;
        return (
          <section key={status} className="mb-8">
            <h2 className="text-[16px] font-bold text-[#211A22] mb-3 flex items-center gap-2">
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${STATUS_COLORS[status]}`}>
                {STATUS_LABELS[status]}
              </span>
              <span className="text-[#6B5D6E] font-normal text-[14px]">({group.length})</span>
            </h2>
            <div className="flex flex-col gap-2">
              {group.map((t) => (
                <Link
                  key={t.id}
                  href={`/admin/testimonies/${t.id}`}
                  className="bg-white border border-[#DDD3CC] rounded-[12px] px-4 py-3 hover:bg-[#FAF5EF] hover:shadow-sm transition-all flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[14px] font-semibold text-[#211A22]">
                        {t.pseudonym}
                      </span>
                      {t.needs_support && (
                        <span className="text-[10px] bg-[rgba(192,57,43,0.1)] text-red-700 px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                          تحتاج دعم
                        </span>
                      )}
                      {t.publication_consent === "yes" && (
                        <span className="text-[10px] bg-[rgba(79,124,104,0.1)] text-[#4F7C68] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                          موافقة على النشر
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] text-[#6B5D6E]">
                      {t.violation_types?.join(" · ")}
                      {t.sector ? ` — ${t.sector}` : ""}
                    </p>
                  </div>
                  <span className="text-[12px] text-[#6B5D6E] flex-shrink-0 mt-0.5">
                    {formatDate(t.created_at)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
