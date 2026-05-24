import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "حماية هويتك عند نشر شهادات حساسة — دليل السلامة الرقمية — مؤنث سالم",
  description: "كيف تحمين هويتك عند نشر قصص أو شهادات حساسة — إزالة البيانات الوصفية، قنوات مجهولة الهوية، التعامل مع الدوكسينج.",
};

export default function IdentityProtectionPage() {
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
            <span className="text-[#211A22]">حماية الهوية عند النشر</span>
          </nav>

          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          <div className="flex flex-wrap gap-2 mb-4">
            {["البيانات الوصفية", "الدوكسينج", "المصادر", "سيكيور دروب"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#4F7C68] bg-[rgba(79,124,104,0.1)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">٩ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            حماية هويتك عند نشر شهادات حساسة
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
            نشر القصص والشهادات الحساسة يحمل مخاطر حقيقية — على الصحفية وعلى المصدر معًا.
            هذا الدليل يساعدك على تقليل هذه المخاطر بخطوات عملية قبل وبعد النشر.
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">البيانات الوصفية (Metadata) — الخطر الخفي في الصور</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                كل صورة تلتقطيها تحتوي على بيانات مخفية قد تكشف موقعك وجهازك وتوقيت الالتقاط.
                هذه البيانات مرئية لأي شخص يفتح الملف.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-4">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">ما تحتويه بيانات EXIF عادةً:</p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                  <li>إحداثيات GPS الدقيقة لمكان الالتقاط.</li>
                  <li>طراز الهاتف أو الكاميرا.</li>
                  <li>التاريخ والوقت بدقة.</li>
                  <li>إعدادات الكاميرا — قد تُستخدم لتحديد نوع الجهاز.</li>
                </ul>
              </div>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">كيف تُزيلين البيانات الوصفية:</p>
                <div className="flex flex-col gap-3 text-[14px] text-[#6B5D6E]">
                  <div>
                    <span className="font-medium text-[#211A22]">على الهاتف (قبل الإرسال): </span>
                    تطبيق Metapho (آيفون) أو Photo Exif Editor (أندرويد) يتيحان المراجعة والحذف.
                  </div>
                  <div>
                    <span className="font-medium text-[#211A22]">على الحاسوب: </span>
                    ExifTool (مجاني، متعدد المنصات) — الأقوى والأكثر انتشارًا في العمل الصحفي.
                    الأمر: <code className="bg-[#F0E9E0] px-1.5 py-0.5 rounded text-[12px]">exiftool -all= filename.jpg</code>
                  </div>
                  <div>
                    <span className="font-medium text-[#211A22]">في ويندوز مباشرةً: </span>
                    انقري بالزر الأيمن على الصورة ← خصائص ← التفاصيل ← «إزالة الخصائص والمعلومات الشخصية».
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">قنوات الاستقبال المجهولة — SecureDrop وسيجنال</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                لتلقّي شهادات من مصادر تخشى الكشف، تحتاجين إلى قناة مجهولة الهوية من الطرفين.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">SecureDrop</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      النظام الأكثر أمانًا لاستقبال وثائق حساسة — يعمل عبر Tor ويُخفي هوية
                      المُرسِل تمامًا. تحتاج مؤسستك الإعلامية لتشغيله على سيرفر خاص.
                      إذا لم تتوفر لديك، يمكنك إرشاد المصدر لمؤسسة تُشغّله.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">سيجنال برقم آخر</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      افتحي حسابًا على سيجنال بخط هاتفي منفصل مخصص لاستقبال الشهادات.
                      هذا يفصل هويتك الشخصية عن قناة الاستقبال الحساسة.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">Tor Browser للبحث المجهول</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      لأي بحث حساس لا تريدين ربطه بهويتك — زيارة مواقع معينة، بحث عن
                      أشخاص أو قضايا حساسة. أبطأ لكنه أكثر خصوصية.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">فصل هويتك المهنية عن الشخصية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                كثير من الصحفيات يجمعن حياتهن الشخصية والمهنية في نفس الحسابات — هذا خطر حقيقي.
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <div className="flex flex-col gap-3 text-[14px] text-[#6B5D6E]">
                  {[
                    { label: "بريد إلكتروني منفصل", detail: "حساب بريد مخصص للعمل الحساس — مختلف تمامًا عن البريد الشخصي. ProtonMail يوفّر تشفيرًا إضافيًا." },
                    { label: "حسابات وسائل التواصل", detail: "إذا أمكن، حافظي على حساب مهني لا يحتوي على معلومات شخصية (عنوان، روابط عائلية، صور شخصية)." },
                    { label: "لا تربطي الحسابات", detail: "لا توقّعي بحساب تواصل اجتماعي على مواقع حساسة، ولا تستخدمي «تسجيل الدخول بجوجل/فيسبوك» لأدوات العمل." },
                    { label: "كلمات مرور مستقلة", detail: "مدير كلمات المرور (Bitwarden أو 1Password) يجعل كلمة مرور مختلفة لكل حساب قابلة للإدارة." },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-semibold text-[#211A22] mb-0.5">{item.label}</p>
                      <p className="text-[13px]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الدوكسينج — ما تفعلينه إذا كُشفت هويتك</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                الدوكسينج (Doxxing) هو نشر معلوماتك الشخصية الخاصة علنًا لإيذائك أو
                تهديدك. إذا حدث هذا:
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-4">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <span className="font-semibold text-[#211A22]">وثّقي كل شيء فورًا:</span>{" "}
                    لقطات شاشة كاملة مع الروابط وتاريخ الظهور — قبل أن تُحذف.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">أبلغي المنصة:</span>{" "}
                    كل منصات التواصل لديها آلية إبلاغ عن انتهاك الخصوصية. استخدميها مع التوثيق.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">غيّري كلمات المرور فورًا:</span>{" "}
                    حتى لو لم يُكشف عنها — الدوكسينج أحيانًا يسبق محاولات اختراق الحسابات.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">قيّمي مستوى الخطر الجسدي:</span>{" "}
                    إذا تضمّن الدوكسينج عنوانك أو معلومات عائلتك، تواصلي مع الشرطة ومحامية فورًا.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">تواصلي مع فريقنا:</span>{" "}
                    للدعم القانوني والنفسي — الدوكسينج تجربة صادمة وأنتِ لستِ وحدك.
                  </li>
                </ol>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                في مصر، نشر بيانات شخصية للإيذاء يندرج تحت قانون مكافحة جرائم المعلومات
                رقم ١٧٥/٢٠١٨ (المادة ٢٦) — يمكن تقديم بلاغ رسمي.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">مقالات ذات صلة</h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/guide/journalists/field-digital-safety" className="text-[13px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] hover:bg-[rgba(75,36,94,0.12)] px-3 py-1.5 rounded-full transition-colors">
                  السلامة الرقمية أثناء التغطية
                </Link>
                <Link href="/guide/digital-safety/account-security" className="text-[13px] text-[#4F7C68] bg-[rgba(79,124,104,0.08)] hover:bg-[rgba(79,124,104,0.14)] px-3 py-1.5 rounded-full transition-colors">
                  تأمين حساباتك
                </Link>
                <Link href="/guide/digital-safety/cyberstalking" className="text-[13px] text-[#4F7C68] bg-[rgba(79,124,104,0.08)] hover:bg-[rgba(79,124,104,0.14)] px-3 py-1.5 rounded-full transition-colors">
                  المطاردة الرقمية
                </Link>
              </div>
            </section>

          </div>

          <div className="mt-10 flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>تنبيه قانوني مهم:</strong> المعلومات هنا توعوية عامة.
              لدعم قانوني شخصي في حالات الدوكسينج أو التهديد،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">تواصلي مع فريقنا</Link>.
            </p>
          </div>

          <div className="mt-8 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تعرّضتِ للدوكسينج أو تهديد رقمي؟
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

          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link href="/guide/digital-safety" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors">
              ← العودة إلى دليل السلامة الرقمية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
