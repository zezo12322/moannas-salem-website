import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "السلامة الرقمية أثناء التغطية — دليل الصحفيات — مؤنث سالم",
  description: "دليل عملي للصحفيات — تأمين الأجهزة قبل الميدان، سيجنال، حماية المصادر، OPSEC وبروتوكول مصادرة الجهاز.",
};

export default function FieldDigitalSafetyPage() {
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
            <span className="text-[#211A22]">السلامة الرقمية أثناء التغطية</span>
          </nav>

          <span className="inline-block bg-[rgba(75,36,94,0.1)] text-[#4B245E] text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
            للصحفيات
          </span>

          <div className="flex flex-wrap gap-2 mb-4">
            {["OPSEC", "سيجنال", "حماية المصادر", "الحقل"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#4B245E] bg-[rgba(75,36,94,0.07)] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
            <span className="text-[11px] text-[#6B5D6E] bg-[#F0E9E0] px-2 py-0.5 rounded-full mr-auto">٨ دقائق</span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4B245E] mb-4 leading-[1.3]">
            السلامة الرقمية أثناء التغطية
          </h1>
          <p className="text-[15px] text-[#6B5D6E] leading-[1.8] mb-8">
            التغطية الميدانية تعرّض أجهزتك ومصادرك لمخاطر إضافية. هذا الدليل يساعدك
            على التحضير الرقمي قبل الخروج وكيفية التصرف إذا صودر جهازك.
          </p>

          <div className="flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">التحضير قبل الخروج إلى الميدان</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                الدقائق التي تقضينها في تأمين جهازك قبل أي تغطية حساسة قد تحمي مصادرك
                ومعلوماتك بأكملها.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <span className="font-semibold text-[#211A22]">فعّلي تشفير الجهاز بالكامل:</span>{" "}
                    آيفون مشفّر بشكل افتراضي برمز قوي. أندرويد: الإعدادات ← الأمان ← تشفير الجهاز.
                    استخدمي رمز 6 أرقام على الأقل، وليس بصمة الإصبع وحدها.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">احذفي أو أخفي المعلومات الحساسة:</span>{" "}
                    أزيلي الصور والمستندات والمراسلات ذات الصلة بمصادر حساسة من الجهاز قبل الخروج.
                    انقلي ما تحتاجينه إلى تخزين مشفّر.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">قلّلي التطبيقات المثبّتة:</span>{" "}
                    احذفي أي تطبيق لا تحتاجينه أثناء التغطية. كل تطبيق هو نافذة محتملة.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">أوقفي المزامنة التلقائية:</span>{" "}
                    أوقفي مزامنة الصور وجهات الاتصال مع السحابة أثناء التغطية الحساسة.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">فكّري في جهاز منفصل:</span>{" "}
                    لتغطيات عالية الخطورة، هاتف رخيص مسبق الدفع بمعلومات حد أدنى أفضل كثيرًا
                    من استخدام هاتفك الشخصي.
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">سيجنال — المعيار الذهبي للتواصل الآمن</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                سيجنال (Signal) يُعدّ الأكثر أمانًا للمراسلة الصحفية الحساسة. إليك أهم الإعدادات:
              </p>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <div className="flex flex-col gap-3 text-[14px]">
                  {[
                    { title: "رسائل مؤقتة (Disappearing Messages)", detail: "فعّليها على كل محادثة حساسة — أسبوع أو أقل لمصادر حساسة." },
                    { title: "قفل الشاشة في التطبيق", detail: "الإعدادات ← الخصوصية ← قفل الشاشة. يمنع الوصول حتى لو فُتح الهاتف." },
                    { title: "إخفاء معاينة الرسائل", detail: "لا تظهر محتوى الرسالة في إشعار الشاشة الرئيسية." },
                    { title: "تحقق من الهوية (Safety Numbers)", detail: "لكل اتصال حساس جديد، تحققي من Safety Number مع المصدر صوتيًا." },
                    { title: "Note to Self للتخزين المؤقت", detail: "استخدمي خاصية ملاحظة لنفسك لتخزين معلومات مؤقتة بدلًا من تطبيقات الملاحظات العادية." },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="font-semibold text-[#211A22] mb-0.5">{item.title}</p>
                      <p className="text-[#6B5D6E] text-[13px]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">حماية هوية المصدر — OPSEC أساسي</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-4">
                حماية المصدر مسؤولية مهنية وأخلاقية. خيارات التواصل والتخزين يجب أن تعكس هذا.
              </p>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5 mb-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">لا تسمّي مصادرك في الملاحظات</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      استخدمي أسماء مستعارة أو رموز في ملاحظاتك. لا تربطي الاسم الحقيقي
                      بالمعلومة في أي ملف رقمي غير مشفّر.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">وسائل التواصل الاجتماعي أثناء التغطية</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      لا تنشري صور الموقع الميداني في اللحظة الراهنة. لا تذكري أسماء المصادر
                      أو المكان الدقيق في منشورات العمل أثناء التغطية الحساسة. أوقفي علامة
                      الموقع على الكاميرا.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#211A22] mb-1">البريد الإلكتروني ليس آمنًا للمصادر الحساسة</p>
                    <p className="text-[13px] text-[#6B5D6E]">
                      إذا كانت التغطية تستدعي قناة مجهولة الهوية، استخدمي SecureDrop إذا
                      توفّر في مؤسستك، أو أرشدي المصدر لاستخدام سيجنال بخط آخر.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">VPN في مصر — ما تحتاجين معرفته</h2>
              <div className="bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4 mb-4">
                <p className="text-[13px] text-[#211A22] leading-[1.7]">
                  استخدام VPN في مصر في منطقة رمادية قانونيًا. استشيري محامية قبل الاستخدام
                  المهني، خاصة في التغطيات الحساسة.
                </p>
              </div>
              <div className="bg-[#FAF5EF] rounded-[16px] p-5">
                <p className="text-[14px] font-semibold text-[#211A22] mb-2">إذا احتجتِ VPN:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 text-[14px] text-[#6B5D6E] ms-2">
                  <li>استخدمي مزوّدًا بسياسة «عدم الاحتفاظ بالسجلات» (No-logs) موثّقة قانونيًا.</li>
                  <li>تجنّبي VPN مجانية — كثير منها يبيع بياناتك.</li>
                  <li>Mullvad وProton VPN يحظيان بسمعة جيدة في مجتمع الصحافة الأمنية.</li>
                  <li>Tor Browser خيار للبحث المجهول لكنه أبطأ ويلفت الانتباه في الاستخدام اليومي.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">إذا صودر جهازك — بروتوكول الاستجابة</h2>
              <div className="flex gap-3 items-start bg-[rgba(192,57,43,0.06)] border border-[#C0392B] rounded-[12px] p-4 mb-4">
                <span className="text-[#C0392B] flex-shrink-0 mt-0.5 text-[16px]" aria-hidden="true">⚠️</span>
                <p className="text-[13px] text-[#211A22] leading-[1.7]">
                  مصادرة الجهاز دون أمر قضائي انتهاك واضح. لا توقّعي أي وثيقة تتنازلين
                  فيها عن جهازك أو محتواه دون استشارة محامية.
                </p>
              </div>
              <div className="bg-white border border-[#DDD3CC] rounded-[16px] p-5">
                <ol className="list-decimal list-inside flex flex-col gap-3 text-[14px] text-[#6B5D6E] ms-2">
                  <li>
                    <span className="font-semibold text-[#211A22]">قبل التسليم:</span>{" "}
                    إذا كان لديك وقت، أرسلي رسالة سريعة لشخص تثقين به تذكرين فيها اسم الجهة
                    والموقع والوقت.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">وثّقي عملية المصادرة:</span>{" "}
                    اطلبي وثيقة رسمية بالمصادرة تتضمن اسم الضابط ووصف الجهاز والتاريخ والمكان.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">لا تعطي كلمة مرور الجهاز:</span>{" "}
                    في مصر، لست ملزمة قانونيًا بتقديم كلمة المرور دون أمر قضائي. استشيري محامية أولًا.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">أخطري نقابة الصحفيين ومؤسستك فورًا:</span>{" "}
                    التوثيق الفوري يقوّي موقفك القانوني لاحقًا.
                  </li>
                  <li>
                    <span className="font-semibold text-[#211A22]">غيّري كلمات المرور عن بُعد:</span>{" "}
                    من جهاز آخر، غيّري كلمات مرور كل حساباتك فورًا — بريد، سيجنال، وسائل تواصل.
                  </li>
                </ol>
              </div>
            </section>

          </div>

          <div className="mt-10 flex gap-3 items-start bg-[rgba(217,150,61,0.08)] border border-[#D9963D] rounded-[12px] p-4">
            <span className="text-[#D9963D] flex-shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
            <p className="text-[13px] text-[#211A22] leading-[1.7]">
              <strong>تنبيه قانوني مهم:</strong> هذا الدليل للتوعية العامة ولا يُغني عن الاستشارة القانونية.
              لدعم قانوني شخصي في حالة مصادرة أو اعتقال،{" "}
              <Link href="/support/legal" className="text-[#4B245E] underline">تواصلي مع فريقنا</Link>.
            </p>
          </div>

          <div className="mt-8 bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[15px] font-semibold text-[#211A22] mb-4">
              مررتِ بمشكلة في التغطية؟ دعمنا متاح.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support/legal"
                className="inline-flex items-center gap-1.5 bg-[#4B245E] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#3A1A4A] transition-colors"
              >
                اطلبي دعمًا قانونيًا <span aria-hidden="true">←</span>
              </Link>
              <Link
                href="/guide/digital-safety/identity-protection"
                className="inline-flex items-center gap-1.5 border border-[#4B245E] text-[#4B245E] text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[rgba(75,36,94,0.07)] transition-colors"
              >
                حماية الهوية عند النشر <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#DDD3CC]">
            <Link href="/guide/journalists" className="text-[13px] text-[#4B245E] hover:text-[#3A1A4A] transition-colors">
              ← العودة إلى دليل الصحفيات
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
