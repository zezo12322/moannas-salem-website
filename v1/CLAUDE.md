# CLAUDE.md — مؤسسة مؤنث سالم للتنمية
## Website Project Instructions

---

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS (RTL configured)
- MDX for content
- Google Fonts: Cairo + Tajawal

## CRITICAL: RTL Rules
- كل component: `dir="rtl"` على الـ root element
- `lang="ar"` على الـ html tag
- Tailwind: استخدم `rtl:` prefix للـ directional utilities
- لا تستخدم `float`, استخدم `flex` و `grid`
- Icons: flip على RTL إذا directional

## Brand Colors — لا تغير
```css
--color-primary:   #1E3A8A;  /* كحلي */
--color-secondary: #F5A623;  /* ذهبي */
--color-accent:    #7C3AED;  /* بنفسجي */
--color-bg:        #FFF8ED;  /* كريمي */
--color-surface:   #F9F6F0;  /* بيج */
--color-dark-red:  #8B1A1A;  /* بني-أحمر من الخطة الاستراتيجية */
```

## Tailwind Config
```js
theme: {
  extend: {
    colors: {
      primary: '#1E3A8A',
      secondary: '#F5A623',
      accent: '#7C3AED',
      bg: '#FFF8ED',
      surface: '#F9F6F0',
    },
    fontFamily: {
      cairo: ['Cairo', 'sans-serif'],
      tajawal: ['Tajawal', 'sans-serif'],
    }
  }
}
```

## Typography
- `font-cairo font-bold`   → H1, H2, campaign headlines
- `font-cairo font-medium` → H3, subheadings, card titles
- `font-tajawal`           → body text, descriptions, articles

## Content Rules
- كل المحتوى في `/content/` كـ MDX files
- الحملات لها `/content/campaigns/[slug].mdx`
- الشهادات في `/content/testimonials/`
- لا placeholder content — حقيقي بس
- اللغة: فصحى مبسطة في الموقع (مش عامية)

## Mobile First
- Breakpoints: 375px → 768px → 1024px → 1280px
- الجمهور 90%+ موبايل

## Performance
- Images: next/image مع WebP
- Fonts: next/font مع preload
- LCP target: < 2.5s

## NO-NOs
- لا Inter أو Roboto أو system fonts
- لا placeholder lorem ipsum
- لا gradients تقيلة في hero
- لا animations مبالغ فيها