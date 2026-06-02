# مؤنث سالم — Safety & Privacy Notes

---

## WHY THIS DOCUMENT EXISTS

This website handles sensitive personal data from women who may be in vulnerable situations. A data breach, accidental exposure, or insecure form could:
- Put a woman's safety at risk
- Destroy trust in the institution
- Have legal consequences
- Expose women to retaliation from their employers

Every technical and content decision must be reviewed through a privacy-and-safety lens.

---

## SECTION 1: DATA MINIMIZATION

**Principle:** Collect only what is strictly necessary to deliver support.

### Support Request Form
- Do NOT collect: full name, national ID, employer name, exact address
- DO collect: pseudonym, safe contact method, support type, urgency indicator
- Optional fields are truly optional — never require them to submit

### Testimony Form
- Do NOT collect: full name unless volunteered, workplace name unless volunteered
- DO collect: pseudonym, consent status, violation category, testimony text
- Approximate date (month + year) is sufficient — never require exact date

### Volunteer Form
- Full name and email acceptable (professional context, lower risk)
- No sensitive personal data needed

---

## SECTION 2: CONSENT ARCHITECTURE

**Every form must include:**

1. **Pre-form privacy notice** (Trust Green strip) — before any fields
2. **Explicit consent checkbox** (required) — links to full privacy policy
3. **Publication consent** (testimony form) — separate from privacy consent
4. **No implied consent** — submission ≠ consent to publish or share

### Publication consent levels (testimony):
- `yes` — Can publish anonymized quote (still requires team review before publishing)
- `no` — Internal documentation only, never publish any part
- `pending` — Team will follow up to clarify

**Non-negotiable:** Publishing is NEVER automatic. Always requires:
1. Explicit consent on file
2. Manual team review
3. Full identity removal
4. Optional: showing the anonymized version to the submitter before publishing

---

## SECTION 3: DATA STORAGE SECURITY

### CMS Architecture
- Support requests and testimonies must be stored in a **restricted database**, NOT in the same accessible CMS tables as public content
- Use row-level security or separate database roles
- API keys for public frontend must NOT have read access to `support_requests` or `testimonies.contact_value`

### Sensitive Fields
| Field | Classification | Access Rule |
|-------|---------------|-------------|
| contact_value (phone/email) | HIGH RISK | Admin + support team only, never in API |
| testimony_text | SENSITIVE | Support team + admin only |
| support description | SENSITIVE | Support team + admin only |
| pseudonym | LOW RISK | Editorial can see in published context only |
| violation type | MEDIUM | Support team + admin |

### At-Rest Encryption
- Database should be encrypted at rest
- Hosting provider must support encrypted storage
- Backups must also be encrypted

### At-Transit Encryption
- SSL/TLS required — non-negotiable
- HTTPS everywhere, HTTP redirects to HTTPS
- HSTS header enabled

---

## SECTION 4: FORM SECURITY

### Technical measures:
- CSRF protection on all forms
- Rate limiting: max 5 submissions per IP per hour
- Honeypot fields for spam prevention
- No CAPTCHA that creates barriers for users (consider invisible reCAPTCHA or Cloudflare Turnstile)
- Server-side validation on all fields
- Error messages: never reveal database/field details

### Submission handling:
- No email auto-responder with sensitive content (confirmation emails should say nothing about the content of the request)
- Submission notifications to team should use internal secure channel — NOT forwarded to Gmail/personal email
- Consider: encrypted notification to a dedicated secure inbox

---

## SECTION 5: ANALYTICS & TRACKING

### Default policy: Minimal tracking
- No Facebook Pixel
- No Google Ads tracking
- No cross-site tracking cookies

### Acceptable:
- Privacy-respecting analytics: Plausible Analytics or Fathom (no personal data, no cookies requiring consent)
- OR: Self-hosted Matomo (with anonymized IPs and no fingerprinting)
- Session recording tools (Hotjar etc.): **NOT on /support or /stories pages** — these pages must be excluded from any recording

### Cookie consent:
- First-party functional cookies: no consent required
- Any analytics: require notice (even privacy-respecting ones)
- No third-party advertising cookies ever

---

## SECTION 6: ACCESS CONTROL

### Website Admin Panel:
- 2FA required for all CMS admin accounts
- No shared accounts — each team member has their own login
- Session timeout: 30 minutes of inactivity
- Password policy: minimum 12 characters, no common passwords

### Data Access Audit:
- Log who accessed support requests and testimonies
- Monthly review of access logs recommended

### Offboarding:
- Revoke CMS access immediately when a team member leaves
- Change shared passwords (if any) upon departure

---

## SECTION 7: USER-FACING SAFETY FEATURES

### Browser history protection (optional but recommended):
- Add a "quick exit" button on /support and /stories pages
- Clicking it navigates the user to a neutral external site (e.g., Google) and clears local browsing history for the current page
- Label: "خروج سريع ←" (visible, top corner of screen)
- This is a common feature on domestic violence / feminist support websites

### Safe browsing note (on /support page):
> تلميح: إذا كنتِ تستخدمين جهاز مشترك، يمكنك استخدام نافذة التصفح الخاص (Incognito / Private Mode) للحفاظ على خصوصيتك.

### Emergency disclaimer:
> ⚠️ إذا كنتِ في خطر فوري أو جسدي، تواصلي مع الطوارئ أو جهة أمان محلية مناسبة. مؤنث سالم ليست خط أزمات فوريًا.

**Note:** Do NOT include a specific phone number in this disclaimer unless the institution has a verified, always-available emergency resource to point to.

---

## SECTION 8: DATA RETENTION POLICY

Define and publish a data retention policy. Suggested minimums:

| Data Type | Retention Period | Disposal Method |
|-----------|-----------------|-----------------|
| Support requests (closed) | 2 years from closure | Secure deletion |
| Testimonies (no consent) | 3 years from receipt | Secure deletion or anonymization |
| Testimonies (published consent) | Indefinite (anonymized only) | N/A |
| Form submissions (spam/incomplete) | 30 days | Auto-delete |
| Analytics data | 12 months rolling | Auto-deletion in tool |
| Access logs | 6 months | Overwrite |

**Communicate to users:** The privacy FAQ should state the retention period clearly.

---

## SECTION 9: LEGAL COMPLIANCE

### Egyptian Law Considerations:
- Law 151 of 2020 (Personal Data Protection Law) is in effect in Egypt
- Requires: legal basis for processing, user rights (access, deletion, correction), data breach notification within 72 hours
- Requires: a designated person responsible for data protection if processing sensitive data

### Privacy Policy must include:
- What data is collected
- Why it is collected (legal basis)
- Who has access
- How long it is retained
- User rights: access, correction, deletion
- How to exercise rights
- Contact for privacy concerns
- Last updated date

### Terms of Use must include:
- Content is informational, not legal advice
- Institution's liability limitations
- Rules for using the testimony/report platform

---

## SECTION 10: INCIDENT RESPONSE

### If a data breach occurs:
1. Immediately revoke compromised credentials
2. Assess scope: what data, how many people affected
3. Notify Egyptian Personal Data Protection Center (PDPC) within 72 hours
4. Notify affected individuals if their sensitive data was exposed
5. Issue internal incident report
6. Update security measures to prevent recurrence

### Pre-build checklist for tech team:
- [ ] SSL certificate installed and auto-renewing
- [ ] Database encrypted at rest
- [ ] CMS admin 2FA enabled
- [ ] Support request API endpoint not publicly accessible
- [ ] Form rate limiting enabled
- [ ] CSRF tokens on all forms
- [ ] No sensitive data in frontend JavaScript bundles
- [ ] Error pages don't expose stack traces
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Penetration test or security audit before launch

---

## SUMMARY: THE SAFETY PROMISE

Every woman who uses this website must be able to trust that:
1. Her data will not be shared without consent
2. Her story will not be published without her approval
3. Her contact information will not be exposed
4. The website itself will not track or surveil her beyond what's necessary
5. She can withdraw her data at any time
6. If something goes wrong, the institution will be transparent about it

**This is not a legal compliance exercise. It is a feminist commitment.**
