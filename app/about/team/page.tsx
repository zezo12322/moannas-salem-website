import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الفريق — مؤنث سالم",
  description: "تعرّفي على الفريق الذي يُشغّل مؤنث سالم — من يعملن خلف الكواليس لجعل هذه المساحة آمنة.",
};

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/about/story" className="hover:text-[#4B245E] transition-colors">من نحن</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">الفريق</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            الفريق
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            مؤنث سالم مبنية على جهد جماعي من نساء يؤمنّ بأن بيئة العمل الآمنة حق لا استثناء.
          </p>

          {/* Values first — institution to fill team members */}
          <div className="flex gap-3 items-start bg-[rgba(75,36,94,0.07)] border border-[rgba(75,36,94,0.2)] rounded-[14px] p-5 mb-10">
            <span className="text-[#4B245E] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <p className="text-[14px] text-[#211A22] leading-[1.7]">
              <strong className="text-[#4B245E]">ملاحظة:</strong>{" "}
              بعض أعضاء الفريق يُفضّلن عدم الظهور بأسمائهن الحقيقية لاعتبارات مهنية وأمنية.
              هذا الاختيار مُحترَم تمامًا.
            </p>
          </div>

          {/* Team categories */}
          <div className="flex flex-col gap-8">
            {/* Leadership */}
            <section>
              <h2 className="text-[18px] font-bold text-[#211A22] mb-4">الإدارة والتنسيق</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: "المديرة التنفيذية", note: "تُضاف قريبًا" },
                  { role: "منسّقة الدعم", note: "تُضاف قريبًا" },
                ].map((m) => (
                  <div key={m.role} className="bg-white border border-[#DDD3CC] rounded-[14px] p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F0E9E0] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B245E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#4B245E]">{m.role}</p>
                      <p className="text-[12px] text-[#6B5D6E]">{m.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Support team */}
            <section>
              <h2 className="text-[18px] font-bold text-[#211A22] mb-4">فريق الدعم</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: "متخصصة الدعم النفسي", note: "تُضاف قريبًا" },
                  { role: "المستشارة القانونية", note: "تُضاف قريبًا" },
                  { role: "محررة التوثيق", note: "تُضاف قريبًا" },
                ].map((m) => (
                  <div key={m.role} className="bg-white border border-[#DDD3CC] rounded-[14px] p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F0E9E0] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#4F7C68]">{m.role}</p>
                      <p className="text-[12px] text-[#6B5D6E]">{m.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Volunteers */}
            <section>
              <h2 className="text-[18px] font-bold text-[#211A22] mb-3">المتطوعات</h2>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-4">
                مؤنث سالم تعمل بدعم متطوعات في مجالات الدعم النفسي، التوثيق والبحث،
                المحتوى الرقمي، الترجمة، التصميم، والدعم القانوني.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors"
              >
                انضمّي كمتطوعة <span aria-hidden="true">←</span>
              </Link>
            </section>
          </div>

          {/* About nav */}
          <div className="mt-10 pt-8 border-t border-[#DDD3CC] flex flex-wrap gap-3">
            <Link href="/about/story" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">← القصة</Link>
            <Link href="/about/transparency" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A]">الشفافية والشركاء ←</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
