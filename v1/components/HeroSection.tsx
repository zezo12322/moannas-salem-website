"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, heroItem, scaleIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#FAF5EF] min-h-[85vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background shapes */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#F2B6A0]/20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#4B245E]/5 translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-[#C66B7D]/10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content — right side in RTL */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            {/* H1 */}
            <motion.h1
              variants={heroItem}
              id="hero-heading"
              className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-[#4B245E] leading-[1.2] mb-6"
            >
              بيئة عمل آمنة وعادلة
              <br />
              لكل صحفية وامرأة عاملة
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItem}
              className="text-[18px] md:text-[20px] text-[#211A22] leading-[1.9] mb-8 max-w-xl"
            >
              مؤنث سالم تدعم الصحفيات والنساء العاملات نفسيًا وقانونيًا
              ومهنيًا، وتوثّق الانتهاكات، وتحوّل الشهادات إلى حملات تغيير.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 bg-[#4B245E] text-white text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#3A1A4A] transition-colors duration-[250ms] shadow-sm"
              >
                اطلبي دعمًا آمنًا
                <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/report"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#4B245E] text-[#4B245E] text-[16px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#4B245E]/5 transition-colors duration-[250ms]"
              >
                احكي شهادتك
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 text-[#4B245E] text-[16px] font-medium hover:underline transition-colors duration-[250ms] px-3 py-3.5"
              >
                اعرفي حقوقك
              </Link>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              variants={heroItem}
              className="flex items-center gap-2 text-[#4F7C68] text-[13px] font-medium"
            >
              <svg
                width="16"
                height="16"
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
              <span>
                بياناتك سرية · يمكنك استخدام اسم مستعار · لا نشر دون موافقتك
              </span>
            </motion.div>
          </motion.div>

          {/* Illustration placeholder — left side in RTL */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Abstract hands/notebook illustration using CSS shapes */}
              <div className="aspect-square rounded-[24px] bg-gradient-to-br from-[#F2B6A0]/40 to-[#4B245E]/10 flex items-center justify-center animate-float">
                <svg
                  viewBox="0 0 280 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-48 h-48 md:w-64 md:h-64"
                  role="img"
                  aria-label="رسم توضيحي لأيدي تمسك دفترًا وقلمًا"
                >
                  {/* Notebook body */}
                  <rect
                    x="60"
                    y="40"
                    width="160"
                    height="200"
                    rx="12"
                    fill="#FAF5EF"
                    stroke="#4B245E"
                    strokeWidth="3"
                  />
                  {/* Notebook spine */}
                  <rect
                    x="60"
                    y="40"
                    width="24"
                    height="200"
                    rx="6"
                    fill="#C66B7D"
                    opacity="0.6"
                  />
                  {/* Lines on notebook */}
                  <line
                    x1="100"
                    y1="90"
                    x2="200"
                    y2="90"
                    stroke="#DDD3CC"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="110"
                    x2="200"
                    y2="110"
                    stroke="#DDD3CC"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="130"
                    x2="180"
                    y2="130"
                    stroke="#DDD3CC"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="150"
                    x2="190"
                    y2="150"
                    stroke="#DDD3CC"
                    strokeWidth="2"
                  />
                  {/* Pen */}
                  <rect
                    x="195"
                    y="155"
                    width="10"
                    height="70"
                    rx="5"
                    fill="#4B245E"
                    transform="rotate(-30 195 155)"
                  />
                  <polygon
                    points="215,220 225,235 205,235"
                    fill="#F2B6A0"
                    transform="rotate(-30 195 155)"
                  />
                  {/* Hand silhouette */}
                  <ellipse
                    cx="140"
                    cy="230"
                    rx="60"
                    ry="22"
                    fill="#F2B6A0"
                    opacity="0.5"
                  />
                  {/* Decorative dots */}
                  <circle cx="230" cy="60" r="6" fill="#C66B7D" opacity="0.5" />
                  <circle cx="50" cy="160" r="4" fill="#4F7C68" opacity="0.5" />
                  <circle cx="240" cy="200" r="5" fill="#F2B6A0" opacity="0.7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
