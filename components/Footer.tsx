import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Disclaimer */}
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg">
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

        {/* Links */}
        <div className="flex flex-wrap gap-6 mb-6">
          <Link
            href="/about"
            className="text-base text-blue-800 hover:underline"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-base text-blue-800 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/how-is-social-security-cola-calculated"
            className="text-base text-blue-800 hover:underline"
          >
            How COLA Is Calculated
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-base text-gray-600">
          &copy; {new Date().getFullYear()} COLA Calculator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
