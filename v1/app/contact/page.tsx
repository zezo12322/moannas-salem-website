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
                      <p className="text-[13px] text-[#211A22] font-medium">info@muanathsalem.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="text-[12px] text-[#6B5D6E]">المقر</p>
                      <p className="text-[13px] text-[#211A22] font-medium">شارع الجامعة، الحيسين، الجيزة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-1" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <p className="text-[12px] text-[#6B5D6E]">أوقات العمل</p>
                      <p className="text-[13px] text-[#211A22] font-medium">الأحد – الخميس: ٩ صباحًا – ٥ مساءً</p>
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

              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <h2 className="text-[15px] font-bold text-[#211A22] mb-3">تابعينا</h2>
                <div className="flex flex-col gap-2.5">
                  <a href="https://www.facebook.com/muanathsalem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#211A22] font-medium hover:text-[#4B245E] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-[#4B245E]" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
                    </svg>
                    فيسبوك
                  </a>
                  <a href="https://www.instagram.com/muanathsalem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#211A22] font-medium hover:text-[#4B245E] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-[#4B245E]" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                    </svg>
                    إنستاغرام
                  </a>
                  <a href="https://www.linkedin.com/company/muanathsalem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#211A22] font-medium hover:text-[#4B245E] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-[#4B245E]" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                    </svg>
                    لينكدإن
                  </a>
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
