import { Metadata } from "next";
import { COLA_DATA } from "@/lib/cola-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Security COLA History: Every Increase from 1975 to 2026",
  description:
    "Complete Social Security COLA history from 1975 to 2026. See every annual increase, compare 2026 COLA (2.8%) to past years, and understand inflation trends.",
  alternates: {
    canonical: "https://colacalculator.com/social-security-cola-history",
  },
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Social Security COLA History 1975-2026",
  description: "Annual Social Security Cost-of-Living Adjustment percentages from 1975 through 2026.",
  creator: { "@type": "Organization", name: "COLA Calculator" },
  temporalCoverage: "1975/2026",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://colacalculator.com" },
    { "@type": "ListItem", position: 2, name: "COLA History" },
  ],
};

export default function HistoryPage() {
  const allData = [...COLA_DATA.historicalCOLAs].reverse();
  const maxCola = Math.max(...allData.map((d) => d.cola));
  const avgCola = allData.reduce((sum, d) => sum + d.cola, 0) / allData.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
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
            <span className="text-gray-900">COLA History</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Social Security COLA History (1975–2026)
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Every Social Security Cost-of-Living Adjustment since Congress enacted automatic COLAs in 1975. The annual increase is based on year-over-year changes in the Consumer Price Index for Urban Wage Earners and Clerical Workers (CPI-W).
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-base text-gray-600 mb-1">Highest COLA</p>
              <p className="text-3xl font-bold text-blue-800">14.3%</p>
              <p className="text-base text-gray-600">1980</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-base text-gray-600 mb-1">Average COLA (50 years)</p>
              <p className="text-3xl font-bold text-blue-800">{avgCola.toFixed(1)}%</p>
              <p className="text-base text-gray-600">1975–2026</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-base text-gray-600 mb-1">2026 COLA</p>
              <p className="text-3xl font-bold text-blue-800">{COLA_DATA.currentCOLA}%</p>
              <p className="text-base text-gray-600">Current</p>
            </div>
          </div>

          {/* 2026 COLA detail */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The 2026 Social Security COLA
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The 2026 COLA was set at <strong className="text-gray-900">{COLA_DATA.currentCOLA}%</strong>, slightly higher than the 2.5% adjustment in 2025. For the average retired worker receiving ${COLA_DATA.averageBenefit.toLocaleString()}/month, this meant an increase of approximately $56/month.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              However, the 2026 Medicare Part B premium rose to ${COLA_DATA.medicarePremium}/month, which offset a portion of the COLA increase for most retirees enrolled in Medicare.
            </p>
          </section>

          {/* Full table */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Complete COLA History (1975–2026)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-lg">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Year</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">COLA</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Visualization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[...COLA_DATA.historicalCOLAs].map((item) => (
                    <tr key={item.year}>
                      <td className="py-2 pr-4 text-gray-900 font-medium">{item.year}</td>
                      <td className="py-2 pr-4 font-semibold text-blue-800">{item.cola}%</td>
                      <td className="py-2">
                        <div
                          className="h-4 bg-blue-800 rounded"
                          style={{ width: `${(item.cola / maxCola) * 100}%`, minWidth: item.cola > 0 ? "4px" : "0" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              What About 2027?
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              See the latest 2027 COLA forecast and calculate your estimated benefit increase.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
            >
              View 2027 Forecast →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
