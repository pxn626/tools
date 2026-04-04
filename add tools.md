# 写 Shortcode

layouts/shortcodes/工具名称.html

HTML 骨架：搭建输入框、按钮、结果显示区。
JS 逻辑：编写具体的算法（比如 Base64 的 btoa/atob，JWT 的 split('.') 解析，或者 Lorem Ipsum 的随机单词拼接）。
国际化埋点：把所有用户看得见的文字（按钮文字、提示语）都换成 {{ i18n "key" }}

# 多语言配置

i18n/zh.toml 和 i18n/en.toml

提取键值对：把 Shortcode 里用到的 key 对应的文字填进去。
格式统一：严格按照你要求的 TOML 格式

# 内容创建与模板挂载

content/tools/工具名称.md 和 content/tools/工具名称.en.md

## 内容文件标准结构清单

一个高质量的工具页面 Markdown 文件（如 content/tools/xxx.md）应该包含以下 5 个核心部分：

### 1. Front Matter (元数据)

这是文件的头部，用 --- 包裹。它告诉 Hugo 这个页面的基本信息。
title: 包含核心关键词的标题（如“在线...工具”）。
description: 简短的描述，用于 SEO 的 meta description。
slug: 网址链接，必须与文件名对应。
categories: 分类。用于宏观导航（如：编解码工具、Web开发）。
tags: 标签。用于微观搜索（如：hex转换、颜色代码）。
格式如下
```markdown
categories: 
    - "实用工具"
    - "Web开发"
    - "设计工具"
tags: 
    - "颜色转换"
    - "hex转rgb"
```
date: 发布日期。
draft: 是否为草稿（发布时设为 false）。

### 2. SEO 结构化数据 (Schema.org JSON-LD)

这是给搜索引擎（Google/百度）看的机器语言。
形式: <script type="application/ld+json">...</script>。
内容: 定义这是一个 SoftwareApplication，包含名称、操作系统、价格（免费）等信息。
作用: 帮助搜索引擎理解这是一个“工具”而不是“文章”，有助于获得富文本搜索结果。

### 3. Shortcode 调用

这是工具的核心功能区域。
形式: {{< tool-name >}} 或 {{% tool-name %}}。
作用: 这里会渲染出你写的 HTML/JS/CSS 代码（输入框、按钮、结果展示区）。

### 4. 详细介绍与使用指南 (SEO 内容)

这是给用户看的，也是搜索引擎抓取关键词的重点区域。内容越丰富，排名通常越好。
什么是...工具？: 定义工具的功能，解决什么痛点。
如何使用？: 分步骤教程（1. 输入，2. 配置，3. 获取结果）。
核心功能: 列出亮点（如：实时转换、纯前端安全、支持多种格式）。
知识科普: 解释相关概念（如：什么是 Hex？什么是 RGB？）。

### 5. 常见问题 (FAQ)

形式: 问答列表。
内容: 安全性（是否上传数据）、准确性、特定功能解释。
作用: 增加长尾关键词，提高页面相关性。

## 📋 通用模板 (可直接复制)
你可以把下面的代码保存为一个模板，每次新建工具时填空即可。
```markdown
---
title: "在线 [工具名称] - [核心功能/关键词]"
description: "免费的在线 [工具名称]。支持 [功能点1]、[功能点2]。专为 [目标用户] 打造，无需下载，即开即用。"
slug: [工具英文名]

# 分类与标签
categories: 
    - "[分类1]"
    - "[分类2]"
tags: 
    - "[关键词1]"
    - "[关键词2]"
    - "[关键词3]"
---

<!-- 1. SEO 结构化数据 (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[工具名称]",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "description": "免费在线 [工具名称]，支持 [核心功能]。"
}
</script>

<!-- 2. 调用 Shortcode (工具核心) -->
{{< [工具 Shortcode 名称] >}}

### 什么是 [工具名称]？

在这里写一段详细的介绍。解释这个工具是做什么的，为什么用户需要它。
例如：在开发过程中，我们经常遇到...的问题，这个工具可以帮助你...

### 如何使用这个工具？

我们的工具设计得非常直观，操作只需几步：

1.  **输入数据**：在输入框中...
2.  **配置选项**：选择...
3.  **执行操作**：点击按钮...
4.  **获取结果**：...

### 核心功能特点

*   **功能点 1**：描述这个功能的好处（如：实时处理，无需等待）。
*   **功能点 2**：描述这个功能的好处（如：安全可靠，数据不上传）。
*   **功能点 3**：描述这个功能的好处（如：支持多种格式）。

### 常见问题 (FAQ)

#### 这个工具安全吗？
**非常安全。** 本工具完全运行在你的浏览器本地（纯前端处理）。你的数据**不会**被上传到任何服务器。

#### [相关技术问题]？
在这里回答一个与工具相关的技术知识问题。

#### [使用场景问题]？
在这里回答一个使用场景相关的问题。
```







# 统一外观
layouts/tools/single.html (或者 baseof.html)

布局容器：这个模板负责显示网站的 Header、Footer、导航栏。
渲染内容：模板中包含 {{ .Content }}，Hugo 会把第三步里 Markdown 的内容（也就是 Shortcode 渲染后的结果）塞到这里。
语言切换：在这个模板里加入你之前调试好的语言切换按钮代码（{{ if .IsTranslated }}...）。