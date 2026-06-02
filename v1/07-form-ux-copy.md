# مؤنث سالم — Form UX Copy

---

## FORM DESIGN PRINCIPLES

1. Ask for the least information necessary
2. Privacy notice appears before the form begins — never at the end
3. Every form allows pseudonyms — never require real name
4. Emergency disclaimer is always visible on support forms
5. Consent to privacy policy is a required checkbox, not implied
6. No form auto-submits or auto-publishes anything
7. Success message explains what happens next — no ambiguity

---

## FORM 1: SUPPORT REQUEST FORM
**/support/mental-health** and **/support/legal**

---

### Form Header

**Page title:** اطلبي دعمًا آمنًا

**Intro copy:**
يمكنك استخدام اسم مستعار. لن تُشارك معلوماتك مع أي جهة خارج الفريق المختص في مؤنث سالم.

---

### Privacy Notice (top of form, Trust Green strip)

🔒 **بياناتك محمية**
يرى هذه المعلومات فريق محدود ومدرّب فقط.
لا نشر، لا مشاركة، لا استخدام خارج المساعدة المطلوبة.
[اقرئي سياسة الخصوصية الكاملة]

---

### Safety Callout (Care Amber, before form fields)

⚠️ **إذا كنتِ في خطر فوري أو جسدي**، تواصلي مع الطوارئ أو جهة أمان محلية مناسبة.
مؤنث سالم تستجيب خلال أيام عمل — وليست خط أزمات فوريًا.

---

### Field 1: الاسم أو اسم مستعار
- **Label:** الاسم (أو اسم مستعار)
- **Placeholder:** أي اسم تختارينه
- **Helper text:** لا يُشترط اسمك الحقيقي. يمكنك كتابة أي اسم أو كلمة.
- **Required:** Yes

### Field 2: وسيلة تواصل آمنة
- **Label:** كيف يمكننا التواصل معكِ بأمان؟
- **Sub-options (radio):**
  - واتساب (رقم الهاتف)
  - إيميل
  - رسالة Signal
  - أفضّل أن تتواصلوا معي عبر هذا النموذج فقط
- **Helper text:** اختاري وسيلة تشعرين أنها أكثر أمانًا لكِ. إذا اخترتِ واتساب أو إيميل، أدخلي البيانات في الحقل أدناه.
- **Required:** Yes (at least one method)
- **Conditional input field:** يظهر بناءً على الاختيار

### Field 3: نوع الدعم المطلوب
- **Label:** ما نوع الدعم الذي تحتاجينه؟
- **Type:** Checkboxes (multiple selection allowed)
- **Options:**
  - دعم نفسي (التحدث مع متخصصة)
  - دعم قانوني (استشارة أو معلومات)
  - السلامة الرقمية
  - توثيق ما حدث معي
  - لا أعرف بعد — أحتاج أن أتحدث أولًا
- **Required:** At least one

### Field 4: وصف مختصر (اختياري لكن مفيد)
- **Label:** هل تريدين إخبارنا بشيء قبل التواصل؟ (اختياري)
- **Type:** Textarea
- **Placeholder:** يمكنك الكتابة باختصار — أو ترك هذا الحقل فارغًا تمامًا.
- **Helper text:** لا يُشترط أي تفاصيل هنا. هذا مجرد سياق إضافي يساعد الفريق.
- **Required:** No
- **Max characters:** 500

### Field 5: هل توجد خطورة عاجلة؟
- **Label:** هل توجد خطر فوري تريدين إخبارنا به؟
- **Type:** Radio
- **Options:**
  - لا، الوضع مستقر حاليًا
  - نعم، أحتاج استجابة أسرع
- **Conditional note (if "نعم"):** سنحاول التواصل معكِ في أقرب وقت ممكن. إذا كان الوضع خطيرًا جدًا، نرجو التواصل مع الطوارئ أو جهة أمان محلية مناسبة فورًا.
- **Required:** Yes

### Field 6: أفضل وقت للتواصل
- **Label:** ما أفضل وقت للتواصل معكِ؟ (اختياري)
- **Type:** Checkboxes
- **Options:** صباحًا | ظهرًا | مساءً | أي وقت مناسب
- **Required:** No

### Field 7: موافقة على سياسة الخصوصية
- **Label:** أوافق على [سياسة الخصوصية] وأفهم كيف تُعالج بياناتي.
- **Type:** Required checkbox
- **Required:** Yes

---

### Submit Button
- **Text:** إرسال الطلب ←
- **Loading state:** جارٍ الإرسال…
- **Disabled until:** All required fields complete + consent checked

---

### Success Confirmation
**Title:** وصل طلبك بأمان ✓

**Body:**
شكرًا لثقتك بنا.
سيتواصل معكِ أحد أعضاء فريق مؤنث سالم خلال [X] أيام عمل عبر الوسيلة التي اخترتِها.

**Note:**
إذا لم تتلقي أي رد خلال [X] أيام، يمكنك [التواصل معنا مباشرة هنا].

**Privacy reminder:**
🔒 لن تُشارك أي معلومات أرسلتِها مع أي جهة خارج الفريق المختص.

---

---

## FORM 2: TESTIMONY / REPORT FORM
**/support/report**

---

### Form Header

**Page title:** احكي شهادتك بأمان

**Intro copy:**
شهادتك مهمة — حتى لو لم تكوني مستعدة لنشرها.
نوثّق ما تشاركيه بسرية تامة. **لا نشر بدون موافقتك الصريحة.**

---

### Privacy Notice (top of form, Trust Green strip)

🔒 **شهادتك محمية**
يرى هذا المحتوى فريق توثيق محدود فقط.
لن تُنشر أي معلومات دون موافقتك.
لك الحق في سحب شهادتك في أي وقت.
[اقرئي سياسة الخصوصية الكاملة]

---

### Field 1: الاسم أو اسم مستعار
- **Label:** الاسم (أو اسم مستعار)
- **Helper text:** لا يُشترط اسمك الحقيقي.
- **Required:** Yes

### Field 2: موافقة النشر
- **Label:** هل توافقين على نشر شهادتك (بعد إخفاء الهوية الكاملة)؟
- **Type:** Radio
- **Options:**
  - نعم، أوافق على النشر بعد إخفاء هويتي
  - لا، لا أوافق على أي نشر — للتوثيق الداخلي فقط
  - لا أعرف بعد — يمكنكم التواصل معي لاحقًا
- **Helper text:** حتى لو اخترتِ "نعم"، سنتواصل معكِ قبل أي نشر للمراجعة والتأكيد.
- **Required:** Yes

### Field 3: نوع الانتهاك
- **Label:** ما نوع الانتهاك أو الموقف الذي تودين توثيقه؟
- **Type:** Checkboxes
- **Options:**
  - التمييز بسبب الحمل أو الأمومة
  - فجوة الأجر أو عدم المساواة في الراتب
  - التحرش أو العنف في مكان العمل
  - العنف الرقمي أو التحرش الإلكتروني
  - منع الترقية أو التهميش المهني
  - الفصل التعسفي
  - التنمر أو الضغط النفسي
  - أخرى (يُرجى التوضيح)
- **Required:** At least one

### Field 4: مجال العمل / نوع المؤسسة
- **Label:** في أي مجال تعملين؟ (اختياري)
- **Type:** Select / text input
- **Options:** إعلام وصحافة | حكومي | قطاع خاص | منظمة مجتمع مدني | قطاع غير رسمي | أخرى
- **Required:** No

### Field 5: التاريخ التقريبي
- **Label:** متى حدث هذا تقريبًا؟ (اختياري)
- **Type:** Month + Year selector (not exact date required)
- **Helper text:** لا نحتاج التاريخ بدقة — فقط سياق زمني تقريبي إذا كنتِ مرتاحة لمشاركته.
- **Required:** No

### Field 6: الشهادة
- **Label:** احكي ما حدث بكلماتك
- **Type:** Textarea
- **Placeholder:** اكتبي بالطريقة التي تريحك — لا توجد طريقة خاطئة.
- **Helper text:** لا تحتاجين تفاصيل قانونية دقيقة. الشهادة الإنسانية لها قيمة كبيرة.
- **Required:** Yes
- **Min characters:** 30

### Field 7: هل تحتاجين دعمًا؟
- **Label:** هل تريدين طلب دعم نفسي أو قانوني؟
- **Type:** Radio
- **Options:**
  - نعم، أريد طلب دعم أيضًا
  - لا، أريد فقط توثيق ما حدث
- **Conditional flow (if "نعم"):** أضف حقول Form 1 داخل نفس الصفحة أو redirect لصفحة /support

### Field 8: وسيلة تواصل (اختيارية)
- **Label:** هل تريدين أن نتواصل معكِ؟ (اختياري)
- **Helper text:** إذا تركتِ هذا الحقل فارغًا، سنوثّق شهادتك دون تواصل مسبق.
- **Required:** No

### Field 9: موافقة على سياسة الخصوصية
- **Required checkbox**

---

### Submit Button
- **Text:** إرسال الشهادة ←

---

### Success Confirmation
**Title:** وصلت شهادتك بأمان ✓

**Body:**
شكرًا على ثقتك.
شهادتك ستُقرأ من فريق التوثيق في مؤنث سالم فقط.
**لن يُنشر أي شيء دون العودة إليكِ أولًا.**

إذا طلبتِ دعمًا، سيتواصل معكِ الفريق خلال [X] أيام عمل.

**Reminder:**
🔒 يمكنكِ في أي وقت طلب حذف شهادتك بالتواصل معنا.

---

---

## FORM 3: VOLUNTEER FORM
**/get-involved**

### Fields:
1. الاسم الكامل (required)
2. البريد الإلكتروني (required)
3. مجال التطوع المفضّل (checkboxes: دعم نفسي، دعم قانوني، توثيق وبحث، محتوى رقمي، تصميم، ترجمة، أخرى)
4. نبذة مختصرة عن خبرتك (textarea, optional)
5. موافقة على سياسة الخصوصية (required checkbox)

### Submit: `إرسال طلب التطوع ←`

### Success:
شكرًا على اهتمامك. سيتواصل معكِ فريق مؤنث سالم قريبًا.

---

## FORM MICROCOPY — REUSABLE STRINGS

| Context | Arabic Copy |
|---------|------------|
| Required field indicator | * هذا الحقل مطلوب |
| Pseudonym permission | يمكنك استخدام اسم مستعار |
| Confidentiality short | بياناتك سرية |
| No publication | لا نشر دون موافقتك |
| Limited team access | يرى بياناتك فريق محدود فقط |
| Emergency disclaimer | إذا كنتِ في خطر فوري، تواصلي مع الطوارئ المحلية |
| Response timeline | سنتواصل معكِ خلال [X] أيام عمل |
| Withdrawal right | يمكنك سحب بياناتك في أي وقت |
| Form error | يرجى التحقق من البيانات أعلاه |
| Form loading | جارٍ الإرسال… |
| Form success heading | وصل طلبك / وصلت شهادتك بأمان ✓ |
