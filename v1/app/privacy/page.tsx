import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — مؤنث سالم",
  description: "سياسة الخصوصية الكاملة لمؤنث سالم — كيف نجمع بياناتك ونحميها ونستخدمها.",
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="text-[13px] text-[#6B5D6E] mb-8">
            <Link href="/" className="hover:text-[#4B245E] transition-colors">الرئيسية</Link>
            <span className="mx-2" aria-hidden="true">←</span>
            <span className="text-[#211A22]">سياسة الخصوصية</span>
          </nav>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#4B245E] mb-3 leading-[1.3]">
            سياسة الخصوصية
          </h1>
          <p className="text-[13px] text-[#6B5D6E] mb-8">
            آخر تحديث: مايو ٢٠٢٦
          </p>

          {/* Badge */}
          <div className="flex gap-3 items-center bg-[rgba(79,124,104,0.1)] border border-[#4F7C68] rounded-[12px] p-4 mb-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F7C68" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="flex-shrink-0">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <p className="text-[14px] text-[#4F7C68] leading-[1.6]">
              بياناتك لا تُباع ولا تُشارك خارج الفريق المختص. الخصوصية ليست خيارًا — هي التزام.
            </p>
          </div>

          <div className="prose-like flex flex-col gap-8 text-[15px] text-[#211A22] leading-[1.9]">

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">١. من نحن</h2>
              <p>
                مؤنث سالم مؤسسة نسوية غير ربحية تعمل على دعم الصحفيات والنساء العاملات في مصر.
                نتعامل مع البيانات الشخصية بمسؤولية كاملة، وهذه السياسة تشرح كيف نجمع بياناتك
                ونستخدمها ونحميها.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٢. ما البيانات التي نجمعها؟</h2>
              <p className="mb-3">نجمع فقط ما تشاركيه طوعًا عبر نماذجنا:</p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                <li><strong className="text-[#211A22]">طلبات الدعم (النفسي والقانوني):</strong> اسم (أو اسم مستعار)، وسيلة التواصل المفضلة، نوع الدعم المطلوب، وصف اختياري للوضع.</li>
                <li><strong className="text-[#211A22]">الشهادات السرية:</strong> اسم مستعار، نص الشهادة، نوع الانتهاك، موافقة النشر.</li>
                <li><strong className="text-[#211A22]">رسائل التواصل:</strong> اسم، موضوع، رسالة، معلومات اتصال اختيارية.</li>
                <li><strong className="text-[#211A22]">بيانات تقنية تلقائية:</strong> عنوان IP (مجهول)، نوع المتصفح، الصفحات المزارة — عبر تحليلات محترمة للخصوصية بدون ملفات تعريف تتبع.</li>
              </ul>
              <p className="mt-3 text-[#6B5D6E] text-[14px]">
                <strong className="text-[#211A22]">لا نطلب أبدًا:</strong> رقم هوية قومية، صور شخصية، بيانات بنكية، أو أي معلومة غير ضرورية لتقديم الخدمة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٣. لماذا نجمع هذه البيانات؟</h2>
              <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                <li>الرد على طلبات الدعم وتنسيق الخدمة مع الفريق المختص.</li>
                <li>توثيق الانتهاكات بطريقة مجمّعة ومجهولة الهوية لأغراض المناصرة والتقارير.</li>
                <li>تحسين جودة خدماتنا.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                لا نستخدم بياناتك لأغراض تسويقية أو إعلانية.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٤. من يرى بياناتك؟</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                فريق محدود ومدرَّب داخل مؤنث سالم فقط، يشمل: المنسقات الحالفات على السرية،
                والمتخصصات المنخرطات مباشرة في طلبك. <strong className="text-[#211A22]">لا تُشارك بياناتك أبدًا مع أطراف خارجية
                إلا بموافقتك الصريحة.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٥. مدة الاحتفاظ بالبيانات</h2>
              <div className="bg-[#FAF5EF] rounded-[12px] p-4 text-[14px] flex flex-col gap-2">
                <p><strong>طلبات الدعم المغلقة:</strong> سنتان من تاريخ الإغلاق، ثم حذف آمن.</p>
                <p><strong>الشهادات بدون موافقة نشر:</strong> ٣ سنوات ثم حذف آمن.</p>
                <p><strong>الشهادات المنشورة (مجهولة الهوية فقط):</strong> لأجل غير مسمى — بعد إزالة كل بيانات الهوية.</p>
                <p><strong>رسائل التواصل:</strong> سنة واحدة من تاريخ الإرسال.</p>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٦. حقوقك</h2>
              <p className="text-[14px] text-[#6B5D6E] mb-3">
                لكِ في أي وقت الحق في:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                <li><strong className="text-[#211A22]">الاطلاع</strong> على البيانات التي نحتفظ بها عنكِ.</li>
                <li><strong className="text-[#211A22]">التصحيح</strong> أو <strong className="text-[#211A22]">الحذف</strong> الكامل لبياناتك.</li>
                <li><strong className="text-[#211A22]">سحب الموافقة</strong> على النشر في أي وقت.</li>
                <li><strong className="text-[#211A22]">تقديم شكوى</strong> إذا رأيتِ أننا أخللنا بالتزاماتنا.</li>
              </ul>
              <p className="mt-3 text-[14px] text-[#6B5D6E]">
                لممارسة أي من هذه الحقوق،{" "}
                <Link href="/contact" className="text-[#4B245E] underline hover:text-[#3A1A4A]">تواصلي معنا</Link>
                . سنستجيب خلال ٣٠ يومًا.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٧. الأمان التقني</h2>
              <ul className="list-disc list-inside flex flex-col gap-1.5 text-[14px] text-[#6B5D6E] ms-2">
                <li>جميع النماذج محمية بـ HTTPS وتُرسل عبر قناة آمنة.</li>
                <li>البيانات مخزّنة في قواعد بيانات محمية بسياسات تحكّم وصول صارمة.</li>
                <li>مفاتيح قاعدة البيانات لا تُنشر أبدًا في كود المتصفح.</li>
                <li>لا نخزّن كلمات مرور أو معلومات بيومترية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٨. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                لا نستخدم ملفات تعريف الارتباط لأغراض التتبع أو الإعلانات. قد يُستخدم
                تخزين محلي بسيط لتحسين تجربة التصفح فقط (مثل تذكّر إعدادات اللغة).
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">٩. التحديثات</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                قد نُحدّث هذه السياسة أحيانًا. في حالة تغييرات جوهرية، نُعلن عنها في
                الموقع. استمرارك في استخدام خدماتنا بعد التحديث يعني قبولك للسياسة المحدَّثة.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#4B245E] mb-3">١٠. التواصل بشأن الخصوصية</h2>
              <p className="text-[14px] text-[#6B5D6E]">
                لأي استفسار عن هذه السياسة أو بياناتك،{" "}
                <Link href="/contact" className="text-[#4B245E] underline hover:text-[#3A1A4A]">تواصلي معنا</Link>
                {" "}أو راسلينا على:{" "}
                <span className="text-[#4B245E] font-medium">privacy@muanathsalem.org</span>
              </p>
            </section>
          </div>

          {/* FAQ link */}
          <div className="mt-10 text-center bg-[#F0E9E0] rounded-[16px] p-6">
            <p className="text-[14px] text-[#211A22] mb-3">
              هل لديكِ سؤال محدد عن سرية بياناتك؟
            </p>
            <Link
              href="/support/privacy-faq"
              className="inline-flex items-center gap-2 bg-[#4B245E] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors"
            >
              اقرئي الأسئلة الشائعة <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
