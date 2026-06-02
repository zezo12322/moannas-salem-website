# مؤنث سالم — Launch MVP Checklist

---

## HOW TO USE THIS CHECKLIST

Work through phases sequentially. Each phase must be complete before moving to the next.
Mark items with: ✅ Done | 🔄 In Progress | ⛔ Blocked | ⬜ Not Started

---

## PHASE 0: PROJECT SETUP

### Team & Access
- [ ] Define project team: PM, developer(s), designer, content editor, institution contact
- [ ] Set up shared project workspace (e.g., Notion, Linear)
- [ ] Set up secure communication channel for sensitive project decisions
- [ ] Define approval chain: who approves design, copy, go-live

### Technical Infrastructure
- [ ] Domain registered (moannas-salem.org or equivalent)
- [ ] Hosting provider selected (VPS / cloud — consider data sovereignty for Egyptian users)
- [ ] SSL certificate provisioned and auto-renew configured
- [ ] Repository created (private, access-controlled)
- [ ] Staging environment set up (separate from production)
- [ ] Backup strategy defined (daily automated backups, off-site copy)

### CMS Setup
- [ ] CMS selected (Directus or Sanity recommended)
- [ ] CMS installed on staging
- [ ] Database encrypted at rest confirmed with hosting provider
- [ ] Admin accounts created with 2FA enabled
- [ ] CMS roles configured (admin, editorial, support_team per `09-cms-content-model.md`)
- [ ] **Support requests collection isolated from public API** ✅ Non-negotiable

---

## PHASE 1: DESIGN

### Brand & Visual Identity
- [ ] Color palette applied to design tool (Figma/etc.)
- [ ] Typography loaded: IBM Plex Sans Arabic, Cairo, Inter
- [ ] Icon set selected (Phosphor Icons recommended)
- [ ] Logo concepts reviewed and selected by institution
- [ ] Logo files exported: SVG, PNG, white version, single-color version
- [ ] Brand guideline 1-pager finalized

### Design System
- [ ] Design tokens documented (see `08-design-system.md`)
- [ ] Component library built in Figma: buttons, cards, forms, navigation
- [ ] Mobile-first layouts designed for all P0 pages
- [ ] Desktop layouts designed for all P0 pages
- [ ] RTL layout verified for all components
- [ ] Design reviewed with institution and approved

### Accessibility Design Review
- [ ] All text: minimum 4.5:1 contrast ratio verified
- [ ] Focus states visible on all interactive elements
- [ ] Touch targets minimum 44×44px on mobile
- [ ] No color-only meaning used anywhere
- [ ] Form labels always above fields (never floating placeholder only)

---

## PHASE 2: CONTENT (P0 PAGES)

### Pages required before launch

- [ ] **Homepage (/)** — full copy, all sections (see `04-homepage-copy.md`)
- [ ] **اطلبي دعمًا آمنًا (/support)** — intro, option cards, safety callout
- [ ] **دعم نفسي (/support/mental-health)** — form + copy
- [ ] **دعم قانوني (/support/legal)** — form + copy
- [ ] **بلاغ/شهادة سرية (/support/report)** — form + copy
- [ ] **أسئلة شائعة عن السرية (/support/privacy-faq)** — all Q&A answered
- [ ] **دليل الحقوق (/guide)** — entry page + at least 3 articles
- [ ] **القصة (/about/story)** — institution fills: story, mission, vision, values, name explanation
- [ ] **سياسة الخصوصية (/privacy)** — reviewed by legal counsel
- [ ] **شروط الاستخدام (/terms)** — reviewed by legal counsel
- [ ] **تواصل معنا (/contact)** — contact info + form

### Content QA
- [ ] All Arabic text proofread by native speaker
- [ ] No victim-blaming language anywhere
- [ ] No emergency response implied without verified resource
- [ ] No publication implied without explicit consent flow
- [ ] All form microcopy matches `07-form-ux-copy.md`
- [ ] Privacy notices appear on every form page
- [ ] Emergency disclaimer appears on all /support pages

---

## PHASE 3: DEVELOPMENT

### Frontend
- [ ] RTL base setup (`dir="rtl"`, `lang="ar"`)
- [ ] Design system tokens implemented in CSS/Tailwind/styled-components
- [ ] All P0 pages built and match approved designs
- [ ] Mobile responsive: tested at 320px, 375px, 414px, 768px, 1024px, 1280px
- [ ] Font loading optimized (preload, fallback fonts)
- [ ] Images: WebP format, lazy loading, proper alt text in Arabic
- [ ] Page load speed: Core Web Vitals passing (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Forms
- [ ] Support request form — all fields, validation, success state, error state
- [ ] Testimony form — all fields, consent logic, success state
- [ ] Volunteer form — all fields, success state
- [ ] CSRF protection on all forms
- [ ] Rate limiting enabled (5 submissions/IP/hour)
- [ ] Honeypot field added for spam prevention
- [ ] Server-side validation on all required fields
- [ ] Form success messages match approved copy
- [ ] No sensitive data in response body or URL parameters

### Security
- [ ] HTTPS enforced, HTTP → HTTPS redirect
- [ ] HSTS header enabled
- [ ] Security headers configured: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- [ ] No stack traces in production error pages
- [ ] No sensitive data in JavaScript bundles or HTML source
- [ ] Support request API endpoint: not publicly accessible, auth required
- [ ] Database credentials not in version control (.env not committed)

### Analytics
- [ ] Privacy-respecting analytics installed (Plausible or self-hosted Matomo)
- [ ] IP anonymization enabled
- [ ] /support and /stories pages excluded from session recording (if any)
- [ ] Cookie notice implemented if any non-essential tracking

### SEO
- [ ] `<html lang="ar" dir="rtl">` on all pages
- [ ] Unique `<title>` and `<meta description>` on each page
- [ ] Open Graph tags for shareable pages (campaigns, reports)
- [ ] Sitemap.xml generated and submitted
- [ ] robots.txt configured (/support pages: consider noindex)
- [ ] Canonical URLs set

### Accessibility
- [ ] Keyboard navigation tested: can complete full support request flow by keyboard only
- [ ] Screen reader tested with NVDA or JAWS (Arabic content)
- [ ] Skip-to-main link implemented
- [ ] All images have alt text in Arabic
- [ ] All icons with no visible text have aria-label in Arabic
- [ ] Form errors announced to screen readers

---

## PHASE 4: TESTING

### Functional Testing
- [ ] Support request flow: end-to-end (submit → CMS receives → success shown)
- [ ] Testimony form flow: end-to-end
- [ ] All navigation links work
- [ ] 404 page displays correctly
- [ ] Mobile hamburger menu opens/closes
- [ ] Filter/search on /guide works
- [ ] PDF downloads work (if any at launch)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, iOS)
- [ ] Samsung Internet (Android — major browser in MENA)
- [ ] Edge (latest)

### Device Testing
- [ ] iPhone (Safari, small screen)
- [ ] Android mid-range phone
- [ ] iPad (tablet layout)
- [ ] Desktop 1280px+

### Content Review with Institution
- [ ] Institution team does full walkthrough of all P0 pages
- [ ] Institution approves all Arabic copy
- [ ] Form flows approved by institution leadership
- [ ] Privacy policy approved by legal counsel
- [ ] Emergency disclaimer wording approved

### Security Checks
- [ ] No open directory listing on server
- [ ] No development/test endpoints exposed in production
- [ ] Admin panel URL not guessable (not /admin or /cms)
- [ ] 2FA confirmed active on all CMS accounts
- [ ] Penetration test or security scan completed (OWASP ZAP or similar)

---

## PHASE 5: LAUNCH PREPARATION

### Pre-Launch
- [ ] DNS configured and propagated
- [ ] SSL certificate valid and showing correctly
- [ ] Production database separate from staging
- [ ] Backups confirmed working (test restore)
- [ ] Monitoring set up: uptime monitoring (UptimeRobot or similar)
- [ ] Error tracking set up (Sentry or similar — privacy-configured)
- [ ] CMS training done with institution team
- [ ] Editorial workflow documented for institution team
- [ ] Support team trained on receiving and handling form submissions
- [ ] Data handling policy shared internally with all team members

### Soft Launch (recommended)
- [ ] Share URL with small group (institution team + trusted reviewers)
- [ ] Collect feedback on usability, copy, flow
- [ ] Fix critical issues found
- [ ] Re-test after fixes

### Go Live
- [ ] Institution leadership gives final approval
- [ ] DNS switched to production
- [ ] Staging environment locked/protected
- [ ] Launch announcement prepared (institution handles)

---

## PHASE 6: POST-LAUNCH (30 DAYS)

- [ ] Monitor form submissions: confirm team is receiving and responding
- [ ] Monitor analytics: identify drop-off points in support flow
- [ ] Fix any bugs found in first 2 weeks
- [ ] Collect feedback from first real users (if possible, through support team)
- [ ] First content update: add Phase 2 pages (/issues, /campaigns, etc.)
- [ ] Review privacy FAQ: update if any questions came up from users
- [ ] Schedule first security review (1 month post-launch)

---

## MVP DEFINITION — WHAT "DONE" MEANS

The MVP is ready to launch when:

1. ✅ A woman in distress can find the support page and submit a request within 2 minutes
2. ✅ She clearly understands her data is confidential before submitting anything
3. ✅ The institution team receives and can respond to her request securely
4. ✅ The website is accessible on a mid-range Android phone with slow connection
5. ✅ No sensitive data is exposed in any API, HTML source, or error message
6. ✅ The privacy policy and terms are live and legally reviewed
7. ✅ At least 3 guide articles are published
8. ✅ The institution team can add content without a developer
9. ✅ SSL is valid and all security headers are in place
10. ✅ The institution's leadership has approved all copy and flows

---

## OUT OF SCOPE FOR MVP (Phase 2+)

- /stories (testimonies archive)
- /observatory (reports + data)
- /press page
- /get-involved full page
- English version
- Newsletter integration
- Donation/payment integration
- Advanced search
- Dark mode
- Progressive Web App (PWA)
