import type { Metadata } from "next";
import { CalculatorHero } from "@/components/CalculatorHero";
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
  name: "Social Security COLA 2027 Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://colacalculator.com",
  description:
    "Free calculator to estimate your 2027 Social Security benefit increase based on the official 2027 COLA of 3.6%.",
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

      {/* Hero + Calculator */}
      <CalculatorHero />

      {/* COLA History Chart */}
      <COLAChart />

      {/* Official announcement recap */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            2027 COLA: Officially 3.6%
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The Announcement
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The SSA announced a <strong>3.6%</strong> COLA for 2027 on
                October 14, 2026 — the largest increase since 2023. About 76
                million Americans will see bigger checks starting January 2027.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                How Predictions Compared
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pre-announcement forecasts ranged from <strong>2.8%</strong>{" "}
                (TSCL) to <strong>4.0%</strong>. The official 3.6% came in
                above most estimates, driven by higher energy costs in Q3 2026.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/2027-social-security-cola-forecast"
              className="inline-block text-lg text-blue-800 hover:underline font-semibold"
            >
              Read the pre-announcement analysis →
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
            The 2027 COLA Is Official
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            3.6% — the largest increase since 2023. Use the calculator above
            to see your new monthly benefit.
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
