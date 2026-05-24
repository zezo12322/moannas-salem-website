import type { Metadata } from "next";
import Link from "next/link";
import SupportRequestForm from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "طلب دعم نفسي — مؤنث سالم",
  description: "اطلبي دعمًا نفسيًا آمنًا وسريًا من متخصصات مؤنث سالم.",
  robots: { index: false },
};

export default function MentalHealthPage() {
  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <Link href="/support" className="hover:text-[#4B245E] transition-colors">اطلبي دعمًا آمنًا</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">دعم نفسي</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#C66B7D]" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </span>
        <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] leading-[1.3]">
          اطلبي دعمًا نفسيًا
        </h1>
      </div>

      <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
        يمكنك استخدام اسم مستعار. لن تُشارك معلوماتك مع أي جهة خارج الفريق المختص في مؤنث سالم.
      </p>

      <SupportRequestForm formType="mental-health" />
    </div>
  );
}
