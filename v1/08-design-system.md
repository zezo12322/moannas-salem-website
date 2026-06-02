# مؤنث سالم — Design System Basics

---

## 1. DESIGN TOKENS

### Color Tokens

```css
/* Brand Colors */
--color-purple-900: #4B245E;    /* Deep Feminist Purple — primary */
--color-rose-500:   #C66B7D;    /* Warm Rose Clay — highlight */
--color-peach-300:  #F2B6A0;    /* Safe Peach — soft accent */
--color-paper:      #FAF5EF;    /* Soft Paper — main background */
--color-ink:        #211A22;    /* Ink Black — body text */
--color-green-600:  #4F7C68;    /* Trust Green — privacy/confirmation */
--color-amber-500:  #D9963D;    /* Care Amber — warnings only */

/* Semantic Aliases */
--color-bg-primary:     var(--color-paper);
--color-bg-secondary:   #F0E9E0; /* slightly warmer for alternating sections */
--color-bg-inverse:     var(--color-purple-900);
--color-text-primary:   var(--color-ink);
--color-text-inverse:   #FFFFFF;
--color-text-muted:     #6B5D6E; /* muted purple-toned gray */
--color-border:         #DDD3CC;
--color-border-focus:   var(--color-purple-900);
--color-success:        var(--color-green-600);
--color-warning:        var(--color-amber-500);
--color-error:          #C0392B;

/* Interactive */
--color-cta-primary-bg:    var(--color-purple-900);
--color-cta-primary-text:  #FFFFFF;
--color-cta-primary-hover: #3A1A4A; /* darker purple */
--color-cta-secondary-bg:  transparent;
--color-cta-secondary-border: var(--color-purple-900);
--color-cta-secondary-text:   var(--color-purple-900);
--color-card-hover:        rgba(198, 107, 125, 0.08); /* Rose Clay tint */
```

---

### Typography Tokens

```css
/* Font Families */
--font-arabic-primary:   'IBM Plex Sans Arabic', 'Cairo', 'Noto Sans Arabic', sans-serif;
--font-arabic-display:   'Cairo', 'IBM Plex Sans Arabic', sans-serif;
--font-english:          'Inter', 'IBM Plex Sans', sans-serif;

/* Font Sizes — Arabic scale */
--text-xs:    12px;
--text-sm:    14px;
--text-base:  17px;
--text-lg:    20px;
--text-xl:    24px;
--text-2xl:   32px;
--text-3xl:   42px;
--text-4xl:   52px;

/* Font Weights */
--weight-regular: 400;
--weight-medium:  500;
--weight-semibold: 600;
--weight-bold:    700;

/* Line Heights — generous for Arabic */
--leading-tight:  1.3;
--leading-normal: 1.6;
--leading-arabic: 1.9;   /* body text in Arabic */
--leading-heading: 1.3;

/* Letter Spacing */
--tracking-tight:  -0.01em;
--tracking-normal: 0;

/* Type Scale Usage */
/* H1: text-3xl/text-4xl, weight-bold, leading-heading */
/* H2: text-2xl/text-3xl, weight-semibold, leading-heading */
/* H3: text-xl, weight-semibold */
/* Body: text-base, weight-regular, leading-arabic */
/* Small/Label: text-sm, weight-medium */
/* Microcopy: text-xs, weight-regular */
```

---

### Spacing Tokens

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;

/* Section vertical spacing */
--section-gap-mobile:  var(--space-12); /* 48px */
--section-gap-desktop: var(--space-20); /* 80px */

/* Card padding */
--card-padding-sm: var(--space-4) var(--space-5);
--card-padding-md: var(--space-6) var(--space-8);
```

---

### Border Radius Tokens

```css
--radius-sm:   6px;
--radius-md:   12px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-full: 9999px;  /* pills, badges */
```

---

### Shadow Tokens

```css
--shadow-sm:  0 1px 3px rgba(33, 26, 34, 0.08);
--shadow-md:  0 4px 12px rgba(33, 26, 34, 0.10);
--shadow-lg:  0 8px 24px rgba(33, 26, 34, 0.12);
--shadow-card: var(--shadow-sm);
--shadow-card-hover: var(--shadow-md);
```

---

### Breakpoints

```css
--breakpoint-sm:  480px;   /* mobile large */
--breakpoint-md:  768px;   /* tablet */
--breakpoint-lg:  1024px;  /* desktop */
--breakpoint-xl:  1280px;  /* wide desktop */
```

---

### Transition Tokens

```css
--transition-fast:   150ms ease-in-out;
--transition-normal: 250ms ease-in-out;
--transition-slow:   400ms ease-in-out;
```

---

## 2. TYPOGRAPHY SYSTEM

### Type Styles

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Display | 52px | 700 | 1.2 | Hero H1 on desktop |
| H1 | 42px | 700 | 1.3 | Page titles on desktop |
| H1 Mobile | 32px | 700 | 1.3 | H1 on mobile |
| H2 | 32px | 600 | 1.3 | Section titles |
| H3 | 24px | 600 | 1.4 | Card titles, subsections |
| Body Large | 20px | 400 | 1.9 | Hero subheadline, intros |
| Body | 17px | 400 | 1.9 | All body text |
| Body Small | 14px | 400 | 1.7 | Secondary descriptions |
| Label | 14px | 500 | 1.5 | Form labels, tags |
| Caption | 12px | 400 | 1.5 | Captions, microcopy |

---

## 3. BUTTON SYSTEM

### Primary Button
```
Background: --color-purple-900
Text: white
Border: none
Padding: 14px 28px
Radius: --radius-full (pill)
Font: --text-base, --weight-semibold
Hover: --color-cta-primary-hover
Focus: 3px offset outline in purple (accessibility)
```

### Secondary Button (Outlined)
```
Background: transparent
Text: --color-purple-900
Border: 2px solid --color-purple-900
Padding: 12px 26px
Radius: --radius-full
Hover: Background rgba(75,36,94,0.06)
```

### Text Button / Link
```
Color: --color-purple-900
Underline: none by default, underline on hover
Font: --weight-medium
Icon: → (left arrow in RTL direction = ←)
```

### Destructive (used only for delete actions)
```
Background: --color-error
Text: white
Same sizing as Primary
```

### Disabled state (all variants)
```
Opacity: 0.5
Cursor: not-allowed
```

---

## 4. FORM SYSTEM

### Input Field
```
Height: 48px (text input)
Border: 1.5px solid --color-border
Radius: --radius-md
Padding: 12px 16px
Font: --text-base
Focus: border-color --color-border-focus + box-shadow 0 0 0 3px rgba(75,36,94,0.15)
Error: border-color --color-error + red message below
Background: white
```

### Textarea
```
Min-height: 120px
Same border/focus as input
Resize: vertical only
```

### Label
```
Display: block above input (never inside)
Font: --text-sm, --weight-medium
Color: --color-text-primary
Margin-bottom: --space-2
```

### Error Message
```
Font: --text-sm, --weight-regular
Color: --color-error
Margin-top: --space-1
Icon: ⚠️ before text
```

### Helper Text
```
Font: --text-xs
Color: --color-text-muted
Margin-top: --space-1
```

---

## 5. CARD SYSTEM

### Base Card
```
Background: white
Border: 1px solid --color-border
Radius: --radius-lg
Shadow: --shadow-card
Padding: --card-padding-md
Hover: --shadow-card-hover + background --color-card-hover
Transition: --transition-normal
```

### Highlight Card (support/issue cards)
```
Background: --color-paper
Left border (in RTL = right border): 4px solid --color-rose-500
Radius: --radius-md
```

### Privacy/Trust Card
```
Background: rgba(79, 124, 104, 0.08)
Border: 1px solid --color-green-600
Radius: --radius-md
Icon: 🔒
```

### Warning Card
```
Background: rgba(217, 150, 61, 0.08)
Border: 1px solid --color-amber-500
Radius: --radius-md
Icon: ⚠️
```

---

## 6. ACCESSIBILITY REQUIREMENTS

- Color contrast: minimum 4.5:1 for text (WCAG AA)
- Focus indicators: visible 3px outline on all interactive elements
- All images: descriptive alt text in Arabic
- All icons used alone: aria-label in Arabic
- Form fields: explicit label association (for/id)
- No color-only meaning: always pair color with icon or text
- Keyboard navigation: full support throughout
- Skip-to-main link: visually hidden, keyboard-visible
- Font size minimum: 14px for any readable text
- Touch targets minimum: 44×44px on mobile

---

## 7. RTL SPECIFICS

- `dir="rtl"` on `<html>` element
- `lang="ar"` on `<html>` element
- All flexbox/grid: use `start`/`end` instead of `left`/`right`
- Icons: directional icons (arrows, chevrons) flip in RTL via `transform: scaleX(-1)` or use RTL-specific SVGs
- Text alignment: `text-align: start` (not `right`)
- Margins/paddings: use logical properties (`margin-inline-start`, `padding-inline-end`)
- Form elements: right-aligned by default, labels right-to-left
- Scroll direction: RTL horizontal scrollers scroll from right

---

## 8. DARK MODE

Not required for MVP. Consider for Phase 2.
If implemented: use a warm dark palette — dark purple tones, not gray.

---

## 9. ICON SYSTEM

**Recommended:** Phosphor Icons (MIT license, Arabic-friendly, good RTL shapes)

| Icon | Usage |
|------|-------|
| Lock | Privacy/confidentiality |
| Eye-slash | Anonymity |
| Heart | Psychosocial support |
| Scale | Legal support |
| Shield | Digital safety |
| Notebook | Testimony |
| Users | Community / team |
| ArrowLeft (RTL: →) | Navigation / CTA |
| Warning | Emergency / care amber |
| CheckCircle | Success / trust |
| MagnifyingGlass | Search |
| X | Close / dismiss |

All icons used without visible text must have `aria-label` in Arabic.
