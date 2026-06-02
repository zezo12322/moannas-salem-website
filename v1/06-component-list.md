# مؤنث سالم — Component List

---

## COMPONENT LIBRARY OVERVIEW

All components are designed Arabic-first (RTL), mobile-first, WCAG 2.1 AA compliant.

---

## 1. NAVIGATION COMPONENTS

### NavBar
- Logo (SVG, left-aligned in RTL layout = right side of screen)
- Nav links (horizontal on desktop, hamburger on mobile)
- Primary CTA button (always visible)
- Sticky on scroll (reduced height)
- **Variants:** Light (on Paper background), Dark (on Purple background)

### MobileNavDrawer
- Slides in from right (RTL)
- Full-height overlay
- Close button (X)
- All nav links stacked
- Primary CTA at bottom

### Breadcrumbs
- RTL arrow direction
- Used on all inner pages
- **Example:** الرئيسية ← دليل الحقوق ← للصحفيات

---

## 2. HERO COMPONENTS

### HeroFull
- Full-width, min-height 80vh
- H1 + subheadline + CTA group
- Illustration or abstract visual (right side on desktop, behind text on mobile)
- Trust signal bar below CTAs

### HeroSection (inner pages)
- Reduced height — 40vh
- Page title + breadcrumbs
- Short description
- Single CTA

---

## 3. CARD COMPONENTS

### SupportCard
- Icon (SVG, accessible)
- Title (bold)
- 1-sentence description
- Arrow CTA link
- Hover state: Rose Clay tint + slight elevation
- **Used in:** Quick Support section, /support page

### IssueCard
- Category tag
- Title
- Short description
- CTA link
- Image/illustration slot (optional)
- **Used in:** Issues section, /issues pages

### CampaignCard
- Campaign visual (illustration or photo)
- Title
- 2-line context
- Status badge (جارية / منتهية)
- CTA
- **Used in:** Campaigns section, /campaigns archive

### GuideArticleCard
- Category chip (color-coded per category)
- Title
- Estimated reading time
- Date
- **Used in:** Guide section, /guide pages

### ReportCard
- Publication date
- Title
- Summary (2 lines)
- Download PDF button
- **Used in:** Observatory section

### TestimonyQuote
- Anonymized quote (italic)
- Pseudonym or role (e.g., "صحفية من القاهرة")
- Year
- No photo ever
- **Used in:** /stories, Homepage testimonies strip

---

## 4. FORM COMPONENTS

### FormField
- Label (above field, always visible — never placeholder-only)
- Required indicator (*)
- Input / Textarea / Select / Radio
- Error state (inline, red border + message)
- Helper text (below field, muted)

### FormSection
- Section title
- Optional description
- Grouped FormFields

### PrivacyNotice (inline)
- Lock icon
- Short privacy statement
- Link to full privacy FAQ
- **Trust Green (#4F7C68) background strip**
- Appears at top of every form

### SafetyCallout
- Warning icon (Care Amber)
- Emergency disclaimer
- Always appears on /support forms
- **Text:** "إذا كنتِ في خطر فوري، تواصلي مع جهة طوارئ محلية مناسبة."

### ConsentCheckbox
- Custom styled checkbox
- Required field
- Links to privacy policy
- **Used in:** All forms

### FormSubmitButton
- Full-width on mobile
- Loading state (spinner)
- Success state (checkmark + success message)
- Error state (inline message, no page reload)

### SuccessConfirmation
- Trust Green background
- Checkmark icon
- Confirmation message
- Next steps (what happens next)
- **Example:** "استلمنا طلبك. سيتواصل معكِ أحد أعضاء الفريق خلال [X] يوم عمل."

---

## 5. CONTENT COMPONENTS

### SectionHeader
- Eyebrow label (small, caps, category color)
- H2 title
- Optional subtitle
- Optional CTA link (right-aligned / end-aligned in RTL)

### ArticleBody
- Rich text renderer
- Supports: headings, body, lists, callouts, links, quotes
- Arabic-optimized line height (1.9)
- **No support for:** tables on mobile (use alternatives)

### CalloutBox
- **Types:** Info (blue tint), Warning (amber), Privacy (green), Important (purple)
- Icon + title + body
- Used within article pages

### DownloadButton
- File type badge (PDF, DOCX)
- File name
- File size
- Download arrow icon
- **Used in:** Guide templates, Reports

### StatHighlight
- Large number / percentage
- Label
- Source citation (small)
- **Used in:** Observatory, Homepage indicators

### PartnerLogoGrid
- Logos in a wrapped grid
- Grayscale default, color on hover
- Alt text for each logo
- **Used in:** /about/transparency

---

## 6. NAVIGATION / UX COMPONENTS

### FilterChips
- Horizontal scrollable on mobile
- Each chip = category filter
- Active state: filled purple
- **Used in:** /guide, /campaigns

### SearchBar
- RTL input
- Magnifier icon (left in RTL = leading)
- Clear button (X)
- **Used in:** /guide entry page

### Pagination
- RTL arrow direction
- Page number display
- **Used in:** Guide, Reports archive

### AccordionFAQ
- Question as trigger
- Answer expands below
- Animated (200ms)
- **Used in:** /support/privacy-faq, /issues pages

### Tabs
- RTL tab order
- Active underline in purple
- **Used in:** /guide, /observatory

---

## 7. TRUST & SAFETY COMPONENTS

### PrivacyBadge
- Lock icon + "بياناتك سرية"
- Trust Green color
- Appears on all /support pages near forms

### AnonymityBadge
- Eye-slash icon + "يمكنك استخدام اسم مستعار"
- Used in hero and form entry points

### PublicationConsentBadge
- No-publish icon + "لا نشر دون موافقتك"
- Used on testimony-related pages

### EmergencyCallout (prominent)
- Care Amber background
- ⚠️ icon
- Emergency text
- Not a phone number (unless the institution provides one)

---

## 8. LAYOUT COMPONENTS

### PageWrapper
- Max-width: 1200px centered
- RTL document direction
- Padding: 16px (mobile), 32px (tablet), 48px (desktop)

### SectionWrapper
- Consistent vertical spacing between sections (80px desktop, 48px mobile)

### TwoColumnLayout
- 60/40 split on desktop
- Stacks to single column on mobile

### CardGrid
- Responsive: 1 col mobile, 2 col tablet, 3-4 col desktop
- CSS Grid based
- Gap: 24px

---

## 9. UTILITY COMPONENTS

### LanguageSwitcher
- AR / EN toggle
- Minimal, in NavBar or footer

### SkipToMain (accessibility)
- Visually hidden, keyboard-visible
- Jumps to main content

### CookieConsent
- Minimal, bottom bar
- Links to privacy policy
- No optional tracking until consent

### 404 Page
- Warm, non-alarming
- "الصفحة غير موجودة"
- Link back to homepage and support page

### LoadingSpinner
- Subtle, purple
- Used during form submissions and page transitions

---

## COMPONENT PRIORITY FOR MVP

| Priority | Components |
|----------|-----------|
| P0 — Must Launch | NavBar, MobileNavDrawer, HeroFull, SupportCard, FormField, PrivacyNotice, SafetyCallout, ConsentCheckbox, FormSubmitButton, SuccessConfirmation, PrivacyBadge, AnonymityBadge, PublicationConsentBadge |
| P1 — High Value | IssueCard, CampaignCard, GuideArticleCard, SectionHeader, ArticleBody, CalloutBox, AccordionFAQ, FilterChips, SearchBar |
| P2 — Growth | ReportCard, TestimonyQuote, StatHighlight, PartnerLogoGrid, Pagination, Tabs, DownloadButton |
