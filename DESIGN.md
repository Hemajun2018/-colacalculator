# COLA Calculator — Design Specification

## Design Philosophy

**目标用户: 美国 65 岁以上退休老人**

设计优先级: **可读性 > 可信赖感 > 美观 > 花哨**

这不是一个追求视觉冲击力的产品。用户来这里是为了看清自己的钱会变多少。
每一个设计决策都围绕一个问题: "一个 70 岁的老人在 iPad 上能不能轻松看懂？"

---

## Color Palette

以深蓝为主色，传达金融工具的专业和可信赖感。白底确保最大可读性。

| Token | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| Primary | `blue-800` | #1e40af | 主标题, 导航, 按钮 |
| Primary Hover | `blue-900` | #1e3a8a | 按钮 hover |
| Primary Light | `blue-50` | #eff6ff | 背景色块, 卡片背景 |
| Accent Green | `emerald-600` | #059669 | 正面数字 (增长, 收益) |
| Accent Red | `red-600` | #dc2626 | 警示, 负面变化 |
| Accent Amber | `amber-600` | #d97706 | 中性提示, 预估标注 |
| Text Primary | `gray-900` | #111827 | 正文 |
| Text Secondary | `gray-600` | #4b5563 | 辅助文字 (最浅止于此, 不用 gray-400) |
| Background | `white` | #ffffff | 页面底色 |
| Surface | `gray-50` | #f9fafb | 区块背景 |
| Border | `gray-200` | #e5e7eb | 分割线, 卡片边框 |

### 对比度保证
- `gray-900` on `white` = 17.4:1 (超越 AAA)
- `gray-600` on `white` = 7.0:1 (超越 AA)
- `blue-800` on `white` = 8.6:1 (超越 AA)
- `emerald-600` on `white` = 4.6:1 (达标 AA)
- **禁止**: `gray-400` 或更浅的颜色做正文/标签

---

## Typography

**系统字体栈，不加载任何外部字体。**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Arial, sans-serif;
```

| Element | Tailwind | Size | Weight | Notes |
|---------|----------|------|--------|-------|
| H1 (页面主标题) | `text-3xl md:text-4xl` | 30/36px | `font-bold` | 每页只有一个 |
| H2 (区块标题) | `text-2xl md:text-3xl` | 24/30px | `font-bold` | |
| H3 (小节标题) | `text-xl md:text-2xl` | 20/24px | `font-semibold` | |
| Body | `text-lg` | 18px | `font-normal` | 正文最小 18px |
| Small text | `text-base` | 16px | `font-normal` | 仅用于 disclaimer/footer |
| 金额数字 (大) | `text-4xl md:text-5xl` | 36/48px | `font-bold` | Calculator 结果数字 |
| 金额数字 (卡片) | `text-2xl md:text-3xl` | 24/30px | `font-bold` | 情景卡片中的金额 |
| 增减额 | `text-xl` | 20px | `font-semibold` | +$56.69/mo 这类 |

**行高**: 正文 `leading-relaxed` (1.625), 标题 `leading-tight` (1.25)

---

## Spacing & Layout

| Token | Tailwind | Usage |
|-------|----------|-------|
| Page max width | `max-w-4xl mx-auto` | 内容区最大 896px, 居中 |
| Page padding | `px-4 md:px-6 lg:px-8` | 两侧留白 |
| Section gap | `py-12 md:py-16` | 区块间距 |
| Card padding | `p-6 md:p-8` | 卡片内填充 |
| Element gap | `space-y-4` or `gap-4` | 元素间距 |

### 响应式断点
- Mobile: < 768px — 单列, 卡片竖排
- Tablet: 768px+ — 可开始用 grid
- Desktop: 1024px+ — 三列卡片并排

---

## Components

### Calculator Input

```
┌──────────────────────────────────────────────┐
│  Your Current Monthly Benefit                │  ← label, text-lg, font-semibold
│  ┌────────────────────────────────────────┐   │
│  │ $  2,024.77                           │   │  ← text-2xl, h-14, 大输入框
│  └────────────────────────────────────────┘   │
│  The average retired worker receives          │  ← text-base, text-gray-600
│  $2,024.77/month in 2026.                    │
└──────────────────────────────────────────────┘
```

Tailwind 实现要点:
- 输入框: `h-14 text-2xl px-4 border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:ring-2 focus:ring-blue-200`
- 最小宽度: `min-w-[200px]`
- 必须有 `<label>` 关联, 不能只靠 placeholder

### Scenario Cards (三情景对比)

```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Conservative   │ │  ★ Moderate     │ │  High           │
│  2.8%           │ │  3.2%           │ │  4.0%           │
│                 │ │                 │ │                 │
│  $2,081.40/mo   │ │  $2,089.50/mo   │ │  $2,105.70/mo   │
│  +$56.60/mo     │ │  +$64.70/mo     │ │  +$80.90/mo     │
│  +$679/year     │ │  +$776/year     │ │  +$970/year     │
│                 │ │                 │ │                 │
│  After Medicare:│ │  After Medicare: │ │  After Medicare:│
│  $1,868/mo      │ │  $1,876/mo      │ │  $1,892/mo      │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

Tailwind 实现:
- 容器: `grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6`
- 卡片: `bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8`
- 推荐卡片 (Moderate): `border-blue-800 bg-blue-50 ring-2 ring-blue-800` 突出显示
- 金额: `text-2xl md:text-3xl font-bold text-gray-900`
- 增长额: `text-xl font-semibold text-emerald-600`
- Medicare 后: `text-lg text-gray-600`
- 卡片有 `aria-live="polite"` 在结果容器上

### Hero Section

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  2027 Social Security COLA Forecast                      │  ← H1
│                                                          │
│  ┌──────────────────────────────┐                        │
│  │   2.8% – 3.2%               │                        │  ← 预测范围, text-5xl
│  │   Estimated COLA Increase    │                        │
│  └──────────────────────────────┘                        │
│                                                          │
│  Based on latest CPI-W data (March 2026)                 │
│  Next CPI release: May 13, 2026 (27 days)               │  ← 倒计时
│                                                          │
│  Last updated: April 16, 2026                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- 背景: `bg-blue-50` 或 `bg-gradient-to-b from-blue-50 to-white`
- 预测数字: `text-5xl md:text-6xl font-bold text-blue-800`
- 数据来源标注: `text-base text-gray-600` 建立可信度

### Navigation (Header)

```
┌──────────────────────────────────────────────────────────┐
│  🔢 COLA Calculator        Forecast  History  About     │
└──────────────────────────────────────────────────────────┘
```

- 高度: `h-16`
- 背景: `bg-white border-b border-gray-200`
- Logo: `text-xl font-bold text-blue-800`
- 导航链接: `text-base text-gray-600 hover:text-blue-800`
- 移动端: 汉堡菜单或直接水平滚动

### Footer

```
┌──────────────────────────────────────────────────────────┐
│  Disclaimer: This calculator provides estimates only.    │
│  Not affiliated with the SSA. Not financial advice.      │
│  Data sourced from Bureau of Labor Statistics and SSA.   │
│                                                          │
│  COLA Calculator © 2026  |  About  |  Privacy           │
└──────────────────────────────────────────────────────────┘
```

- 背景: `bg-gray-50 border-t border-gray-200`
- Disclaimer: `text-base text-gray-600` — 必须可见, 不能隐藏
- 链接: `text-blue-800 hover:underline`

### FAQ Section

- 使用 `<details><summary>` 原生 HTML (无需 JS, 屏幕阅读器友好)
- Summary: `text-lg font-semibold text-gray-900 cursor-pointer py-4`
- 展开内容: `text-lg text-gray-600 pb-4`
- 分割线: `border-b border-gray-200`

### Buttons

| Type | Tailwind |
|------|----------|
| Primary | `bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px] min-w-[44px]` |
| Secondary | `bg-white text-blue-800 border-2 border-blue-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 min-h-[44px]` |
| Link style | `text-blue-800 hover:underline text-lg` |

所有可交互元素最小 44x44px 触摸目标。

---

## Page Layout Template

```
Header (fixed top)
─────────────────
Hero / Page Title Section (bg-blue-50)
─────────────────
Main Content (bg-white)
  ├── Section 1
  ├── Section 2 (bg-gray-50, 交替底色增加层次)
  └── Section 3
─────────────────
CTA / Calculator Link (如非首页, 底部放 calculator CTA)
─────────────────
Footer (disclaimer + links)
```

---

## Do's and Don'ts

### Do
- 金额永远显示美元符号和逗号: `$2,081.40`
- 增长额用绿色 + 加号: `+$56.60/mo`
- 用具体金额而非百分比作为最显眼数字 (老人理解 "$56 more" 比 "2.8%" 更直观)
- 每个交互都要有即时视觉反馈
- Disclaimer 在 Calculator 旁边可见

### Don't
- 不用深色模式 (老年用户大多未开启, 白底黑字最清晰)
- 不用动画/过渡 (除非极简 `transition-colors duration-150`)
- 不用轮播/自动滚动
- 不用弹窗/模态框
- 不用小于 16px 的文字
- 不用 `gray-400` 或更浅的颜色做文字
- 不用渐变文字
- 不用骨架屏 (页面是 SSG, 内容直接渲染)

---

## Mobile Priorities

移动端 (大部分 iPad 用户) 特别注意:
- 输入框全宽 `w-full`
- 三张卡片竖排 `grid-cols-1`
- 金额数字仍保持大字号 `text-3xl`+
- 按钮全宽 `w-full`
- 无横向滚动
