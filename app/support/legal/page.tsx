import type { Metadata } from "next";
import Link from "next/link";
import SupportRequestForm from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "طلب دعم قانوني — مؤنث سالم",
  description: "استفسري عن حقوقك القانونية بشكل آمن وسري.",
  robots: { index: false },
};

export default function LegalSupportPage() {
  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <Link href="/support" className="hover:text-[#4B245E] transition-colors">اطلبي دعمًا آمنًا</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">دعم قانوني</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#4B245E]" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] leading-[1.3]">
          اطلبي استشارة قانونية
        </h1>
      </div>

      <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
        فهمي حقوقك القانونية وما يمكنك فعله في وضعك. يمكنك استخدام اسم مستعار.
        لن تُشارك معلوماتك مع أي جهة خارج الفريق المختص.
      </p>

      <SupportRequestForm formType="legal" />
    </div>
  );
}
