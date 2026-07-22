---
title: "UUID v7 Generator — RFC 9562 (shortcode doc)"
description: "Self-documentation for the uuid-v7-generator shortcode. NOT a user-facing page — engineering reference only. The actual user-facing page is created by the content-impl agent in content/tools/uuid-v7-generator.en.md."
slug: uuid-v7-generator-doc
type: shortcode-doc
---

<!--
  This file documents how to invoke the UUID v7 Generator shortcode.

  IMPORTANT — Location note:
  The original task spec asked for this file at `layouts/shortcodes/uuid-v7-generator.en.md`,
  BUT Hugo auto-loads any file in `layouts/shortcodes/` as a Go-template shortcode, which
  breaks on markdown content + literal `{{ ... }}` syntax in prose.

  Final location:                `docs/shortcodes/uuid-v7-generator.en.md` (this file)
  Hugo-correct user-facing path: `content/tools/uuid-v7-generator.en.md` (content-impl agent)
  Hugo-correct shortcode path:   `layouts/shortcodes/uuid-v7-generator.html` (this PR — the actual tool)

  Why `docs/shortcodes/` works: outside Hugo's `layouts/` scan path, so .md content is left alone.

  Chinese (zh) version: TODO — content-impl agent will produce
  `content/tools/uuid-v7-generator.zh.md` (placeholder is fine for v1).
-->

# UUID v7 Generator — RFC 9562

> *Self-documentation file for the shortcode. Not rendered as a user-facing page.*

## Usage

Insert the shortcode in any Hugo Markdown content file:

    {{</* uuid-v7-generator */>}}

Optional `id` parameter (default `uv7`):

    {{</* uuid-v7-generator id="my-uv7" */>}}

When `id` is set, every DOM element id inside the tool is prefixed with that value (e.g. `my-uv7-generate`, `my-uv7-output`). Useful when you need more than one instance on the same page.

## What it does

- Generates **RFC 9562 UUID v7** values: a 48-bit big-endian Unix timestamp in the high bits, followed by the version 7 nibble, a 12-bit random segment, the RFC 4122 variant bits, and a 62-bit random tail.
- Bulk mode: 1 to 1000 UUIDs per click.
- Optional timestamp offset: `now` (live), `epoch` (1970-01-01 00:00:00.000 UTC), or a custom Unix-ms value for reproducible test fixtures.
- Output formats: hyphenated canonical, no-hyphen 32-hex, `urn:uuid:…`, or `{…}` braces.
- Uppercase toggle.
- Optional monotonic counter (RFC 9562 §6.2) — guarantees strict-sortable IDs within the same millisecond on the same machine.
- Decoder panel: paste any UUID v7 and see its Unix timestamp, ISO 8601 string, version, variant, and the rand_a / rand_b segments.
- Bulk export: TXT, CSV, or JSON.
- History: last 10 generations stored in `localStorage` (key `uv7-history-v1`). Never uploaded.
- Pure client-side — uses `crypto.getRandomValues()` (CSPRNG). **No `Math.random()` is ever used in the generation path.**

## Browser support

| Browser | Min version | Year |
|---|---|---|
| Chrome  | 92+  | 2021 |
| Firefox | 78+  | 2020 |
| Safari  | 15.4+| 2022 |
| Edge    | 92+  | 2021 |

## CSS contract

- All CSS classes are prefixed `uv7-` (no collisions with other tools).
- Variables defined on `.uv7-tool`: `--uv7-primary`, `--uv7-bg`, `--uv7-card-bg`, `--uv7-text`, `--uv7-muted`, `--uv7-border`, `--uv7-radius`, `--uv7-shadow`, `--uv7-success`, `--uv7-warning`, `--uv7-danger`, `--uv7-mono-bg`, `--uv7-accent`.
- Dark mode: inherits from `[data-theme="dark"]` cascade (matches `pdf-merge-split`, `cron-parser`, `jwt_tool` convention).
- Wrapper class `.pdf-tool-shell uv7-tool` is shared with the A10+ tool family.

## JS contract

The IIFE inside the shortcode exposes a small debug helper on `window.uv7`:

    window.uv7.generate()      // canonical v7
    window.uv7.generate(0)     // uuid at unix ts = 0 (epoch)
    window.uv7.isValid(s)      // true / false
    window.uv7.decode(s)       // { raw, timestampMs, iso, version, variant, random_a, random_b }
    window.uv7.clearHistory()  // wipes localStorage 'uv7-history-v1'

## i18n keys (50 total)

| Category | Keys |
|---|---|
| Static labels | `uv7_title`, `uv7_version_pill`, `uv7_intro`, `uv7_controls_legend` |
| Field labels | `uv7_count_label`, `uv7_ts_offset_label`, `uv7_ts_now`, `uv7_ts_epoch`, `uv7_ts_custom`, `uv7_ts_custom_label`, `uv7_format_label`, `uv7_fmt_hyphen`, `uv7_fmt_nohyphen`, `uv7_fmt_urn`, `uv7_fmt_braces`, `uv7_uppercase`, `uv7_monotonic` |
| Buttons | `uv7_btn_generate`, `uv7_btn_copy_all`, `uv7_btn_copy_selected`, `uv7_btn_export`, `uv7_btn_export_go`, `uv7_btn_decode`, `uv7_btn_copy` |
| Output | `uv7_output_label`, `uv7_output_placeholder` |
| Decoder | `uv7_decoder_toggle`, `uv7_decoder_placeholder`, `uv7_dec_raw`, `uv7_dec_timestamp`, `uv7_dec_iso`, `uv7_dec_version`, `uv7_dec_variant`, `uv7_dec_rand_a`, `uv7_dec_rand_b` |
| History | `uv7_history_toggle`, `uv7_history_note` |
| Errors | `uv7_err_no_crypto`, `uv7_err_no_input`, `uv7_err_invalid_uuid`, `uv7_err_invalid_ts`, `uv7_err_invalid_count`, `uv7_err_copy_failed` |
| Status | `uv7_msg_generated`, `uv7_msg_copied_all`, `uv7_msg_copied_one`, `uv7_msg_no_selection`, `uv7_msg_exported`, `uv7_msg_no_export_data`, `uv7_msg_decoded` |

All 50 keys exist in both `i18n/en.toml` and `i18n/zh.toml` (matching order, ready for Hugo build).

## Acceptance verification

1. `hugo --gc` exits 0.
2. Browser console: `window.uv7.generate()` returns a 36-char hyphenated string with `[14] === '7'`.
3. Generate 1000 UUIDs → all unique (Set size = 1000).
4. Decode any generated UUID → `version === 7`, `variant === 'RFC 4122 / RFC 9562'`, `timestampMs` within ±1 ms of `Date.now()` at generation time.
5. Toggle dark mode → colours flip via CSS vars (no JS changes).
6. Switch site language → all 50 labels flip en ↔ zh without page reload (after Hugo template caches).

---

*Engineering implementation: webpenson-executor-engineering agent, 2026-07-22.*
*Self-documentation file; not rendered as a user-facing page.*