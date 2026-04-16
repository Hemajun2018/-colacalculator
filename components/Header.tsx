"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-blue-800 hover:text-blue-900"
          >
            COLA Calculator
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/2027-social-security-cola-forecast"
              className="text-base text-gray-600 hover:text-blue-800"
            >
              Forecast
            </Link>
            <Link
              href="/social-security-cola-history"
              className="text-base text-gray-600 hover:text-blue-800"
            >
              COLA History
            </Link>
            <Link
              href="/how-is-social-security-cola-calculated"
              className="text-base text-gray-600 hover:text-blue-800"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-base text-gray-600 hover:text-blue-800"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-2">
              <Link
                href="/2027-social-security-cola-forecast"
                className="text-lg text-gray-600 hover:text-blue-800 py-2 px-2 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Forecast
              </Link>
              <Link
                href="/social-security-cola-history"
                className="text-lg text-gray-600 hover:text-blue-800 py-2 px-2 rounded"
                onClick={() => setMenuOpen(false)}
              >
                COLA History
              </Link>
              <Link
                href="/how-is-social-security-cola-calculated"
                className="text-lg text-gray-600 hover:text-blue-800 py-2 px-2 rounded"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="text-lg text-gray-600 hover:text-blue-800 py-2 px-2 rounded"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
