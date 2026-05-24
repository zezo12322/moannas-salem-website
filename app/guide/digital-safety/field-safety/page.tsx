import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "السلامة الرقمية للصحفيات في الميدان — دليل الحقوق — مؤنث سالم",
  description: "تجهيز الأجهزة قبل التغطية، استخدام Signal، بروتوكولات عبور الحدود وضبط الخصوصية في الميدان.",
};

export default function FieldSafetyPage() {
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
            <span className="text-[#211A22]">السلامة في الميدان</span>
          </nav>

          {/* Category chip */}
          <span className="inline-block bg-[rgba(79,124,104,0.12)] text-[#4F7C68] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            السلامة الرقمية
          </span>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["الميدان", "سيجنال", "التشفير", "OPSEC"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#4F7C68] bg-[rgba(79,124,104,0.1)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">٩ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            السلامة الرقمية للصحفيات في الميدان
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-10">
            التغطية الميدانية تحمل مخاطر رقمية إضافية — من مصادر تحتاج إلى حماية،
            إلى أجهزة قد تُصادَر، إلى اتصالات تحتاج إلى تشفير. الاستعداد المسبق
            هو أفضل حماية.
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">تجهيز الجهاز قبل التغطية</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                لا تذهبي إلى ميدان حساس بجهازك اليومي المليء بالبيانات. الاستعداد
                يبدأ قبل المغادرة:
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">تشفير القرص الكامل</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li><strong className="text-[#211A22]">آيفون:</strong> مفعّل تلقائيًا بمجرد وضع كلمة مرور — تأكّدي فقط من تفعيلها.</li>
                    <li><strong className="text-[#211A22]">أندرويد:</strong> الإعدادات ← الأمان ← التشفير (يختلف مكانه باختلاف الجهاز).</li>
                    <li><strong className="text-[#211A22]">ويندوز:</strong> BitLocker — ابحثي عنه في لوحة التحكم.</li>
                    <li><strong className="text-[#211A22]">ماك:</strong> تفضيلات النظام ← الأمان والخصوصية ← FileVault.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">تقليل التطبيقات والبيانات</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>احذفي التطبيقات التي لن تحتاجينها في الميدان.</li>
                    <li>امسحي المحادثات الحساسة القديمة التي لا تحتاجين إليها.</li>
                    <li>لا تحتفظي بأسماء المصادر أو معلوماتهم بصيغتها الصريحة على الجهاز.</li>
                    <li>أوقفي المزامنة التلقائية للصور مع السحابة إذا كانت حساسة.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">النسخ الاحتياطي قبل المغادرة</p>
                  <p className="text-[13px] text-[#6B5D6E]">انسخي كل البيانات المهمة على جهاز آمن في مكانك قبل المغادرة — في حال مصادرة الجهاز أو فقدانه.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">Signal — التواصل الآمن في الميدان</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                Signal هو التطبيق الأكثر أمانًا للتواصل — يستخدمه الصحفيون والناشطون
                والمحامون حول العالم. إليك كيفية الاستفادة منه بشكل كامل:
              </p>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 mb-4">
                <ol className="list-decimal list-inside flex flex-col gap-2 text-[13px] text-[#6B5D6E] ms-2">
                  <li>فعّلي «الرسائل المختفية» في كل محادثة حساسة — اختاري مدة مناسبة (يوم أو أسبوع).</li>
                  <li>استخدمي «ملاحظة لنفسك» لتخزين المعلومات الحساسة مؤقتًا بدلًا من التطبيقات العادية.</li>
                  <li>فعّلي قفل الشاشة داخل Signal نفسه (الإعدادات ← الخصوصية ← قفل الشاشة).</li>
                  <li>فعّلي «الحماية من لقطات الشاشة» لمنع ظهور محتوى Signal في قائمة التطبيقات الأخيرة.</li>
                  <li>تحقّقي من «رقم الأمان» مع مصادرك المهمة للتأكد من هوية كل طرف.</li>
                </ol>
              </div>
              <div className="bg-[rgba(79,124,104,0.08)] border border-[#4F7C68] rounded-[12px] p-3">
                <p className="text-[13px] text-[#211A22]">
                  <strong className="text-[#4F7C68]">تذكري:</strong>{" "}
                  Signal يحمي المحتوى لكنه يُظهر أن الطرفين يستخدمان Signal.
                  لإخفاء استخدامه تمامًا، فعّلي ميزة «الخادم الوكيل» داخل الإعدادات.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">أجهزة الاحتياط (Burner Devices)</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                في التغطيات عالية المخاطر، قد تحتاجين إلى جهاز منفصل تمامًا
                عن هويتك الرقمية المعتادة:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                <li>هاتف مدفوع نقدًا بشريحة مدفوعة مسبقًا — لا ترتبط به بأي حساب شخصي.</li>
                <li>لا تسجّلي دخولك لأي من حساباتك الأصلية من هذا الجهاز.</li>
                <li>لا تأخذيه معك وجهازك الأصلي في نفس الوقت إذا أردتِ عزله بالكامل.</li>
                <li>بعد انتهاء الغرض، احذفي محتواه بالكامل وأعيدي ضبط المصنع.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                الجهاز الاحتياطي ليس ضروريًا دائمًا — قيّمي مستوى المخاطرة في كل
                تغطية وتصرّفي وفقًا له.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">OPSEC على وسائل التواصل الاجتماعي في الميدان</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                ما تنشرينه على التواصل الاجتماعي أثناء التغطية يمكن أن يكشف
                موقعك وهوية مصادرك وخططك. إليك قواعد الأمان التشغيلي:
              </p>
              <div className="bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#211A22] ms-2">
                  <li><strong>أوقفي وسم الموقع تمامًا</strong> على كل منشور وصورة أثناء التغطية الحساسة.</li>
                  <li><strong>لا تنشري</strong> صور تكشف موقعك الحالي في الوقت الفعلي.</li>
                  <li><strong>تجنّبي</strong> ذكر خططك المستقبلية أو تحركاتك القادمة علنًا.</li>
                  <li><strong>لا تُظهري</strong> وجوه المصادر أو المعلوماتيين في صورك دون موافقتهم الصريحة.</li>
                </ul>
              </div>
              <p className="text-[14px] text-[#6B5D6E]">
                أوقفي خدمات الموقع كليًا على هاتفك في المواقف الحساسة:
                الإعدادات ← الخصوصية ← خدمات الموقع ← أوقفيها مؤقتًا.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">بروتوكولات عبور الحدود ومصادرة الأجهزة</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                عند عبور الحدود أو نقاط التفتيش، أجهزتك عرضة للفحص. إليك ما يجب فعله:
              </p>
              <div className="flex flex-col gap-3">
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">قبل العبور</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>أرسلي البيانات الحساسة لزميلة موثوقة ثم احذفيها من جهازك.</li>
                    <li>سجّلي خروجك من كل الحسابات الحساسة.</li>
                    <li>فكّري في استخدام جهاز «نظيف» خالٍ من البيانات لعبور الحدود.</li>
                    <li>فعّلي قفل الجهاز بكلمة مرور قوية — ليس بصمة الإصبع أو الوجه (يمكن إجبارك عليهما).</li>
                  </ul>
                </div>
                <div className="bg-[#FAF5EF] rounded-[12px] p-4">
                  <p className="text-[13px] font-bold text-[#211A22] mb-1">إذا طُلب منك تسليم الجهاز</p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li>لديك الحق في طلب الاستشارة القانونية قبل فتح أي جهاز.</li>
                    <li>وثّقي الطلب واسم الضابط إذا أمكن.</li>
                    <li>إذا استُولي على الجهاز، أبلغي مؤسستك الإعلامية فورًا وغيّري جميع كلمات المرور من جهاز آخر.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">الحذف الآمن للملفات والـ VPN في مصر</h2>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">الحذف الآمن</p>
                  <p className="text-[14px] text-[#6B5D6E] mb-2">
                    حذف الملفات العادي لا يمسحها فعلًا — يمكن استرجاعها. للحذف الآمن:
                  </p>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-[13px] text-[#6B5D6E] ms-2">
                    <li><strong className="text-[#211A22]">على الكمبيوتر:</strong> برنامج Eraser (ويندوز) أو Secure Empty Trash (ماك) أو أداة shred في Linux.</li>
                    <li><strong className="text-[#211A22]">على الهاتف:</strong> الحذف العادي + إعادة ضبط المصنع هو الأكثر فاعلية على الأجهزة المشفّرة.</li>
                    <li><strong className="text-[#211A22]">للصور الحساسة:</strong> استخدمي تطبيقًا يحذف ملف الصورة الأصلي مع البيانات الوصفية.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-[14px] font-bold text-[#211A22] mb-2">VPN في مصر — ما يجب معرفته</p>
                  <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-3">
                    <p className="text-[13px] text-[#211A22] leading-[1.7]">
                      استخدام VPN في مصر يقع في منطقة رمادية قانونيًا — غير محظور
                      صراحةً لكن السلطات تراقبه. استخدمي مزوّدي VPN غير سجّلين
                      (No-log) وموثوقين مثل Mullvad أو ProtonVPN.
                      تجنّبي VPN المجاني — كثير منها يبيع بياناتك.
                      في السيناريوهات عالية الحساسية، Tor أكثر أمانًا من VPN.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal disclaimer */}
            <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
              <p className="text-[13px] font-bold text-[#D9963D] mb-1">تنبيه قانوني مهم</p>
              <p className="text-[13px] text-[#6B5D6E] leading-[1.7]">
                بعض الإجراءات الواردة هنا قد تخضع لتنظيمات قانونية محلية تتغيّر.
                استشيري محامية متخصصة في حرية الصحافة قبل التغطيات عالية المخاطر.
                مؤسستك الإعلامية يجب أن توفّر لك دعمًا قانونيًا للتغطيات الحساسة.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              تحتاجين إلى دعم قانوني أو استشارة قبل تغطية حساسة؟
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/guide/digital-safety/account-security"
                className="inline-flex items-center gap-1.5 border border-[#4F7C68] text-[#4F7C68] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(79,124,104,0.07)] transition-colors"
              >
                تأمين حساباتك <span aria-hidden="true">←</span>
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
