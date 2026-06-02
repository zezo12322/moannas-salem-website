import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { markSupportRead, deleteSupportRequest } from "@/app/actions/admin-mutations";

type SupportRequest = {
  id: string;
  pseudonym: string;
  contact_method: string;
  contact_value: string | null;
  support_types: string[];
  description: string | null;
  is_urgent: boolean;
  preferred_times: string[] | null;
  form_type: string;
  status: string;
  created_at: string;
};

async function getSupportRequests(): Promise<SupportRequest[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("support_requests")
      .select(
        "id, pseudonym, contact_method, contact_value, support_types, description, is_urgent, preferred_times, form_type, status, created_at"
      )
      .order("created_at", { ascending: false });
    return (data as SupportRequest[]) ?? [];
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const FORM_TYPE_LABELS: Record<string, string> = {
  "mental-health": "دعم نفسي",
  legal: "دعم قانوني",
};

export default async function SupportRequestsPage() {
  const requests = await getSupportRequests();

  const newRequests = requests.filter((r) => r.status === "new");
  const readRequests = requests.filter((r) => r.status !== "new");

  return (
    <div className="p-8 max-w-[800px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-1">طلبات الدعم</h1>
      <p className="text-[14px] text-[#6B5D6E] mb-6">
        {requests.length} طلب إجمالًا · {newRequests.length} جديد
      </p>

      {requests.length === 0 && (
        <p className="text-[14px] text-[#6B5D6E]">لا توجد طلبات بعد.</p>
      )}

      {newRequests.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-[#211A22] mb-3">جديدة</h2>
          <div className="flex flex-col gap-3">
            {newRequests.map((req) => (
              <div
                key={req.id}
                className={`bg-white rounded-[14px] p-4 border ${
                  req.is_urgent ? "border-red-400" : "border-[#DDD3CC]"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[14px] font-semibold text-[#211A22]">
                      {req.pseudonym}
                    </p>
                    <span className="text-[11px] bg-[rgba(75,36,94,0.08)] text-[#4B245E] px-2 py-0.5 rounded-full">
                      {FORM_TYPE_LABELS[req.form_type] ?? req.form_type}
                    </span>
                    {req.is_urgent && (
                      <span className="text-[11px] bg-[rgba(192,57,43,0.1)] text-red-700 px-2 py-0.5 rounded-full font-semibold">
                        عاجل
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] text-[#6B5D6E] flex-shrink-0">
                    {formatDate(req.created_at)}
                  </span>
                </div>

                <p className="text-[12px] text-[#6B5D6E] mb-2">
                  أنواع الدعم: {req.support_types?.join("، ") || "—"}
                </p>

                {req.description && (
                  <p className="text-[13px] text-[#211A22] leading-[1.7] mb-2 whitespace-pre-wrap">
                    {req.description}
                  </p>
                )}

                <p className="text-[12px] text-[#6B5D6E] mb-1">
                  التواصل: {req.contact_method}
                  {req.contact_value ? ` — ${req.contact_value}` : ""}
                </p>

                {req.preferred_times && req.preferred_times.length > 0 && (
                  <p className="text-[12px] text-[#6B5D6E] mb-3">
                    الأوقات المفضلة: {req.preferred_times.join("، ")}
                  </p>
                )}

                <div className="flex items-center gap-2 flex-wrap">
                  <form action={markSupportRead}>
                    <input type="hidden" name="id" value={req.id} />
                    <button
                      type="submit"
                      className="text-[12px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-3 py-1 hover:bg-[rgba(75,36,94,0.06)] transition-colors"
                    >
                      تحديد كمقروء
                    </button>
                  </form>
                  <form action={deleteSupportRequest}>
                    <input type="hidden" name="id" value={req.id} />
                    <button
                      type="submit"
                      className="text-[12px] text-red-700 border border-red-300 rounded-[6px] px-3 py-1 hover:bg-red-50 transition-colors"
                    >
                      حذف
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {readRequests.length > 0 && (
        <section>
          <h2 className="text-[16px] font-bold text-[#211A22] mb-3">مقروءة / مُجابة</h2>
          <div className="flex flex-col gap-2">
            {readRequests.map((req) => (
              <div
                key={req.id}
                className="bg-white border border-[#DDD3CC] rounded-[14px] p-4 flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="text-[13px] font-semibold text-[#211A22]">
                      {req.pseudonym}
                    </p>
                    <span className="text-[10px] bg-[rgba(75,36,94,0.06)] text-[#6B5D6E] px-1.5 py-0.5 rounded-full">
                      {FORM_TYPE_LABELS[req.form_type] ?? req.form_type}
                    </span>
                    {req.is_urgent && (
                      <span className="text-[10px] text-red-600 font-medium">عاجل</span>
                    )}
                  </div>
                  <p className="text-[12px] text-[#6B5D6E]">
                    {req.support_types?.join("، ")}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[11px] text-[#6B5D6E]">
                    {formatDate(req.created_at)}
                  </span>
                  <form action={deleteSupportRequest}>
                    <input type="hidden" name="id" value={req.id} />
                    <button
                      type="submit"
                      className="text-[11px] text-red-600 border border-red-200 rounded-[6px] px-2 py-0.5 hover:bg-red-50 transition-colors"
                    >
                      حذف
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
