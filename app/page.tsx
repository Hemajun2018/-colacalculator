import type { Metadata } from "next";
import { COLA_DATA } from "@/lib/cola-data";
import { COLACalculator } from "@/components/COLACalculator";
import { CountdownTimer } from "@/components/CountdownTimer";
import { COLAChart } from "@/components/COLAChart";
import { FAQSection } from "@/components/FAQSection";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://colacalculator.com",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "2027 Social Security COLA Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://colacalculator.com",
  description:
    "Free calculator to estimate your 2027 Social Security benefit increase based on the latest COLA projections.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            2027 Social Security COLA Forecast:{" "}
            <span className="block md:inline">
              Calculate Your Estimated Benefit Increase
            </span>
          </h1>

          {/* Forecast highlight */}
          <div className="inline-block bg-white border-2 border-blue-800 rounded-2xl px-8 py-6 mb-6 shadow-sm">
            <p className="text-base text-gray-600 mb-1">
              2027 COLA Forecast Range
            </p>
            <p className="text-5xl md:text-6xl font-bold text-blue-800">
              {COLA_DATA.forecastRange.low}% – {COLA_DATA.forecastRange.high}%
            </p>
            <p className="text-base text-gray-600 mt-2">
              Estimated COLA Increase
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg text-gray-600">
              Based on latest CPI-W data as of{" "}
              <span className="font-semibold">
                {new Date(COLA_DATA.dataAsOf).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <COLACalculator />

      {/* COLA History Chart */}
      <COLAChart />

      {/* What Experts Are Saying */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Experts Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The Senior Citizens League (TSCL)
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Projects a 2027 COLA of approximately{" "}
                <strong>2.8%</strong>, based on CPI-W trends through
                early 2026. A revised April estimate suggests it could reach as
                high as <strong>4.0%</strong> if inflation persists.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                Mary Johnson, Independent Analyst
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estimates a <strong>3.2%</strong> COLA for 2027, citing moderate
                inflation driven by energy and food costs. This would translate
                to approximately $64.79 more per month for the average retiree.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/2027-social-security-cola-forecast"
              className="inline-block text-lg text-blue-800 hover:underline font-semibold"
            >
              Read full 2027 forecast analysis →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated on COLA Changes
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            New CPI data is released monthly. Bookmark this page to track the
            latest 2027 COLA projections as they evolve.
          </p>
          <Link
            href="#calculator"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
          >
            Calculate Your Benefit →
          </Link>
        </div>
      </section>
    </>
  );
}
