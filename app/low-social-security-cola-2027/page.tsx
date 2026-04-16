import { Metadata } from "next";
import { COLA_DATA } from "@/lib/cola-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Low Social Security COLA 2027: What a 2.8% Increase Means for Retirees",
  description:
    "A low 2027 COLA could mean less purchasing power for retirees. See how a 2.8% COLA compares to actual inflation and how Medicare premiums affect your net benefit.",
  alternates: {
    canonical: "https://colacalculator.com/low-social-security-cola-2027",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What a Low 2027 COLA Means for Your Benefits",
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
    "@id": "https://colacalculator.com/low-social-security-cola-2027",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://colacalculator.com" },
    { "@type": "ListItem", position: 2, name: "Low COLA Impact" },
  ],
};

export default function LowCOLAPage() {
  const lowCola = COLA_DATA.forecastRange.low;
  const grossIncrease = COLA_DATA.averageBenefit * (lowCola / 100);
  const medicareIncrease = COLA_DATA.projectedMedicarePremium - COLA_DATA.medicarePremium;
  const netIncrease = grossIncrease - medicareIncrease;

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
            <span className="text-gray-900">Low COLA Impact</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            What a Low 2027 COLA Means for Your Benefits
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If the 2027 Social Security COLA comes in at the low end of current projections ({lowCola}%), many retirees will see their purchasing power erode as healthcare and living costs continue to rise. Here&apos;s what a low COLA actually means for your monthly check.
          </p>

          {/* Real Impact Box */}
          <section className="mb-12">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                The Real Net Increase on a {lowCola}% COLA
              </h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center pb-3 border-b border-amber-200">
                  <span className="text-gray-600">Gross monthly increase ({lowCola}%)</span>
                  <span className="font-bold text-emerald-600">+${grossIncrease.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-amber-200">
                  <span className="text-gray-600">Medicare Part B premium increase</span>
                  <span className="font-bold text-red-600">−${medicareIncrease.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-gray-900">Net monthly increase</span>
                  <span className="text-2xl font-bold text-gray-900">
                    +${netIncrease.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="text-base text-gray-600 mt-4">
                Based on average retired worker benefit (${COLA_DATA.averageBenefit}/mo). Medicare Part B: ${COLA_DATA.medicarePremium} (2026) → ${COLA_DATA.projectedMedicarePremium} (2027 projected).
              </p>
            </div>
          </section>

          {/* COLA vs Inflation */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              COLA vs. Actual Retiree Inflation
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The Social Security COLA is based on the CPI-W (Consumer Price Index for Urban Wage Earners and Clerical Workers), which tracks the spending patterns of working-age adults. However, retirees typically spend more on categories where prices rise faster:
            </p>
            <ul className="space-y-3 text-lg text-gray-600 mb-6">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span><strong className="text-gray-900">Healthcare:</strong> Medical care costs for retirees have historically outpaced the CPI-W, eroding real benefits.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span><strong className="text-gray-900">Housing:</strong> Retirees on fixed incomes face rising property taxes, home maintenance, and rent.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span><strong className="text-gray-900">Prescription drugs:</strong> Even with Medicare Part D, out-of-pocket drug costs have risen faster than general inflation.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              Research from The Senior Citizens League shows that Social Security benefits have lost about 36% of their purchasing power since 2000, even after annual COLAs.
            </p>
          </section>

          {/* 5 Ways to Supplement */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              5 Ways to Supplement Your Social Security Income
            </h2>
            <div className="space-y-6">
              {[
                { title: "1. Delay claiming Social Security", text: "If you haven\u2019t started benefits yet, each year you delay past full retirement age (up to 70) increases your benefit by 8%." },
                { title: "2. Review Medicare Advantage plans annually", text: "Medicare Advantage plans change each year. An annual review during Open Enrollment (Oct 15–Dec 7) could lower premiums." },
                { title: "3. Check for state-level programs", text: "Many states offer property tax relief, utility assistance, and prescription drug programs for seniors." },
                { title: "4. Consider part-time work", text: "Part-time or consulting work doesn\u2019t reduce benefits after full retirement age and can fill the COLA gap." },
                { title: "5. Optimize your tax situation", text: "Up to 85% of Social Security can be taxable. Strategic withdrawals from traditional vs. Roth accounts can reduce this." },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-blue-800 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              See Your Actual 2027 Increase
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Enter your benefit amount to see your personal net increase under low, moderate, and high COLA scenarios.
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
