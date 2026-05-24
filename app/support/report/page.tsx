import type { Metadata } from "next";
import Link from "next/link";
import TestimonyForm from "@/components/TestimonyForm";

export const metadata: Metadata = {
  title: "احكي شهادتك بأمان — مؤنث سالم",
  description: "وثّقي ما حدث معكِ بسرية تامة. لا نشر بدون موافقتك الصريحة.",
  robots: { index: false },
};

export default function ReportPage() {
  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
        <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <Link href="/support" className="hover:text-[#4B245E] transition-colors">اطلبي دعمًا آمنًا</Link>
        <span className="mx-2" aria-hidden="true">←</span>
        <span className="text-[#211A22]">احكي شهادتك</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#4F7C68]" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </span>
        <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] leading-[1.3]">
          احكي شهادتك بأمان
        </h1>
      </div>

      <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
        شهادتك مهمة — حتى لو لم تكوني مستعدة لنشرها.
        نوثّق ما تشاركيه بسرية تامة.{" "}
        <strong className="text-[#211A22]">لا نشر بدون موافقتك الصريحة.</strong>
      </p>

      <TestimonyForm />
    </div>
  );
}
