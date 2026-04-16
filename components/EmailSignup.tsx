"use client";

import { useState } from "react";
import { COLA_DATA } from "@/lib/cola-data";

type Status = "idle" | "submitting" | "success" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const action = COLA_DATA.newsletterFormAction;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    // If a newsletter endpoint is configured, POST to it.
    // Otherwise, capture locally so the UI works pre-launch — the
    // form can be wired to Mailchimp/ConvertKit by setting
    // newsletterFormAction in lib/cola-data.ts.
    if (action) {
      try {
        await fetch(action, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }).toString(),
        });
        setStatus("success");
      } catch {
        setStatus("error");
        setError("Could not submit. Please try again later.");
      }
      return;
    }

    try {
      const saved = JSON.parse(
        localStorage.getItem("cola-subscribers") || "[]"
      );
      saved.push({ email, at: new Date().toISOString() });
      localStorage.setItem("cola-subscribers", JSON.stringify(saved));
    } catch {
      // localStorage can be disabled — still show success.
    }
    setStatus("success");
  }

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Get 2027 COLA Updates by Email
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We send a short update each month when BLS releases new CPI-W data.
          No spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div
            className="bg-white border-2 border-emerald-600 rounded-xl p-6"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-semibold text-emerald-700 mb-1">
              You&apos;re subscribed.
            </p>
            <p className="text-base text-gray-600">
              Watch your inbox after the next CPI release on{" "}
              {COLA_DATA.nextCPILabel}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              required
              placeholder="you@example.com"
              className="flex-1 h-14 text-lg px-4 border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              aria-describedby={status === "error" ? "email-error" : undefined}
              aria-invalid={status === "error"}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="h-14 px-6 bg-blue-800 text-white rounded-lg text-lg font-semibold hover:bg-blue-900 disabled:bg-gray-400 min-h-[44px]"
            >
              {status === "submitting" ? "Signing up..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && error && (
          <p
            id="email-error"
            role="alert"
            className="mt-3 text-base text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
