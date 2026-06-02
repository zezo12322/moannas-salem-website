import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "حقوق الصحفيات في الميدان — دليل الحقوق — مؤنث سالم",
  description: "ما حقوقك القانونية كصحفية في الميدان؟ دليل عملي للحماية والوثائق والإجراءات.",
};

export default function PressRightsPage() {
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
            <Link href="/guide/journalists" className="hover:text-[#4B245E] transition-colors">للصحفيات</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">حقوق الميدان</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للصحفيات
          </span>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حقوق الصحفيات في الميدان
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
            العمل الصحفي الميداني يُعرّضك لمخاطر متعددة — قانونية وجسدية وإلكترونية.
            معرفة حقوقك هي أول خطوة لحمايتك.
          </p>

          {/* Legal disclaimer */}
          <div className="flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-8">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              هذا الدليل للمعلومات العامة فقط وليس استشارة قانونية رسمية.
              إذا واجهتِ موقفًا قانونيًا محددًا،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">
                اطلبي استشارة من فريقنا القانوني
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الحق في التغطية وحرية الحركة</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                للصحفيات الحق في تغطية الأحداث العامة وفق القانون المصري. وثّقي دائمًا:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>احملي بطاقة صحفية صادرة من جهة عمل أو نقابة الصحفيين.</li>
                <li>احتفظي بنسخة رقمية منها على هاتفك في مكان يمكن الوصول إليه دون اتصال بالإنترنت.</li>
                <li>وثّقي أي منع من التغطية أو مصادرة معدات فورًا: صورة أو مقطع صوتي.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إذا اعتُقلتِ أو احتُجزتِ</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ماذا تفعلين فورًا:</p>
                <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>أبلغي من معك فورًا قبل أي شيء آخر.</li>
                  <li>اطلبي الاطلاع على أمر القبض أو سبب الاحتجاز.</li>
                  <li>اطلبي حق الاتصال بمحامية قبل الإدلاء بأي تصريح.</li>
                  <li>لا توقّعي على أي وثيقة قبل مراجعة محامية.</li>
                  <li>أبلغي نقابة الصحفيين ومؤسستك الإعلامية بمجرد تمكنك.</li>
                </ol>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                القانون المصري يكفل لكِ الاستعانة بمحامية عند الاستجواب. الاحتجاز لأكثر من
                ٢٤ ساعة بدون مثول أمام النيابة يُعدّ انتهاكًا يستحق الإبلاغ عنه.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مصادرة المعدات والمواد</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                لا يحق لأحد مصادرة كاميراتك أو هاتفك أو مواد تغطيتك إلا بأمر قانوني رسمي.
                عند مواجهة ذلك:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>اطلبي إيصالًا مكتوبًا بكل ما صودر مع توصيف دقيق.</li>
                <li>لا تمحي أي ملفات تحت الإكراه — هذا يُعرّضك للمساءلة.</li>
                <li>وثّقي الحادثة فور إطلاق سراحك وأبلغي نقابة الصحفيين.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">حقوق الصحفيات المستقلات (الفريلانس)</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الصحفيات المستقلات في وضع أكثر هشاشة قانونيًا. لحماية نفسك:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>احرصي على عقد كتابي واضح مع كل جهة نشر — حتى ولو بسيط.</li>
                <li>حددي في العقد: ملكية المواد، طريقة الدفع، والمدة.</li>
                <li>سجّلي في نقابة الصحفيين للحصول على البطاقة الصحفية والحماية القانونية.</li>
                <li>لا تتنازلي عن حق الملكية الأدبية إلا بشكل صريح ومدفوع مقابله.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">حماية المصادر</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                حماية مصادرك حق أخلاقي ومهني. لتعزيز الأمان التقني:
                استخدمي تطبيقات تشفير للتواصل مع المصادر (Signal)،
                تجنّبي تخزين أسماء المصادر بصورة صريحة على أجهزة متصلة بالإنترنت،
                وادرسي{" "}
                <Link href="/guide/digital-safety/online-harassment" className="text-[#4B245E] underline hover:text-[#3A1A4A]">
                  دليل السلامة الرقمية
                </Link>
                .
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              هل واجهتِ انتهاكًا أثناء عملك الصحفي؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/support/report"
                className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors"
              >
                احكي شهادتك بسرية <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Article nav */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <p className="text-[13px] text-[#6B5D6E] mb-3">مقالات ذات صلة</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guide/digital-safety/online-harassment"
                className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors"
              >
                التعامل مع التحرش الإلكتروني
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
