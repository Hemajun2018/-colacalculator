import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Is Social Security COLA Calculated? Complete Guide to CPI-W Formula",
  description:
    "Learn how the Social Security COLA is calculated using the CPI-W index. Step-by-step formula, official rounding rules, and how the annual adjustment is determined.",
  alternates: {
    canonical: "https://colacalculator.com/how-is-social-security-cola-calculated",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Social Security COLA",
  description: "The formula and methodology used by the Social Security Administration to calculate the annual Cost-of-Living Adjustment.",
  step: [
    { "@type": "HowToStep", name: "Identify CPI-W for Q3 of current year", text: "Calculate the average CPI-W for July, August, and September of the current year." },
    { "@type": "HowToStep", name: "Compare to previous year Q3 CPI-W", text: "Compare to the same three-month average from the previous year." },
    { "@type": "HowToStep", name: "Calculate percentage change", text: "If the current Q3 CPI-W is higher, the percentage increase becomes the COLA." },
    { "@type": "HowToStep", name: "Apply to benefit amount", text: "Multiply your current benefit by the COLA percentage." },
    { "@type": "HowToStep", name: "Round per SSA rules", text: "Round down to the nearest dime for gross benefit, then round down to the nearest dollar after Medicare deduction." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://colacalculator.com" },
    { "@type": "ListItem", position: 2, name: "How COLA Is Calculated" },
  ],
};

export default function HowCalculatedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <span className="text-gray-900">How COLA Is Calculated</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            How Is the Social Security COLA Calculated?
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            The annual Social Security Cost-of-Living Adjustment (COLA) is calculated using a specific formula based on the Consumer Price Index for Urban Wage Earners and Clerical Workers (CPI-W). Here&apos;s exactly how it works.
          </p>

          {/* The formula */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The COLA Formula</h2>
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-6">
              <p className="text-lg font-semibold text-gray-900 mb-3">
                COLA = ((Current Year Q3 CPI-W − Previous Year Q3 CPI-W) / Previous Year Q3 CPI-W) × 100
              </p>
              <p className="text-base text-gray-600">
                Where Q3 CPI-W = average CPI-W for July, August, and September
              </p>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              If the current year&apos;s Q3 CPI-W is higher than the previous year&apos;s, the percentage increase becomes the COLA. If it&apos;s the same or lower, there is no COLA (this has happened in 2010, 2011, and 2016).
            </p>
          </section>

          {/* Step by step */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process</h2>
            <div className="space-y-6">
              {[
                { num: "1", title: "BLS publishes monthly CPI-W", text: "The Bureau of Labor Statistics releases the CPI-W index around the second week of each month, covering data from the previous month." },
                { num: "2", title: "SSA averages Q3 data", text: "After the September CPI-W is released in mid-October, SSA calculates the average for July, August, and September." },
                { num: "3", title: "Compare to previous year", text: "SSA compares the current Q3 average to the same quarter from the previous year (or from the year of the last COLA if there was no COLA)." },
                { num: "4", title: "Announce COLA", text: "SSA announces the official COLA percentage in mid-October, typically around October 10–15." },
                { num: "5", title: "Apply to benefits", text: "The COLA takes effect with December benefits (paid in January). Your gross benefit is multiplied by (1 + COLA%) and rounded down to the nearest dime." },
                { num: "6", title: "Deduct Medicare", text: "If you&apos;re enrolled in Medicare Part B, the premium is deducted from your gross benefit. The net amount is then rounded down to the nearest dollar." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rounding rules */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">SSA Rounding Rules</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              SSA follows specific rounding rules that often result in slightly lower benefits than a simple percentage calculation would suggest:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">1. Gross benefit rounding</p>
                <p className="text-lg text-gray-600">After applying the COLA percentage, the result is rounded <strong>down to the next lower dime</strong> (multiple of $0.10).</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">2. Net payable amount</p>
                <p className="text-lg text-gray-600">After deducting Medicare Part B premium, the net monthly amount is rounded <strong>down to the next lower dollar</strong>.</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Our calculator uses these official SSA rounding rules to provide the most accurate estimates.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Calculate Your 2027 COLA Increase
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Use our calculator (with SSA official rounding) to estimate your 2027 benefit.
            </p>
            <Link
              href="/#calculator"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
            >
              Try the Calculator →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
