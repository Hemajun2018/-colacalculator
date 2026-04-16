"use client";

import { useState, useDeferredValue } from "react";
import { COLA_DATA } from "@/lib/cola-data";
import { calculateCOLA, formatCurrency, formatCurrencyWhole } from "@/lib/calculator";

export function COLACalculator() {
  const [inputValue, setInputValue] = useState(
    COLA_DATA.averageBenefit.toString()
  );
  const deferredInput = useDeferredValue(inputValue);
  const benefit = parseFloat(deferredInput) || 0;

  const isValidRange = benefit >= 50 && benefit <= 5000;
  const showWarning = deferredInput !== "" && benefit > 0 && !isValidRange;

  return (
    <section className="py-12 md:py-16" id="calculator">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Calculate Your 2027 Benefit Increase
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Enter your current monthly Social Security benefit to see estimated
          changes under three COLA scenarios.
        </p>

        {/* Input */}
        <div className="mb-8 max-w-md">
          <label
            htmlFor="benefit-input"
            className="block text-lg font-semibold text-gray-900 mb-2"
          >
            Your Current Monthly Benefit
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-600">
              $
            </span>
            <input
              id="benefit-input"
              type="number"
              min="0"
              max="5000"
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full h-14 text-2xl pl-10 pr-4 border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              aria-describedby="benefit-hint"
            />
          </div>
          <p id="benefit-hint" className="mt-2 text-base text-gray-600">
            The average retired worker receives $2,024.77/month in 2026.
          </p>
          {showWarning && (
            <p className="mt-2 text-base text-amber-600" role="alert">
              Most Social Security benefits are between $500 and $4,800/month.
              Please verify your amount.
            </p>
          )}
        </div>

        {/* Scenario Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          aria-live="polite"
          aria-atomic="false"
        >
          {COLA_DATA.scenarios.map((scenario) => {
            const result = calculateCOLA(benefit, scenario.percentage);
            const isMid = scenario.id === "mid";

            return (
              <div
                key={scenario.id}
                className={`rounded-xl p-6 md:p-8 ${
                  isMid
                    ? "border-2 border-blue-800 bg-blue-50 ring-2 ring-blue-800"
                    : "border-2 border-gray-200 bg-white"
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    {isMid && (
                      <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded uppercase tracking-wide">
                        Most Likely
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {scenario.label}
                  </h3>
                  <p className="text-base text-gray-600">
                    Source: {scenario.source}
                  </p>
                </div>

                {/* COLA Percentage */}
                <p className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                  {scenario.percentage}%
                </p>

                {/* Results */}
                <div className="space-y-3">
                  <div>
                    <p className="text-base text-gray-600">
                      New Monthly Benefit
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">
                      {formatCurrency(result.grossMonthlyBenefit)}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div>
                      <p className="text-base text-gray-600">Monthly</p>
                      <p className="text-xl font-semibold text-emerald-600">
                        +{formatCurrency(result.monthlyIncrease)}
                      </p>
                    </div>
                    <div>
                      <p className="text-base text-gray-600">Yearly</p>
                      <p className="text-xl font-semibold text-emerald-600">
                        +{formatCurrencyWhole(result.annualIncrease)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-base text-gray-600">
                      After Medicare Part B*
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                      {formatCurrencyWhole(result.netMonthlyPayable)}/mo
                    </p>
                    <p className="text-base text-emerald-600 font-semibold">
                      Net change: +{formatCurrencyWhole(result.netMonthlyChange)}
                      /mo
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Medicare note */}
        <p className="mt-4 text-base text-gray-600">
          *Medicare Part B premium: ${COLA_DATA.medicarePremium}/mo (2026
          actual) → ${COLA_DATA.projectedMedicarePremium}/mo (2027 projected).
          Amounts rounded per SSA official rounding rules.
        </p>
      </div>
    </section>
  );
}
