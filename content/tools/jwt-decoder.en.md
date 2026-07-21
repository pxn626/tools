---
title: "Online JWT Decoder — Header / Payload / Signature Parser + Signature Verifier"
description: "Free online JWT (JSON Web Token) decoder. Full Header / Payload / Signature parsing, automatic claim interpretation (sub/iss/aud/exp/iat/nbf), HS256 HMAC signature verification via Web Crypto API. Client-side only — token never leaves your browser."
slug: jwt-decoder
categories:
    - "Developer Tools"
    - "Web Security"
tags:
    - "jwt"
    - "json web token"
    - "token parser"
    - "signature verifier"
    - "HS256"
    - "online tool"
date: 2026-07-21
draft: false
---

<!-- 1. SEO Structured Data (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Online JWT Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online JWT decoder. Full Header / Payload / Signature parsing, automatic claim interpretation, HS256 HMAC signature verification via Web Crypto API. Client-side only — token never leaves your browser."
}
</script>

<!-- 2. Tool Shortcode -->
{{< jwt-decoder >}}

### What is JWT?

JWT (JSON Web Token) is an open standard ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) for securely transmitting information between parties as a JSON object. The most common use case is post-login authentication: the server issues a token, the client sends it on each request, and the server validates it to identify the user.

A JWT consists of three parts, separated by `.`:

```
Header.Payload.Signature
xxxxx.yyyyy.zzzzz
```

- **Header** — Token metadata (signing algorithm, type, etc.)
- **Payload** — Claims (user info, expiration, permissions, etc.)
- **Signature** — Signed hash of the first two parts, prevents tampering

### What This Tool Does

| Feature | Description |
|---|---|
| **Full Parse** | All three segments displayed with formatted JSON |
| **Claim Interpretation** | Auto-identifies standard claims (sub / iss / aud / exp / iat / nbf) with descriptions |
| **Time Validation** | exp and nbf are auto-validated — expired tokens get red badges, future-effective get yellow |
| **HS256 Verify** | Enter your HMAC secret to verify the signature, confirming the token hasn't been tampered with |
| **Preset Examples** | One-click loading of 4 common scenarios (standard / expired / with aud / custom alg) |
| **Zero Upload** | All computation runs locally in your browser; the token never leaves your device |

### Standard Claims Reference

| Claim | Full Name | Meaning |
|---|---|---|
| `iss` | Issuer | Issuing entity (often a server URL) |
| `sub` | Subject | Subject (user identifier) |
| `aud` | Audience | Recipient(s) the token is intended for |
| `exp` | Expiration | Unix timestamp; server rejects after this time |
| `nbf` | Not Before | Token is not valid before this time |
| `iat` | Issued At | When the token was issued |
| `jti` | JWT ID | Unique identifier (used for replay prevention) |

### How to Use

#### Scenario A: Just Inspect a Token (Most Common)

1. **Paste Token** — Drop your full JWT string into the input
2. **Auto-parse** — The tool splits it into 3 parts and displays formatted JSON
3. **Read Claims** — Standard claims show descriptions; exp / nbf show relative time ("expires in 2 hours" / "expired 5 minutes ago")

#### Scenario B: Verify an HS256 Signature

1. Paste the token
2. Check "Verify HS256 signature"
3. Enter your HMAC secret
4. Get instant ✅ "Signature valid" or ❌ "Signature mismatch"

### Security Notes

- ✅ **Zero upload** — All parsing and verification runs locally (JS + Web Crypto API)
- ✅ **Zero storage** — No cookies, no localStorage, no persistence
- ✅ **Offline-capable** — After first load the tool has zero network dependencies; your token never leaves your device
- ✅ **Secret protection** — The HS256 secret you enter also stays in your browser

### FAQ

#### Is JWT itself secure?

**JWT is just a format — the signature makes it secure.** If a token uses `alg: none` (unsigned) or a weak secret (short string), anyone can forge it. Production must:
- Use a cryptographically random secret (HS256 needs ≥256 bits)
- Never trust the `alg` field from the client (the famous "alg confusion attack")
- Always verify on the server using a trusted library

#### What does `alg: none` mean? Is it safe?

**Absolutely not safe.** `alg: none` means the token is unsigned — anyone can forge it. This is a well-known [JWT vulnerability from 2015](https://github.com/auth0/node-jsonwebtoken/security/advisories/GHSA-qwph-4952-7xr6). Multiple vendors have been compromised. Our tool shows a red ⚠️ warning when it detects `alg: none`.

#### HS256 vs RS256?

- **HS256** (symmetric): same secret for signing and verification. Fast, fits single-server or trusted internal systems.
- **RS256** (asymmetric): private key signs, public key verifies. Fits OAuth / OpenID / multi-service scenarios (one identity provider signs, many services verify with the public key).

This tool **only verifies HS256 / HS384 / HS512** (symmetric). RS256 requires a public key file and cannot be done in pure frontend JavaScript.

#### Can I still decode an expired token?

**Yes — decoding is separate from validation.** This tool only displays content; it does not judge validity. Whether the token is still usable depends on the server-side code. Typical pattern:

```javascript
if (Date.now() >= payload.exp * 1000) {
  throw new Error('Token expired');
}
```

#### Is `nbf` a required claim?

**No, it's optional.** Most JWTs omit `nbf` (defaulting to "valid immediately"). `nbf` is for scheduled-activation scenarios:
- Pre-issued tokens that activate at a specific time (e.g., event start)
- Multi-stage rollout (stage 1 token valid at 8am, stage 2 at 12pm)

#### Does this tool support JWE (encrypted JWT)?

**No.** This tool only handles JWS (signed JWT, 3-part format). JWE is encrypted JWT (5-part format) where the payload itself is encrypted and requires a private key to decrypt. For JWE, please use a dedicated tool like [jwt.io](https://jwt.io).

#### Does it work on mobile?

**Yes.** The tool includes `@media (max-width: 600px)` breakpoints — on small screens the layout switches from two columns to one, all buttons remain tappable, and dark mode follows the system setting.

### Who Should Use It

- **Backend developers** — Debug auth endpoints, verify token signatures, inspect claims
- **Frontend developers** — Troubleshoot "why isn't this token working", check exp / nbf
- **Security engineers** — Audit token contents, detect anomalies (e.g., `alg: none`, expired token abuse)
- **DevOps** — Diagnose OAuth / SSO integration issues

### Related Tools

- **Base64 Encoder/Decoder** — JWT internally uses Base64Url encoding; pair this tool for raw Base64 operations
- **UUID Generator** — Generate unique IDs for `jti` claims
- **JSON Formatter** — Beautify the raw Header / Payload JSON