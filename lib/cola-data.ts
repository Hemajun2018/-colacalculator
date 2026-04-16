// ★ 唯一数据源 — 每月 CPI 发布后只更新这个文件
// 月更新流程: 改数值 → commit → push → Vercel 自动部署

export const COLA_DATA = {
  // ===== 每月更新区域 =====
  dataAsOf: "2026-04-16",
  nextCPIRelease: "2026-05-13T08:30:00-04:00", // BLS 8:30 AM ET
  nextCPILabel: "May 13, 2026",

  scenarios: [
    { id: "low", label: "Conservative", source: "TSCL", percentage: 2.8 },
    { id: "mid", label: "Moderate", source: "Johnson", percentage: 3.2 },
    { id: "high", label: "High", source: "TSCL April", percentage: 4.0 },
  ] as const,

  forecastRange: { low: 2.8, high: 3.2 },

  // ===== 年度更新区域 =====
  currentYear: 2026,
  targetYear: 2027,
  averageBenefit: 2024.77,
  medicarePremium: 202.90, // 2026 actual
  // Placeholder: update once CMS announces the 2027 Part B premium (~Nov 2026)
  projectedMedicarePremium: 213.05,
  currentCOLA: 2.8, // 2026 COLA

  // ===== 邮件订阅 =====
  // Paste your Mailchimp/ConvertKit form action URL when ready.
  // Empty string = local-only capture (subscribers saved to localStorage).
  newsletterFormAction: "",

  // ===== Analytics =====
  googleAnalyticsId: "G-Y2TLSCY5MD",

  // ===== 关键日期 =====
  officialAnnouncement: "2026-10-15",
  effectiveDate: "2027-01-01",

  // ===== 历史 COLA 数据 =====
  historicalCOLAs: [
    { year: 2026, cola: 2.8 },
    { year: 2025, cola: 2.5 },
    { year: 2024, cola: 3.2 },
    { year: 2023, cola: 8.7 },
    { year: 2022, cola: 5.9 },
    { year: 2021, cola: 1.3 },
    { year: 2020, cola: 1.6 },
    { year: 2019, cola: 2.8 },
    { year: 2018, cola: 2.0 },
    { year: 2017, cola: 0.3 },
    { year: 2016, cola: 0.0 },
    { year: 2015, cola: 1.7 },
    { year: 2014, cola: 1.5 },
    { year: 2013, cola: 1.7 },
    { year: 2012, cola: 3.6 },
    { year: 2011, cola: 0.0 },
    { year: 2010, cola: 0.0 },
    { year: 2009, cola: 5.8 },
    { year: 2008, cola: 2.3 },
    { year: 2007, cola: 3.3 },
    { year: 2006, cola: 4.1 },
    { year: 2005, cola: 2.7 },
    { year: 2004, cola: 2.1 },
    { year: 2003, cola: 1.4 },
    { year: 2002, cola: 2.6 },
    { year: 2001, cola: 3.5 },
    { year: 2000, cola: 2.5 },
    { year: 1999, cola: 1.3 },
    { year: 1998, cola: 2.1 },
    { year: 1997, cola: 2.9 },
    { year: 1996, cola: 2.6 },
    { year: 1995, cola: 2.8 },
    { year: 1994, cola: 2.6 },
    { year: 1993, cola: 3.0 },
    { year: 1992, cola: 3.7 },
    { year: 1991, cola: 5.4 },
    { year: 1990, cola: 4.7 },
    { year: 1989, cola: 4.0 },
    { year: 1988, cola: 4.2 },
    { year: 1987, cola: 1.3 },
    { year: 1986, cola: 3.1 },
    { year: 1985, cola: 3.5 },
    { year: 1984, cola: 3.5 },
    { year: 1983, cola: 7.4 },
    { year: 1982, cola: 7.4 },
    { year: 1981, cola: 11.2 },
    { year: 1980, cola: 14.3 },
    { year: 1979, cola: 9.9 },
    { year: 1978, cola: 6.5 },
    { year: 1977, cola: 5.9 },
    { year: 1976, cola: 6.4 },
    { year: 1975, cola: 8.0 },
  ],
} as const;

export type Scenario = (typeof COLA_DATA.scenarios)[number];
