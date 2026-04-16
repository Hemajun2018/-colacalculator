import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About COLA Calculator",
  description: "About COLA Calculator — a free tool to help retirees estimate their Social Security COLA increase for 2027.",
  alternates: {
    canonical: "https://colacalculator.com/about",
  },
};

export default function AboutPage() {
  return (
    <article className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          About COLA Calculator
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            COLA Calculator is a free, independent tool that helps Social Security beneficiaries understand how upcoming Cost-of-Living Adjustments (COLAs) will affect their monthly benefits. We believe retirees deserve clear, accurate, and personalized information about their income.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Calculate</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our calculator uses the official Social Security Administration (SSA) rounding rules:
          </p>
          <ul className="space-y-2 text-lg text-gray-600 mb-4">
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span>Gross benefit increases are rounded down to the nearest dime ($0.10).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span>Net payable amounts (after Medicare Part B deduction) are rounded down to the nearest dollar.</span>
            </li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed">
            Projections are based on publicly released data from the Bureau of Labor Statistics (BLS) CPI-W index, and forecasts from The Senior Citizens League (TSCL) and independent analyst Mary Johnson. We update projections monthly as new CPI data becomes available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sources</h2>
          <ul className="space-y-3 text-lg text-gray-600">
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span><strong className="text-gray-900">Bureau of Labor Statistics (BLS)</strong> — Monthly CPI-W data releases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span><strong className="text-gray-900">Social Security Administration (SSA)</strong> — Historical COLA data, benefit statistics, and official announcements.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span><strong className="text-gray-900">The Senior Citizens League (TSCL)</strong> — Independent COLA projections.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span><strong className="text-gray-900">Centers for Medicare & Medicaid Services (CMS)</strong> — Medicare Part B premium data.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Disclaimer</h2>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
            <p className="text-lg text-gray-900 leading-relaxed">
              <strong>COLA Calculator is NOT affiliated with the Social Security Administration, the United States government, or any government agency.</strong> This site provides estimates and educational information only. The calculator results are projections based on publicly available data and third-party forecasts. They should not be considered financial, legal, or tax advice. Actual benefit amounts will be determined by SSA based on official CPI-W data.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed mt-3">
              For official information about your benefits, visit{" "}
              <a
                href="https://www.ssa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                ssa.gov
              </a>{" "}
              or create a <em>my Social Security</em> account.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            For questions, corrections, or feedback about the calculator, please{" "}
            <Link href="/privacy" className="text-blue-800 hover:underline">
              see our privacy policy
            </Link>{" "}
            or reach out through the contact information provided there.
          </p>
        </section>
      </div>
    </article>
  );
}
