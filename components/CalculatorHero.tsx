import { COLA_DATA } from "@/lib/cola-data";
import { CountdownTimer } from "./CountdownTimer";
import { COLACalculator } from "./COLACalculator";

const dataAsOfLabel = new Date(COLA_DATA.dataAsOf).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function CalculatorHero() {
  return (
    <section
      id="calculator"
      className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-14"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight text-center">
          Social Security COLA 2027:{" "}
          <span className="block md:inline">
            Forecast &amp; Benefit Calculator
          </span>
        </h1>

        <div className="flex justify-center mb-6">
          <div className="inline-flex items-baseline gap-3 bg-white border-2 border-blue-800 rounded-full px-6 py-3 shadow-sm">
            <span className="text-base text-gray-600 font-medium">
              2027 Forecast:
            </span>
            <span className="text-3xl md:text-4xl font-bold text-blue-800">
              {COLA_DATA.forecastRange.low}% – {COLA_DATA.forecastRange.high}%
            </span>
          </div>
        </div>

        <div className="text-center mb-8 space-y-1">
          <p className="text-base text-gray-600">
            Based on CPI-W data as of{" "}
            <span className="font-semibold text-gray-900">{dataAsOfLabel}</span>
          </p>
          <CountdownTimer />
        </div>

        <COLACalculator />
      </div>
    </section>
  );
}
