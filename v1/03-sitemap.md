# مؤنث سالم — Full Sitemap v1.0

---

## SITEMAP TREE

```
/ الرئيسية
│
├── /about  من نحن
│   ├── /about/story  القصة
│   │   └── [لماذا اسم "مؤنث سالم"؟ — مضمّن في الصفحة]
│   ├── /about/team  الفريق
│   └── /about/transparency  الشفافية والشركاء
│       ├── [الشركاء والممولون]
│       └── [تقارير الشفافية السنوية]
│
├── /support  اطلبي دعمًا آمنًا
│   ├── /support  [صفحة الدخول — اختاري نوع الدعم]
│   ├── /support/mental-health  دعم نفسي
│   │   └── [نموذج طلب الدعم النفسي]
│   ├── /support/legal  دعم قانوني
│   │   └── [نموذج طلب الدعم القانوني]
│   ├── /support/report  بلاغ / شهادة سرية
│   │   └── [نموذج الشهادة السرية]
│   └── /support/privacy-faq  أسئلة شائعة عن السرية
│       ├── [كيف نتعامل مع بياناتك؟]
│       ├── [من يرى معلوماتك؟]
│       ├── [ماذا يحدث بعد إرسال الطلب؟]
│       └── [هل يمكن سحب الشهادة؟]
│
├── /issues  قضايانا
│   ├── /issues  [صفحة دخول — نظرة عامة على القضايا]
│   ├── /issues/motherhood  الأمومة والعمل
│   ├── /issues/fair-pay  الأجر العادل
│   ├── /issues/digital-violence  العنف الرقمي
│   ├── /issues/workplace-violence  التحرش والعنف في العمل
│   └── /issues/discrimination  التمييز والترقيات
│
├── /campaigns  حملاتنا
│   ├── /campaigns  [أرشيف الحملات]
│   ├── /campaigns/not-my-fault-im-a-mother  مش ذنبي إني أم
│   ├── /campaigns/aman-qalami  أمان قلمي
│   ├── /campaigns/fair-pay-is-a-right  الأجر العادل حق
│   └── /campaigns/[slug]  [حملات مستقبلية]
│
├── /guide  دليل الحقوق
│   ├── /guide  [صفحة دخول — قابلة للبحث والتصفية]
│   ├── /guide/journalists  للصحفيات
│   │   └── /guide/journalists/[article-slug]
│   ├── /guide/working-women  للنساء العاملات
│   │   └── /guide/working-women/[article-slug]
│   ├── /guide/digital-safety  السلامة الرقمية
│   │   └── /guide/digital-safety/[article-slug]
│   └── /guide/templates  نماذج جاهزة
│       └── [ملفات PDF قابلة للتنزيل]
│
├── /stories  الشهادات
│   └── [شهادات مجهولة الهوية — منشورة بموافقة]
│
├── /observatory  المرصد والتقارير
│   ├── /observatory  [صفحة دخول — ملخص المرصد]
│   ├── /observatory/reports  تقارير
│   │   └── /observatory/reports/[report-slug]
│   ├── /observatory/statements  بيانات ومواقف
│   │   └── /observatory/statements/[statement-slug]
│   └── /observatory/indicators  مؤشرات بيئة العمل
│
├── /press  للصحافة والإعلام
│   ├── [بيانات صحفية]
│   ├── [صور وأصول بصرية قابلة للتنزيل]
│   ├── [اقتباسات للاستخدام الصحفي]
│   └── [تواصل مع المؤسسة — للإعلام]
│
├── /get-involved  تطوعي / ادعمي
│   ├── [نموذج التطوع]
│   ├── [معلومات الشراكة المؤسسية]
│   └── [طرق الدعم والتبرع — إذا أتيحت]
│
├── /contact  تواصل معنا
│
├── /privacy  سياسة الخصوصية
├── /terms  شروط الاستخدام والإخلاء من المسؤولية
└── /accessibility  إمكانية الوصول
```

---

## PAGE PRIORITY FOR MVP LAUNCH

### Phase 1 — Must Have (Launch Blockers)
| Page | Priority | Reason |
|------|----------|--------|
| / الرئيسية | P0 | Entry point |
| /support | P0 | Core mission — safe support |
| /support/mental-health | P0 | Primary journey |
| /support/legal | P0 | Primary journey |
| /support/report | P0 | Testimony intake |
| /support/privacy-faq | P0 | Trust building |
| /guide | P0 | Rights guide entry |
| /about/story | P0 | Credibility |
| /privacy | P0 | Legal + trust requirement |
| /terms | P0 | Legal requirement |
| /contact | P0 | Basic contact |

### Phase 2 — High Value (Launch + 2 Weeks)
| Page | Priority |
|------|----------|
| /about/team | P1 |
| /about/transparency | P1 |
| /issues (all 5) | P1 |
| /campaigns/[3 initial] | P1 |
| /guide/journalists | P1 |
| /guide/digital-safety | P1 |

### Phase 3 — Growth (Month 2+)
| Page | Priority |
|------|----------|
| /stories | P2 |
| /observatory | P2 |
| /press | P2 |
| /get-involved | P2 |
| /guide/templates | P2 |

---

## URL CONVENTIONS

- All slugs: Arabic-meaning but URL-safe (hyphens, lowercase Latin or transliterated Arabic)
- No underscores
- No Arabic characters in URLs (SEO + sharing compatibility)
- Pattern: `/[section]/[subsection]/[item-slug]`
- Canonical: always trailing-slash-free
- 301 redirects: set up for any moved pages

---

## SEO NOTES PER SECTION

- `/support` — Noindex option to consider (protects users who don't want browsing history tracked)
- `/guide/*` — Full index + structured data (Article schema)
- `/campaigns/*` — Full index + Open Graph for sharing
- `/observatory/reports/*` — Full index + PDF schema
- `/stories` — Noindex for individual testimony pages (privacy default)
