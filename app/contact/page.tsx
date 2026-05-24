import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "تواصلي معنا — مؤنث سالم",
  description: "تواصلي مع فريق مؤنث سالم لأي استفسار عام. للحصول على دعم نفسي أو قانوني، استخدمي صفحة الدعم الآمن.",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">تواصلي معنا</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-3 leading-[1.3]">
            تواصلي معنا
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
            لأي استفسار عام، شراكة، أو تعاون — نسعد بتواصلك. سنرد عليكِ في أقرب وقت ممكن.
          </p>

          {/* Support redirect notice */}
          <div className="flex gap-3 items-start bg-[rgba(75,36,94,0.07)] border border-[rgba(75,36,94,0.3)] rounded-[12px] p-4 mb-8">
            <span className="text-[#4B245E] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong className="text-[#4B245E]">هل تحتاجين دعمًا نفسيًا أو قانونيًا؟</strong>{" "}
              هذه الصفحة للاستفسارات العامة فقط. للدعم الشخصي،{" "}
              <Link href="/support" className="text-[#4B245E] underline hover:text-[#3A1A4A] font-semibold">
                اذهبي إلى صفحة الدعم الآمن
              </Link>
              {" "}— هي أكثر خصوصية وأمانًا.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_280px] gap-8">
            {/* Form */}
            <ContactForm />

            {/* Info sidebar */}
            <aside className="flex flex-col gap-4">
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <h2 className="text-[15px] font-bold text-[#211A22] mb-3">معلومات التواصل</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-1" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <p className="text-[12px] text-[#6B5D6E]">البريد الإلكتروني</p>
                      <p className="text-[13px] text-[#211A22] font-medium">info@moannas-salem.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-1" aria-hidden="true">
                      <path d="M21 2H3v16h5l4 4 4-4h5V2z" />
                    </svg>
                    <div>
                      <p className="text-[12px] text-[#6B5D6E]">وقت الاستجابة</p>
                      <p className="text-[13px] text-[#211A22] font-medium">خلال ٢–٣ أيام عمل</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[14px] p-4">
                <p className="text-[12px] text-[#4F7C68] leading-[1.7]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="inline-block me-1 mb-0.5" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  بياناتك لا تُباع ولا تُشارك خارج الفريق المختص.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
