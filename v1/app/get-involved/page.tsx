import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "انضمي إلينا — مؤنث سالم",
  description: "تطوعي، شاركي، أو تواصلي معنا للشراكة — كل صوت ومهارة يصنعان فرقًا في مسيرة مؤنث سالم.",
};

const volunteerAreas = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "الدعم النفسي",
    description: "إذا كنتِ معالجة أو أخصائية نفسية، يمكنك تقديم جلسات مجانية أو بأسعار رمزية لدعم النساء في أزمات مهنية.",
    color: "#C66B7D",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: "التوثيق والبحث",
    description: "مساعدة في مراجعة الشهادات، تحليل البيانات، وإعداد تقارير المرصد.",
    color: "#4B245E",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "المحتوى والتحرير",
    description: "كتابة المقالات، دليل الحقوق، وتحرير المحتوى التوعوي بالعربية.",
    color: "#D9963D",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "الترجمة",
    description: "ترجمة موارد وتقارير دولية حول حقوق المرأة في بيئة العمل إلى العربية.",
    color: "#4F7C68",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "التصميم والبصريات",
    description: "تصميم مواد حملات، إنفوجرافيك حقوقي، وأصول بصرية للمرصد والتقارير.",
    color: "#C66B7D",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "الدعم القانوني",
    description: "إذا كنتِ محامية، يمكنك تقديم استشارات أولية أو مراجعة المحتوى القانوني على الموقع.",
    color: "#4B245E",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">انضمي إلينا</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            معنا، المساحة تكبر
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-10">
            مؤنث سالم مبادرة تبنيها نساء لنساء — كل مهارة تُضيفينها تُقوّي قدرتنا على الوصول
            إلى من تحتاج دعمًا. سواء كنتِ متطوعة أو مؤسسة راغبة في الشراكة.
          </p>

          {/* Volunteer section */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#211A22] mb-2">التطوع</h2>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-6">
              نبحث عن متطوعات في المجالات التالية. لا يُشترط وقت محدد — كل مساهمة بحسب
              قدرتك ومتاحيتك.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {volunteerAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 flex gap-4 items-start"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center"
                    style={{ backgroundColor: `${area.color}18`, color: area.color }}
                  >
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#211A22] mb-1">{area.title}</h3>
                    <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership section */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#211A22] mb-2">الشراكة المؤسسية</h2>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-5">
              نرحب بالشراكة مع منظمات حقوق الإنسان، النقابات، الجامعات، والمؤسسات الإعلامية
              التي تشاركنا الالتزام بدعم المرأة العاملة.
            </p>
            <div className="bg-[#FAF5EF] rounded-[16px] p-5 flex flex-col gap-3 mb-4">
              {[
                "مشاركة بيانات مجمّعة ومجهولة للبحث الأكاديمي",
                "التعاون في إعداد تقارير حقوقية مشتركة",
                "دعم تقني أو لوجستي لتوسيع نطاق الخدمات",
                "التمثيل المشترك في المناصرة التشريعية",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start text-[14px] text-[#211A22]">
                  <span className="text-[#4B245E] mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6B5D6E]">
              للشراكات، تواصلي عبر النموذج أدناه أو مباشرةً على{" "}
              <a href="mailto:press@muanathsalem.org" className="text-[#4B245E] hover:text-[#3A1A4A] underline">
                press@muanathsalem.org
              </a>
            </p>
          </section>

          {/* Donate section */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#211A22] mb-2">الدعم المالي</h2>
            <div className="bg-[#F0E9E0] rounded-[16px] p-5">
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-3">
                مؤنث سالم مموّلة حاليًا من منح مستقلة وتبرعات فردية. نؤمن بالشفافية الكاملة
                في مصادر التمويل.
              </p>
              <p className="text-[14px] text-[#6B5D6E] leading-[1.8]">
                لاستفسارات التبرع أو الدعم المالي، تواصلي معنا عبر النموذج أدناه وحدّدي
                "دعم مالي أو تبرع" في موضوع الرسالة.
              </p>
            </div>
          </section>

          {/* Contact form */}
          <section>
            <h2 className="text-[22px] font-bold text-[#211A22] mb-2">أرسلي رسالة</h2>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.8] mb-6">
              سواء كنتِ مهتمة بالتطوع، الشراكة، أو الدعم — أخبرينا بما تريدين.
              سنردّ خلال ٤٨ ساعة عمل.
            </p>
            <ContactForm defaultTopic="تطوع" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
