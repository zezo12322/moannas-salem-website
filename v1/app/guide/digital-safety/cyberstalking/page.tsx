import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "المطاردة الرقمية — كيف تكتشفينها وتوقفينها — دليل الحقوق — مؤنث سالم",
  description: "دليل عملي للتعرّف على علامات المطاردة الرقمية وبرامج التجسس، وكيفية التوثيق والإجراءات القانونية في مصر.",
};

export default function CyberstalkingPage() {
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
            <span className="text-[#211A22]">المطاردة الرقمية</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["مطاردة رقمية", "برامج التجسس", "القانون ١٧٥"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#4F7C68] bg-[rgba(79,124,104,0.1)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">١٠ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            المطاردة الرقمية — كيف تكتشفينها وتوقفينها
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-6">
            المطاردة الرقمية ليست مجرد «مضايقة أونلاين» — إنها سلوك ممنهج لمراقبة
            حياتك ومتابعة تحركاتك وإجبارك على الصمت. يمكن اكتشافها وإيقافها والإبلاغ
            عنها قانونًا.
          </p>

          {/* Emergency box */}
          <div className="flex gap-3 items-start bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-8">
            <span className="text-[#C0392B] flex-shrink-0 mt-0.5 text-[16px]" aria-hidden="true">⚠️</span>
            <div>
              <p className="text-[14px] font-bold text-[#C0392B] mb-1">
                إذا كنتِ تشكّين في اختراق جهازك الآن
              </p>
              <p className="text-[13px] text-[#211A22] leading-[1.7]">
                لا تُجري أي بحث أو تحقيق باستخدام الجهاز المشتبه به — فعل ذلك
                قد ينبّه المُتجسّس أو يُتلف الأدلة. استخدمي جهازًا آخر أو هاتفًا مختلفًا
                للبحث عن المساعدة.{" "}
                <Link href="/support/legal" className="text-[#4B245E] underline">
                  تواصلي معنا للدعم العاجل
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">علامات تحذيرية للمطاردة الرقمية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                المطاردة الرقمية تتخذ أشكالًا متعددة. إليك ما يجب الانتباه إليه:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>شخص يعرف تفاصيل عن تحركاتك الفعلية أو مواعيدك دون أن تخبريه.</li>
                <li>تلقّي رسائل فورًا بعد نشر منشور على حساب خاص.</li>
                <li>حسابات مجهولة تتابع كل تحركاتك الرقمية وتُعلّق باستمرار.</li>
                <li>إحساس بأن محادثاتك الخاصة معروفة لشخص آخر.</li>
                <li>ظهور تطبيقات غريبة على هاتفك لم تثبّتيها.</li>
                <li>بطارية الهاتف تنفد بسرعة غير معتادة أو يسخن الجهاز دون سبب.</li>
                <li>استهلاك بيانات مرتفع بدون تفسير.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">برامج التجسس (Stalkerware) — ما الذي تبحثين عنه</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                برامج التجسس تُثبَّت على جهازك — غالبًا عندما يتاح لشخص ما الوصول
                المادي إليه لفترة قصيرة. تعمل في الخلفية وترسل موقعك وصورك ورسائلك
                إلى شخص آخر.
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">علامات وجود برنامج تجسس:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                  <li>الهاتف بطيء أو ساخن حتى عند عدم الاستخدام.</li>
                  <li>البطارية تنفد أسرع من المعتاد بفارق واضح.</li>
                  <li>استهلاك بيانات مرتفع في الخلفية لتطبيقات لا تعرفيها.</li>
                  <li>الشاشة تضيء أحيانًا دون لمسها.</li>
                  <li>تطبيقات في القائمة لا تتذكرين تثبيتها.</li>
                </ul>
              </div>
              <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                <p className="text-[13px] text-[#211A22]">
                  <strong className="text-[#4F7C68]">للكشف عن Stalkerware:</strong>{" "}
                  استخدمي تطبيق Certo (آيفون) أو تطبيقات أمان موثوقة مثل Malwarebytes (أندرويد).
                  على الأندرويد: الإعدادات ← التطبيقات ← عرض النظام ← ابحثي عن تطبيقات غريبة
                  بصلاحيات واسعة.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مخاطر مشاركة الموقع</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                كثير من التطبيقات تشارك موقعك دون أن تدركي ذلك. إليك ما يجب مراجعته:
              </p>
              <div className="flex flex-col gap-3">
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">مشاركة الموقع المباشر</p>
                  <p className="text-[13px] text-[#6B5D6E]">واتساب وإنستغرام وسناب شات لديها خاصية «مشاركة الموقع الحي». تحقّقي من أنك لا تشاركين موقعك مع أحد دون قصد — خاصة في واتساب (المحادثة ← المرفقات ← الموقع ← تحققي).</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">بيانات الموقع في الصور</p>
                  <p className="text-[13px] text-[#6B5D6E]">الصور التي تلتقطيها قد تحتوي على إحداثيات GPS مخفية في البيانات الوصفية. قبل مشاركة صور حساسة، أزيلي البيانات الوصفية (راجعي دليل حماية الهوية).</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">أذونات تطبيقات الموقع</p>
                  <p className="text-[13px] text-[#6B5D6E]">الإعدادات ← الخصوصية ← خدمات الموقع (آيفون) أو الأذونات ← الموقع (أندرويد) — راجعي كل تطبيق وحدّدي «أثناء الاستخدام فقط» وليس «دائمًا».</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">توثيق الحوادث</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                التوثيق المنهجي ضروري لأي إجراء قانوني. احتفظي بسجل مفصّل:
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                <ol className="list-decimal list-inside flex flex-col gap-2 text-[13px] text-[#6B5D6E] ms-2">
                  <li>التاريخ والوقت الدقيق لكل حادثة.</li>
                  <li>لقطات شاشة للرسائل أو المنشورات أو الحسابات مع إظهار الرابط (URL) والتاريخ.</li>
                  <li>وصف مكتوب لكل حادثة بتفاصيلها.</li>
                  <li>أي شهود على الحوادث الرقمية أو الجسدية المرتبطة.</li>
                  <li>احفظي كل شيء في مكانين منفصلين — لا تعتمدي على جهاز واحد.</li>
                </ol>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إزالة برامج التجسس من جهازك</h2>
              <div className="bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-bold text-[#C0392B] mb-2">تحذير مهم قبل الإزالة:</p>
                <p className="text-[13px] text-[#211A22] leading-[1.7]">
                  إزالة برنامج التجسس قد تُنبّه المُتجسّس فورًا وقد تُصعّد الموقف.
                  قبل الإزالة، استشيري متخصصة أمان أو محامية. إذا كانت سلامتك
                  الجسدية معرّضة للخطر، ضعي خطة أمان أولًا.
                </p>
              </div>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                إذا قرّرتِ المضي قدمًا:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>الخيار الأمثل: إعادة ضبط المصنع الكاملة (Factory Reset) — تمسح كل شيء بما فيه البرامج الضارة.</li>
                <li>على أندرويد: الإعدادات ← الإدارة العامة ← إعادة التعيين ← إعادة تعيين بيانات المصنع.</li>
                <li>على آيفون: الإعدادات ← عام ← نقل أو إعادة تعيين ← مسح كل المحتوى والإعدادات.</li>
                <li>بعد إعادة الضبط، لا تستعيدي النسخة الاحتياطية القديمة التي قد تحتوي على البرنامج الضار.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">خياراتك القانونية في مصر</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                قانون مكافحة جرائم المعلومات رقم ١٧٥ لسنة ٢٠١٨ يُجرّم المطاردة
                الرقمية والتجسس الإلكتروني صراحةً:
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[13px] text-[#6B5D6E] ms-2">
                  <li><strong className="text-[#211A22]">المادة ٢٥:</strong> المطاردة الإلكترونية — السجن حتى ٦ أشهر وغرامة مالية.</li>
                  <li><strong className="text-[#211A22]">المادة ٣٠:</strong> التجسس الإلكتروني وانتهاك الخصوصية — السجن حتى سنة.</li>
                  <li><strong className="text-[#211A22]">قانون مناهضة الإيذاء:</strong> المطاردة الجسدية المرتبطة بالرقمية قد تُشكّل جريمة إضافية.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                  <p className="text-[13px] font-bold text-[#4F7C68] mb-1">متى تتواصلين مع الشرطة</p>
                  <p className="text-[13px] text-[#6B5D6E]">إذا كان هناك تهديد جسدي واضح، أو إذا أردتِ تقديم بلاغ رسمي. اصطحبي توثيقك كاملًا وأطلبي التحدث إلى ضابطة أو قسم جرائم المعلومات.</p>
                </div>
                <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                  <p className="text-[13px] font-bold text-[#4F7C68] mb-1">متى تتواصلين مع منظمات الدعم أولًا</p>
                  <p className="text-[13px] text-[#6B5D6E]">إذا كنتِ غير متأكدة من وضعك أو تحتاجين استشارة قبل التوجه للشرطة، أو إذا كان المُطارِد شخصًا تعرفينه وتحتجن إلى خطة أمان أولًا.</p>
                </div>
              </div>
            </section>

            {/* Legal disclaimer */}
            <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
              <p className="text-[13px] font-bold text-[#D9963D] mb-1">تنبيه قانوني مهم</p>
              <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">
                المعلومات الواردة هنا للإرشاد العام ولا تُغني عن الاستشارة القانونية
                المتخصصة. كل حالة تختلف في تفاصيلها وملابساتها. إذا كنتِ في وضع
                خطر فوري، أولوريتك السلامة الجسدية أولًا.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تتعرّضين للمطاردة أو تشكّين في تجسس على جهازك؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/guide/digital-safety/online-harassment"
                className="inline-flex items-center gap-1.5 border border-[#4F7C68] text-[#4F7C68] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(79,124,104,0.07)] transition-colors"
              >
                دليل التحرش الإلكتروني <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link
              href="/guide/digital-safety"
              className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors"
            >
              ← العودة إلى دليل السلامة الرقمية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
