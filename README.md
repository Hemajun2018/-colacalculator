# Social Security COLA 2027 Calculator

Live site: **https://colacalculator.com**

Free open-source tool that lets US Social Security beneficiaries estimate their
2027 Cost-of-Living Adjustment (COLA) in seconds. Enter your current monthly
benefit, see three forecast scenarios side-by-side, with Medicare Part B
deductions computed under the official SSA rounding rules.

## Pages

- [Social Security COLA 2027 Forecast & Calculator](https://colacalculator.com) — homepage with the instant calculator
- [2027 COLA Forecast & Expert Predictions](https://colacalculator.com/2027-social-security-cola-forecast) — deep-dive into TSCL and Mary Johnson projections
- [Low Social Security COLA 2027 — Impact on Retirees](https://colacalculator.com/low-social-security-cola-2027) — what a low COLA means in real purchasing power
- [Social Security Changes in 2027](https://colacalculator.com/social-security-changes-2027) — COLA, Medicare Part B, earnings limit
- [Social Security COLA History 1975–2026](https://colacalculator.com/social-security-cola-history) — every annual adjustment on record
- [How Is Social Security COLA Calculated](https://colacalculator.com/how-is-social-security-cola-calculated) — the CPI-W formula and SSA rounding rules

## Features

- Instant calculator with three scenarios (Conservative 2.8% / Moderate 3.2% / High 4.0%)
- SSA official rounding rules — round down to the dime on the gross benefit, round down to the dollar on the net payable amount
- Medicare Part B deduction handled automatically
- COLA history chart from 1975 through 2026, with the 2027 forecast band shown as a dashed bar
- Live countdown to the next BLS CPI-W data release
- Structured data (FAQPage, SoftwareApplication, Article, BreadcrumbList, HowTo, Dataset, AboutPage)
- Senior-friendly accessibility — 44×44 minimum touch targets, ≥16px base text, aria-live results, labelled inputs
- Fully responsive, mobile-first

## Stack

- Next.js 14 (App Router, TypeScript, SSG)
- Tailwind CSS (no UI library)
- Vercel (hosting, CDN)
- Google Analytics 4
- Pure frontend — no backend, no database, no API routes

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Monthly data update workflow

After BLS releases new CPI-W data (second week of each month):

1. Open `lib/cola-data.ts`
2. Update `dataAsOf`, `nextCPIRelease`, `scenarios`, and `forecastRange`
3. `git commit && git push` — Vercel auto-deploys in about a minute

That's it. All pages read from the same source file.

## Data sources

- Bureau of Labor Statistics (BLS) — monthly CPI-W releases
- Social Security Administration (SSA) — historical COLA data, official announcements
- The Senior Citizens League (TSCL) — independent COLA projections
- Centers for Medicare & Medicaid Services (CMS) — Part B premium data

## Disclaimer

COLA Calculator is not affiliated with the Social Security Administration or any
US government agency. All projections on the site and in this repository are
estimates based on publicly available data and third-party forecasts. They
should not be treated as financial, legal, or tax advice. The official 2027
COLA will be announced by SSA in mid-October 2026.

For official information about your benefits, visit
[ssa.gov](https://www.ssa.gov) or sign in to your *my Social Security* account.

## License

MIT
