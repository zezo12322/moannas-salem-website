# مؤنث سالم — CMS Content Model

---

## CMS RECOMMENDATION

**Recommended CMS:** Directus (self-hosted) or Sanity.io (cloud)

**Why:**
- Non-technical team can manage content through a friendly UI
- Full Arabic + RTL support
- Role-based access control (critical for sensitive data separation)
- API-first (works with any frontend framework)
- Directus: self-hosted, full data control (preferred for privacy reasons)
- Sanity: excellent editor UX, strong team features

**NOT recommended:** WordPress (security surface + Arabic RTL friction at scale)

---

## CONTENT COLLECTIONS (DATABASE SCHEMA)

---

### Collection: `campaigns` — الحملات

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | auto | |
| title_ar | Text | Yes | Arabic title |
| title_en | Text | No | Optional English |
| slug | Slug | Yes | URL-safe, unique |
| status | Enum: draft/active/archived | Yes | |
| hero_image | Image | Yes | Alt text required |
| context_ar | Rich Text | Yes | Background context |
| problem_ar | Rich Text | Yes | The problem addressed |
| key_messages | JSON Array | No | Array of strings |
| what_we_did_ar | Rich Text | Yes | Actions taken |
| impact_ar | Rich Text | No | Outcomes / learning |
| cta_text_ar | Text | No | |
| cta_url | URL | No | |
| press_mentions | Relation → press_items | No | |
| testimonies | Relation → testimonies (published only) | No | |
| related_issues | Relation → issues (M2M) | No | |
| published_at | DateTime | No | |
| created_at | DateTime | auto | |
| updated_at | DateTime | auto | |

---

### Collection: `guide_articles` — مقالات دليل الحقوق

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | auto | |
| title_ar | Text | Yes | |
| slug | Slug | Yes | |
| status | Enum: draft/published | Yes | |
| category | Enum: journalists/working-women/digital-safety/templates | Yes | |
| summary_ar | Text (200 chars max) | Yes | For card display |
| body_ar | Rich Text | Yes | Full article |
| what_happened_ar | Rich Text | No | Article section |
| why_it_matters_ar | Rich Text | No | |
| your_rights_ar | Rich Text | No | |
| what_to_document_ar | Rich Text | No | |
| what_to_avoid_ar | Rich Text | No | |
| when_to_ask_support_ar | Rich Text | No | |
| useful_resources_ar | JSON Array of {label, url} | No | |
| cta_support_text_ar | Text | No | |
| reading_time_minutes | Integer | No | Auto-calculated or manual |
| tags | Text Array | No | For search/filter |
| related_articles | Relation → guide_articles (M2M) | No | |
| downloadable_file | File (PDF) | No | For template type |
| published_at | DateTime | No | |

---

### Collection: `issues` — القضايا

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | auto | |
| title_ar | Text | Yes | |
| slug | Slug | Yes | Matches sitemap slugs |
| icon | Text (icon name) | No | |
| summary_ar | Text | Yes | For homepage cards |
| body_ar | Rich Text | Yes | Full issue page content |
| related_guide_articles | Relation → guide_articles (M2M) | No | |
| related_campaigns | Relation → campaigns (M2M) | No | |
| sort_order | Integer | No | For display ordering |

---

### Collection: `observatory_reports` — تقارير المرصد

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | auto | |
| title_ar | Text | Yes | |
| slug | Slug | Yes | |
| status | Enum: draft/published | Yes | |
| type | Enum: report/statement/indicator | Yes | |
| summary_ar | Text | Yes | |
| key_findings_ar | Rich Text | No | |
| data_meaning_ar | Rich Text | No | |
| recommendations_ar | Rich Text | No | |
| pdf_file | File | No | Downloadable PDF |
| press_contact_ar | Text | No | |
| published_at | DateTime | No | |
| cover_image | Image | No | |

---

### Collection: `testimonies` — الشهادات
**⚠️ RESTRICTED COLLECTION — See security notes**

| Field | Type | Required | Access |
|-------|------|----------|--------|
| id | UUID | auto | Admin only |
| pseudonym | Text | Yes | Admin only |
| publication_consent | Enum: yes/no/pending | Yes | Admin only |
| violation_type | Text Array | Yes | Admin only |
| sector | Text | No | Admin only |
| approximate_date | Month+Year | No | Admin only |
| testimony_text | Long Text | Yes | Admin only |
| needs_support | Boolean | No | Admin only |
| contact_method | Text | No | Admin only — SENSITIVE |
| contact_value | Text | No | Admin only — SENSITIVE |
| internal_notes | Text | No | Admin only |
| published_quote | Text | No | Editorial team — only if consent=yes, anonymized |
| published_role | Text | No | e.g., "صحفية من القاهرة" |
| status | Enum: new/reviewed/support_assigned/published/archived | Yes | Admin only |
| received_at | DateTime | auto | |

**IMPORTANT:** `contact_value` and `testimony_text` should NEVER appear in frontend APIs or public endpoints. Create a separate restricted API role for testimony access.

---

### Collection: `support_requests` — طلبات الدعم
**⚠️ HIGHLY RESTRICTED — NEVER expose via public API**

| Field | Type | Access |
|-------|------|--------|
| id | UUID | Admin only |
| pseudonym | Text | Admin only |
| contact_method | Enum | Admin only |
| contact_value | Text | Admin only — SENSITIVE |
| support_types | Text Array | Admin only |
| description | Long Text | Admin only |
| is_urgent | Boolean | Admin only |
| preferred_contact_time | Text | Admin only |
| status | Enum: new/assigned/in-progress/closed | Admin only |
| assigned_to | Text | Admin only |
| internal_notes | Text | Admin only |
| received_at | DateTime | auto |

**This collection MUST NOT be in the same API role as public content. Separate database user or row-level security required.**

---

### Collection: `team_members` — الفريق

| Field | Type | Required |
|-------|------|----------|
| id | UUID | auto |
| name_ar | Text | Yes |
| role_ar | Text | Yes |
| bio_ar | Rich Text | No |
| photo | Image | No |
| show_photo | Boolean | Yes (default: true) |
| linkedin_url | URL | No |
| sort_order | Integer | No |
| status | Enum: active/inactive | Yes |

---

### Collection: `partners` — الشركاء

| Field | Type | Required |
|-------|------|----------|
| id | UUID | auto |
| name | Text | Yes |
| logo | Image | Yes |
| logo_alt_ar | Text | Yes |
| url | URL | No |
| type | Enum: partner/funder/media | Yes |
| is_active | Boolean | Yes |
| sort_order | Integer | No |

---

### Collection: `pages` — صفحات ثابتة

| Field | Type | Required |
|-------|------|----------|
| id | UUID | auto |
| slug | Text | Yes | Matches URL path |
| title_ar | Text | Yes |
| body_ar | Rich Text | Yes |
| seo_description_ar | Text | No |
| last_updated | DateTime | auto |

**Covers:** /about/story, /about/transparency, /privacy, /terms, /accessibility, /press

---

### Collection: `site_settings` — إعدادات الموقع

| Field | Type | Notes |
|-------|------|-------|
| site_name_ar | Text | |
| tagline_ar | Text | |
| hero_headline_ar | Text | Editable from CMS |
| hero_body_ar | Text | |
| support_response_days | Integer | Used in form success copy |
| emergency_notice_ar | Text | Editable warning text |
| social_links | JSON | |
| analytics_enabled | Boolean | |
| maintenance_mode | Boolean | |

---

## CMS ROLES & PERMISSIONS

| Role | Access |
|------|--------|
| **admin** | All collections, all fields, all actions |
| **editorial** | campaigns, guide_articles, issues, observatory_reports, testimonies (published_quote only), pages (read+edit), team_members |
| **support_team** | support_requests (read+update status/notes only), testimonies (read all except contact_value) |
| **volunteer_coordinator** | team_members (read), get-involved submissions (read) |
| **read_only** | All public collections, read only |

**Rule:** No role except `admin` can see `contact_value` or full `testimony_text` without explicit need-to-know approval.

---

## MEDIA LIBRARY RULES

- All uploaded images must have Arabic alt text
- Faces in photos: require explicit consent flag before uploading
- Campaign visuals: tag with campaign slug
- Reports: PDFs only, under 10MB
- Max image width before compression: 2400px
- Accepted formats: JPEG, PNG, WebP, SVG (for logos only), PDF

---

## CMS CONTENT WORKFLOWS

### Guide Article Workflow:
`Draft → Review → Published`
- Only admin or editorial can publish

### Testimony Workflow:
`New → Reviewed → (Support Assigned if needed) → (Published if consent=yes) → Archived`
- Never auto-publish
- Published state requires explicit manual action

### Support Request Workflow:
`New → Assigned → In Progress → Closed`
- Never visible to non-support roles

### Campaign Workflow:
`Draft → Active → Archived`
