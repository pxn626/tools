---
title: "在线 JSON 转 TypeScript 类型定义工具"
description: "免费的在线 JSON 转 TypeScript 类型定义生成器。根据 JSON 数据自动推断 TypeScript 接口类型定义，支持根类型名称配置、只读属性、可选属性等选项。"
slug: json-to-typescript
categories: 
    - "开发者工具"
    - "Web开发"
tags: 
    - "JSON"
    - "TypeScript"
    - "类型定义"
    - "接口"
    - "在线工具"
date: 2024-01-25
draft: false
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "在线 JSON 转 TypeScript 类型定义工具",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "description": "免费在线 JSON 转 TypeScript 工具，自动生成接口类型定义，支持 readonly、可选属性等选项。"
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< json-to-typescript >}}

### 什么是 JSON 转 TypeScript 工具？

JSON 转 TypeScript 工具是一款免费的在线工具，用于将 JSON 数据自动转换为 TypeScript 接口类型定义。在 TypeScript 开发中，我们经常需要为 JSON 数据定义类型，手动编写不仅耗时，还容易出错。这款工具可以帮助你自动完成这一工作。

### 如何使用这个工具？

1. **输入 JSON**：在左侧的 JSON 输入框中粘贴或输入需要转换的 JSON 数据。
2. **格式化 JSON**：点击"格式化"按钮可以美化 JSON 格式。
3. **配置选项**：根据需要勾选选项（添加根类型、只读属性、可选属性）。
4. **设置根类型名称**：在输入框中自定义根接口的名称。
5. **复制结果**：点击"复制"按钮将生成的 TypeScript 代码复制到剪贴板。

### 核心功能特点

* **自动类型推断**：智能分析 JSON 数据的结构，自动推断 TypeScript 类型
* **嵌套对象支持**：支持多层级嵌套对象的类型生成
* **数组类型处理**：自动识别数组元素类型，处理同构和异构数组
* **配置选项**：
  - 添加根类型：自动生成包含所有属性的根接口
  - 只读属性（readonly）：生成只读属性，适合 React/Redux 项目
  - 可选属性（?）：将所有属性标记为可选
* **纯前端处理**：数据不上传服务器，保护代码隐私

### 类型推断规则

| JSON 值 | 推断的 TypeScript 类型 |
|---------|------------------------|
| `"text"` | `string` |
| `123` | `number` |
| `true` / `false` | `boolean` |
| `null` | `null` |
| `[1, 2, 3]` | `number[]` |
| `[{...}]` | 推断数组元素类型 + `[]` |
| `{...}` | 生成子接口 |
| 混合数组 | `(type1 \| type2)[]` |

### 使用场景

* **API 响应类型定义**：为 API 返回的 JSON 数据快速生成类型定义
* **配置文件类型化**：为 JSON 配置文件生成类型，确保配置正确
* **数据库模型定义**：为数据库查询结果生成 TypeScript 类型
* **前端状态管理**：为 Redux/React 状态生成只读类型定义
* **数据验证**：结合 Zod 等库进行运行时验证

### 常见问题 (FAQ)

#### 这个工具安全吗？

**非常安全。** 本工具完全运行在你的浏览器本地（纯前端处理）。你输入的 JSON 数据**不会**被上传到任何服务器。

#### 支持嵌套的 JSON 吗？

支持。本工具可以处理任意深度的嵌套 JSON 数据，并为每个嵌套对象自动生成子接口定义。

#### 如何处理同构和异构数组？

- **同构数组** `[1, 2, 3]` → `number[]`
- **异构数组** `[1, "text"]` → `(number | string)[]`

#### readonly 选项有什么用？

勾选 readonly 选项后，生成的类型定义中所有属性都会带有 `readonly` 修饰符。这在 TypeScript 中表示属性是只读的，不能被重新赋值。适合用于：
- React 组件的 props 类型
- Redux store 的 state 类型
- 不可变数据（Immutable.js）的类型定义