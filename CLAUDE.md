# COLA Calculator — Project Instructions

## Project Overview

Social Security COLA 2027 预测计算器网站 (colacalculator.com)
面向美国 7000 万+ Social Security 受益人，提供 2027 COLA 预测 & 个人化收益计算。

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS (no UI library) |
| Hosting | Vercel |
| Analytics | Google Analytics 4 + Search Console |
| Content | .tsx pages (not MDX) |

**纯前端，零后端。** 所有计算浏览器端完成。

## Directory Structure

```
colacalculator/
├── app/
│   ├── layout.tsx                              # Root layout (metadata, fonts, schema)
│   ├── page.tsx                                # Homepage: Forecast + Calculator
│   ├── sitemap.ts                              # Auto-generated sitemap
│   ├── robots.ts                               # Robots.txt
│   ├── opengraph-image.tsx                     # Default OG image
│   ├── 2027-social-security-cola-forecast/
│   │   └── page.tsx
│   ├── social-security-cola-history/
│   │   └── page.tsx
│   ├── low-social-security-cola-2027/
│   │   └── page.tsx
│   ├── how-is-social-security-cola-calculated/
│   │   └── page.tsx
│   ├── social-security-changes-2027/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── privacy/
│       └── page.tsx
├── components/
│   ├── COLACalculator.tsx      # "use client" — 唯一核心交互组件
│   ├── CountdownTimer.tsx      # "use client" — CPI 发布倒计时
│   ├── COLAChart.tsx           # COLA 历史柱状图 (纯 SVG/CSS, 无图表库)
│   ├── FAQSection.tsx          # FAQ + FAQPage schema
│   ├── Header.tsx              # 全站导航
│   ├── Footer.tsx              # 全站 footer + disclaimer
│   └── SchemaMarkup.tsx        # JSON-LD structured data helper
├── lib/
│   ├── cola-data.ts            # ★ 唯一数据源 — 月更新只改这个文件
│   ├── calculator.ts           # COLA 计算逻辑 (SSA 舍入规则)
│   └── constants.ts            # 静态常量 (不变的)
├── public/
│   ├── favicon.ico
│   └── images/
├── CLAUDE.md
├── PLAN.md
├── DESIGN.md
└── prd
```

## Key Architecture Decisions

### Rendering: SSG + Client Component Island
- **所有页面 SSG** (静态生成) — 内容每月更新一次，不需要 SSR
- **Calculator 是唯一的 Client Component** — `"use client"` 标记
- Googlebot 拿到完整静态 HTML，Calculator JS 异步水合

### 数据管理: 单一数据源
**`lib/cola-data.ts` 是唯一需要月更新的文件。** 所有页面从此文件 import。

月更新流程: 打开 `cola-data.ts` → 改 4-5 个数值 → commit → push → Vercel 自动部署。

## Code Style

- TypeScript strict mode
- 组件用函数式 + arrow function
- 文件名: PascalCase 组件, kebab-case 路由, camelCase 工具函数
- Tailwind class 直接写在 JSX 上，不抽 CSS 文件
- 不引入任何 UI 组件库 (no shadcn, no MUI, no Ant Design)
- 不引入图表库 (no Chart.js, no Recharts, no D3) — 用纯 SVG 或 CSS
- 不引入日期库 (no date-fns, no dayjs) — 用原生 Date
- 系统字体栈，不加载 Google Fonts

## Calculator Logic — SSA Official Rounding Rules

SSA 对 COLA 的舍入规则 (必须遵守):
1. COLA 增加后 → 向下取整到最近一角 (dime, 即 $0.10)
2. 扣除 Medicare Part B 后 → 向下取整到美元 ($1.00)

```ts
// 正确
Math.floor(amount * 10) / 10  // round down to dime
Math.floor(amount)             // round down to dollar

// 错误 — 不要用
amount.toFixed(2)  // 这不是 SSA 的规则
```

## SEO Requirements

- 每页必须有唯一的 title, description, canonical URL
- `metadataBase` 设为 `https://colacalculator.com`
- 结构化数据: FAQPage, SoftwareApplication, BreadcrumbList, Article, Organization
- 所有日期用 ISO 8601 格式
- `<html lang="en">` + geo.region US

## Accessibility (a11y) — 非可选

目标用户 65+，a11y 是硬性要求:
- 每个 input 必须有 `<label>`
- 计算结果区域: `aria-live="polite"`
- 最小触摸目标: 44x44px
- 对比度 ≥ 4.5:1
- 基础字号 ≥ 16px, 金额显示 ≥ 24px

## Git Convention

- Commit message: English, imperative mood
- Format: `type: short description` (feat/fix/content/seo/chore)
- 例: `feat: add COLA calculator with SSA rounding rules`
- 例: `content: add COLA history page with 1975-2026 data`
- 例: `seo: add FAQPage schema markup to homepage`

## What NOT to Do

- 不要安装额外的 npm 包 (除 next, react, tailwindcss, typescript, @types/*)
- 不要创建 API routes — 这是纯前端站
- 不要用 `getServerSideProps` — 全站 SSG
- 不要用 `useEffect` 做数据获取 — 数据是静态的
- 不要用 `.env` 文件存数据 — 所有数据在 `cola-data.ts`
- 不要追求完美再上线 — Phase 1 完成就部署
