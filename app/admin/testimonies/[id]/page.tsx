import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import {
  updateTestimonyStatus,
  publishTestimony,
  deleteTestimony,
} from "@/app/actions/admin-mutations";
import Link from "next/link";

type Testimony = {
  id: string;
  pseudonym: string;
  publication_consent: string;
  violation_types: string[];
  sector: string | null;
  approximate_date: string | null;
  testimony_text: string;
  needs_support: boolean;
  contact_method: string | null;
  contact_value: string | null;
  status: string;
  published_quote: string | null;
  published_role: string | null;
  created_at: string;
};

async function getTestimony(id: string): Promise<Testimony | null> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("testimonies")
      .select("*")
      .eq("id", id)
      .single();
    return data as Testimony | null;
  } catch {
    return null;
  }
}

const STATUS_LABELS: Record<string, string> = {
  new: "جديدة",
  "under-review": "قيد المراجعة",
  published: "منشورة",
  rejected: "مرفوضة",
};

const CONSENT_LABELS: Record<string, string> = {
  yes: "موافقة على النشر",
  no: "رافضة للنشر",
  pending: "لم تُحدَّد بعد",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "bg-[rgba(198,107,125,0.12)] text-[#C66B7D]",
    "under-review": "bg-[rgba(217,150,61,0.12)] text-[#D9963D]",
    published: "bg-[rgba(79,124,104,0.12)] text-[#4F7C68]",
    rejected: "bg-[rgba(75,36,94,0.08)] text-[#6B5D6E]",
  };
  return (
    <span className={`text-[12px] px-2.5 py-1 rounded-full font-semibold ${colors[status] ?? ""}`}>
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}

export default async function TestimonyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimony = await getTestimony(id);
  if (!testimony) notFound();

  return (
    <div className="p-8 max-w-[760px]">
      {/* Back */}
      <Link
        href="/admin/testimonies"
        className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] mb-6 inline-block"
      >
        ← العودة إلى الشهادات
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-[#211A22] mb-1">
            {testimony.pseudonym}
          </h1>
          <p className="text-[13px] text-[#6B5D6E]">
            {formatDate(testimony.created_at)}
          </p>
        </div>
        <StatusBadge status={testimony.status} />
      </div>

      {/* Meta */}
      <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] text-[#6B5D6E] mb-0.5">الموافقة على النشر</p>
          <p className="text-[14px] text-[#211A22] font-semibold">
            {CONSENT_LABELS[testimony.publication_consent] ?? testimony.publication_consent}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-[#6B5D6E] mb-0.5">تحتاج دعم</p>
          <p className="text-[14px] text-[#211A22] font-semibold">
            {testimony.needs_support ? "نعم" : "لا"}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-[#6B5D6E] mb-0.5">أنواع الانتهاك</p>
          <p className="text-[14px] text-[#211A22]">
            {testimony.violation_types?.join("، ") || "—"}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-[#6B5D6E] mb-0.5">القطاع</p>
          <p className="text-[14px] text-[#211A22]">{testimony.sector || "—"}</p>
        </div>
        <div>
          <p className="text-[11px] text-[#6B5D6E] mb-0.5">التاريخ التقريبي</p>
          <p className="text-[14px] text-[#211A22]">
            {testimony.approximate_date || "—"}
          </p>
        </div>
        {testimony.contact_method && (
          <div>
            <p className="text-[11px] text-[#6B5D6E] mb-0.5">وسيلة التواصل</p>
            <p className="text-[14px] text-[#211A22]">
              {testimony.contact_method}
              {testimony.contact_value ? ` — ${testimony.contact_value}` : ""}
            </p>
          </div>
        )}
      </div>

      {/* Full text */}
      <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-5">
        <p className="text-[12px] text-[#6B5D6E] mb-3 font-semibold">نص الشهادة</p>
        <p className="text-[14px] text-[#211A22] leading-[1.9] whitespace-pre-wrap">
          {testimony.testimony_text}
        </p>
      </div>

      {/* Status actions */}
      {testimony.status !== "published" && (
        <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-5">
          <p className="text-[13px] font-semibold text-[#211A22] mb-3">تغيير الحالة</p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["new", "إعادة إلى جديدة"],
                ["under-review", "قيد المراجعة"],
                ["rejected", "رفض"],
              ] as const
            ).map(([status, label]) => (
              <form key={status} action={updateTestimonyStatus}>
                <input type="hidden" name="id" value={testimony.id} />
                <input type="hidden" name="status" value={status} />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-[8px] text-[13px] border border-[#DDD3CC] text-[#211A22] hover:bg-[#FAF5EF] transition-colors"
                >
                  {label}
                </button>
              </form>
            ))}
          </div>
        </div>
      )}

      {/* Publish form — only if consent is yes */}
      {testimony.publication_consent === "yes" &&
        testimony.status !== "published" && (
          <div className="bg-[rgba(79,124,104,0.06)] border border-[#4F7C68] rounded-[16px] p-5 mb-5">
            <p className="text-[13px] font-semibold text-[#4F7C68] mb-4">
              نشر اقتباس — يدوي وإلزامي
            </p>
            <form action={publishTestimony} className="flex flex-col gap-3">
              <input type="hidden" name="id" value={testimony.id} />
              <div className="flex flex-col gap-1">
                <label
                  className="text-[12px] font-semibold text-[#211A22]"
                  htmlFor="published_quote"
                >
                  الاقتباس المُنشر (من الشهادة أو معدَّل)
                </label>
                <textarea
                  id="published_quote"
                  name="published_quote"
                  rows={4}
                  required
                  defaultValue={testimony.published_quote ?? ""}
                  className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] resize-y"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-[12px] font-semibold text-[#211A22]"
                  htmlFor="published_role"
                >
                  الدور أو الوصف (يُعرض مع الاقتباس)
                </label>
                <input
                  id="published_role"
                  name="published_role"
                  type="text"
                  placeholder="مثال: موظفة في قطاع التعليم"
                  defaultValue={testimony.published_role ?? ""}
                  className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E]"
                />
              </div>
              <button
                type="submit"
                className="self-start bg-[#4F7C68] text-white text-[13px] font-semibold px-4 py-2 rounded-[8px] hover:bg-[#3d6354] transition-colors"
              >
                نشر الشهادة
              </button>
            </form>
          </div>
        )}

      {/* Published state */}
      {testimony.status === "published" && (
        <div className="bg-[rgba(79,124,104,0.06)] border border-[#4F7C68] rounded-[12px] p-4 mb-5">
          <p className="text-[12px] font-semibold text-[#4F7C68] mb-2">مُنشورة</p>
          <p className="text-[14px] text-[#211A22] italic leading-[1.8]">
            &ldquo;{testimony.published_quote}&rdquo;
          </p>
          {testimony.published_role && (
            <p className="text-[12px] text-[#6B5D6E] mt-1">{testimony.published_role}</p>
          )}
        </div>
      )}

      {/* Delete */}
      <div className="border border-red-200 rounded-[12px] p-4">
        <p className="text-[12px] text-[#6B5D6E] mb-3">حذف الشهادة نهائيًا من قاعدة البيانات.</p>
        <form action={deleteTestimony}>
          <input type="hidden" name="id" value={testimony.id} />
          <button
            type="submit"
            className="text-[13px] text-red-700 border border-red-300 rounded-[8px] px-3 py-1.5 hover:bg-red-50 transition-colors"
          >
            حذف الشهادة
          </button>
        </form>
      </div>
    </div>
  );
}
