"use client";

import Link from "next/link";
import { useRef } from "react";

const testimonies = [
  {
    quote: "كنت أظن أني وحيدة. ثم علمت أن ما حدث لي له اسم.",
    role: "صحفية من القاهرة",
    year: "٢٠٢٤",
  },
  {
    quote: "قالوا لي إن الحمل خيارك — وكأن العمل ليس خياري أيضًا.",
    role: "موظفة في قطاع خاص",
    year: "٢٠٢٣",
  },
  {
    quote: "أول مرة في حياتي أتكلم بدون خوف.",
    role: "صحفية مستقلة",
    year: "٢٠٢٤",
  },
  {
    quote: "ما توقعته منهم كان صمتهم. ما وجدته في مؤنث سالم كان أكثر بكثير.",
    role: "عاملة في مجال الإعلام",
    year: "٢٠٢٤",
  },
];

export default function TestimoniesStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "next" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="bg-[#FAF5EF] py-16 md:py-20 overflow-hidden"
      aria-labelledby="testimonies-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2
              id="testimonies-heading"
              className="text-[28px] md:text-[32px] font-bold text-[#211A22] mb-2"
            >
              أصوات من داخل الغرفة
            </h2>
            <p className="text-[14px] text-[#6B5D6E]">
              شهادات حقيقية — بموافقة أصحابها — بعد إخفاء الهوية الكاملة.
            </p>
          </div>

          {/* Scroll controls */}
          <div className="flex gap-2" aria-label="تنقل بين الشهادات">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 rounded-full border border-[#DDD3CC] flex items-center justify-center text-[#6B5D6E] hover:border-[#4B245E] hover:text-[#4B245E] transition-colors"
              aria-label="السابق"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 rounded-full border border-[#DDD3CC] flex items-center justify-center text-[#6B5D6E] hover:border-[#4B245E] hover:text-[#4B245E] transition-colors"
              aria-label="التالي"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-snap-x pb-4"
          role="list"
          aria-label="شهادات"
        >
          {testimonies.map((t, i) => (
            <div
              key={i}
              role="listitem"
              className="scroll-snap-item flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)]"
            >
              {/* Quote mark */}
              <div
                className="text-[#C66B7D] text-[48px] leading-none mb-2 font-serif"
                aria-hidden="true"
              >
                "
              </div>
              <blockquote>
                <p className="text-[15px] text-[#211A22] italic leading-[1.8] mb-4">
                  {t.quote}
                </p>
                <footer className="text-[12px] text-[#6B5D6E]">
                  <span>{t.role}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{t.year}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/support/report"
            className="inline-flex items-center gap-2 bg-[#4B245E] text-white text-[15px] font-semibold px-6 py-3 rounded-full hover:bg-[#3A1A4A] transition-colors duration-[250ms]"
          >
            احكي شهادتك بأمان
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
