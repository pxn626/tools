---
title: "UUID Generator Online - v1/v4/v7 + Bulk Generate"
description: "Free online UUID generator. Generate UUID v1 (time), v4 (random), v7 (time-sortable). Bulk generate 1-1000 UUIDs. Uppercase/lowercase, with/without hyphens. Copy and TXT export."
slug: uuid-generator
categories:
    - "Utility Tools"
    - "Developer Tools"
tags:
    - "UUID"
    - "GUID"
    - "UUID Generator"
    - "v4"
    - "v7"
    - "Bulk Generate"
date: 2026-07-20
draft: false
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Online UUID Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online UUID generator supporting v1 / v4 / v7 standards, bulk generation of 1-1000 UUIDs, multiple formats (uppercase/lowercase, with/without hyphens), TXT export."
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< uuid-generator >}}

### What is a UUID?

UUID (Universally Unique Identifier) is a 128-bit identifier, typically formatted as 32 hexadecimal characters with 4 hyphens—for example, `550e8400-e29b-41d4-a716-446655440000`. UUIDs serve as primary keys, order numbers, message IDs, and filenames in distributed systems, offering theoretical global uniqueness with extremely low collision probability.

### UUID Version Comparison

| Version | Generation Method | Characteristics | Use Cases |
|---|---|---|---|
| **v1** | Timestamp + MAC address | Sortable (by time), leaks MAC | Database keys (legacy) |
| **v4** | Pure random | Unsorted, unpredictable | **General purpose (default)** |
| **v7** | Unix timestamp + random | **Sortable + random** | **2024+ standard, recommended for DB keys** |

### How to Use

1. **Select Version**: v1 / v4 / v7 (v4 or v7 recommended)
2. **Set Quantity**: 1-1000 (for batch scenarios)
3. **Choose Format**: Uppercase / lowercase / with hyphens / without hyphens
4. **Click "Generate"**: Results appear in real time on the right
5. **Copy**: Click any single UUID to copy; click "Copy All" for the list
6. **Export**: Click "Download TXT" to save as a plain text file

### Key Features

* **Multi-version Support**: v1 / v4 / v7 (RFC 4122 / RFC 9562)
* **Bulk Generation**: 1-1000 UUIDs in a single operation
* **Flexible Formatting**: Uppercase / lowercase / with hyphens (standard) / without hyphens (32-char compact)
* **One-Click Copy**: Single + bulk modes
* **TXT Export**: Plain text format, ideal for database import
* **Fully Client-side**: Uses browser-native `crypto.randomUUID()` for v4; no server required
* **No Watermarks, No Limits**: Free unlimited use

### Use Cases

* **Database Primary Keys**: v7 (sortable, better B+ tree index performance than v4)
* **Order Numbers / Transaction IDs**: v4 or v7, as business unique identifiers
* **Filenames**: Prevent name collisions in file storage systems
* **Message / Event IDs**: Event tracing in distributed message queues
* **API Request IDs**: Distributed tracing (Request ID)
* **Session IDs**: Unique web session identifiers
* **Password Reset Tokens**: v4 (unpredictable, suitable for security contexts)

### UUID v7 vs v4 for Databases

| Dimension | v4 | v7 |
|---|---|---|
| Index Performance (B+ Tree) | Poor (random writes) | **Excellent (sequential writes)** |
| Uniqueness | Extremely high | Extremely high |
| Guessability | Fully unpredictable | Time portion predictable (doesn't affect security) |
| Standard | RFC 4122 (2008) | **RFC 9562 (2024)** |
| Native DB Support | All major databases | PostgreSQL 17+, MySQL 8.0.34+, others via app layer |

**Recommendation:** Use **v7** for new projects (especially OLTP databases); use **v4** for legacy compatibility.

### Frequently Asked Questions (FAQ)

**Q: What's the difference between UUID and GUID?**
A: Essentially the same. UUID is the IETF standard (RFC 4122 / RFC 9562); GUID is Microsoft's term (used in Windows / .NET ecosystems). They share the exact same format—different names for the same thing.

**Q: Can UUID v4 collide?**
A: Theoretically yes, practically no. v4 has 122 random bits; you'd need to generate 1 billion UUIDs per second for ~73 years to reach a 50% collision probability. Safe to use without worry.

**Q: Is UUID v1 secure? It leaks MAC addresses...**
A: v1 indeed leaks MAC address and generation time—avoid for security-sensitive contexts (e.g., tokens). Use v4 or v7 instead.

**Q: Can browsers really generate UUIDs?**
A: Yes. `crypto.randomUUID()` is a W3C Web Crypto API standard supported by all modern browsers (Chrome 92+, Firefox 95+, Safari 15.4+). Generated v4 UUIDs conform to RFC 4122.

**Q: Are all bulk-generated UUIDs unique?**
A: Yes. Each generation calls `crypto.randomUUID()` fresh; all 1000 are independent.

**Q: Does UUID v7 work in browsers?**
A: Browser natively supports v4 only. This tool implements v7 in JS (Unix milliseconds + 74-bit random), conforming to RFC 9562. For server-side v7, use PostgreSQL 17+ or Node.js 22+.

**Q: Can I generate UUIDs without hyphens?**
A: Yes—select "Without Hyphens" for a 32-character compact format (e.g., `550e8400e29b41d4a716446655440000`), ideal for compact storage.

**Q: How do I use UUIDs in SQL?**
A: Most databases support a native `UUID` type. Example (standard SQL):
```sql
CREATE TABLE users (id UUID PRIMARY KEY DEFAULT gen_random_uuid());
-- PostgreSQL 13+ / MySQL 8.0+
```