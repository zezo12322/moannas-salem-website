import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Cairo, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مؤنث سالم — بيئة عمل آمنة وعادلة",
  description:
    "مؤنث سالم تدعم الصحفيات والنساء العاملات نفسيًا وقانونيًا ومهنيًا، وتوثّق الانتهاكات، وتحوّل الشهادات إلى تغيير.",
  openGraph: {
    title: "مؤنث سالم — بيئة عمل آمنة وعادلة",
    description:
      "مؤنث سالم تدعم الصحفيات والنساء العاملات نفسيًا وقانونيًا ومهنيًا، وتوثّق الانتهاكات، وتحوّل الشهادات إلى تغيير.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${cairo.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-main">
          انتقل للمحتوى الرئيسي
        </a>
        {children}
      </body>
    </html>
  );
}
