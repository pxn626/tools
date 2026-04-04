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

创建 Markdown 文件：文件名必须对应（例如 base64.md）。
调用 Shortcode：在 Markdown 文件里使用 {{< tool-name >}}。
Front Matter：设置标题、描述、分类。Schema.org 结构化数据。
分类与标签格式如下
categories: 
    - "编解码工具"
    - "Web开发"
tags: 
    - "url编码"
    - "url解码"







# 统一外观
layouts/tools/single.html (或者 baseof.html)

布局容器：这个模板负责显示网站的 Header、Footer、导航栏。
渲染内容：模板中包含 {{ .Content }}，Hugo 会把第三步里 Markdown 的内容（也就是 Shortcode 渲染后的结果）塞到这里。
语言切换：在这个模板里加入你之前调试好的语言切换按钮代码（{{ if .IsTranslated }}...）。