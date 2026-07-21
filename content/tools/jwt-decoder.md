---
title: "在线 JWT 解码器 — Header / Payload / Signature 全解析 + 签名验证"
description: "免费在线 JWT (JSON Web Token) 解码器,完整解析 Header / Payload / Signature,自动识别 claim 类型(sub/iss/aud/exp/iat/nbf),支持 HS256 HMAC 签名验证,Web Crypto API 浏览器本地计算,token 数据不上传。"
slug: jwt-decoder
categories:
    - "开发者工具"
    - "Web 安全"
tags:
    - "jwt"
    - "json web token"
    - "token 解析"
    - "签名验证"
    - "HS256"
    - "在线工具"
date: 2026-07-21
draft: false
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "在线 JWT 解码器",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "description": "免费在线 JWT 解码器,完整解析 Header / Payload / Signature 三段,自动识别 claim 类型,支持 HS256 HMAC 签名验证,Web Crypto API 浏览器本地计算。"
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< jwt-decoder >}}

### 什么是 JWT?

JWT(JSON Web Token)是基于 [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) 的开放标准,用于在各方之间以 JSON 对象形式安全传递信息。典型应用场景是用户登录后的身份认证:服务端签发 token,客户端每次请求带上,服务端验证后即可识别用户身份。

JWT 由三段组成,以 `.` 分隔:

```
Header.Payload.Signature
xxxxx.yyyyy.zzzzz
```

- **Header** — 描述 token 元数据(签名算法、token 类型等)
- **Payload** — 携带 claims(用户信息、过期时间、权限等)
- **Signature** — 对前两段的签名,用于防篡改

### 这个工具能做什么?

| 功能 | 说明 |
|---|---|
| **完整解析** | Header / Payload / Signature 三段全展示 |
| **Claim 解释** | 自动识别 sub / iss / aud / exp / iat / nbf 等标准 claim |
| **时间校验** | exp(过期)、nbf(生效)自动校验,过期/未生效高亮提示 |
| **HS256 验证** | 输入密钥即可验证 HMAC 签名,确认 token 没被篡改 |
| **预设示例** | 4 个常见场景一键加载(标准 / 过期 / 带 aud / 自定义 alg) |
| **零上传** | 全部计算在浏览器本地,token 不发往任何服务器 |

### 标准 Claim 速查表

| Claim | 全称 | 含义 |
|---|---|---|
| `iss` | Issuer | 签发方(通常是服务端 URL) |
| `sub` | Subject | 主体(用户唯一标识) |
| `aud` | Audience | 受众(token 面向的客户端 / 服务) |
| `exp` | Expiration | 过期时间(Unix 秒),过期后服务端拒绝 |
| `nbf` | Not Before | 生效时间(在此之前不生效) |
| `iat` | Issued At | 签发时间 |
| `jti` | JWT ID | Token 唯一 ID(用于防重放) |

### 如何使用?

#### 场景 A:仅查看 token 内容(最常用)

1. **粘贴 Token** — 把完整 JWT 字符串粘贴到输入框
2. **自动解析** — 工具自动拆成 3 段,展示格式化 JSON
3. **查看 Claims** — 标准 claim 自动标注含义,exp/nbf 显示「相对时间」(还有 X 小时过期 / X 分钟前过期)

#### 场景 B:验证 HS256 签名

1. 粘贴 token
2. 勾选「验证 HS256 签名」
3. 输入 HMAC 共享密钥(HS256 用)
4. 立即显示「✅ 签名验证通过」或「❌ 签名不匹配」

### 安全说明

- ✅ **零上传**:所有 token 解析、签名验证都在浏览器本地(JS + Web Crypto API)
- ✅ **零存储**:不写 cookie / localStorage / 任何持久化
- ✅ **离线可用**:首次加载后无网络依赖,token 永不出你的设备
- ✅ **密钥保护**:HS256 验证用的密钥也在浏览器本地计算,不发送

### 常见问题 (FAQ)

#### JWT 安全吗?会不会被中间人篡改?

**JWT 本身不安全,签名才安全。** 如果 token 用 `alg: none`(无签名)或弱密钥(短字符串),任何人都能伪造。生产环境必须:
- 用强随机密钥(HS256 至少 256 位)
- 永远不要信任客户端传来的 `alg` 字段(防止「alg confusion 攻击」— 攻击者改成 none 绕过验证)
- 始终在服务端用可信算法库验证签名

#### `alg: none` 是什么意思?能用吗?

**绝对不要用!** `alg: none` 表示 token 不签名,任何人都能伪造内容。这是 2015 年公开的 [JWT 漏洞](https://github.com/auth0/node-jsonwebtoken/security/advisories/GHSA-qwph-4952-7xr6),历史上多家厂商中招。本工具遇到 `alg: none` 会显示红色警告 ⚠️。

#### HS256 和 RS256 有什么区别?

- **HS256**(对称加密):签发和验证用同一个密钥,速度快,适合单机或可信内部系统
- **RS256**(非对称加密):签发用私钥,验证用公钥,适合 OAuth / OpenID 等分布式场景(身份提供方签发,多个服务用公钥验证)

本工具**只验证 HS256 / HS384 / HS512**(对称)。RS256 需要公钥文件,无法在纯前端完成。

#### exp 过期了还能解码吗?

**可以解码,但服务端会拒绝。** 这个工具只展示内容,不做鉴权判断。token 是否还有效,要看服务端代码如何处理。一般做法:

```javascript
if (Date.now() >= payload.exp * 1000) {
  throw new Error('Token expired');
}
```

#### nbf 是必须的 claim 吗?

**可选。** 大多数 JWT 不带 nbf(默认立即生效)。nbf 用于「预约生效」场景,比如:
- 提前签发的 token,定时开放(如活动开始时生效)
- 多阶段发放(如第 1 阶段 token 在 8 点生效,第 2 阶段在 12 点生效)

#### 这个工具支持 JWE(加密 JWT)吗?

**不支持。** 本工具只处理 JWS(签名 JWT,三段式)。JWE 是加密 JWT(五段式),内容本身被加密,需要私钥解密才能读 Payload。本工具跳过 JWE,如果你有 JWE 需要解密,请用 [jwt.io](https://jwt.io) 等专业工具。

#### 移动端能用吗?

**能。** 工具做了 `@media (max-width: 600px)` 适配,小屏下布局从两列变单列,所有按钮可点击。暗色模式跟随系统设置。

### 适用人群

- **后端开发** — 调试 Auth 接口、验证 token 签名、检查 claim 内容
- **前端开发** — 排查「为什么这个 token 没生效」、检查 exp / nbf
- **安全工程师** — 审计 token 内容、检测异常 claim(比如 `alg: none`、过期 token 滥用)
- **DevOps** — 排查 OAuth / SSO 集成问题

### 相关工具

- **Base64 编码解码** — JWT 内部用 Base64Url 编码,这个工具可单独 Base64 编解码
- **UUID 生成器** — 生成 `jti` claim 唯一 ID
- **JSON 格式化** — 美化 Header / Payload JSON 内容