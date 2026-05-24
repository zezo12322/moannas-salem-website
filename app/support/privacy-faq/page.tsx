import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أسئلة شائعة عن السرية — مؤنث سالم",
  description: "كيف نحمي بياناتك؟ إجابات على الأسئلة الأكثر شيوعًا حول الخصوصية والسرية.",
  robots: { index: false },
};

const faqs = [
  {
    q: "من يرى المعلومات التي أرسلتها؟",
    a: "فريق محدود ومدرّب داخل مؤنث سالم فقط. لا يُشارك محتوى طلبات الدعم مع أحد خارج المؤسسة.",
  },
  {
    q: "هل يمكنني استخدام اسم مستعار؟",
    a: "نعم. لا يُشترط اسمك الحقيقي في أي نموذج. يمكنك كتابة أي اسم أو كلمة.",
  },
  {
    q: "هل ستُنشر قصتي أو شهادتي؟",
    a: "لا. لا يُنشر أي محتوى تشاركيه دون موافقتك الصريحة الخطية — وحتى بعد الموافقة، نُخفي الهوية الكاملة.",
  },
  {
    q: "هل يمكنني سحب شهادتي بعد إرسالها؟",
    a: "نعم. يمكنك في أي وقت طلب حذف بياناتك من سجلاتنا بالتواصل معنا مباشرة.",
  },
  {
    q: "هل تستخدمون بياناتي في أبحاث أو تقارير؟",
    a: "فقط في صورة مجمّعة ومجهولة الهوية — وبعد الحصول على موافقة منفصلة.",
  },
  {
    q: "ما مدى أمان النماذج الإلكترونية؟",
    a: "جميع النماذج محمية بـ HTTPS وتُرسل عبر قناة آمنة. لا نخزّن بيانات حساسة في نظام مفتوح.",
  },
  {
    q: "كم من الوقت تحتفظون ببياناتي؟",
    a: "طلبات الدعم المغلقة: سنتان. الشهادات بدون موافقة نشر: ٣ سنوات ثم حذف آمن. الشهادات المنشورة (مجهولة الهوية فقط): لأجل غير مسمى.",
  },
  {
    q: "ماذا يحدث إذا أردت حذف بياناتي؟",
    a: "تواصلي معنا عبر صفحة التواصل وسنحذف بياناتك خلال ٣٠ يومًا. هذا حق مكفول لكِ.",
  },
];

export default function PrivacyFAQPage() {
  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <Link href="/support" className="hover:text-[#4B245E] transition-colors">اطلبي دعمًا آمنًا</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">أسئلة عن السرية</span>
      </nav>

      <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-3 leading-[1.3]">
        كيف نحمي بياناتك؟
      </h1>

      {/* Privacy badge */}
      <div className="flex gap-3 items-center bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="flex-shrink-0">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p className="text-[14px] text-[#4F7C68] leading-[1.6]">
          بياناتك لا تُباع ولا تُشارك خارج الفريق المختص. الخصوصية ليست خيارًا — هي التزام.
        </p>
      </div>

      {/* FAQ accordion (static — no JS needed) */}
      <div className="flex flex-col gap-0 border border-[#DDD3CC] rounded-[16px] overflow-hidden">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-white border-b border-[#DDD3CC] last:border-b-0"
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[15px] font-semibold text-[#211A22] hover:text-[#4B245E] hover:bg-[#FAF5EF] transition-colors select-none">
              <span>{faq.q}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="px-5 pb-4 pt-1 text-[14px] text-[#6B5D6E] leading-[1.8] bg-[#FAF5EF]">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      {/* Still have questions */}
      <div className="mt-8 text-center bg-[#F0E9E0] rounded-[16px] p-6">
        <p className="text-[15px] font-semibold text-[#211A22] mb-2">
          هل لديكِ سؤال لم تجدي إجابته هنا؟
        </p>
        <p className="text-[14px] text-[#6B5D6E] mb-4">
          تواصلي معنا مباشرة وسنجيب باحترام وسرية.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#4B245E] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors"
        >
          تواصلي معنا <span aria-hidden="true">←</span>
        </Link>
      </div>

      {/* Link to full privacy policy */}
      <p className="text-[13px] text-[#6B5D6E] text-center mt-6">
        للاطلاع على كل التفاصيل القانونية،{" "}
        <Link href="/privacy" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
          اقرئي سياسة الخصوصية الكاملة
        </Link>
      </p>
    </div>
  );
}
