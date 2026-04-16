# COLA Calculator — 上线后行动计划

**起点日期：2026-04-16**（站点正式提交 Google 索引）
**目标里程碑：2026-10 SSA 官宣 2027 COLA 时达到 5000+ UV/天**

---

## ✅ 已完成清单（基础设施）

- [x] Next.js 14 + Tailwind 全部 7 个核心页面上线
- [x] Vercel 部署 + `colacalculator.com` 域名解析
- [x] Google Analytics 4 接入（`G-Y2TLSCY5MD`）
- [x] Google Search Console 网域资源验证 + sitemap 提交
- [x] 6 个核心页面已提交"请求编入索引"
- [x] Cloudflare 放行 Googlebot
- [x] Schema 标记：SoftwareApplication / FAQPage / Article / BreadcrumbList / HowTo / Dataset / AboutPage
- [x] OG image（edge runtime 动态生成）
- [x] GitHub 公开仓库 + README 含 7 条关键词 anchor 外链
- [x] 首屏即可输入的 Hero Calculator UI

---

## 📅 监控时间表（被动观察，无需行动）

| 时间 | 预期信号 | 检查在哪 |
|---|---|---|
| **2026-04-16 ~ 04-17** | 请求索引的 6 个页面陆续显示 "已在 Google 上编入索引" | GSC → 网址检查 |
| **2026-04-17 ~ 04-18** | `site:colacalculator.com` 能搜到所有页面 | Google 搜索 |
| **2026-04-19 ~ 04-23** | GSC "效果" 开始有展示次数（impressions）| GSC → 效果 |
| **2026-04-23 ~ 04-30** | 开始有点击 + 能看到搜索查询词 | GSC → 效果 → 查询 |
| **2026-05-01 ~ 05-15** | `social security cola 2027` 关键词进入前 50 名 | GSC → 排名 |
| **2026-05-13** | 下一次 BLS CPI 数据发布 — **第一次月度更新** | 手动触发 |
| **2026-09 ~ 10** | 季节性流量上升，Q3 CPI 数据成为话题 | 持续监控 |
| **2026-10-15 前后** | SSA 官宣 2027 COLA，**流量全年峰值** | 预测峰值期 |

---

## 🟢 短期行动（1~2 周内完成）

### 搜索引擎覆盖扩展
- [ ] **Bing Webmaster Tools** — 提交 sitemap（覆盖 Bing + Yahoo + ChatGPT Search）
  - https://www.bing.com/webmasters → 添加站点 → 从 GSC 导入或重新验证
  - 耗时 5 分钟
- [ ] **Yandex Webmaster**（可选，如果目标人群有海外华人等）

### 社区外链 & 首发
- [ ] **Reddit r/SocialSecurity 发帖**
  - 标题参考：`"Made a free 2027 COLA calculator — enter your benefit, see 3 scenarios"`
  - 内容：自述开发动机，工具介绍，免责声明
  - 禁忌：不要硬广、不要刷评论
- [ ] **Reddit r/retirement** — 同上
- [ ] **Bogleheads 论坛** — Investment Tools 版块发帖
- [ ] **Early Retirement Forum** — Tools & Resources 版块

### 目录提交（一次性，5~10 分钟/个）
- [ ] **Product Hunt** — 作为 "Free Tool" 提交
- [ ] **Tiny Launch** — 免费工具目录
- [ ] **SaaSHub** — 工具目录
- [ ] **GitHub 仓库 star** — 建议找朋友给 repo star，提高 GitHub 搜索排名

### 技术小优化
- [ ] 添加 `favicon.ico`（当前只有 `icon.svg`，老浏览器会 404）
- [ ] 开启 Vercel Analytics（免费，比 GA4 更轻量，不影响 Core Web Vitals）
- [ ] 验证所有页面 Lighthouse 分数 ≥ 90

---

## 🟡 中期行动（2~6 周）

### 内容扩展 —— PRD 3.2 辅助页（按 SEO 价值排序）
- [ ] **`/cola-and-medicare-premiums-2027`** (P1) — `cola increase vs medicare premium 2027`
- [ ] **`/social-security-payment-schedule-2027`** (P1) — `social security payment schedule 2027`
- [ ] **`/ssi-cola-2027`** (P2) — `ssi cola 2027`
- [ ] **`/fers-cola-2027`** (P2) — `fers cola 2027`
- [ ] **`/csrs-cola-2027`** (P2) — `csrs cola 2027`

每个新页面完成后：
1. 加到 `app/sitemap.ts`
2. 更新 Footer 导航内链
3. 在 GSC 请求编入索引

### 数据驱动优化
- [ ] 等 GSC 积累 2~3 周数据后，看 **效果 → 查询** 报告
  - 找到"展示高、点击低"的查询 → 优化对应页面的 title/description
  - 找到"意外进来"的查询词 → 补充相关内容
- [ ] 看 **GA4 → 用户获取 → 流量来源** — 分析哪些渠道 ROI 最高

### E-E-A-T 加强
- [ ] About 页加一个真实作者署名 + 简介（改善金融内容 YMYL 信任度）
- [ ] 每篇 Article schema 的 `author` 升级为 `Person` 类型
- [ ] 首页加一段 "Last updated by [name] on [date]" 小字

---

## 🔴 长期行动（1~3 个月）

### 变现（需先达到流量门槛）
- [ ] **Google AdSense 申请**（需域名运行 ≥ 3 个月 + 有稳定内容）
  - 申请前确保隐私政策完善 + 有至少 10 个有效内容页
- [ ] **Affiliate 接入**：
  - 年金（Annuity）产品 — CPA $50~200
  - Medicare Supplement 保险 — CPA $20~100
  - 退休理财（Fidelity / Vanguard affiliate）
  - Tax prep（TurboTax / H&R Block）
- [ ] 融入位置：计算器结果卡片下方 "Want to maximize your retirement income? →"

### 邮件列表（流量飞轮）
- [ ] 注册 Mailchimp / ConvertKit 免费账号
- [ ] 把 `lib/cola-data.ts` 的 `newsletterFormAction` 填上表单 URL
- [ ] 启用 `components/EmailSignup.tsx`（当前隐藏，改回显示即可）
- [ ] 每月 CPI 发布后群发一封更新邮件

### 2028 提前布局
- [ ] **`/social-security-cola-2028`** — 抢在竞争对手之前占位（热门度会在 2027 年中开始上升）

---

## 🔄 每月维护 Checklist（每月 CPI 发布后 15 分钟）

**日历提醒：每月第 2 周的周二，BLS 于美东早 8:30 AM 发布 CPI-W**

1. 打开 `lib/cola-data.ts`
2. 更新字段：
   - [ ] `dataAsOf` → 当天日期
   - [ ] `nextCPIRelease` + `nextCPILabel` → 下月 BLS 日期
   - [ ] `scenarios` → 最新 TSCL / Johnson 预测
   - [ ] `forecastRange` → 当前预测区间
3. `git commit -m "content: update COLA data for [month] CPI release"` + `git push`
4. Vercel 自动部署（1~2 分钟）
5. GSC → 网址检查 → 首页 + `/2027-social-security-cola-forecast` 各请求一次"重新编入索引"
6. （可选）Reddit / Twitter 发一条更新帖，截图 + 链接

---

## 📊 成功指标（PRD 第 10 章）

| 指标 | Month 1 (2026-05) | Month 3 (2026-07) | Month 6 (2026-10 SSA 官宣) |
|---|---|---|---|
| 日 UV | 50~100 | 500+ | 5,000+ |
| Google 已索引页面 | 5+ | 10+ | 15+ |
| `social security cola 2027` 排名 | Top 30 | Top 10 | Top 5 |
| 邮件订阅 | 50 | 500 | 2,000+ |
| 月收入 | $0 | $100~300 | $1,000+ |

---

## ⚠️ 风险预警

| 风险 | 触发信号 | 应对 |
|---|---|---|
| YMYL 排名受限 | GSC 排名长期卡在 20+ | About 页加真实署名；引用 SSA 官方 URL；Article schema 升级 |
| Cloudflare 挡爬虫 | GSC 报错 "无法抓取" | Security → Bots → 关闭 Bot Fight Mode |
| 大站跟进（AARP / SmartAsset） | SERP 被挤出 | 专注年份词 + 更新频率 + 2028 提前布局 |
| 10 月后流量下降 | 官宣后 UV 跳水 > 60% | 提前铺 `/social-security-cola-2028` + 邮件列表沉淀用户 |
| 关键数据错误 | 用户反馈 / 同行报道 | 立即修 `cola-data.ts` + 在相关页顶部加 "Updated: [date]" 说明 |

---

## 🔗 相关资源

- **GSC**：https://search.google.com/search-console（网域资源：colacalculator.com）
- **GA4**：https://analytics.google.com（衡量 ID：G-Y2TLSCY5MD）
- **Vercel Dashboard**：https://vercel.com/dashboard
- **GitHub Repo**：https://github.com/Hemajun2018/-colacalculator
- **BLS CPI 发布日历**：https://www.bls.gov/schedule/news_release/cpi.htm
- **SSA COLA 页**：https://www.ssa.gov/oact/cola/latestCOLA.html

---

*最后更新：2026-04-16 · 上线首日。下一次大更新：2026-05-13 四月 CPI 数据发布后。*
