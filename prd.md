# PRD: Social Security COLA 2027 Calculator & Tracker

**Version:** 1.0
**Date:** April 16, 2026
**Author:** Man_thinking

---

## 1. Opportunity Summary

### Market Signal

- **"social security cola 2027"** — Google Trends 20万+/天搜索, 涨幅1000%, SEMrush尚未收录(新兴关键词窗口)
- **"social security cola"** — KD 37, 月搜索量273K, SERP被新闻文章占据, 无专用计算器工具站
- **用户画像**: 7000万+ 美国 Social Security 受益人, 以退休老年人为主, 每月CPI数据发布后搜索激增
- **周期性爆发**: 每月CPI发布日 → Q3(7-9月)持续走高 → 10月SSA官宣达到年度峰值, 年年如此

### Competitive Gap

当前SERP格局:
- **排名靠前的都是新闻文章** (CNBC, Yahoo Finance, Motley Fool, Newsweek) — 纯资讯, 没有互动工具
- **SSA官方** (ssa.gov) — 有计算器但极其复杂, 需要输入完整收入历史
- **Senior Citizens League** (seniorsleague.org) — 有COLA Watch但没有个人化计算器
- **SmartAsset / AARP** — 通用退休计算器, 没有专门的COLA 2027预测工具

**核心差异化: 目前没有一个站专门做 "输入你当前benefit → 立即看到2027预估金额" 这件事。**

---

## 2. Product Definition

### Domain

**已注册: `colacalculator.com`** (Hostinger, 3年)

优势:
- .com 后缀, 用户信任度最高
- 包含核心关键词 `cola` + `calculator`
- 不绑年份, 2027→2028→2029 可年年复用
- 短、好记、好拼

### 技术栈

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | 你熟悉, SSG/SSR灵活 |
| Hosting | Vercel | 免费起步, 全球CDN |
| Styling | Tailwind CSS | 快速开发 |
| Analytics | Google Analytics + Search Console | SEO必备 |
| CMS (optional) | MDX files | 内容页用MDX, 无需额外CMS |

**纯前端, 无后端, 零运维成本。** 所有计算都在浏览器端完成。

---

## 3. Site Architecture (Keyword-First)

### Google Trends 相关查询数据 (April 2026)

**飙升关键词 (全部标记 "飙升" = 增长 >5000%):**

| # | Query | 热门度 | 页面映射 |
|---|-------|--------|---------|
| 1 | `2027 social security cola forecast` | 100 | 首页 + /forecast |
| 2 | `2026 social security cola` | 67 | /cola-history |
| 3 | `2027 social security cola forecast reveals ti...` | 35 | /forecast (文章标题型) |
| 4 | `social security cola for 2026` | 34 | /cola-history |
| 5 | `cola for 2026` | 32 | /cola-history |
| 6 | `low social security cola 2027` | 23 | /low-cola-impact ★新增 |
| 7 | `the 2027 social security cola could be more...` | 22 | /forecast |
| 8 | `my social security` | 11 | 导航型, 不做 |
| 9 | `social security cola projection 2027` | 8 | 首页 + /forecast |
| 10 | `income` / `retirement` | 8 | 泛词, 不单独做 |
| 11 | `social security login` | — | 导航型, 不做 |
| 12 | `3 changes to social security...` | 飙升 | /social-security-changes-2027 ★新增 |

**关键洞察:**
- **"forecast" 是核心意图词**, 不是 "calculator" → 首页 Title 应包含 forecast
- **"low cola" 是焦虑型搜索** → 用户担心涨幅不够, 需要专页回应
- **2026回顾搜索仍活跃** → 历史页需覆盖 "cola for 2026" 等词
- **文章标题型搜索大量出现** → 内容页标题需匹配这类自然语言查询
- **"projection" 和 "forecast" 是同义变体** → 都要在核心页覆盖

### 3.1 核心工具页 (Primary Landing Pages)

#### Page 1: 首页 — COLA 2027 Forecast + Calculator
**URL:** `/`
**Target Keywords (按优先级):**
- `2027 social security cola forecast` ★ 热门度100, 第一优先
- `social security cola 2027` (primary)
- `social security cola projection 2027` ★ 来自Trends
- `social security cola 2027 calculator`
- `social security cost of living 2027`

**Title:** `2027 Social Security COLA Forecast & Calculator | Estimate Your Benefit Increase`
**H1:** `2027 Social Security COLA Forecast: Calculate Your Estimated Benefit Increase`
**Meta Description:** `Latest 2027 COLA projections (2.8%–4.0%). Enter your current benefit to see your estimated 2027 Social Security increase, including Medicare deductions.`

**页面结构 (自上而下):**

1. **Hero Section — Latest Forecast Summary**
   - 大字显示: "2027 COLA Forecast: 2.8% – 3.2%"
   - 副标题: "Based on latest CPI-W data (March 2026)"
   - Last updated date + 下次CPI发布倒计时 (May 13, 2026)
   - → 这部分直接回答 "2027 social security cola forecast" 搜索意图

2. **Calculator Section**
   - 输入: 当前月度benefit金额 (预填 $2,024.77)
   - 三情景对比卡片:
     - Conservative: 2.8% (TSCL) → $2,081.46/mo (+$56.69)
     - Moderate: 3.2% (Johnson) → $2,089.57/mo (+$64.80)
     - High: 4.0% (TSCL April) → $2,105.76/mo (+$80.99)
   - 每个卡片显示: 新月度金额 / 月增长$ / 年增长$ / 扣Medicare后净额
   - → 这部分服务 "calculator" 意图

3. **FAQ Section (Schema: FAQPage)**
   - "What is the projected COLA for 2027?" → 2.8%–3.2%
   - "When will the 2027 COLA be announced?" → Mid-October 2026
   - "How is COLA calculated?" → CPI-W Q3 comparison
   - "Will the 2027 COLA be higher than 2026?" → Based on current data...
   - "What does a low COLA mean for retirees?" → 链接 /low-cola-impact
   - → 这部分抢 People Also Ask + Featured Snippet

4. **COLA History Mini-Chart**
   - 最近10年柱状图, 2027用虚线标注预测区间
   - CTA: "View full COLA history →" 链接到 /cola-history

5. **Editorial Section — "What Experts Are Saying"**
   - 摘要两大预测方观点 (TSCL vs Johnson)
   - 链接: "Read full 2027 forecast analysis →" 链接到 /forecast
   - → 增加页面内容深度, 满足E-E-A-T

#### Page 2: 2027 COLA Forecast (月更新核心内容页)
**URL:** `/2027-social-security-cola-forecast`
**Target Keywords:**
- `2027 social security cola forecast` ★ 分流首页, 提供深度分析
- `2027 social security cola forecast reveals...` ★ 文章标题型搜索
- `social security cola increase prediction`
- `the 2027 social security cola could be more...`

**Title:** `2027 Social Security COLA Forecast: Latest Predictions & What to Expect`
**H1:** `2027 Social Security COLA Forecast: Latest Expert Predictions`

**内容结构:**
- Current predictions comparison (TSCL vs Johnson)
- Monthly CPI-W data tracker (表格: Jan→Sep各月数据)
- Why predictions changed (Iran war → oil prices → CPI-W)
- Timeline: key dates ahead
- 每月CPI发布后更新此页 → **持续产生"新鲜内容"信号**

#### Page 3: Low COLA Impact ★新增页面
**URL:** `/low-social-security-cola-2027`
**Target Keywords:**
- `low social security cola 2027` ★ 热门度23, 飙升
- `social security cola not enough`
- `cola vs inflation retirees`

**Title:** `Low Social Security COLA 2027: What a 2.8% Increase Means for Retirees`
**H1:** `What a Low 2027 COLA Means for Your Benefits`

**内容:**
- 如果COLA只有2.8%, 实际购买力变化 (vs 3.3%通胀)
- Medicare扣除后的净增长计算
- 历史对比: COLA vs 实际通胀的差距
- 5 ways to supplement your Social Security income
- → 这页直接命中用户焦虑, 停留时间会很长

#### Page 4: COLA History
**URL:** `/social-security-cola-history`
**Target Keywords:**
- `2026 social security cola` ★ 热门度67
- `social security cola for 2026` ★ 热门度34
- `cola for 2026` ★ 热门度32
- `social security cola history`
- `cola increases by year`

**Title:** `Social Security COLA History: Every Increase from 1975 to 2026`
**H1:** `Social Security COLA History (1975–2026)`

**内容:** 完整数据表 + 可视化 + 年代分析 + 2026 COLA详情

#### Page 5: How COLA Is Calculated
**URL:** `/how-is-social-security-cola-calculated`
**Target Keywords:**
- `how is social security cola calculated`
- `what is CPI-W`
- `cola calculation formula`

#### Page 6: 3 Changes to Social Security ★新增页面
**URL:** `/social-security-changes-2027`
**Target Keywords:**
- `3 changes to social security 2026/2027` ★ 飙升
- `social security changes retirees`

**Title:** `Key Social Security Changes in 2027: COLA, Medicare, and Earnings Limit`
**H1:** `Social Security Changes in 2027: What Retirees Need to Know`

**内容:**
- COLA increase
- Medicare Part B premium changes
- Taxable maximum / earnings limit changes
- 每个变化配计算器 widget

### 3.2 辅助内容页 (Long-tail Coverage)

| URL | Target Keyword | Priority |
|-----|---------------|----------|
| `/cola-and-medicare-premiums-2027` | `cola increase vs medicare premium 2027` | P1 |
| `/social-security-payment-schedule-2027` | `social security payment schedule 2027` | P1 |
| `/ssi-cola-2027` | `ssi cola 2027` | P2 |
| `/fers-cola-2027` | `fers cola 2027` | P2 |
| `/csrs-cola-2027` | `csrs cola 2027` | P2 |
| `/social-security-cola-2028` | `social security cola 2028` | P3 (提前布局) |

### 3.3 站点结构图 (更新版)

```
/                                          ← Forecast + Calculator (主攻页)
│
├── /2027-social-security-cola-forecast    ← 深度预测分析 (月更新)
├── /low-social-security-cola-2027         ← 低COLA影响分析 ★NEW
├── /social-security-changes-2027          ← SS变化总览 ★NEW
│
├── /social-security-cola-history          ← 历史数据 (覆盖2026回顾)
├── /how-is-social-security-cola-calculated ← 教育内容
│
├── /cola-and-medicare-premiums-2027       ← Medicare净增长
├── /social-security-payment-schedule-2027 ← 付款日期
├── /ssi-cola-2027                         ← SSI专页
├── /fers-cola-2027                        ← FERS专页
├── /csrs-cola-2027                        ← CSRS专页
│
├── /social-security-cola-2028             ← 提前布局明年
│
├── /about                                 ← Disclaimer
└── /privacy                               ← 隐私政策
```

### 3.4 内部链接策略

```
首页 (/) ←→ /2027-social-security-cola-forecast (互为主辅)
首页 (/) → /low-social-security-cola-2027 (FAQ中链出)
首页 (/) → /social-security-cola-history (图表CTA)
首页 (/) → /social-security-changes-2027 (editorial section)

/2027-social-security-cola-forecast → 首页 calculator
/low-social-security-cola-2027 → 首页 calculator + /cola-and-medicare-premiums-2027
/social-security-cola-history → 首页 (2027预测) + /how-is-social-security-cola-calculated

所有页面 sidebar/footer → 首页 calculator CTA
```

### 3.5 Title/URL 关键词密度优化

| 页面 | URL中的关键词 | Title中的关键词 | 匹配的Trends查询 |
|------|-------------|--------------|----------------|
| 首页 | / | 2027 Social Security COLA Forecast & Calculator | #1 forecast, #9 projection |
| 预测页 | /2027-social-security-cola-forecast | 2027 Social Security COLA Forecast | #1, #3, #7 |
| 低COLA页 | /low-social-security-cola-2027 | Low Social Security COLA 2027 | #6 exact match |
| 历史页 | /social-security-cola-history | Social Security COLA History...2026 | #2, #4, #5 |
| 变化页 | /social-security-changes-2027 | Social Security Changes 2027 | #12 |

---

## 4. Calculator 核心逻辑

```javascript
// COLA Calculator - Pure Frontend Logic
function calculateCOLA(currentBenefit, colaPercentage) {
  const monthlyIncrease = currentBenefit * (colaPercentage / 100);
  const newMonthlyBenefit = currentBenefit + monthlyIncrease;
  const annualIncrease = monthlyIncrease * 12;
  
  // Medicare Part B 2026 premium (update annually)
  const medicarePremium2026 = 202.90;
  // Estimated 2027 premium (assume ~5% increase)
  const medicarePremium2027 = 213.05;
  
  const netBenefit2026 = currentBenefit - medicarePremium2026;
  const netBenefit2027 = newMonthlyBenefit - medicarePremium2027;
  const netMonthlyChange = netBenefit2027 - netBenefit2026;

  return {
    newMonthlyBenefit: newMonthlyBenefit.toFixed(2),
    monthlyIncrease: monthlyIncrease.toFixed(2),
    annualIncrease: annualIncrease.toFixed(2),
    netBenefit2027: netBenefit2027.toFixed(2),
    netMonthlyChange: netMonthlyChange.toFixed(2),
  };
}

// Pre-configured scenarios (update monthly)
const SCENARIOS = {
  low:  { label: "Conservative (TSCL)", percentage: 2.8 },
  mid:  { label: "Moderate (Johnson)",  percentage: 3.2 },
  high: { label: "High (TSCL April)",   percentage: 4.0 },
};

// Key dates for countdown timer
const KEY_DATES = {
  nextCPIRelease: "2026-05-13",    // April CPI data
  q3Start: "2026-07-01",           // COLA measurement period begins
  officialAnnouncement: "2026-10-15", // SSA announces (approximate)
  effectiveDate: "2027-01-01",     // New benefits take effect
};
```

---

## 5. Monetization Strategy

### Phase 1: AdSense (Month 1-3)
- 金融类内容CPM高, 预估 $15-30 RPM
- 退休人群用户粘性高, 页面停留时间长
- 目标: 日UV 500 → ~$15-45/天

### Phase 2: Affiliate (Month 2+)
- **高价值affiliate**: 
  - 年金(Annuity)产品 — CPA $50-200
  - Medicare Supplement保险 — CPA $20-100
  - 退休理财工具 (Fidelity, Vanguard affiliate programs)
  - Tax preparation services (TurboTax, H&R Block)
- 自然融入: 计算器结果下方 "Want to maximize your retirement income? Compare annuity rates →"

### Phase 3: Email List (Month 1+)
- **COLA Update Newsletter**: "Get notified when the 2027 COLA forecast changes"
- 每月CPI发布后发送更新邮件
- 列表价值高: 退休人群 = 金融产品精准受众

---

## 6. SEO Strategy

### On-Page
- **每页精准1个primary keyword** + 2-3个secondary keywords
- **Schema markup**: FAQPage, WebApplication, Article
- **内部链接**: 计算器页 ↔ 所有内容页互链
- **更新频率**: 计算器预测数据每月CPI后更新, 内容页季度更新

### Off-Page / Launch
- **复用你的 Launch Kit 经验** (notebookconvert模式):
  - Product Hunt (作为免费工具提交)
  - GitHub (开源计算器逻辑)
  - Reddit: r/SocialSecurity, r/retirement, r/personalfinance
  - 目录提交: Tiny Launch, SaaSHub 等
  - 社区: Bogleheads论坛, Early Retirement Forum

### Content Flywheel (持续流量引擎)
- 每月BLS发布CPI数据后 (通常每月第2周):
  1. 更新计算器预测数值
  2. 发布新文章: "COLA 2027 Update: [Month] CPI Data Shows X.X%"
  3. 推送邮件给订阅者
  4. 社交媒体分享
- **这个flywheel每月自动产生新的SEO内容和流量**

---

## 7. MVP Scope (3-Day Sprint)

### Day 1: Setup + Calculator
- [ ] 注册域名
- [ ] Next.js 14 项目初始化 (App Router + Tailwind)
- [ ] 首页 Calculator UI + 逻辑
- [ ] 三情景对比展示
- [ ] 移动端响应式
- [ ] 基础 SEO meta tags

### Day 2: Content + SEO
- [ ] COLA History页 (数据表 + 图表)
- [ ] How COLA Is Calculated页
- [ ] 2027 COLA Predictions页
- [ ] sitemap.xml + robots.txt
- [ ] Google Search Console + Bing Webmaster 提交
- [ ] Schema markup (FAQPage + WebApplication)

### Day 3: Polish + Launch
- [ ] About + Privacy + Disclaimer页
- [ ] Email signup (Mailchimp/ConvertKit free tier)
- [ ] Google Analytics
- [ ] OG images for social sharing
- [ ] 首轮目录提交 + Reddit发帖
- [ ] 提交 Google indexing

---

## 8. Key Data Points (硬编码, 月更新)

```
2026 Average Monthly Benefit (Retired Worker): $2,024.77
2026 Medicare Part B Premium: $202.90/month
2026 COLA: 2.8%

2027 COLA Predictions (as of April 2026):
- Senior Citizens League (TSCL): 2.8%
- Mary Johnson (Independent): 3.2%
- TSCL (April revised): 4.0%

COLA Official Announcement: Mid-October 2026
Next CPI Data Release: May 13, 2026 (April data)
2027 Benefits Effective: January 2027

Historical COLAs (recent):
2026: 2.8%
2025: 2.5%
2024: 3.2%
2023: 8.7%
2022: 5.9%
2021: 1.3%
2020: 1.6%
2019: 2.8%
2018: 2.0%
2017: 0.3%
2016: 0.0%
```

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| YMYL (Your Money Your Life) — Google对金融内容要求E-E-A-T | 排名受限 | 明确Disclaimer "not financial advice", 引用SSA官方数据源, 内容精准引用权威来源 |
| 竞争者跟进 | 窗口期缩短 | 快速上线抢占"social security cola 2027 calculator"这个精确长尾词 |
| 10月SSA公布后搜索量下降 | 流量季节性下降 | 提前规划 "social security cola 2028" 内容, 年年复用 |
| 大站(AARP/SmartAsset)做类似工具 | 难以竞争 | 专注2027年份词+更好的UX+更快的更新频率 |
| 分散notebookconvert精力 | 两个项目都做不好 | 3天MVP, 之后每月只需1-2小时维护(CPI更新日) |

---

## 10. Success Metrics

| Metric | Month 1 | Month 3 | Month 6 (Oct公告) |
|--------|---------|---------|-------------------|
| Daily UV | 50-100 | 500+ | 5,000+ |
| Google indexed pages | 5+ | 10+ | 15+ |
| "social security cola 2027" ranking | Top 30 | Top 10 | Top 5 |
| Email subscribers | 50 | 500 | 2,000+ |
| Monthly revenue | $0 | $100-300 | $1,000+ |

---

## 11. 与 notebookconvert 的关系

这个项目和 notebookconvert **不冲突**, 原因:

1. **技术栈完全一致** (Next.js + Vercel), 开发效率高
2. **3天MVP后维护成本极低** — 每月CPI日更新一次数据即可
3. **不同受众群体**, 不存在注意力分散
4. **如果验证成功, 10月高峰期可以产生显著收入**
5. **学到的SEO经验直接反哺notebookconvert**

但请注意: **notebookconvert仍然是主线项目**, 这个COLA站是一个低维护成本的增量机会。

---

*"The best time to plant a tree was 20 years ago. The second best time is now."*
*— 在SEMrush还没收录关键词的时候上线, 就是最好的时机。*