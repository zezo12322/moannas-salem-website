import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "حملاتنا — مؤنث سالم",
  description: "حملات مؤنث سالم لحقوق المرأة في بيئة العمل — من حقوق الأمومة إلى الأجر العادل إلى أمان الصحفيات.",
};

const campaigns = [
  {
    href: "/campaigns/not-my-fault-im-a-mother",
    title: "مش ذنبي إني أم",
    status: "جارية",
    statusColor: "#4F7C68",
    statusBg: "rgba(79,124,104,0.12)",
    body: "حملة ضد الفصل والتمييز في العمل بسبب الأمومة — نوثّق الانتهاكات ونطالب بتطبيق قانون الأمومة.",
    issueRef: "الأمومة والعمل",
    color: "#C66B7D",
  },
  {
    href: "/campaigns/aman-qalami",
    title: "أمان قلمي",
    status: "جارية",
    statusColor: "#4F7C68",
    statusBg: "rgba(79,124,104,0.12)",
    body: "لأن قلم الصحفية لا يجب أن يُكلّفها أمانها — حملة لحماية الصحفيات من العنف الرقمي والمضايقات الميدانية.",
    issueRef: "العنف الرقمي",
    color: "#4B245E",
  },
  {
    href: "/campaigns/fair-pay-is-a-right",
    title: "الأجر العادل حق",
    status: "جارية",
    statusColor: "#4F7C68",
    statusBg: "rgba(79,124,104,0.12)",
    body: "حملة لكشف فجوة الأجور والمطالبة بسياسات أجر شفافة وعادلة في بيئات العمل المصرية.",
    issueRef: "الأجر العادل",
    color: "#D9963D",
  },
];

export default function CampaignsPage() {
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
            {campaigns.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-white border border-[#DDD3CC] rounded-[18px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.06)] hover:shadow-[0_4px_16px_rgba(33,26,34,0.10)] transition-all duration-200 border-s-4"
                style={{ borderInlineStartColor: c.color }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-[18px] font-bold text-[#211A22] group-hover:text-[#4B245E] transition-colors leading-[1.3]">
                    {c.title}
                  </h2>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ color: c.statusColor, backgroundColor: c.statusBg }}
                  >
                    {c.status}
                  </span>
                </div>
                <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-4">{c.body}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#6B5D6E]">
                    القضية:{" "}
                    <span className="font-medium text-[#211A22]">{c.issueRef}</span>
                  </span>
                  <span className="text-[13px] text-[#4B245E] font-semibold group-hover:underline flex items-center gap-1">
                    اقرئي التفاصيل <span aria-hidden="true">←</span>
                  </span>
                </div>
              </Link>
            ))}
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
