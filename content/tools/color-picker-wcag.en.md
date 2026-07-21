---
title: "Color Picker & WCAG Contrast Checker - Free Accessibility Tool"
description: "Free color picker with WCAG contrast checker. Pick colors in HEX, RGB, HSL, or HSV and instantly verify AA/AAA accessibility. No signup."
slug: color-picker-wcag
categories: 
    - "Design Tools"
    - "Web Development"
    - "Accessibility"
tags: 
    - "color picker"
    - "wcag"
    - "contrast checker"
    - "accessibility"
    - "hex to rgb"
    - "hsl"
    - "a11y"
date: 2026-07-21
draft: false
weight: 5
---

<!-- WebApplication schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Color Picker & WCAG Contrast Checker",
  "url": "https://www.webpenson.com/tools/color-picker-wcag/",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any (Web Browser)",
  "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Pick colors in HEX, RGB, HSL, or HSV and verify WCAG 2.1 AA/AAA contrast ratio compliance against any background. Free, runs entirely in the browser."
}
</script>

<!-- FAQPage schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is WCAG and why does contrast matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility maintained by the W3C. Contrast ratio measures how distinguishable foreground text is from its background — failing this metric is the #1 reason users with low vision, color blindness, or temporary impairments (sun glare, low battery) cannot read your site. WCAG 2.1 AA compliance is also required by ADA Title III in the US, the European Accessibility Act (June 2025), and EN 301 549."
      }
    },
    {
      "@type": "Question",
      "name": "What does a 4.5:1 contrast ratio actually mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a luminance ratio: the foreground color's relative brightness divided by the background's. A ratio of 4.5:1 means the lighter color is 4.5x more luminous than the darker one. The higher the number, the easier the text is to read. WCAG 2.1 SC 1.4.3 requires 4.5:1 for normal body text (AA) and 7:1 for AAA-level compliance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between WCAG AA and AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AA is the legal minimum in most jurisdictions — 4.5:1 for normal text and 3:1 for large text (18pt regular or 14pt bold). AAA is the gold standard for highly accessible content — 7:1 for normal text and 4.5:1 for large. Aim for AA across the board; reserve AAA for body content where reading ease is critical (government, healthcare, K-12, long-form reading)."
      }
    },
    {
      "@type": "Question",
      "name": "When is WCAG contrast compliance required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any site serving users in regions with accessibility law: US (ADA Title III after the 2024 rule update), EU (European Accessibility Act, June 2025), Canada (ACA), UK (Equality Act 2010), Japan (JIS X 8341), Australia (DDA). Practically: if you sell to consumers, run SaaS, or operate in B2B with public-facing pages, AA contrast is non-negotiable. WCAG 2.1 AA is the de facto global baseline."
      }
    },
    {
      "@type": "Question",
      "name": "HEX vs RGB vs HSL vs HSV — which should I use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HEX (#FF5733) is shorthand for designers sharing in Slack or Figma. RGB (255, 87, 51) maps directly to screens and CSS rgb() / rgba(). HSL (hsl(11, 100%, 60%)) is the most human-readable — hue, saturation, lightness — and is easiest to adjust programmatically (e.g., generating accessible hover states by tweaking L). HSV is common in design tools but rarely used in CSS. For accessibility work, HSL gives you the most intuitive control over the lightness dimension that drives WCAG contrast."
      }
    },
    {
      "@type": "Question",
      "name": "Where does the 3:1 rule for large text come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WCAG defines 'large text' as 18pt regular (about 24px) or 14pt bold (about 18.67px bold). At that size the eye reads shapes rather than fine strokes, so the contrast threshold drops from 4.5:1 to 3:1. The 18pt threshold traces back to typography research on legibility and is codified in WCAG 2.1 SC 1.4.3. Headlines, hero text, and large buttons typically qualify; body copy and form labels do not."
      }
    },
    {
      "@type": "Question",
      "name": "How does this tool help designers and developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Designers get instant feedback on color decisions without alt-tabbing to a separate contrast checker — pick a brand color, drop in a background, see AA/AAA badges update live as you tweak. Developers get copy-ready HEX, RGB, and HSL values for CSS with no manual conversion. The preset palette gives a starting point for accessible UI when no design system is in place yet, and the WCAG check runs against your actual pair — not a generic 'this color is safe' claim."
      }
    }
  ]
}
</script>

{{< color-picker-wcag >}}

## Pick Colors and Verify WCAG Contrast in One Place

Color Picker & WCAG Contrast Checker is a free in-browser tool that combines a full color picker with a live WCAG 2.1 contrast ratio checker. Designers and developers use it to pick colors in **HEX, RGB, HSL, or HSV**, see every format update in real time, and immediately know whether the foreground/background pair passes AA or AAA for both normal and large text — no tab-switching, no mental math, no separate "is this accessible?" tool.

### Who Is This Tool For?

- **UI/UX designers** choosing brand colors and need to validate palettes before handoff
- **Frontend developers** implementing designs and want to verify contrast directly in the browser
- **Accessibility auditors** running quick spot-checks during WCAG reviews
- **Content creators** writing blog posts, slide decks, or marketing pages where readability matters

### Why Not Just Use Chrome DevTools?

Chrome DevTools shows you a single color value and a small "accessibility" hint, but it does not give you a side-by-side format view, does not show the full WCAG AA/AAA breakdown for normal vs large text, and does not let you copy the value in your preferred format. This tool does all of that on a single screen, with a preset palette of accessibility-safe pairs as a starting point.

## Core Features

1. **Multi-format color input** — type or paste HEX (#FF5733), RGB (rgb(255, 87, 51)), HSL (hsl(11, 100%, 60%)) or HSV and watch all four formats update in sync.
2. **Visual color picker** — drag a hue/saturation square and a lightness slider for hands-on exploration; current selection reflected in HEX/RGB/HSL/HSV readouts.
3. **Dual foreground + background inputs** — pick any two colors and see them rendered together in a live preview pane (normal text, large text, and a UI button sample).
4. **WCAG 2.1 contrast ratio** — instant numerical ratio (e.g., 4.87:1) with pass/fail badges for AA normal, AA large, AAA normal, and AAA large — all four checks at once.
5. **Preset accessibility-safe palette** — curated set of foreground/background pairs that pass AA or AAA, one-click to load when you do not have a brand color yet.
6. **One-click copy** — copy any format (HEX, RGB, HSL, HSV) to clipboard in a single click, formatted and ready to paste into CSS or Figma.
7. **100% client-side** — no upload, no signup, no tracking; color math runs in your browser and never touches a server.

## Quick Start

1. **Pick a foreground color** — use the color square, type a HEX/RGB/HSL value, or click any preset.
2. **Pick a background color** — repeat the same steps for the second picker.
3. **Read the contrast panel** — see the ratio and the four AA/AAA badges (normal text + large text) light up green or red.
4. **Copy the format you need** — click the HEX, RGB, HSL, or HSV value to copy it to your clipboard.

## When to Reach for This Tool

- During design system work, when you are deciding primary / secondary / muted text colors and need them to pass AA.
- When QA-ing a Figma handoff — verify the spec'd pairs are actually compliant before pushing to engineering.
- When fixing an existing site — paste the current text color and background color into the tool to confirm whether they pass.
- When generating design tokens — use the preset palette as a starting point and tweak HSL lightness until each tier (primary / secondary / muted / disabled) maintains AA.

## Frequently Asked Questions (FAQ)

### What is WCAG and why does contrast matter?

WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility maintained by the W3C. Contrast ratio measures how distinguishable foreground text is from its background — failing this metric is the #1 reason users with low vision, color blindness, or temporary impairments (sun glare, low battery) cannot read your site. WCAG 2.1 AA compliance is also required by ADA Title III in the US, the European Accessibility Act (June 2025), and EN 301 549.

### What does a 4.5:1 contrast ratio actually mean?

It is a luminance ratio: the foreground color's relative brightness divided by the background's. A ratio of 4.5:1 means the lighter color is 4.5x more luminous than the darker one. The higher the number, the easier the text is to read. WCAG 2.1 SC 1.4.3 requires 4.5:1 for normal body text (AA) and 7:1 for AAA-level compliance.

### What is the difference between WCAG AA and AAA?

AA is the legal minimum in most jurisdictions — 4.5:1 for normal text and 3:1 for large text (18pt regular or 14pt bold). AAA is the gold standard for highly accessible content — 7:1 for normal text and 4.5:1 for large. Aim for AA across the board; reserve AAA for body content where reading ease is critical (government, healthcare, K-12, long-form reading).

### When is WCAG contrast compliance required?

Any site serving users in regions with accessibility law: US (ADA Title III after the 2024 rule update), EU (European Accessibility Act, June 2025), Canada (ACA), UK (Equality Act 2010), Japan (JIS X 8341), Australia (DDA). Practically: if you sell to consumers, run SaaS, or operate in B2B with public-facing pages, AA contrast is non-negotiable. WCAG 2.1 AA is the de facto global baseline.

### HEX vs RGB vs HSL vs HSV — which should I use?

HEX (#FF5733) is shorthand for designers sharing in Slack or Figma. RGB (255, 87, 51) maps directly to screens and CSS rgb() / rgba(). HSL (hsl(11, 100%, 60%)) is the most human-readable — hue, saturation, lightness — and is easiest to adjust programmatically (e.g., generating accessible hover states by tweaking L). HSV is common in design tools but rarely used in CSS. For accessibility work, HSL gives you the most intuitive control over the lightness dimension that drives WCAG contrast.

### Where does the 3:1 rule for large text come from?

WCAG defines "large text" as 18pt regular (about 24px) or 14pt bold (about 18.67px bold). At that size the eye reads shapes rather than fine strokes, so the contrast threshold drops from 4.5:1 to 3:1. The 18pt threshold traces back to typography research on legibility and is codified in WCAG 2.1 SC 1.4.3. Headlines, hero text, and large buttons typically qualify; body copy and form labels do not.

### How does this tool help designers and developers?

Designers get instant feedback on color decisions without alt-tabbing to a separate contrast checker — pick a brand color, drop in a background, see AA/AAA badges update live as you tweak. Developers get copy-ready HEX, RGB, and HSL values for CSS with no manual conversion. The preset palette gives a starting point for accessible UI when no design system is in place yet, and the WCAG check runs against your actual pair — not a generic "this color is safe" claim.