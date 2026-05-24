import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "نماذج وقوالب — مؤنث سالم",
  description: "نماذج جاهزة للتظلم والشكاوى ورسائل المطالبة بالحقوق — للنساء العاملات في مصر.",
};

const comingSoonTemplates = [
  {
    title: "نموذج شكوى تحرش في بيئة العمل",
    description: "رسالة رسمية إلى صاحب العمل أو مسؤول الموارد البشرية.",
    tag: "قريبًا",
    color: "#C66B7D",
  },
  {
    title: "نموذج طلب إجازة أمومة",
    description: "خطاب رسمي يستند إلى قانون العمل المصري رقم 12 لسنة 2003.",
    tag: "قريبًا",
    color: "#4B245E",
  },
  {
    title: "نموذج اعتراض على فصل تعسفي",
    description: "رسالة تحذيرية قانونية قبل اللجوء إلى التقاضي.",
    tag: "قريبًا",
    color: "#D9963D",
  },
  {
    title: "نموذج شكوى تمييز في الراتب",
    description: "طلب مكتوب بمراجعة الراتب مع الاستشهاد بمبدأ المساواة.",
    tag: "قريبًا",
    color: "#4F7C68",
  },
  {
    title: "نموذج الإبلاغ عن عنف رقمي للمنصات",
    description: "رسالة موحّدة للإبلاغ عن انتهاكات على منصات التواصل الاجتماعي.",
    tag: "قريبًا",
    color: "#4B245E",
  },
  {
    title: "توثيق موقف العمل قبل الفصل",
    description: "نموذج تدوين يومي للأحداث الموثّقة — مفيد في النزاعات القانونية.",
    tag: "قريبًا",
    color: "#C66B7D",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">نماذج وقوالب</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            نماذج وقوالب
          </h1>
          <p className="text-[16px] text-[#6B5D6E] leading-[1.8] mb-5">
            نماذج جاهزة للتظلم والشكاوى الرسمية — مكتوبة بعربية قانونية واضحة ومستندة
            إلى التشريعات المصرية المعمول بها.
          </p>

          {/* Coming soon notice */}
          <div className="flex gap-3 items-center bg-[rgba(217,150,61,0.1)] border border-[#D9963D] rounded-[12px] p-4 mb-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9963D" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-[13px] text-[#D9963D]">
              النماذج قيد المراجعة القانونية — ستُتاح للتحميل في الربع الثالث من ٢٠٢٦.
            </p>
          </div>

          {/* Templates grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {comingSoonTemplates.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 flex flex-col gap-3 opacity-80"
                aria-label={`${t.title} — ${t.tag}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${t.color}18` }}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="text-[11px] bg-[rgba(217,150,61,0.12)] text-[#D9963D] px-2 py-0.5 rounded-full font-medium flex-shrink-0 mt-0.5">
                    {t.tag}
                  </span>
                </div>
                <div>
                  <h2 className="text-[14px] font-bold text-[#211A22] mb-1">{t.title}</h2>
                  <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">{t.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal disclaimer */}
          <div className="bg-[#FAF5EF] border border-[#DDD3CC] rounded-[16px] p-5 mb-8">
            <h2 className="text-[15px] font-bold text-[#211A22] mb-2">تنبيه قانوني مهم</h2>
            <p className="text-[13px] text-[#6B5D6E] leading-[1.8]">
              هذه النماذج للتوجيه فقط وليست استشارة قانونية. قبل استخدام أي نموذج في نزاع
              حقيقي، نوصي بمراجعة محامية أو الاستفادة من{" "}
              <Link href="/support/legal" className="text-[#4B245E] hover:text-[#3A1A4A] underline">
                خدمة الدعم القانوني
              </Link>{" "}
              لدينا.
            </p>
          </div>

          {/* Need help now? */}
          <div className="bg-[#4B245E] rounded-[20px] p-6 text-center">
            <p className="text-[16px] font-bold text-white mb-2">تحتاجين مساعدة الآن؟</p>
            <p className="text-[13px] text-white/70 mb-5">
              فريقنا القانوني يمكنه مساعدتك في تقييم وضعك وإرشادك للخطوات الصحيحة.
            </p>
            <Link
              href="/support/legal"
              className="inline-flex items-center gap-2 bg-white text-[#4B245E] font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#FAF5EF] transition-colors"
            >
              اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
