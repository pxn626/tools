---
title: "Password Generator - Random, Pronounceable, Passphrase"
slug: password-generator
weight: 46
date: 2026-07-24
draft: false
description: "Free password generator with 3 modes: random, pronounceable, and Diceware passphrase. Customize length, characters, exclusions. Bulk 500. Entropy meter. No signup, 100% client-side."
keywords:
    - password generator
    - random password generator
    - strong password generator
    - passphrase generator
    - diceware passphrase
    - pronounceable password
    - wifi password generator
    - pin code generator
    - bulk password generator
    - offline password generator
    - nist password generator
    - password entropy
categories:
    - "Developer Tools"
    - "Security"
    - "Utilities"
tags:
    - "password"
    - "generator"
    - "random"
    - "secure"
    - "crypto"
    - "client-side"
    - "offline"
    - "no signup"
    - "entropy"
    - "passphrase"
    - "diceware"
    - "wifi"
    - "pin"
    - "bulk"
    - "export"
    - "csv"
    - "json"
    - "txt"
    - "qr"
---

<!-- 1. SEO structured data — WebApplication -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Password Generator",
  "alternateName": [
    "Strong Password Generator",
    "Random Password Generator",
    "Passphrase Generator",
    "WiFi Password Generator",
    "Diceware Password Generator"
  ],
  "url": "https://www.webpenson.com/tools/password-generator/",
  "applicationCategory": "SecurityApplication",
  "applicationSubCategory": "Password Generator",
  "operatingSystem": "Any (Browser-based, works offline after first load)",
  "browserRequirements": "Requires JavaScript and crypto.getRandomValues (any modern browser since 2014)",
  "inLanguage": "en-US",
  "softwareVersion": "1.0.0",
  "datePublished": "2026-07-24",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online password generator with three modes — strong random, pronounceable, and EFF Diceware passphrase. Configure length (4-128), character classes (uppercase, lowercase, digits, symbols), exclude look-alike or ambiguous characters, and export up to 500 passwords to TXT, CSV, or JSON. Includes a live entropy meter and links to a companion Password Strength Visualizer. 100% client-side JavaScript using crypto.getRandomValues() — no signup, no upload, no tracking.",
  "featureList": [
    "Strong Random Mode (default) — fully randomized per-character generation",
    "Pronounceable Mode — CV-syllable generator (e.g., 'ralopuvi', 'temukodu')",
    "Passphrase / Diceware Mode — 4-7 random words from the EFF word list",
    "Custom length slider (4 to 128 characters)",
    "Character class toggles: uppercase A-Z, lowercase a-z, digits 0-9, special symbols",
    "Exclude look-alike characters (0/O/Q/D, 1/l/I/|)",
    "Exclude ambiguous characters ({}[]()/\\'\"`~,;:.)",
    "Custom symbol set (define your own pool, e.g., !@#$ only)",
    "Bulk generation (1 to 500 passwords per click)",
    "Export to TXT / CSV / JSON",
    "Live entropy meter (bits, crack-time estimate)",
    "WiFi password variant (8-63 chars, ASCII-safe for WPA2/WPA3)",
    "PIN code generator (4-12 digits, no symbol shuffling)",
    "100% client-side JavaScript using crypto.getRandomValues()",
    "Works offline after first page load (Service Worker cacheable)",
    "No signup, no upload, no ads, no tracking, no cookies"
  ],
  "keywords": "password generator, random password generator, strong password generator, passphrase generator, diceware, pronounceable password, wifi password generator, pin code generator, password generator no signup, offline password generator, bulk password generator, nist password generator, password entropy, password character set",
  "isBasedOn": [
    {
      "@type": "TechArticle",
      "name": "NIST SP 800-63B — Digital Identity Guidelines (Authentication & Lifecycle)",
      "url": "https://pages.nist.gov/800-63-3/sp800-63b.html",
      "datePublished": "2017-06 (updated 2024)"
    },
    {
      "@type": "TechArticle",
      "name": "EFF Diceware Word List (large wordlist)",
      "url": "https://www.eff.org/diceware",
      "datePublished": "2016-08"
    }
  ]
}
</script>

<!-- 2. SEO structured data — FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the strongest type of password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Length and uniformity. A 16-character password made of random ASCII characters (~104 bits of entropy) is exponentially stronger than an 8-character complex password with mixed symbols (~30 bits). Each additional character multiplies the brute-force effort by ~94, so longer random passwords are almost always stronger than shorter ones with added complexity. For human-memorable options, a five- or six-word Diceware passphrase (60-80 bits) is the strongest practical choice."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good password generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good password generator (1) runs 100% client-side so the password never touches a server, (2) uses a cryptographically secure RNG such as crypto.getRandomValues() in the browser, (3) lets you tune the character pool and exclude look-alike characters, (4) supports bulk output for testing or onboarding, and (5) uses an open-source algorithm you can audit. The webpenson Password Generator meets all five — it is ad-free, tracker-free, and never logs anything. Verify yourself in DevTools → Network."
      }
    },
    {
      "@type": "Question",
      "name": "How do password generators work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern password generators use a cryptographically secure random number generator (CSPRNG) — in a browser, this is window.crypto.getRandomValues(). Each character of the output is sampled uniformly from your configured character pool (uppercase, lowercase, digits, symbols). Some generators (like this one) also offer pronounceable mode, which builds CV-pattern syllables from a curated English subset, and passphrase mode, which samples random words from the EFF Diceware list of 7,776 words."
      }
    },
    {
      "@type": "Question",
      "name": "Are password generators safe to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends entirely on whether the generator runs client-side or server-side. Server-side generators receive your requested parameters on their backend, generate the password, and send it back — meaning the plaintext traverses their network and may be logged in their infrastructure. Client-side generators run entirely in your browser using JavaScript; no request is sent to generate the password. The webpenson tool runs 100% in-browser. To verify, open DevTools → Network and confirm zero requests leave your device when you click Generate."
      }
    },
    {
      "@type": "Question",
      "name": "What is a passphrase vs a password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A password is a string of random characters from a chosen pool (e.g., T7$mK9pQ2vX). A passphrase is a sequence of random dictionary words separated by spaces or symbols (e.g., quartz-monorail-cello-fenugreek). Passphrases offer dramatically higher entropy per unit of memorability — four random words from the EFF word list equal ~51 bits of entropy, and they are far easier to remember than a random 12-character mixed-case password."
      }
    },
    {
      "@type": "Question",
      "name": "How long should my password be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NIST SP 800-63B (2024 revision) recommends a minimum of 8 characters for user-chosen passwords and at least 64 bits of entropy for randomly generated passwords — which, for random ASCII, means 10 characters minimum and 16+ recommended for high-value accounts. For encryption keys and master passwords, use 20+ random characters or 7+ passphrase words. As a rule of thumb, more is always better; aim for at least 80 bits of entropy."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use an online password generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if it is truly client-side — meaning DevTools → Sources tab during generation shows that all password logic runs in local JavaScript with no fetch or XHR requests to any server. The webpenson Password Generator runs 100% in-browser, generates passwords from crypto.getRandomValues(), never logs anything, and never connects to a network endpoint after the initial page load. Verify yourself — your eyes on the code matter more than any privacy policy."
      }
    },
    {
      "@type": "Question",
      "name": "What is entropy in a password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entropy is a measure of unpredictability, expressed in bits. A password with N bits of entropy requires, on average, 2^(N-1) guesses to brute-force — so a 40-bit password takes ~550 billion guesses (a few hours on consumer GPUs), while an 80-bit password takes ~600 trillion trillion guesses (longer than the age of the universe at any conceivable compute). You can view the entropy of any password live in our companion Password Strength Visualizer."
      }
    }
  ]
}
</script>

{{< password-generator id="main" >}}

This **password generator** creates cryptographically strong passwords directly in your browser — no signup, no upload, no tracking. Pick one of three modes: **Strong Random** (default, fully randomized), **Pronounceable** (CV-syllable phrases you can actually say out loud), or **Passphrase** (Diceware-style, four to seven random words from the EFF word list). Adjust length, character classes, and exclusions, then copy, export, or verify the entropy with our free [Password Strength Visualizer](/tools/password-strength/).

# Password Generator — Strong, Random, Custom Rules

## What Is a Password Generator?

A **password generator** is a tool that produces random strings a human would never invent by hand. The strongest passwords are uniformly random across the chosen character set, have enough bits of entropy to resist offline guessing attacks (≥ 80 bits for any account you care about), and avoid common patterns (no birthdays, no `qwerty`, no `password123`). This tool uses your browser's `crypto.getRandomValues()` API — the same source of entropy as 1Password, Bitwarden, and other reputable password managers — to generate cryptographic-quality randomness.

### How Password Generators Use Entropy

Each character of a generated password is sampled independently from your configured character pool. If your pool contains 94 printable ASCII characters, each sample contributes **log₂(94) ≈ 6.55 bits of entropy**. A 16-character password therefore carries roughly **104 bits** — essentially uncrackable by any foreseeable technology, even assuming a thousand-GPU cluster guessing at one trillion passwords per second. The numbers below show the relationship between length and crack-time at modern guessing rates.

### Client-side vs Server-side: Why It Matters

The most important property of a password generator is **where the password is generated**. A server-side generator receives your requested parameters (length, character classes, exclusions) over the network, runs the generator on its backend, and returns the plaintext password — meaning the password has just traversed someone else's infrastructure, possibly to be logged in their analytics. A client-side generator runs entirely inside your browser using JavaScript, and the password never leaves your device. This tool is the second kind. Open DevTools → Network before you click Generate and confirm that **zero requests** are sent.

## How to Use This Generator (3 Steps)

### Pick a Mode

Click one of the three tabs above the generator: **Strong Random** for fully randomized characters (best for account passwords and encryption keys), **Pronounceable** for syllable-style strings that are easier to type on phones (best for device passwords and master phrases you actually need to type), or **Passphrase** for word combinations from the EFF Diceware list (best for master passwords and recovery phrases).

### Configure Length and Character Rules

Use the length slider (4 to 128 characters in Strong Random mode, or 4 to 7 words in Passphrase mode). In Strong Random mode, toggle character classes (uppercase, lowercase, digits, symbols) and the optional "exclude look-alike" and "exclude ambiguous" switches. Add a custom symbol set if you want only `!@#$` instead of the default 32-symbol pool. Bulk-generation fields let you produce 1 to 500 passwords at once for testing or onboarding.

### Copy, Export, or Verify

Once generated, click any single line to copy that password to the clipboard, or use **Copy all** to grab every password at once. Use the export dropdown to download the entire batch as TXT, CSV, or JSON. When you're done, paste any password into our [Password Strength Visualizer](/tools/password-strength/) to get a second opinion on its entropy, crack-time estimate, and NIST SP 800-63B compliance — still 100% client-side.

## Three Password Modes (Key Differentiator)

### Strong Random Mode (default)

**Strong Random Mode** treats each character as an independent uniform sample from your selected character pool. With the default options (uppercase + lowercase + digits + 32 common symbols), each character contributes **log₂(94) ≈ 6.55 bits of entropy** — so a 16-character password has 104.8 bits of entropy, which is essentially uncrackable by any foreseeable technology. The only downside is that humans find these strings hard to memorize and type, which is why we also offer Pronounceable and Passphrase modes.

### Pronounceable Mode (CV syllable generator)

**Pronounceable Mode** alternates consonant-vowel-consonant patterns drawn from a curated English subset (e.g., `ralopuvi`, `temukodu`, `jesalafa`). Each syllable contributes ~3 bits of entropy instead of the ~6.55 bits per character in pure random mode, so a 24-character pronounceable password reaches ~72 bits — comfortably strong for most uses and far easier to type on a phone. This mode emulates the `gpw` / `pwg` library approach used by 1Password and other managers.

### Passphrase / Diceware Mode (EFF word list)

**Passphrase Mode** combines 4-7 random words from the EFF's `large-wordlist.txt` (7,776 unique words, each ~12.9 bits of entropy). Four random words from this list equal 51.7 bits of entropy — already far stronger than the average 8-character mixed-case password (~30 bits). Five words equal 64.6 bits, six words equal 77.5 bits, seven words equal 90.4 bits. The classic *correct-horse-battery-staple* example from XKCD #936 is a four-word passphrase from this idea, and modern security agencies including NIST now recommend long passphrases over short complex passwords.

## Custom Rules & Advanced Options

### Character Classes (upper / lower / digit / symbol)

By default, all four character classes are enabled: uppercase A–Z (26 letters), lowercase a–z (26 letters), digits 0–9 (10 characters), and 32 common symbols (`!@#$%^&*()_+-=[]{}|;:,.<>?`). Toggle off any class to restrict the pool — for example, a digits-only 6-character PIN.

### Exclude Look-Alike Characters (0/O/Q/D, 1/l/I/|)

For passwords you'll ever need to read aloud or type from a screen, look-alike characters are a nightmare. Toggle this option to remove `0`, `O`, `Q`, `D`, `1`, `l`, `I`, and `|` from the pool. Especially useful for WiFi passwords that need to be entered on a router admin page or printed on the back of a device.

### Exclude Ambiguous Characters ({}[]()/\`~)

Some applications and shells interpret characters like `{`, `}`, `[`, `]`, `(`, `)`, `/`, `\`, `` ` ``, `~`, `'`, `"`, `,`, `;`, `:`, `.` in special ways, which can break a password or accidentally trigger a shell command. Toggle this option if your password will live inside a config file, environment variable, or shell script.

### Custom Symbol Set

Don't need all 32 default symbols? Paste your own subset into the "Custom symbol set" field and the generator will draw symbols from your list instead. Common use cases: only `!@#$` for legacy systems, only `-_` for offline compatibility, or only `$%&*` to avoid regex-special characters.

### Bulk Generation (1 to 500)

Generate up to **500 passwords at once** for testing, team onboarding, or one-time pad generation. Each line is independent — they share no characters in sequence and can be sorted, exported, or sampled without affecting the rest.

### Export Formats (TXT / CSV / JSON)

After generating a batch, choose **Export as → TXT** for a plain text list (one password per line), **CSV** for spreadsheet-friendly `password,length,entropy_bits` columns, or **JSON** for structured data with `{password, mode, length, entropy_bits, generated_at}` per record. Files download directly to your device with no server round-trip.

## Special-Purpose Generators

### WiFi Password Generator (WPA2/WPA3 friendly)

WPA2/WPA3 networks require 8 to 63 ASCII characters. The WiFi preset uses a 20-character random ASCII string with look-alike characters excluded — long enough to satisfy any router's strength requirement and short enough to read aloud when a guest needs the password. Result: something like `Velum7-pitycag-9kazuq` instead of the router's default `AX88U-9f7e-XXXX`.

### PIN Code Generator (4-12 digits)

The PIN preset restricts output to digits only (4 to 12 characters) for banking PINs, two-factor backup codes, and short numeric identifiers. Because the character pool shrinks to 10, PIN entropy grows linearly with length: 4 digits = 13.3 bits, 6 digits = 19.9 bits, 8 digits = 26.6 bits. For high-value PINs, always prefer the longer end.

### Master Password / Recovery Code Generator

For master passwords that guard password managers, encryption keys, and recovery phrases, the recommendation is **20+ random characters** or **7+ passphrase words**. Switch to Passphrase mode with 7 words and the separator set to `-` to get a 90-bit-entropy string you can read aloud to a trusted family member in an emergency.

## Password Strength & Entropy Explained

### What Is Bits of Entropy?

**Entropy** is a measure of unpredictability, expressed in **bits**. A password with N bits of entropy requires, on average, **2^(N-1) guesses** to brute-force. Concretely:

| Bits of Entropy | Guesses Required | Real-World Crack-Time (1 trillion guesses/sec) |
|---|---|---|
| 28 | 1.3 × 10⁸ | < 1 second |
| 40 | 5.5 × 10¹¹ | ~ 9 minutes |
| 60 | 5.8 × 10¹⁷ | ~ 7 days |
| 80 | 6.0 × 10²³ | ~ 19,000 years |
| 100 | 6.3 × 10²⁹ | ~ 20 billion years |
| 128 | 1.7 × 10³⁸ | longer than the age of the universe |

You can see the entropy of any password live by typing it into our companion [Password Strength Visualizer](/tools/password-strength/).

### NIST SP 800-63B Recommendations

The current NIST guideline (SP 800-63B, 2024 revision) recommends:

- **Minimum 8 characters** for user-chosen passwords (and no longer enforces mandatory complexity rules).
- **At least 64 bits of entropy** for randomly generated passwords — which for random ASCII means **10 characters minimum**, **16+ recommended** for high-value accounts (banking, primary email, password manager master password).
- **No periodic password rotation** unless compromise is suspected.
- **Allow all printable ASCII** including spaces and emoji.

This generator is NIST-aligned by default: 16-character random ASCII = 104.8 bits, well above the 64-bit threshold.

### Common Password Mistakes to Avoid

- **Don't reuse passwords across sites** — one breach compromises every account sharing the password.
- **Don't substitute `0` for `o` or `1` for `l`** — attackers know these tricks and pre-compute the dictionary.
- **Don't trust servers with plaintext passwords** — always verify the generator is client-side before using it.
- **Don't store passwords in browser auto-fill without a master password** — if your laptop is stolen, every saved password is exposed.

## Security Best Practices

### Where to Store Generated Passwords

Never write a generated password on paper and leave it on your desk. Use a dedicated password manager (1Password, Bitwarden, KeePass) with a strong master password, and enable two-factor authentication on the manager itself. Generated passwords are designed to be stored in software — they are intentionally too strong for humans to remember.

### Why Client-Side Generators Are Safer

A client-side generator's source code is right there in your browser. You can view it in DevTools → Sources, audit the algorithm, and confirm that no `fetch` or `XHR` requests are made during generation. A server-side generator hides its implementation behind a backend you can't inspect, and you're trusting that the company isn't logging your parameters or exfiltrating the output.

### Two-Factor Authentication (2FA / TOTP)

A 100-bit password is useless if the attacker has your phone. Always pair generated passwords with **two-factor authentication** — preferably a TOTP app (Authy, Google Authenticator, 1Password) or a hardware key (YubiKey). SMS-based 2FA is better than nothing but vulnerable to SIM-swap attacks; avoid it for any account you genuinely care about.

## Frequently Asked Questions

### What is the strongest type of password?

**Length + uniformity.** A 16-character password made of random ASCII characters (~104 bits of entropy) is exponentially stronger than an 8-character complex password with mixed symbols (~30 bits). Each additional character multiplies the brute-force effort by ~94, so longer random passwords are almost always stronger than shorter ones with added complexity. For human-memorable options, a five- or six-word Diceware passphrase (60-80 bits) is the strongest practical choice.

### What is a good password generator?

A good password generator (1) **runs 100% client-side** so the password never touches a server, (2) uses a cryptographically secure RNG such as `crypto.getRandomValues()` in the browser, (3) lets you tune the character pool and exclude look-alike characters, (4) supports bulk output for testing or onboarding, and (5) uses an open-source algorithm you can audit. The webpenson Password Generator meets all five — it is ad-free, tracker-free, and never logs anything. Verify yourself in DevTools → Network.

### How do password generators work?

Modern password generators use a cryptographically secure random number generator (CSPRNG) — in a browser, this is `window.crypto.getRandomValues()`. Each character of the output is sampled uniformly from your configured character pool (uppercase, lowercase, digits, symbols). Some generators (like this one) also offer **pronounceable mode**, which builds CV-pattern syllables from a curated English subset, and **passphrase mode**, which samples random words from the EFF Diceware list of 7,776 words.

### Are password generators safe to use?

**It depends entirely on whether the generator runs client-side or server-side.** Server-side generators (e.g., randomkeygen.com) receive your requested parameters on their backend, generate the password, and send it back — meaning the plaintext password traverses their network and may be logged. Client-side generators like this one run entirely in your browser using JavaScript; no request is sent to generate the password. To verify, open your browser's **DevTools → Network** tab and confirm zero requests are sent when you click Generate.

### What is a passphrase vs a password?

A **password** is a string of random characters from a chosen pool (e.g., `T7$mK9pQ2vX`). A **passphrase** is a sequence of random dictionary words separated by spaces or symbols (e.g., `quartz-monorail-cello-fenugreek`). Passphrases offer dramatically higher entropy per unit of memorability — four random words from the EFF word list equal ~51 bits of entropy, and they are far easier to remember than a random 12-character mixed-case password. NIST SP 800-63B now explicitly recommends long passphrases over short complex passwords.

### How long should my password be?

**NIST SP 800-63B** (2024 revision) recommends a **minimum of 8 characters** for user-chosen passwords and **at least 64 bits of entropy** for randomly generated ones — which for random ASCII means 10 characters minimum, **16+ recommended for high-value accounts** (banking, primary email). Aim for **16+ characters** random, or **5+ words** passphrase, for personal accounts; **20+ characters** random or **7+ words** passphrase for encryption keys and master passwords. More is always better; aim for at least 80 bits of entropy.

### Is it safe to use an online password generator?

Only if it's **truly client-side** — meaning opening DevTools → Sources tab during generation shows that all password logic runs in local JavaScript with no `fetch` or `XHR` requests to any server. The webpenson Password Generator runs 100% in-browser, generates passwords from `crypto.getRandomValues()`, never logs anything, and never connects to a network endpoint after the initial page load. **Verify yourself** — your eyes on the code matter more than any privacy policy.

### What is entropy in a password?

Entropy is a measure of unpredictability, expressed in **bits**. A password with N bits of entropy can be cracked, on average, in **2^(N-1) guesses** — so a 40-bit password takes ~550 billion guesses to brute-force (a few hours on consumer GPUs), while an 80-bit password takes ~600 trillion trillion guesses (longer than the age of the universe at any conceivable compute). You can see the entropy of any password live by typing it into our companion [Password Strength Visualizer](/tools/password-strength/).

## Related Tools

- **[Password Strength Visualizer](/tools/password-strength/)** — Already have a password? Check its entropy, crack-time estimate, and NIST SP 800-63B compliance **without sending the password anywhere**. Pairs perfectly with this generator as a verify step.
- **[Hash Generator](/tools/hash-generator/)** — Hash any password or string with SHA-256, SHA-1, MD5, or BCrypt — 100% client-side. Useful for fingerprinting a password before storing it in a less-trusted backend, or for validating a password against a known hash.
- **[Random Data Generator](/tools/random-data-generator/)** — Need usernames, emails, or UUIDs alongside your passwords for test data or team onboarding? Same client-side guarantee as this generator. Bulk output up to 1,000 records per click.

---

*Generate strong passwords above ↑ — 100% client-side, no signup, no tracking.*