---
title: "在线 UUID 生成器 - v1/v4/v7 + 批量生成"
description: "免费在线 UUID 生成器。支持 UUID v1(时间)、v4(随机)、v7(时间排序),可批量生成 1-1000 个,支持大写/小写/带连字符/无连字符,一键复制和导出 TXT。"
slug: uuid-generator
categories:
    - "实用工具"
    - "开发工具"
tags:
    - "UUID"
    - "GUID"
    - "UUID 生成"
    - "v4"
    - "v7"
    - "批量生成"
date: 2026-07-20
draft: false
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "在线 UUID 生成器",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "description": "免费在线 UUID 生成器,支持 v1 / v4 / v7 多版本,批量生成 1-1000 个,支持大小写、连字符、复制和 TXT 导出。"
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< uuid-generator >}}

### 什么是 UUID?

UUID(Universally Unique Identifier,通用唯一识别码)是一个 128 位标识符,标准格式为 32 个十六进制字符 + 4 个连字符,例如 `550e8400-e29b-41d4-a716-446655440000`。UUID 在分布式系统中用作主键、订单号、消息 ID、文件名等,理论全球唯一(冲突概率极低)。

### UUID 版本对比

| 版本 | 生成方式 | 特点 | 适用场景 |
|---|---|---|---|
| **v1** | 时间戳 + MAC 地址 | 可排序(按时间),泄漏 MAC | 数据库主键(早期) |
| **v4** | 完全随机数 | 不可排序、不可预测 | 通用推荐(默认) |
| **v7** | Unix 时间戳 + 随机数 | **可排序 + 随机性** | **2024+ 新标准,数据库主键推荐** |

### 如何使用?

1. **选择版本**:v1 / v4 / v7(推荐 v4 或 v7)
2. **设置数量**:1-1000 个(批量场景)
3. **选择格式**:大写 / 小写 / 带连字符 / 无连字符
4. **点击"生成"**:右侧实时显示结果列表
5. **复制**:单击单个 UUID 复制到剪贴板;点击"复制全部"复制列表
6. **导出**:点击"下载 TXT"保存为纯文本文件

### 核心功能特点

* **多版本支持**:v1 / v4 / v7,涵盖 2008 ~ 2024 标准
* **批量生成**:1-1000 个,单次操作完成
* **格式灵活**:大写 / 小写 / 带连字符(标准)/ 无连字符(32 字符紧凑)
* **一键复制**:单个 + 批量双模式
* **TXT 导出**:纯文本格式,适合导入数据库
* **完全本地**:使用浏览器原生 `crypto.randomUUID()`(v4),无需服务器
* **无水印、无限制**:免费无限次使用

### 使用场景

* **数据库主键**:v7(可排序,B+ 树索引性能优于 v4)
* **订单号 / 交易 ID**:v4 或 v7,作为业务唯一标识
* **文件名**:防止重名,适合文件存储系统
* **消息 / 事件 ID**:分布式消息队列的事件追踪
* **API 请求 ID**:链路追踪(Request ID)
* **Session ID**:Web 会话唯一标识
* **密码重置 Token**:v4(不可预测,适合安全场景)

### UUID v7 vs v4,数据库选哪个?

| 维度 | v4 | v7 |
|---|---|---|
| 索引性能(B+ 树) | 差(随机写入) | **优(顺序写入)** |
| 唯一性 | 极高(随机) | 极高 |
| 可猜测性 | 完全不可猜 | 时间部分可猜(不影响安全) |
| 标准时间 | RFC 4122(2008) | **RFC 9562(2024)** |
| 主流数据库支持 | 全支持 | PostgreSQL 17+, MySQL 8.0.34+, 其它需应用层 |

**推荐:** 新项目使用 **v7**(特别是 OLTP 数据库);老项目兼容用 **v4**。

### 常见问题(FAQ)

**Q:UUID 和 GUID 有什么区别?**
A:本质相同。UUID 是 IETF 标准,RFC 4122 / RFC 9562;GUID 是微软起的名字(主要用在 Windows / .NET 生态)。它们格式完全一致,只是叫法不同。

**Q:UUID v4 会重复吗?**
A:理论可能,实际不会。v4 有 122 位随机空间,地球上每秒生成 10 亿个,要连续生成 73 年才有 50% 概率出现一次冲突。完全可放心使用。

**Q:UUID v1 暴露 MAC 地址,安全吗?**
A:v1 确实泄漏 MAC 地址和生成时间,不推荐用于安全敏感场景(如 token)。改用 v4 或 v7。

**Q:浏览器真的能生成 UUID 吗?**
A:可以。`crypto.randomUUID()` 是 W3C Web Crypto API 标准,所有现代浏览器(Chrome 92+, Firefox 95+, Safari 15.4+)支持,生成的 UUID v4 符合 RFC 4122 规范。

**Q:批量生成的 UUID 都不同吗?**
A:是的。每次生成都重新调用 `crypto.randomUUID()`,1000 个全部独立。

**Q:UUID v7 在浏览器里能用吗?**
A:浏览器原生不支持 v7(只有 v4)。本工具用 JS 模拟 v7 算法(Unix 毫秒时间戳 + 74 位随机数),输出符合 RFC 9562 标准。如需服务端 v7,推荐 PostgreSQL 17+ 或 Node.js 22+。

**Q:可以生成不带连字符的 UUID 吗?**
A:可以,选择"无连字符"选项,输出为 32 个连续十六进制字符(如 `550e8400e29b41d4a716446655440000`),适合紧凑存储。

**Q:UUID 怎么用在 SQL 里?**
A:大部分数据库支持 `UUID` 类型。示例(标准 SQL):
```sql
CREATE TABLE users (id UUID PRIMARY KEY DEFAULT gen_random_uuid());
-- PostgreSQL 13+ / MySQL 8.0+
```