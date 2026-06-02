import Link from "next/link";

const footerColumns = [
  {
    heading: "من نحن",
    links: [
      { label: "القصة", href: "/about/story" },
      { label: "الفريق", href: "/about/team" },
      { label: "الشفافية والشركاء", href: "/about/transparency" },
    ],
  },
  {
    heading: "اطلبي دعمًا آمنًا",
    links: [
      { label: "دعم نفسي", href: "/support/mental-health" },
      { label: "دعم قانوني", href: "/support/legal" },
      { label: "بلاغ / شهادة سرية", href: "/support/report" },
      { label: "السرية والخصوصية", href: "/support/privacy-faq" },
    ],
  },
  {
    heading: "الموارد",
    links: [
      { label: "دليل الحقوق", href: "/guide" },
      { label: "الشهادات", href: "/stories" },
      { label: "المرصد", href: "/observatory" },
      { label: "للصحافة", href: "/press" },
    ],
  },
  {
    heading: "شاركي وتطوعي",
    links: [
      { label: "تطوعي", href: "/get-involved" },
      { label: "ادعمي", href: "/get-involved" },
      { label: "تواصل معنا", href: "/contact" },
      { label: "فيسبوك", href: "https://www.facebook.com/muanathsalem" },
      { label: "إنستاغرام", href: "https://www.instagram.com/muanathsalem" },
      { label: "لينكدإن", href: "https://www.linkedin.com/company/muanathsalem" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#211A22] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[14px] font-semibold text-[#F2B6A0] mb-4">
                {col.heading}
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/70 hover:text-white transition-colors duration-[150ms]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          {/* Privacy line */}
          <div className="flex items-center gap-2 text-[#4F7C68] text-[13px] mb-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>بياناتك لا تُباع ولا تُشارك خارج الفريق المختص.</span>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[13px] text-white/50">
              © ٢٠٢٦ مؤسسة مؤنث سالم للتنمية — جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/terms"
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                شروط الاستخدام
              </Link>
              <Link
                href="/accessibility"
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                إمكانية الوصول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
