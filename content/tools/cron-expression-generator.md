---
title: "Cron Expression Generator"
slug: "cron-expression-generator"
description: "Parse cron expressions and see next N execution times instantly. Free online tool for developers and system administrators."
date: 2026-07-21
---

# Cron Expression Generator

免费在线工具,输入 cron 表达式即可即时获得人类可读的中英文描述,以及基于浏览器本地时区计算的接下来 N 次执行时间。无论是调试 crontab、编写调度脚本,还是给运维同事讲解,本工具都能让你在几秒内看到表达式到底干了什么。

{{< cron-expression-generator >}}

## 支持的字段

标准 cron 表达式由 **5 个空格分隔的字段**组成,顺序固定:

| 字段 | 取值范围 | 特殊字符 |
|------|----------|----------|
| 分钟 (Minute) | `0-59` | `*` `,` `-` `/` |
| 小时 (Hour) | `0-23` | `*` `,` `-` `/` |
| 日 (Day of month) | `1-31` | `*` `,` `-` `/` |
| 月 (Month) | `1-12` | `*` `,` `-` `/` |
| 周 (Day of week) | `0-6`(0 = 周日) | `*` `,` `-` `/` |

### 特殊字符说明

- `*` — 匹配该字段的每一个值(每分钟 / 每小时 / 每天 ……)。
- `,` — 列表分隔符,例如 `1,15,45`。
- `-` — 范围,例如 `9-17` 表示 9 点到 17 点。
- `/` — 步进,例如 `*/15` 表示每隔 15 个单位。

## 常见示例

| 表达式 | 含义 | 描述 |
|--------|------|------|
| `*/5 * * * *` | Every 5 minutes | 每 5 分钟执行一次 |
| `0 * * * *` | Every hour | 每小时整点执行 |
| `0 0 * * *` | Daily at midnight | 每天午夜(00:00)执行 |
| `0 9 * * 1` | Every Monday at 9am | 每周一上午 9 点执行 |
| `0 0 1 * *` | Monthly on the 1st | 每月 1 号零点执行 |
| `30 14 1 * *` | 1st of every month at 14:30 | 每月 1 号下午 2:30 执行 |

## 常见问题 (FAQ)

### 1. cron 表达式 5 个字段分别是什么?

从左到右依次为:**分钟(0-59)**、**小时(0-23)**、**日(1-31)**、**月(1-12)**、**星期(0-6)**,空格分隔。本工具遵循这一标准 5 字段格式。

### 2. `?` 问号在 cron 里什么时候用?

问号 `?` 主要出现在 **Quartz / Spring** 等扩展 cron 里,用于"日"或"星期"字段,表示"不指定"——因为这两个字段通常不能同时被设值。**本工具遵循经典 Unix cron(5 字段)**,所以不识别 `?`,如需该特性请改用 Quartz 专用工具。

### 3. 这个工具支持秒级 cron 吗?

**不支持。** 本工具仅解析 **标准 5 字段 Unix cron**(`分 时 日 月 周`)。如果你的表达式是 Quartz 6 字段格式(含秒),解析结果可能不正确,请改用专门的 Quartz 工具。

### 4. `L` `W` `#` 特殊字符支持吗?

**暂不支持。** 本工具目前仅识别四个核心特殊字符 `* , - /`。扩展字符 `L`(最后一天)、`W`(最近工作日)、`#`(第几个周几)是 Quartz 语法的一部分,留待后续版本按需扩展。

### 5. 计算的下次执行时间准吗?

**基于浏览器本地时区计算**。即使用户在 Asia/Shanghai,结果就按北京时间显示;切换到 America/New_York 就按美东时间。结果仅供参考,正式上线前请用服务器时区再核对一次。

### 6. 这个工具完全免费吗?

**是的,完全免费,无需注册、无需登录、无需安装。** 直接在浏览器里打开就能用,适合临时调试、给同事演示、写文档配图等所有不写敏感数据的场景。

### 7. 如何验证我的 cron 表达式是否正确?

**工具会实时校验并显示错误提示。** 输入框下方会即时反馈:
- ✅ 合法 → 显示可读描述 + 下次执行时间列表。
- ❌ 非法 → 红色错误信息指出具体哪个字段、什么字符出了问题。

你可以一边改一边看反馈,直到变成绿色再 copy 到 crontab。

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "cron 表达式 5 个字段分别是什么?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "从左到右依次为:分钟(0-59)、小时(0-23)、日(1-31)、月(1-12)、星期(0-6),空格分隔。本工具遵循标准 5 字段格式。"
      }
    },
    {
      "@type": "Question",
      "name": "? 问号在 cron 里什么时候用?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "问号 ? 主要出现在 Quartz / Spring 等扩展 cron 里,用于日或星期字段,表示不指定。本工具遵循经典 Unix cron(5 字段),所以不识别 ?。"
      }
    },
    {
      "@type": "Question",
      "name": "这个工具支持秒级 cron 吗?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不支持。本工具仅解析标准 5 字段 Unix cron(分 时 日 月 周)。如果你的表达式是 Quartz 6 字段格式(含秒),解析结果可能不正确。"
      }
    },
    {
      "@type": "Question",
      "name": "L W # 特殊字符支持吗?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "暂不支持。本工具目前仅识别四个核心特殊字符 * , - /。扩展字符 L、W、# 是 Quartz 语法的一部分,留待后续版本扩展。"
      }
    },
    {
      "@type": "Question",
      "name": "计算的下次执行时间准吗?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "基于浏览器本地时区计算。用户在哪一时区,结果就按该时区显示。结果仅供参考,正式上线前请用服务器时区再核对一次。"
      }
    },
    {
      "@type": "Question",
      "name": "这个工具完全免费吗?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的,完全免费,无需注册、无需登录、无需安装。直接在浏览器里打开就能用,适合临时调试和给同事演示。"
      }
    },
    {
      "@type": "Question",
      "name": "如何验证我的 cron 表达式是否正确?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "工具会实时校验并显示错误提示。输入合法则显示可读描述和下次执行时间列表,非法则用红色错误信息指出问题字段和字符。一边改一边看反馈,直到通过再复制到 crontab。"
      }
    }
  ]
}
</script>
