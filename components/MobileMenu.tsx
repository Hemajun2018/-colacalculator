"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/2027-social-security-cola-forecast", label: "Forecast" },
  { href: "/social-security-cola-history", label: "COLA History" },
  { href: "/how-is-social-security-cola-calculated", label: "How It Works" },
  { href: "/about", label: "About" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-600"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {open ? (
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

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 px-4 pb-4 shadow-md"
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-lg text-gray-600 hover:text-blue-800 py-2 px-2 rounded"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
