import Link from "next/link";

export default function InstitutionalCTA() {
  return (
    <section
      className="bg-[#4B245E] py-16 md:py-20"
      aria-labelledby="institutional-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        {/* Eyebrow */}
        <span className="inline-block text-[#F2B6A0] text-[13px] font-semibold tracking-wide mb-4">
          للمؤسسات والشركاء
        </span>

        {/* Headline */}
        <h2
          id="institutional-heading"
          className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-[1.3]"
        >
          هل مؤسستكم آمنة للنساء؟
        </h2>

        {/* Subtext */}
        <p className="text-[16px] text-white/75 mb-10 max-w-xl mx-auto leading-[1.8]">
          لا يكفي الكلام. ننتظر مؤسسات تتخذ خطوات حقيقية نحو بيئة عمل آمنة
          وعادلة.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#4B245E] text-[15px] font-semibold px-6 py-3 rounded-full hover:bg-[#FAF5EF] transition-colors duration-[250ms] shadow-sm"
          >
            حمّلوا ميثاق بيئة العمل الآمنة
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/60 text-white text-[15px] font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-[250ms]"
          >
            اطلبوا جلسة توعية
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/80 text-[15px] font-medium hover:text-white transition-colors duration-[250ms] py-3"
          >
            تواصلوا لشراكة مؤسسية
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
