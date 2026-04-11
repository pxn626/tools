# 🛠️ WebPenson 在线工具箱

> 免费快速、无需安装、隐私安全的在线工具集合

![Hugo](https://img.shields.io/badge/Hugo-0.1%2B-ff4088?logo=hugo)
![PaperMod](https://img.shields.io/badge/Theme-PaperMod-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

## 📖 项目介绍

WebPenson 是一个**纯前端**在线工具箱网站，所有操作均在浏览器本地完成，数据不会上传到任何服务器。主打：

- 🔒 **隐私安全** - 数据不离开设备
- ⚡ **极速响应** - 毫秒级本地处理
- 🛠️ **免安装** - 打开浏览器即用
- 🌍 **多语言** - 支持中英文

🌐 **在线访问**: [https://www.webpenson.com](https://www.webpenson.com)

## 💻 技术栈

| 技术 | 说明 |
|------|------|
| [Hugo](https://gohugo.io/) | 静态网站生成器 |
| [PaperMod](https://github.com/adityatelange/hugo-PaperMod) | Hugo 主题 |
| Vanilla JS | 纯前端工具实现 |
| i18n | 中英双语支持 |

## 🔧 已上线工具

### 编解码工具
| 工具 | 功能 |
|------|------|
| [Base64 编解码](/tools/base64) | Base64 编码/解码 |
| [URL 编解码](/tools/url) | URL 编码/解码 |
| [JWT 解析](/tools/jwt) | JWT Token 解析验证 |

### 格式化工具
| 工具 | 功能 |
|------|------|
| [JSON 格式化](/tools/json-formatter) | JSON 格式化/验证/压缩 |
| [SQL 格式化](/tools/sql-formatter) | SQL 语句格式化 |

### 文本工具
| 工具 | 功能 |
|------|------|
| [大小写转换](/tools/text-case-converter) | 大小写/格式转换 |
| [Lorem Ipsum 生成器](/tools/lorem-ipsum) | 经典假文生成 |
| [特殊风格假文](/tools/specialized-lorem) | 特色风格假文 |
| [全能假文生成器](/tools/ultimate-dummy-text) | 多语言多风格假文 |

### 开发工具
| 工具 | 功能 |
|------|------|
| [Unix 时间戳](/tools/unix-timestamp) | 时间戳转换工具 |
| [颜色转换器](/tools/color-converter) | HEX/RGB/HSL 互转 |
| [密码强度可视化](/tools/password-strength) | 密码强度检测 |

## 🚀 本地开发指南

### 前置要求

- [Hugo Extended](https://gohugo.io/installation/) (v0.1+)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (可选，用于某些工具的依赖)

### 克隆项目

```bash
# 克隆仓库
git clone https://github.com/pxn626/tools.git
cd tools

# 初始化子模块（主题）
git submodule update --init --recursive
```

### 启动开发服务器

```bash
# 启动 Hugo 开发服务器
hugo server -D

# 访问 http://localhost:1313
```

### 项目结构

```
tools/
├── archetypes/          # 内容模板
├── assets/              # 需要处理的资源
├── content/             # 网站内容 (Markdown)
│   ├── tools/           # 工具页面
│   ├── about.md         # 关于页面
│   └── _index.md        # 首页
├── i18n/                # 国际化文件
│   ├── zh.toml          # 中文翻译
│   └── en.toml          # 英文翻译
├── layouts/             # 布局模板
│   ├── shortcodes/      # 工具组件
│   └── tools/           # 工具页面模板
├── static/              # 静态资源
│   └── js/              # JavaScript 文件
├── themes/              # 主题
│   └── PaperMod/        # PaperMod 主题
└── hugo.toml            # Hugo 配置
```

### 添加新工具

1. 创建 Shortcode: `layouts/shortcodes/工具名.html`
2. 添加国际化: 在 `i18n/zh.toml` 和 `i18n/en.toml` 中添加翻译
3. 创建内容页: `content/tools/工具名.md` 和 `content/tools/工具名.en.md`

详见 `add tools.md` 文档。

## 📦 部署方式

### 静态托管 (推荐)

生成的 `public/` 目录可部署到任何静态托管服务：

- **Cloudflare Pages** (推荐)
- **Vercel**
- **Netlify**
- **GitHub Pages**

### 构建命令

```bash
# 生产构建
hugo --minify

# 输出目录: public/
```

### Cloudflare Pages 配置示例

```
构建命令: hugo --minify
输出目录: public
环境变量: HUGO_VERSION=0.125.0
```

## 🗺️ 路线图

查看 [Todo.md](./Todo.md) 了解正在开发和计划中的工具。

### 近期计划
- [ ] PWA 离线支持
- [ ] 更多文件格式转换工具
- [ ] 图片处理工具
- [ ] 音视频工具

## 🤝 致谢

- [Hugo](https://gohugo.io/) - 世界上最快的网站构建框架
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) - 简洁优雅的 Hugo 主题
- [sql-formatter](https://github.com/sql-formatter-org/sql-formatter) - SQL 格式化库
- 所有开源社区的贡献者

## 📄 许可证

[MIT License](./LICENSE)

---

⭐ 如果这个项目对你有帮助，欢迎 Star 支持！
