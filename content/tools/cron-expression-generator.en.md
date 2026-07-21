---
title: "Free Cron Expression Generator - Visual Schedule Builder"
description: "Free cron expression generator. Build schedules visually with minute, hour, day, weekday, and month controls. See the next 10 execution times instantly. No signup."
seo_description: "Free visual cron expression generator: pick minute, hour, day, weekday, month → get the cron string + next 10 execution times. No signup, browser-only."
categories:
    - "Developer Tools"
    - "DevOps"
tags:
    - "cron"
    - "cron expression"
    - "generator"
    - "scheduler"
    - "scheduled task"
    - "online tool"
---

<!-- WebApplication schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cron Expression Generator",
  "alternateName": "Cron 表达式生成器",
  "url": "https://www.webpenson.com/tools/cron-expression-generator/",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online cron expression generator with a visual builder. Pick minute, hour, day, weekday, and month — get the 5-field cron string and the next 10 execution times instantly. Pure client-side, no signup.",
  "inLanguage": ["en-US", "zh-CN"],
  "isAccessibleForFree": true,
  "featureList": [
    "Visual cron builder with 5 fields (minute/hour/day/month/weekday)",
    "Real-time expression synthesis",
    "Next 10 execution times preview",
    "12 common schedule presets",
    "Shareable URL hash state",
    "100% client-side, no data upload"
  ]
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
      "name": "What is the difference between this Cron Expression Generator and the Cron Parser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The two tools work in opposite directions. The Cron Parser (/tools/cron-parser/) takes a cron expression you already have and explains what it means and when it fires — a reverse tool (expression → description). The Cron Expression Generator (/tools/cron-expression-generator/, this tool) takes a schedule in mind and builds the expression from UI choices — a forward tool (UI choices → expression). They are complementary, not alternatives."
      }
    },
    {
      "@type": "Question",
      "name": "How do I generate a cron expression for \"every weekday at 9 AM\"?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Set Minute to Specific = 0; Hour to Specific = 9; Day of month and Month to default *; Day of week to Specific, check Mon–Fri (or click the Weekdays preset). Result: 0 9 * * 1-5. Note: Sunday = 0 or 7, Monday = 1."
      }
    },
    {
      "@type": "Question",
      "name": "Does this generator support 6-field Quartz / Spring cron syntax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not yet. This tool produces standard 5-field Unix cron (Vixie cron) — used by Linux cron, Kubernetes CronJob, GitHub Actions schedule, and most crontab implementations. 6-field Quartz / Spring and extensions (?, L, #W) are planned as a P3 enhancement. Spring users can prepend a seconds field manually: 0 9 * * 1-5 → 0 0 9 * * 1-5."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are the \"next 10 execution times\" shown by the tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fully accurate within standard cron semantics. The tool scans the next 365 days for matching instants. The day-of-month and day-of-week fields use OR semantics (Vixie cron standard, not a bug). Times are shown in browser local time. Always verify the target cron daemon's timezone before deploying — GitHub Actions, Kubernetes, and AWS default to UTC."
      }
    },
    {
      "@type": "Question",
      "name": "Is this cron generator secure? Does it upload my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Completely secure — zero upload. All computation runs in browser JavaScript. No fetch / XHR / form submission. No cookies; no localStorage except optional URL-hash state. Works offline after initial page load. Safe for internal networks and expressions with internal hostnames."
      }
    },
    {
      "@type": "Question",
      "name": "Can I paste the generated expression directly into crontab / Kubernetes / GitHub Actions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases yes. Linux crontab, Kubernetes CronJob, and GitHub Actions accept it directly. AWS EventBridge and Spring @Scheduled need extra fields (AWS adds ? and year, Spring adds a leading seconds field). Quartz extensions are not supported. Always check the target environment's timezone — GitHub Actions, AWS, and Kubernetes default to UTC."
      }
    },
    {
      "@type": "Question",
      "name": "Can I share a configuration with a colleague or bookmark it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, via URL hash parameters. Every field selection syncs into the URL hash (e.g. #minute=0&hour=9&weekday=1-5). A colleague opening the same URL sees your configuration restored. Bookmarking saves the state. URL hash is never sent to servers, so this is just as privacy-safe as the rest of the tool."
      }
    }
  ]
}
</script>

{{< cron-expression-generator >}}

## What is a Cron Expression Generator?

A Cron Expression Generator is a **forward tool**: you don't need to memorize cron syntax. Just pick the trigger pattern in 5 fields (minute, hour, day of month, month, day of week), and the tool synthesizes a Vixie-cron-standard expression for you — with a human-readable description and the next 10 execution times updated in real time.

It is **not** for parsing existing expressions — if you have an expression and want to understand it, use the [Cron Expression Parser](/tools/cron-parser/).

## Who Is This Tool For?

* **New developers** configuring their first crontab — no need to remember what `*` `,` `-` `/` mean
* **DevOps migrating schedules** between environments (different cron daemons, different schedulers) — regenerate visually and avoid typos
* **Complex schedule design** — combinations like "Mon/Wed/Fri at 9 AM" or "1st and 15th of every month at midnight" are easier to build with checkboxes than to type correctly
* **Teaching cron syntax** — point and click while the expression updates live, students see "`1-5` means weekdays" instantly
* **PR reviewers** — see an unfamiliar expression in a PR, rebuild it visually in this tool to confirm before approving

## Difference from the Cron Parser

| Tool | Direction | Typical User | Workflow |
|---|---|---|---|
| **Cron Expression Parser** (`/tools/cron-parser/`) | Expression → Description | Ops reading someone else's expression | text → description |
| **Cron Expression Generator** (`/tools/cron-expression-generator/`, this tool) | Requirement → Expression | Devs who don't write cron by hand | UI choices → text |

They are **complementary, not alternatives**: the parser helps you **read** other people's expressions; the generator helps you **write** your own. If you regularly do both, bookmark both.

## Core Features

1. **Visual 5-field builder** — no syntax memorization; each field has 4 modes (every / every N / specific / range) with dropdowns, checkboxes, and number inputs.
2. **Real-time expression synthesis** — any field change updates the generated expression instantly.
3. **Human-readable description** — auto-translates to natural language like "At 09:00 AM, Monday through Friday".
4. **Next 10 executions preview** — concrete future timestamps, no mental arithmetic.
5. **12 common presets** — "Every minute", "Hourly", "Weekdays at 9 AM", "First of month", "Mon/Wed/Fri" — one-click apply.
6. **Day × Weekday disambiguation hint** — if you set both day-of-month and day-of-week, the tool reminds you this is OR-semantics (Vixie cron standard).
7. **URL-state sharing** — every config syncs into the URL hash; paste the link to a colleague or bookmark it.
8. **100% client-side** — no backend, no upload, no cookies; works on intranets and offline.

## Quick Start

1. **Pick minute** — default `*` (every minute). For "every 15 minutes", set everyN=15.
2. **Pick hour** — default `*`. For "9 AM", set specific=9.
3. **Pick day of month** — default `*`. For "1st of the month", set specific=1.
4. **Pick month** — default `*`. For "January only", set specific=1.
5. **Pick day of week** — default `*`. For "weekdays only", click the Weekdays preset.
6. **Read the result** — right panel shows the generated expression + description + next 10 execution times.
7. **Copy & paste** — click the 📋 Copy button, paste into your crontab / Kubernetes manifest / GitHub Actions YAML.

## When to Use This Tool vs the Cron Parser

| Your situation | Tool to use |
|---|---|
| A colleague PR has `0 0 0 1 * *`, I want to know when it fires | [Cron Expression Parser](/tools/cron-parser/) |
| I want Mon/Wed/Fri at 9 AM, but can't remember `0 9 * * 1,3,5` | **This tool** (Cron Expression Generator) |
| I see `*/15 9-17 * * *` in a doc, want to confirm it's "every 15 min during work hours" | [Cron Expression Parser](/tools/cron-parser/) |
| I need a Kubernetes CronJob but can't remember the 5-field order | **This tool** |
| I want to verify my hand-written cron expression's syntax | [Cron Expression Parser](/tools/cron-parser/) |
| I want to share a schedule config with a remote colleague | **This tool** (URL hash share) |

## Before You Deploy: Environment Compatibility & Timezone

The generated expression is **standard 5-field Unix Cron** (Vixie cron) and can be pasted into:

* **Linux crontab** — direct use
* **Kubernetes CronJob** `spec.schedule` — direct use
* **GitHub Actions** `on.schedule.cron` — direct use (**note: GitHub runs in UTC**)
* **AWS EventBridge** `cron(...)` — add `?` and year field at the ends
* **Spring `@Scheduled(cron = "...")`** — prepend a seconds field (usually `0`)

⚠️ **Timezone is the most common deployment pitfall:** GitHub Actions, AWS EventBridge, and Kubernetes default to **UTC**; Linux cron follows **server timezone**. This tool's "next execution times" preview uses **browser local time**. Before deploying, always verify the target environment's timezone (e.g. `kubectl describe cronjob`, GitHub Actions logs, or `date` on the server).

## Frequently Asked Questions (FAQ)

### What is the difference between this Cron Expression Generator and the Cron Parser?

The two tools work in **opposite directions** — they solve different problems:

- **Cron Parser (`/tools/cron-parser/`)**: you already **have** a cron expression (copied from a colleague's code or a README) and want to know what it means and when it fires. It is a **reverse** tool — expression → description.
- **Cron Expression Generator (`/tools/cron-expression-generator/`, this tool)**: you have a **schedule in mind** ("run at 9 AM on weekdays") but don't want to memorize the cron syntax. You pick minute / hour / weekday from dropdowns, and the tool builds the expression. It is a **forward** tool — UI choices → expression.

In short: **the parser helps you read other people's expressions; the generator helps you write your own from scratch.** They are complementary, not alternatives.

### How do I generate a cron expression for "every weekday at 9 AM"?

Step by step:

1. **Minute:** mode = "Specific", value = `0` (top of the hour).
2. **Hour:** mode = "Specific", value = `9` (9 AM).
3. **Day of month:** leave default = `*` (any day).
4. **Month:** leave default = `*` (any month).
5. **Day of week:** mode = "Specific", check Mon–Fri (or click the "Weekdays" preset button).

The tool immediately produces: `0 9 * * 1-5`, plus a human-readable description ("At 09:00 AM, Monday through Friday") and the next 10 execution timestamps. **Note:** Sunday = 0 or 7, Monday = 1.

### Does this generator support 6-field Quartz / Spring cron syntax?

**Not yet.** This tool produces **standard 5-field Unix cron** (Vixie cron) — the format used by Linux `cron`, Kubernetes CronJob, GitHub Actions `schedule`, and most crontab implementations.

The 6-field Quartz / Spring format (extra seconds field) and extended syntax (`?`, `L`, `#W`, year field) are planned as a **P3 enhancement**. In the meantime, if you target Spring `@Scheduled`, prepend a seconds field manually: `0 9 * * 1-5` → `0 0 9 * * 1-5`.

### How accurate are the "next 10 execution times" shown by the tool?

**Fully accurate** within standard cron semantics:

- The tool scans the next 365 days and finds every matching execution instant.
- Standard rule: a job runs when **all 5 fields match**, with the day-of-month and day-of-week fields joined by **OR** (not AND) — this is the Vixie cron standard, not a bug.
- Times are shown in **browser local time** (JavaScript `Date` default). If your server runs in UTC, executions will be offset (e.g. 8 hours earlier in China Standard Time). **Always verify the cron daemon's timezone before deploying.**

### Is this cron generator secure? Does it upload my data?

**Completely secure — zero upload.** Everything runs client-side:

- All computation (expression synthesis, next-run calculation) happens in your browser's JavaScript.
- No `fetch` / XHR / form submission to any backend.
- No cookies; no localStorage except for the optional URL-hash state.
- **Works offline** after the initial page load.

Safe to use on internal networks and with expressions that contain internal hostnames, IP addresses, or business logic.

### Can I paste the generated expression directly into crontab / Kubernetes / GitHub Actions?

**In most cases, yes.** Compatibility matrix:

| Environment | Format | Example | Direct use? |
|---|---|---|---|
| Linux crontab (`crontab -e`) | 5-field | `0 9 * * 1-5` | ✅ Direct |
| Kubernetes CronJob `spec.schedule` | 5-field | same | ✅ Direct |
| GitHub Actions `on.schedule.cron` | 5-field (UTC) | same | ✅ Direct — **runs in UTC** |
| AWS EventBridge `cron(...)` | 6-field (with year) | `cron(0 9 ? * 1-5 *)` | ⚠️ Add `?` and year field |
| Spring `@Scheduled(cron = "...")` | 6-field (with seconds) | `0 0 9 * * 1-5` | ⚠️ Prepend seconds (usually `0`) |
| Quartz | 6-7 field + `?` `L` `#` | `0 0 9 ? * 1-5` | ⚠️ Extensions not supported |

> **Timezone warning:** GitHub Actions, AWS EventBridge, and Kubernetes CronJob default to UTC; Linux cron follows the server timezone; containerized cron jobs depend on the container's TZ. The tool's preview uses **browser local time** — always sanity-check the target environment's timezone before deploying.

### Can I share a configuration with a colleague or bookmark it?

**Yes — via URL hash parameters.** Every field selection syncs into the URL hash (e.g. `#minute=0&hour=9&weekday=1-5`):

- A colleague opening the same URL sees your exact configuration restored.
- Bookmarking the URL in your browser saves the state for next time.
- No backend, no cookies — pure URL-as-state.

> Technical note: URL hash fragments are **never sent to servers** in HTTP requests, so this approach is just as privacy-safe as the rest of the tool.
