import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "تأمين حساباتك على وسائل التواصل الاجتماعي — دليل الحقوق — مؤنث سالم",
  description: "دليل عملي لتفعيل المصادقة الثنائية، اختيار كلمات مرور قوية، مراجعة الأذونات، والتعامل مع اختراق الحسابات.",
};

export default function AccountSecurityPage() {
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
            <span className="text-[#211A22]">تأمين الحسابات</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["المصادقة الثنائية", "كلمات المرور", "حماية الحساب"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#4F7C68] bg-[rgba(79,124,104,0.1)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">٨ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            تأمين حساباتك على وسائل التواصل الاجتماعي
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-10">
            حسابك على وسائل التواصل الاجتماعي ليس مجرد بريد إلكتروني — إنه هويتك
            الرقمية وأرشيف حياتك. تأمينه ليس رفاهية بل ضرورة، خاصة إذا كنتِ
            صحفية أو ناشطة أو تتعاملين مع محتوى حساس.
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">المصادقة الثنائية (2FA) — الخطوة الأهم</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                المصادقة الثنائية تعني أن اختراق كلمة مرورك وحدها لا يكفي لدخول حسابك.
                إليك كيفية تفعيلها على المنصات الرئيسية:
              </p>

              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">انستغرام</p>
                  <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>افتحي الملف الشخصي ← القائمة (☰) ← الإعدادات والنشاط.</li>
                    <li>اختاري «مركز الحسابات» ← «كلمة المرور والأمان».</li>
                    <li>اختاري «المصادقة الثنائية» وفعّلي تطبيق المصادقة (Authenticator App) — أفضل من الرسائل النصية.</li>
                    <li>احفظي رموز الاسترداد في مكان آمن غير متصل بالإنترنت.</li>
                  </ol>
                </div>

                {/* Facebook */}
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">فيسبوك</p>
                  <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>الإعدادات والخصوصية ← الإعدادات ← الأمان وتسجيل الدخول.</li>
                    <li>«المصادقة الثنائية» ← ابدئي الإعداد.</li>
                    <li>اختاري تطبيق المصادقة وليس الرسائل النصية كلما أمكن.</li>
                    <li>فعّلي «تنبيهات تسجيل الدخول» لتلقّي إشعار عند أي دخول غير معتاد.</li>
                  </ol>
                </div>

                {/* Twitter/X */}
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">تويتر / X</p>
                  <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>الإعدادات ← الأمان وإمكانية الوصول إلى الحساب ← الأمان.</li>
                    <li>«المصادقة بخطوتين» ← اختاري «تطبيق المصادقة».</li>
                    <li>ملاحظة: المصادقة بالرسائل النصية أصبحت مدفوعة في X — استخدمي تطبيق المصادقة مجانًا.</li>
                  </ol>
                </div>

                {/* TikTok */}
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">تيك توك</p>
                  <ol className="list-decimal list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>الملف الشخصي ← القائمة (☰) ← الإعدادات والخصوصية.</li>
                    <li>«الأمان» ← «التحقق بخطوتين».</li>
                    <li>فعّلي على الأقل خيارين: البريد الإلكتروني + تطبيق المصادقة.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                <p className="text-[13px] text-[#211A22]">
                  <strong className="text-[#4F7C68]">تطبيقات مصادقة موصى بها:</strong>{" "}
                  Aegis (أندرويد، مفتوح المصدر) — Raivo (آيفون) — Google Authenticator أو Microsoft Authenticator كخيار شائع.
                  تجنّبي الاعتماد على الرسائل النصية SMS كلما أمكن لأنها قابلة للاعتراض.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">كلمات مرور قوية ومديرو كلمات المرور</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                استخدام كلمة مرور واحدة لكل حساباتك يعني أن اختراق حساب واحد = اختراق
                الجميع. الحل ليس حفظ عشرات الكلمات — بل استخدام مدير كلمات مرور.
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">معايير كلمة المرور القوية:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                  <li>١٦ حرفًا على الأقل — أطول دائمًا أفضل.</li>
                  <li>مزيج من أحرف كبيرة وصغيرة وأرقام ورموز.</li>
                  <li>لا تستخدمي اسمك أو تاريخ ميلادك أو اسم حيوانك الأليف.</li>
                  <li>كلمة مرور مختلفة لكل خدمة بلا استثناء.</li>
                </ul>
              </div>
              <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                <p className="text-[13px] text-[#211A22]">
                  <strong className="text-[#4F7C68]">مديرو كلمات مرور موصى بهم:</strong>{" "}
                  Bitwarden (مجاني ومفتوح المصدر) — 1Password — KeePassXC (محلي بلا سحابة).
                  هذه البرامج تُنشئ كلمات مرور عشوائية قوية وتحفظها مشفّرة.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مراجعة أذونات التطبيقات</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                ربطتِ حسابك بتطبيقات أخرى لتسجيل الدخول أو لنشر محتوى تلقائيًا؟
                هذه التطبيقات قد تملك صلاحيات واسعة على حسابك. راجعيها دوريًا:
              </p>
              <div className="flex flex-col gap-3">
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">انستغرام / فيسبوك</p>
                  <p className="text-[13px] text-[#6B5D6E]">الإعدادات ← الأمان ← التطبيقات والمواقع ← أزيلي كل تطبيق لا تستخدمينه أو لا تتذكرين ربطه.</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">تويتر / X</p>
                  <p className="text-[13px] text-[#6B5D6E]">الإعدادات ← الأمان ← التطبيقات والجلسات ← أزيلي ما لا تحتاجينه.</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">جوجل (لحسابك المرتبط)</p>
                  <p className="text-[13px] text-[#6B5D6E]">myaccount.google.com ← الأمان ← التطبيقات التي لديها إمكانية الوصول إلى حسابك.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">التعرّف على رسائل التصيّد الاحتيالي (Phishing)</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                التصيّد هو أكثر طرق اختراق الحسابات شيوعًا — رسالة تبدو رسمية تطلب منك
                «تأكيد» بياناتك. إليك علامات التحذير:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>الرسالة تخلق إحساسًا بالإلحاح («حسابك سيُحذف خلال ٢٤ ساعة!»).</li>
                <li>الرابط لا يطابق النطاق الرسمي (مثلًا: faceb00k.com بدلًا من facebook.com).</li>
                <li>الرسالة تأتي من عنوان بريد غريب أو مختلف عن المنصة.</li>
                <li>تطلب منك إدخال كلمة مرورك أو رمز التحقق في موقع خارجي.</li>
                <li>تحتوي على روابط مختصرة تخفي وجهتها الحقيقية.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                <strong className="text-[#211A22]">القاعدة الذهبية:</strong> المنصات الحقيقية لن تطلب منك كلمة مرورك
                أبدًا عبر بريد إلكتروني أو رسالة مباشرة. في حال الشك، افتحي المنصة مباشرة
                من المتصفح — لا من الرابط.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">ماذا تفعلين بعد اختراق الحساب؟</h2>
              <div className="bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-4">
                <p className="text-[14px] font-bold text-[#C0392B] mb-2">تصرّفي فورًا — كل دقيقة مهمة:</p>
                <ol className="list-decimal list-inside flex flex-col gap-2 text-[14px] text-[#211A22] ms-2">
                  <li>حاولي تسجيل الدخول وتغيير كلمة المرور فورًا إذا لا تزال تملكين الوصول.</li>
                  <li>إذا لم تستطيعي الدخول، ابدئي بإجراء استرداد الحساب من صفحة المنصة الرسمية.</li>
                  <li>راجعي البريد الإلكتروني المرتبط بالحساب وأمّنيه أولًا.</li>
                  <li>راجعي الجلسات النشطة وأنهي كل الجلسات الغريبة.</li>
                  <li>وثّقي ما حدث بلقطات شاشة قبل أي تغيير.</li>
                </ol>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">خطوات استعادة الحساب على كل منصة</h2>
              <div className="flex flex-col gap-3">
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">انستغرام</p>
                  <p className="text-[13px] text-[#6B5D6E]">شاشة تسجيل الدخول ← «هل نسيتِ كلمة المرور؟» ← أرسلي رابط الاسترداد إلى بريدك أو رقمك. إذا فشل ذلك، استخدمي خيار «الحصول على مساعدة إضافية» والتحقق بصورة سيلفي.</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">فيسبوك</p>
                  <p className="text-[13px] text-[#6B5D6E]">facebook.com/hacked ← اتبعي خطوات الإبلاغ عن الاختراق. يمكنك استخدام خيار «جهات الاتصال الموثوقة» إذا كنتِ قد أعددتِها مسبقًا.</p>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">تويتر / X</p>
                  <p className="text-[13px] text-[#6B5D6E]">help.twitter.com/forms/account-access ← ملء نموذج الدعم مع إثبات الهوية. قد تستغرق العملية أيامًا.</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] text-[#6B5D6E]">
                بعد استعادة الحساب: غيّري جميع كلمات المرور، راجعي التطبيقات المرتبطة،
                وفعّلي 2FA فورًا إذا لم تكن مفعّلة.
              </p>
            </section>

            {/* Legal disclaimer */}
            <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
              <p className="text-[13px] font-bold text-[#D9963D] mb-1">تنبيه قانوني مهم</p>
              <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">
                اختراق الحسابات دون إذن جريمة يعاقب عليها قانون مكافحة جرائم المعلومات
                المصري رقم ١٧٥ لسنة ٢٠١٨ بالسجن والغرامة. إذا تعرّضتِ للاختراق،
                يحق لك تقديم بلاغ رسمي مع توثيق ما جرى.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تعرّضتِ لاختراق أو محاولة ابتزاز؟
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
                التعامل مع التحرش الإلكتروني <span aria-hidden="true">←</span>
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
