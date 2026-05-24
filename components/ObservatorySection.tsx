import Link from "next/link";

export default function ObservatorySection() {
  return (
    <section
      className="bg-[#F0E9E0] py-16 md:py-20"
      aria-labelledby="observatory-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <h2
              id="observatory-heading"
              className="text-[28px] md:text-[32px] font-bold text-[#211A22] mb-2"
            >
              المرصد — بيانات وتقارير
            </h2>
            <p className="text-[16px] text-[#6B5D6E]">
              نوثّق ما يحدث. لأن البيانات تحوّل الشهادات الفردية إلى حجة
              مجتمعية.
            </p>
          </div>
          <Link
            href="/observatory"
            className="inline-flex items-center gap-1 text-[#4B245E] text-[15px] font-semibold hover:underline whitespace-nowrap"
          >
            كل التقارير والبيانات
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Latest Report */}
          <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] transition-all duration-[250ms] col-span-1 md:col-span-2 border-s-4 border-s-[#4B245E]">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#4B245E] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                أحدث تقرير
              </span>
              <span className="text-[12px] text-[#6B5D6E]">٢٠٢٥</span>
            </div>
            <h3 className="text-[20px] font-bold text-[#211A22] mb-2">
              تقرير بيئة العمل للصحفيات المصريات ٢٠٢٥
            </h3>
            <p className="text-[14px] text-[#6B5D6E] leading-[1.7] mb-4">
              رصد شامل لأوضاع الصحفيات في المؤسسات الإعلامية المصرية، يشمل
              الأجور، وفرص الترقية، ووقائع التحرش وسُبل التعامل معها.
            </p>
            <button
              className="inline-flex items-center gap-2 border border-[#4B245E] text-[#4B245E] text-[14px] font-semibold px-4 py-2 rounded-full hover:bg-[#4B245E]/5 transition-colors"
              type="button"
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
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              تحميل التقرير (PDF)
            </button>
          </div>

          {/* Key Indicator */}
          <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] transition-all duration-[250ms] border-s-4 border-s-[#C66B7D]">
            <span className="text-[11px] font-semibold text-[#6B5D6E] block mb-3 uppercase tracking-wide">
              مؤشر رئيسي
            </span>
            <div
              className="text-[52px] font-bold text-[#4B245E] leading-none mb-2"
              aria-label="٦٧٪"
            >
              ٦٧٪
            </div>
            <p className="text-[14px] text-[#211A22] leading-[1.6]">
              من الصحفيات تعرضن لضغط مهني بسبب الحمل أو الأمومة
            </p>
            <p className="text-[11px] text-[#6B5D6E] mt-3">
              المصدر: مسح مؤنث سالم ٢٠٢٤
            </p>
          </div>

          {/* Latest Statement */}
          <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-6 shadow-[0_1px_3px_rgba(33,26,34,0.08)] hover:shadow-[0_4px_12px_rgba(33,26,34,0.10)] transition-all duration-[250ms] col-span-1 md:col-span-3 border-s-4 border-s-[#4F7C68]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#4F7C68] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    بيان موقف
                  </span>
                  <span className="text-[12px] text-[#6B5D6E]">
                    مارس ٢٠٢٥
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#211A22] mb-1">
                  مطالبة بتعديل لائحة العمل لتشمل حماية صريحة من التمييز
                  الجنسي
                </h3>
                <p className="text-[13px] text-[#6B5D6E]">
                  بيان مؤنث سالم بشأن مشروع تعديلات قانون العمل المصري
                </p>
              </div>
              <Link
                href="/observatory/statements"
                className="inline-flex items-center gap-1 text-[#4B245E] text-[14px] font-semibold hover:underline whitespace-nowrap"
              >
                اقرئي البيان
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
