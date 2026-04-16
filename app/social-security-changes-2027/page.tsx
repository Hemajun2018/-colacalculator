import { Metadata } from "next";
import { COLA_DATA } from "@/lib/cola-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Key Social Security Changes in 2027: COLA, Medicare, and Earnings Limit",
  description:
    "Everything changing in Social Security for 2027: COLA increase, Medicare Part B premium changes, taxable maximum, and earnings limits for retirees.",
  alternates: {
    canonical: "https://colacalculator.com/social-security-changes-2027",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Social Security Changes in 2027: What Retirees Need to Know",
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
    "@id": "https://colacalculator.com/social-security-changes-2027",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://colacalculator.com" },
    { "@type": "ListItem", position: 2, name: "2027 Changes" },
  ],
};

export default function ChangesPage() {
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
            <span className="text-gray-900">2027 Changes</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Social Security Changes in 2027: What Retirees Need to Know
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Every year, Social Security adjusts several key figures based on wage growth and inflation. Here are the most important changes expected for 2027.
          </p>

          {/* Change 1: COLA */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">COLA Increase</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The 2027 COLA is projected to be <strong className="text-gray-900">{COLA_DATA.forecastRange.low}%–{COLA_DATA.forecastRange.high}%</strong>, based on current CPI-W trends. For the average retired worker receiving ${COLA_DATA.averageBenefit.toLocaleString()}/month, this translates to a monthly increase of approximately $57–$65.
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">Effective Date: January 2027</p>
              <p className="text-lg text-gray-600">Official COLA will be announced by SSA in mid-October 2026.</p>
            </div>
          </section>

          {/* Change 2: Medicare */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Medicare Part B Premium Changes</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The 2026 Medicare Part B standard premium is ${COLA_DATA.medicarePremium}/month. For 2027, CMS is projected to announce a premium of approximately ${COLA_DATA.projectedMedicarePremium}/month, a {(((COLA_DATA.projectedMedicarePremium - COLA_DATA.medicarePremium) / COLA_DATA.medicarePremium) * 100).toFixed(1)}% increase.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This premium increase will offset part of your COLA. For many retirees, the net benefit increase after Medicare is smaller than the headline COLA percentage suggests.
            </p>
          </section>

          {/* Change 3: Earnings Limits */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Taxable Maximum &amp; Earnings Limits</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Based on projected wage growth, 2027 changes are expected to include:
            </p>
            <ul className="space-y-3 text-lg text-gray-600 mb-4">
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Taxable maximum:</strong> Expected to rise from $176,100 (2026) to approximately $184,000 (2027 projection).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Earnings limit (under FRA):</strong> Workers claiming benefits before full retirement age will have an updated earnings threshold before benefits are withheld.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-bold">•</span>
                <span><strong className="text-gray-900">Quarter of coverage:</strong> The amount needed to earn one Social Security credit will also be adjusted.</span>
              </li>
            </ul>
            <p className="text-base text-gray-600">
              Final numbers will be announced by SSA alongside the 2027 COLA in October 2026.
            </p>
          </section>

          {/* Summary Table */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">At a Glance: 2026 vs 2027 (Projected)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-lg">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Item</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">2026 Actual</th>
                    <th className="text-left py-3 font-semibold text-gray-900">2027 Projected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 pr-4 text-gray-900">COLA</td>
                    <td className="py-3 pr-4 text-gray-600">{COLA_DATA.currentCOLA}%</td>
                    <td className="py-3 font-semibold text-blue-800">{COLA_DATA.forecastRange.low}%–{COLA_DATA.forecastRange.high}%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-900">Average Benefit</td>
                    <td className="py-3 pr-4 text-gray-600">${COLA_DATA.averageBenefit.toLocaleString()}</td>
                    <td className="py-3 font-semibold text-blue-800">~${(COLA_DATA.averageBenefit * 1.032).toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-900">Medicare Part B</td>
                    <td className="py-3 pr-4 text-gray-600">${COLA_DATA.medicarePremium}</td>
                    <td className="py-3 font-semibold text-blue-800">~${COLA_DATA.projectedMedicarePremium}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-900">Taxable Maximum</td>
                    <td className="py-3 pr-4 text-gray-600">$176,100</td>
                    <td className="py-3 font-semibold text-blue-800">~$184,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              See Your 2027 Benefit Increase
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Calculate your personal COLA impact with our free calculator.
            </p>
            <Link
              href="/#calculator"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
            >
              Calculate Now →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
