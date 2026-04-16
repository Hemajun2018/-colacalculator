# COLA Calculator — 今日上线计划

**原则: Phase 1 完成即部署，后续边上线边加内容。**

---

## Phase 1: 核心 MVP（目标: 2 小时内可部署）

完成后立即 `vercel deploy --prod`，网站即刻上线。

### 1.1 项目初始化
- [ ] `npx create-next-app@14` (App Router + TypeScript + Tailwind + ESLint)
- [ ] 清理默认模板文件
- [ ] 配置 `next.config.js` (metadataBase, trailing slash)
- [ ] 创建 `lib/cola-data.ts` 单一数据源
- [ ] 创建 `lib/calculator.ts` 计算逻辑 (SSA 舍入规则)

### 1.2 全局 Layout
- [ ] `app/layout.tsx` — html lang, 系统字体栈, 全局 metadata
- [ ] `components/Header.tsx` — 简洁导航 (logo + 3-4 个链接)
- [ ] `components/Footer.tsx` — disclaimer + 链接 + copyright

### 1.3 首页 Calculator (核心页面)
- [ ] Hero Section — COLA Forecast 大字展示 (2.8%–3.2%)
- [ ] `components/COLACalculator.tsx` ("use client")
  - 输入框: 当前月度 benefit (预填 $2,024.77)
  - 三情景对比卡片 (Conservative / Moderate / High)
  - 每张卡片: 新月度金额 / 月增长$ / 年增长$ / 扣 Medicare 后净额
  - 输入验证 (SSA 范围 $50–$4,873)
  - aria-live 结果播报
- [ ] `components/CountdownTimer.tsx` — 下次 CPI 发布倒计时
- [ ] FAQ Section (3-5 个核心问答, 内嵌 FAQPage schema)
- [ ] COLA History 迷你柱状图 (纯 CSS/SVG, 最近 10 年)

### 1.4 第一次部署 ★
- [ ] Git init + 首次 commit
- [ ] 连接 Vercel + 部署
- [ ] 验证线上可访问

---

## Phase 2: SEO 基础（Phase 1 部署后立即开始）

### 2.1 Metadata & Schema
- [ ] 首页完整 SEO metadata (title, description, canonical, OG)
- [ ] `components/SchemaMarkup.tsx` — JSON-LD 辅助组件
- [ ] 首页 schema: SoftwareApplication + FAQPage
- [ ] 全站 schema: Organization + WebSite
- [ ] OG image (opengraph-image.tsx 或静态图片)

### 2.2 Technical SEO
- [ ] `app/sitemap.ts` — 自动生成, lastModified 关联 cola-data.ts
- [ ] `app/robots.ts` — Allow all
- [ ] Canonical URL 全局设置
- [ ] `<meta name="geo.region" content="US" />`

### 2.3 提交索引
- [ ] Google Search Console 验证 + 提交 sitemap
- [ ] Bing Webmaster Tools 提交
- [ ] 手动请求首页 + 前 3 个高优先页面索引

### 2.4 第二次部署 ★
- [ ] 部署 SEO 更新

---

## Phase 3: 内容页（SEO 部署后开始）

按 SEO 价值排序，逐页开发，每完成一页可单独部署。

### 3.1 COLA History 页 (/social-security-cola-history)
- [ ] 1975–2026 完整数据表
- [ ] 柱状图可视化 (纯 SVG)
- [ ] 2026 COLA 详情段落
- [ ] BreadcrumbList + Article schema
- [ ] 页面 SEO metadata

### 3.2 2027 Forecast 详情页 (/2027-social-security-cola-forecast)
- [ ] 当前预测对比 (TSCL vs Johnson)
- [ ] CPI-W 月度数据追踪表
- [ ] 关键时间线
- [ ] Article schema + dateModified
- [ ] 页面 SEO metadata

### 3.3 Low COLA Impact 页 (/low-social-security-cola-2027)
- [ ] 低 COLA 对实际购买力影响分析
- [ ] Medicare 扣除后净增长计算
- [ ] 历史 COLA vs 实际通胀对比
- [ ] 页面 SEO metadata

### 3.4 How COLA Is Calculated 页
- [ ] CPI-W 计算方法说明
- [ ] Q3 比较期解释
- [ ] 配图/示意图
- [ ] 页面 SEO metadata

### 3.5 Social Security Changes 2027 页
- [ ] COLA increase
- [ ] Medicare Part B premium changes
- [ ] Earnings limit changes
- [ ] 页面 SEO metadata

### 3.6 辅助页面
- [ ] About 页 (E-E-A-T: 运营者背景, disclaimer, 联系方式)
- [ ] Privacy Policy 页 (noindex)

### 3.7 最终部署 ★
- [ ] 全部内容页部署
- [ ] 更新 sitemap (确认所有页面收录)
- [ ] 再次提交 Search Console 索引请求

---

## Phase 3 之后 (今天不做，记录备忘)

- [ ] Google Analytics 4 接入 + 自定义事件
- [ ] Email signup (Mailchimp 免费版)
- [ ] AdSense 申请 (域名需先运行数周)
- [ ] Affiliate 链接植入
- [ ] /cola-and-medicare-premiums-2027
- [ ] /social-security-payment-schedule-2027
- [ ] /ssi-cola-2027, /fers-cola-2027, /csrs-cola-2027
- [ ] /social-security-cola-2028 (提前布局)
- [ ] Reddit / Product Hunt 首发推广

---

## 月度维护 Checklist (每月 CPI 发布后)

1. 打开 `lib/cola-data.ts`
2. 更新 `dataAsOf` 日期
3. 更新 `nextCPIRelease` 为下月日期
4. 更新 `scenarios` 中的预测百分比 (如有变化)
5. Commit → Push → Vercel 自动部署
6. Search Console 请求重新索引首页和 forecast 页

预计耗时: 15 分钟。
