import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Calculator CTA — present on every page */}
        <div className="mb-8 bg-blue-50 rounded-xl p-6 text-center">
          <p className="text-lg text-gray-900 font-semibold mb-3">
            Estimate your personal 2027 Social Security increase
          </p>
          <Link
            href="/#calculator"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 min-h-[44px]"
          >
            Open the Calculator →
          </Link>
        </div>

        {/* Sitelinks */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8"
        >
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              2027 COLA
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/2027-social-security-cola-forecast"
                  className="text-base text-blue-800 hover:underline"
                >
                  Forecast &amp; Predictions
                </Link>
              </li>
              <li>
                <Link
                  href="/low-social-security-cola-2027"
                  className="text-base text-blue-800 hover:underline"
                >
                  Low COLA Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/social-security-changes-2027"
                  className="text-base text-blue-800 hover:underline"
                >
                  2027 SS Changes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              Learn
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-is-social-security-cola-calculated"
                  className="text-base text-blue-800 hover:underline"
                >
                  How COLA Is Calculated
                </Link>
              </li>
              <li>
                <Link
                  href="/social-security-cola-history"
                  className="text-base text-blue-800 hover:underline"
                >
                  COLA History (1975–2026)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              Site
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-base text-blue-800 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-blue-800 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Disclaimer */}
        <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg">
          <p className="text-base text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Disclaimer:</strong> This
            calculator provides estimates only and is not affiliated with the
            Social Security Administration (SSA). Results should not be
            considered financial advice. Actual 2027 COLA will be announced by
            SSA in October 2026. Data sourced from the Bureau of Labor
            Statistics (BLS) and SSA. Amounts shown are rounded per SSA official
            rounding rules.
          </p>
        </div>

        <p className="text-base text-gray-600">
          &copy; {new Date().getFullYear()} COLA Calculator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
