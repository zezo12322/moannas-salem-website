import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "التعامل مع التحرش الإلكتروني — دليل الحقوق — مؤنث سالم",
  description: "كيف تتعاملين مع التحرش الإلكتروني والابتزاز الرقمي؟ خطوات عملية لحماية نفسك وتوثيق الانتهاك.",
};

export default function OnlineHarassmentPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide" className="hover:text-[#4B245E] transition-colors">دليل الحقوق</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <Link href="/guide/digital-safety" className="hover:text-[#4B245E] transition-colors">السلامة الرقمية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">التحرش الإلكتروني</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            التعامل مع التحرش الإلكتروني
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6">
            التحرش الإلكتروني حقيقي، ومؤذٍ، وقابل للتوثيق والإبلاغ عنه قانونًا.
            هذا الدليل يساعدك على اتخاذ الخطوات الصحيحة في الوقت الصحيح.
          </p>

          {/* Support note */}
          <div className="flex gap-3 items-start bg-[rgba(198,107,125,0.08)] border border-[#C66B7D] rounded-[12px] p-4 mb-8">
            <span className="text-[#C66B7D] flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              التحرش الإلكتروني يُسبّب ضغطًا نفسيًا حقيقيًا.{" "}
              <Link href="/support/mental-health" className="text-[#4B245E] underline">
                الدعم النفسي متاح لك
              </Link>
              {" "}إذا احتجتِه — بسرية تامة.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">أشكال التحرش الإلكتروني</h2>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>رسائل مسيئة أو تهديدية عبر وسائل التواصل أو الرسائل المباشرة.</li>
                <li>نشر صور أو معلومات خاصة بدون موافقة (Doxxing).</li>
                <li>الابتزاز الإلكتروني (تهديد بنشر صور أو معلومات مقابل مطالب).</li>
                <li>الحملات المنسّقة لإسكاتك أو تشويه سمعتك.</li>
                <li>اختراق حسابات التواصل أو البريد الإلكتروني.</li>
                <li>المطاردة الرقمية (تتبّع تحركاتك وأنشطتك أونلاين).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الخطوة الأولى: وثّقي قبل أي شيء</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">
                  قبل الحذف أو الحظر — خذي لقطات شاشة:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>لقطة شاشة للرسالة أو المنشور كاملًا مع التاريخ والوقت.</li>
                  <li>لقطة للملف الشخصي للمُرسِل/ة (الاسم، الصورة، الرابط).</li>
                  <li>احفظي الرابط المباشر (URL) للمحتوى.</li>
                  <li>احفظي النسخة في مكانين (هاتف + سحابة أو جهاز آخر).</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                التوثيق هو أساس أي إجراء قانوني لاحق. لا تُبادري بالحذف قبل الأرشفة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الإبلاغ على المنصات</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                جميع المنصات الكبرى لديها آلية إبلاغ. استخدميها:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li><strong className="text-[#211A22]">فيسبوك/إنستغرام:</strong> ثلاث نقاط ← الإبلاغ ← تحرش أو إيذاء.</li>
                <li><strong className="text-[#211A22]">تويتر/X:</strong> قائمة المنشور ← الإبلاغ ← إيذاء أو تحرش.</li>
                <li><strong className="text-[#211A22]">واتساب:</strong> تبليغ عن الاتصال + حظر فوري.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                الإبلاغ لا يُنبّه المُعتدي/ة بذاتك — يُرسل البلاغ للمنصة فقط.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الإبلاغ القانوني في مصر</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                قانون مكافحة جرائم المعلومات (رقم ١٧٥ لسنة ٢٠١٨) يُجرّم التحرش
                والابتزاز الإلكتروني. يمكنك:
              </p>
              <ol className="list-decimal list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>تقديم بلاغ في أي قسم شرطة مع التوثيق الذي جمعتِه.</li>
                <li>التواصل مع مركز المعلومات بوزارة الاتصالات للإبلاغ عن جرائم الإنترنت.</li>
                <li>الاستعانة بمحامية لتقديم شكوى مباشرة للنيابة العامة.</li>
              </ol>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                <strong className="text-[#211A22]">العقوبات:</strong> الابتزاز الإلكتروني يُعاقب عليه بالسجن من سنة إلى ٣ سنوات.
                نشر صور خاصة بدون موافقة يُعاقب عليه بالسجن من سنتين إلى خمس سنوات.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">تأمين حساباتك</h2>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>فعّلي المصادقة الثنائية (2FA) على كل حساباتك.</li>
                <li>استخدمي كلمات مرور مختلفة لكل خدمة (مدير كلمات المرور يساعد).</li>
                <li>راجعي تطبيقات الأطراف الثالثة المرتبطة بحساباتك وأزيلي ما لا تستخدمينه.</li>
                <li>لا تشاركي موقعك الفعلي في منشورات عامة.</li>
                <li>استخدمي Signal للمحادثات الحساسة.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">في حالة الابتزاز</h2>
              <div className="bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#211A22] ms-2">
                  <li><strong>لا تدفعي ولا تنفّذي المطالب</strong> — الدفع يُشجّع على المزيد.</li>
                  <li>وثّقي كل شيء فورًا قبل أي تصرف.</li>
                  <li>لا تُسرّعي بحذف المحادثات.</li>
                  <li>تواصلي مع شخص تثقين به وتواصلي معنا للدعم.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل تعرّضتِ للتحرش الإلكتروني أو الابتزاز؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/mental-health"
                className="inline-flex items-center gap-1.5 bg-[#C66B7D] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#a85268] transition-colors"
              >
                اطلبي دعمًا نفسيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/report"
                className="inline-flex items-center gap-1.5 border border-[#4F7C68] text-[#4F7C68] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(79,124,104,0.07)] transition-colors"
              >
                وثّقي الانتهاك <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Article nav */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">مقالات ذات صلة</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guide/journalists/press-rights"
                className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
              >
                حقوق الصحفيات في الميدان
              </Link>
              <Link
                href="/guide/working-women/maternity-rights"
                className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
              >
                حقوق الأمومة في العمل
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
