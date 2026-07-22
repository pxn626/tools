---
title: "UUID v7 生成器 — 免费、RFC 9562、在线"
description: "在线生成符合 RFC 9562 的 UUID v7,支持批量生成、时间戳偏移、解码。纯前端,不上传。"
slug: uuid-v7-generator
date: 2026-07-22
draft: false
categories:
    - "Developer Tools"
    - "UUID"
tags:
    - "uuid"
    - "rfc-9562"
    - "javascript"
    - "api"
    - "database"
---

> **English version:** [UUID v7 Generator](/tools/uuid-v7-generator/)

本文档的完整中文版正在准备中(预计 T+7 天上线)。如需使用工具,请访问英文版,体验 RFC 9562 时间有序的 UUID v7 生成、批量导出、解码面板等全部功能。

工具特点:

- **RFC 9562 完整支持** — 48 位 Unix 毫秒时间戳 + 版本位 + 12 位随机段 + variant 位 + 62 位随机段,完全合规。
- **批量生成 1-1000 个** — 一次性产出测试夹具或压测 ID,无需循环调用 API。
- **时间戳偏移** — 支持 now / epoch / 自定义日期,方便回填历史数据或预生成未来 ID。
- **解码面板** — 粘贴任何 UUID v7,自动提取其内嵌的 Unix 毫秒时间戳、ISO 日期、版本与 variant。
- **100% 客户端运行** — 使用浏览器 `crypto.getRandomValues` 加密随机源,无服务器、无上传、无追踪。

---

{{< uuid-v7-generator >}}

<!-- ZH: [待填充完整中文内容 — H2 段将与 EN 版本结构一致(What Is UUID v7 / Why v7 / How to Use / Features / Languages / Use Cases / Privacy / FAQ / Related Tools / RFC Spec Reference);FAQ 7 条;代码示例 JS/Python/Go/SQL 各一;internal link 至 jwt/hash-generator/random-data-generator/cron-parser/json-formatter;T+7d 由独立 subagent 触发] -->