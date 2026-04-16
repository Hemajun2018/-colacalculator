import { Metadata } from "next";
import { COLA_DATA } from "@/lib/cola-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2027 Social Security COLA Forecast: Latest Predictions & What to Expect",
  description:
    "Latest 2027 Social Security COLA predictions from leading analysts. Current forecast: 2.8%–4.0%. Updated monthly with new CPI-W data.",
  alternates: {
    canonical: "https://colacalculator.com/2027-social-security-cola-forecast",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2027 Social Security COLA Forecast: Latest Expert Predictions",
  datePublished: "2026-04-16",
  dateModified: COLA_DATA.dataAsOf,
  author: {
    "@type": "Organization",
    name: "COLA Calculator Editorial",
    url: "https://colacalculator.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "COLA Calculator",
    url: "https://colacalculator.com",
    logo: {
      "@type": "ImageObject",
      url: "https://colacalculator.com/icon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://colacalculator.com/2027-social-security-cola-forecast",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://colacalculator.com" },
    { "@type": "ListItem", position: 2, name: "2027 COLA Forecast" },
  ],
};

export default function ForecastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-3">
          <nav className="text-base text-gray-600">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">2027 COLA Forecast</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            2027 Social Security COLA Forecast: Latest Expert Predictions
          </h1>
          <p className="text-base text-gray-600 mb-8">
            Last updated:{" "}
            {new Date(COLA_DATA.dataAsOf).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {/* Current Predictions */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Current 2027 COLA Predictions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The 2027 Social Security Cost-of-Living Adjustment (COLA) will be based on the change in the Consumer Price Index for Urban Wage Earners and Clerical Workers (CPI-W) from Q3 2025 to Q3 2026. While the official announcement won&apos;t come until mid-October 2026, several leading analysts have released their projections.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-lg">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Source</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Projection</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Monthly Increase*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {COLA_DATA.scenarios.map((s) => {
                    const increase = COLA_DATA.averageBenefit * (s.percentage / 100);
                    return (
                      <tr key={s.id}>
                        <td className="py-3 pr-4 text-gray-900">{s.label} ({s.source})</td>
                        <td className="py-3 pr-4 font-semibold text-blue-800">{s.percentage}%</td>
                        <td className="py-3 text-emerald-700 font-semibold">+${increase.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-base text-gray-600">
              *Based on the average retired worker benefit of ${COLA_DATA.averageBenefit.toLocaleString()}/month in {COLA_DATA.currentYear}.
            </p>
          </section>

          {/* Why predictions vary */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Predictions Vary
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              COLA predictions differ because analysts use different assumptions about future inflation. Key factors driving uncertainty in 2027 include:
            </p>
            <ul className="space-y-3 text-lg text-gray-600 mb-6">
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Energy prices:</strong> Oil price volatility due to geopolitical tensions continues to affect the CPI-W. Higher energy costs push the COLA estimate upward.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Food costs:</strong> Grocery inflation has moderated from 2023 peaks but remains above the Federal Reserve&apos;s 2% target.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Housing:</strong> Shelter costs, the largest CPI-W component, continue to show elevated year-over-year increases.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Healthcare:</strong> Medical care services inflation affects both CPI-W and Medicare premiums, creating a dual impact on retirees.</span>
              </li>
            </ul>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Key Dates for 2027 COLA
            </h2>
            <div className="space-y-4">
              {[
                { date: "May 13, 2026", event: "April CPI-W data released by BLS" },
                { date: "June–September 2026", event: "Monthly CPI-W releases refine projections" },
                { date: "July–September 2026", event: "Q3 measurement period (COLA is based on this)" },
                { date: "~October 15, 2026", event: "SSA officially announces 2027 COLA" },
                { date: "November 2026", event: "SSA mails COLA notices to beneficiaries" },
                { date: "January 2027", event: "New benefit amounts take effect" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-4 h-4 rounded-full bg-blue-800 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{item.date}</p>
                    <p className="text-lg text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              See How the 2027 COLA Affects Your Benefits
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Use our free calculator to estimate your personal benefit increase.
            </p>
            <Link
              href="/#calculator"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
            >
              Calculate Your Benefit →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
