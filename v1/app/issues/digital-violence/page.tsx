import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "العنف الرقمي — قضايانا — مؤنث سالم",
  description: "التحرش الإلكتروني والابتزاز الرقمي أدوات لإسكات الصحفيات والنساء العاملات. نوثّق ونناضل ضدها.",
};

const whatWeDocument = [
  "التحرش الجنسي والإهانة عبر وسائل التواصل والرسائل الخاصة",
  "الابتزاز الإلكتروني بصور أو معلومات خاصة",
  "الحملات المنسّقة لتشويه سمعة الصحفيات",
  "المطاردة الرقمية (Cyberstalking) وتتبّع التحركات",
  "نشر معلومات شخصية بدون موافقة (Doxxing)",
  "اختراق الحسابات الشخصية والمهنية",
  "التهديد بالعنف الجسدي عبر الإنترنت",
];

export default function DigitalViolencePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/issues" className="hover:text-[#4B245E] transition-colors">قضايانا</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">العنف الرقمي</span>
          </nav>

          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            قضايانا
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            العنف الرقمي سلاح إسكات — ونحن نوثّقه
          </h1>

          <p className="text-[16px] text-[#211A22] leading-[1.9] mb-8">
            العنف الرقمي ليس مجرد كلام على الإنترنت — هو أداة ممنهجة لإسكات الصحفيات
            والناشطات والنساء العاملات. التحرش الإلكتروني، الابتزاز، المطاردة الرقمية —
            كلها تُلحق ضررًا نفسيًا حقيقيًا وتؤثر على مسيرة النساء المهنية.
          </p>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-4">ما نوثّقه</h2>
            <div className="flex flex-col gap-2">
              {whatWeDocument.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border border-[#DDD3CC] rounded-[12px] p-4">
                  <span className="text-[#4F7C68] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />
                    </svg>
                  </span>
                  <p className="text-[14px] text-[#211A22] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[20px] font-bold text-[#211A22] mb-3">حقوقك القانونية</h2>
            <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[14px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-3">
                قانون مكافحة جرائم المعلومات المصري رقم ١٧٥ لسنة ٢٠١٨ يُجرّم التحرش
                الإلكتروني والابتزاز ونشر المواد الخاصة. العقوبات تصل إلى السجن لفترات
                تتراوح بين سنة وخمس سنوات حسب طبيعة الجريمة.
              </p>
              <Link href="/guide/digital-safety/online-harassment" className="inline-flex items-center gap-1.5 text-[#4B245E] text-[13px] font-semibold hover:text-[#3A1A4A] transition-colors">
                دليل التعامل مع التحرش الإلكتروني <span aria-hidden="true">←</span>
              </Link>
            </div>
          </section>

          <div className="bg-[#F0E9E0] rounded-[16px] p-6 mb-8">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">هل تتعرّضين للعنف الرقمي؟</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support/mental-health" className="inline-flex items-center gap-1.5 bg-[#C66B7D] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#a85268] transition-colors">
                دعم نفسي <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/legal" className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors">
                دعم قانوني <span aria-hidden="true">←</span>
              </Link>
              <Link href="/support/report" className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors">
                وثّقي الانتهاك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">قضايا ذات صلة</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/issues/workplace-violence" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">التحرش والعنف في العمل</Link>
              <Link href="/issues/discrimination" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">التمييز والترقيات</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
