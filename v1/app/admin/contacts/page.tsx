import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { markContactRead, deleteContactMessage } from "@/app/actions/admin-mutations";

type ContactMessage = {
  id: string;
  name: string;
  topic: string | null;
  message: string;
  contact_info: string | null;
  status: string;
  created_at: string;
};

async function getContacts(): Promise<ContactMessage[]> {
  try {
    const admin = createAdminSupabaseClient();
    const { data } = await admin
      .from("contact_messages")
      .select("id, name, topic, message, contact_info, status, created_at")
      .order("created_at", { ascending: false });
    return (data as ContactMessage[]) ?? [];
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

export default async function ContactsPage() {
  const contacts = await getContacts();

  const newContacts = contacts.filter((c) => c.status === "new");
  const readContacts = contacts.filter((c) => c.status !== "new");

  return (
    <div className="p-8 max-w-[800px]">
      <h1 className="text-[24px] font-bold text-[#211A22] mb-1">رسائل التواصل</h1>
      <p className="text-[14px] text-[#6B5D6E] mb-6">
        {contacts.length} رسالة إجمالًا · {newContacts.length} جديدة
      </p>

      {contacts.length === 0 && (
        <p className="text-[14px] text-[#6B5D6E]">لا توجد رسائل بعد.</p>
      )}

      {newContacts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[16px] font-bold text-[#211A22] mb-3">جديدة</h2>
          <div className="flex flex-col gap-3">
            {newContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white border border-[#C66B7D] rounded-[14px] p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22]">
                      {contact.name}
                    </p>
                    {contact.topic && (
                      <p className="text-[12px] text-[#4B245E]">{contact.topic}</p>
                    )}
                  </div>
                  <span className="text-[12px] text-[#6B5D6E] flex-shrink-0">
                    {formatDate(contact.created_at)}
                  </span>
                </div>
                <p className="text-[13px] text-[#211A22] leading-[1.7] mb-3 whitespace-pre-wrap">
                  {contact.message}
                </p>
                {contact.contact_info && (
                  <p className="text-[12px] text-[#6B5D6E] mb-3">
                    بيانات التواصل: {contact.contact_info}
                  </p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                  <form action={markContactRead}>
                    <input type="hidden" name="id" value={contact.id} />
                    <button
                      type="submit"
                      className="text-[12px] text-[#4B245E] border border-[#4B245E] rounded-[6px] px-3 py-1 hover:bg-[rgba(75,36,94,0.06)] transition-colors"
                    >
                      تحديد كمقروءة
                    </button>
                  </form>
                  <form action={deleteContactMessage}>
                    <input type="hidden" name="id" value={contact.id} />
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

      {readContacts.length > 0 && (
        <section>
          <h2 className="text-[16px] font-bold text-[#211A22] mb-3">مقروءة / مُجابة</h2>
          <div className="flex flex-col gap-2">
            {readContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white border border-[#DDD3CC] rounded-[14px] p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <p className="text-[13px] font-semibold text-[#211A22]">
                      {contact.name}
                    </p>
                    {contact.topic && (
                      <p className="text-[11px] text-[#6B5D6E]">{contact.topic}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] text-[#6B5D6E]">
                      {formatDate(contact.created_at)}
                    </span>
                    <form action={deleteContactMessage}>
                      <input type="hidden" name="id" value={contact.id} />
                      <button
                        type="submit"
                        className="text-[11px] text-red-600 border border-red-200 rounded-[6px] px-2 py-0.5 hover:bg-red-50 transition-colors"
                      >
                        حذف
                      </button>
                    </form>
                  </div>
                </div>
                <p className="text-[13px] text-[#6B5D6E] leading-[1.6] line-clamp-2">
                  {contact.message}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
