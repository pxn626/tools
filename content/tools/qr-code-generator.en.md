---
title: "QR Code Generator - Free Online QR Code Maker"
description: "Free online QR Code generator. Create QR codes for text, URL, WiFi, email, phone, vCard contact. Customize size, color, error correction. Download PNG / SVG. No signup, 100% client-side."
slug: qr-code-generator
categories:
    - "Utility Tools"
    - "Image Generation"
tags:
    - "QR Code"
    - "QR Generator"
    - "URL to QR"
    - "WiFi QR"
    - "vCard QR"
    - "Online Generator"
date: 2026-07-20
draft: false
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Online QR Code Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online QR Code generator with support for text, URL, WiFi, email, phone, and vCard content. Customizable colors, sizes, error correction. No registration required."
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< qr-code-generator >}}

### What is the QR Code Generator?

The QR Code Generator is a completely free, fully client-side online tool that converts text, URLs, WiFi credentials, contacts (vCard), and other content types into standard QR codes. All processing happens in your browser—**no data is uploaded to any server**—ensuring complete privacy.

### What can this tool do?

* **Text Mode**: Convert any string (plain text, numbers, JSON) to a QR code
* **URL Mode**: Turn long URLs into scannable codes, perfect for business cards, posters, and packaging
* **WiFi Mode**: Bundle WiFi name + password into a single QR code; guests scan to connect without typing
* **Email Mode**: Generate "email QR codes" that pre-fill recipient, subject, and body when scanned
* **Phone Mode**: One-tap dial via QR scan
* **Contact Mode**: Generate vCard QR codes that auto-import contacts (name, phone, email, company)
* **SMS Mode**: Pre-fill SMS recipient and message via QR scan

### How to use

1. **Choose Content Type**: Pick a tab at the top (Text / URL / WiFi / Email / Phone / Contact / SMS)
2. **Enter Content**: Fill in the form fields (URLs go in full, WiFi needs SSID + password)
3. **Customize Appearance** (optional): Adjust foreground color, background color, error correction level (L/M/Q/H), margin, and size
4. **Live Preview**: The QR code updates in real-time on the right
5. **Download**: Click "Download PNG" or "Download SVG" to save locally

### Key Features

* **100% Client-side**: Nothing uploaded, works offline after first load
* **7 Content Types**: Text, URL, WiFi, Email, Phone, Contact (vCard), SMS
* **Custom Colors**: Foreground and background color picker for brand alignment
* **Error Correction Levels**: L (7%) / M (15%) / Q (25%) / H (30%)—choose Q or H for print with logo overlay
* **PNG + SVG Download**: SVG for print (vector), PNG for screen
* **Adjustable Size**: 128px to 1024px
* **Unlimited**: No watermark, no generation limits, no signup required

### Use Cases

* **Business Cards / Posters**: Encode URLs or contact info for instant scan access
* **Restaurants / Cafés**: WiFi QR codes on tables—guests connect without typing the password
* **Product Packaging**: Scan to view product info, traceability, or warranty
* **Event Check-in**: QR-based attendance with auto-filled forms
* **WeChat Group Invites**: Generate permanent group QR codes (use Text mode with the group ID)
* **Social Media**: Instagram / TikTok / X (Twitter) profile QR codes
* **Payment**: Scan to jump to a payment page

### How to Choose Error Correction Level

| Level | Recovery | Best For |
|---|---|---|
| **L** | ~7% | Clean environments, largest QR |
| **M** | ~15% | Default, general purpose |
| **Q** | ~25% | Outdoor / print with partial damage |
| **H** | ~30% | Logo overlay, complex backgrounds |

### Frequently Asked Questions (FAQ)

**Q: Is my data uploaded to a server?**
A: No. All processing happens locally in your browser. The tool works offline after the initial page load.

**Q: How does the WiFi QR work for guests?**
A: The WiFi QR encodes the SSID, password, and encryption type. Guests scan with their phone camera or WeChat—most devices prompt "Join WiFi network XXX" and connect automatically, no password typing needed.

**Q: Why won't my QR code scan?**
A: Common reasons: 1) Content too long (URLs over 200 chars), 2) Insufficient color contrast (light foreground on light background), 3) Too-low error correction (L level), 4) QR printed too small (under 2cm × 2cm is hard to scan).

**Q: PNG vs SVG—which should I use?**
A: PNG is a raster format ideal for screens, social media, and quick sharing. SVG is a vector format that scales infinitely without quality loss, ideal for print, posters, and business cards. **Use SVG for print.**

**Q: Can I batch-generate QR codes?**
A: The current version generates one at a time. For batches, validate one with this tool, then use a Python or Node.js script (with the same qrcode.js library) to generate in bulk.

**Q: Does it support non-English content (Chinese, Japanese, Korean)?**
A: Yes. UTF-8 encoding is handled automatically; Chinese / Japanese / Korean characters work out of the box.

**Q: Do QR codes expire?**
A: Static QR codes (generated here) **never expire**. However, the URL they point to can become invalid, and WiFi passwords can change—so the encoded content itself may go stale.

**Q: Can I add a logo to the center of the QR code?**
A: Not in this version. It's technically possible (error correction level H can cover 30% of the area)—a paid tier feature in most tools.