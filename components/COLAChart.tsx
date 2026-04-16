import { COLA_DATA } from "@/lib/cola-data";

export function COLAChart() {
  const recent = COLA_DATA.historicalCOLAs.slice(0, 10).reverse();
  const forecastLow = COLA_DATA.forecastRange.low;
  const forecastHigh = COLA_DATA.forecastRange.high;
  const maxCola = Math.max(
    ...recent.map((d) => d.cola),
    forecastHigh
  );

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Recent COLA History
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Social Security cost-of-living adjustments over the past 10 years,
          with the current 2027 forecast range.
        </p>

        {/* Bar chart - pure CSS */}
        <div className="flex items-end gap-2 md:gap-4 h-64 mb-4">
          {recent.map((item) => {
            const heightPercent =
              maxCola > 0 ? (item.cola / maxCola) * 100 : 0;

            return (
              <div
                key={item.year}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <span className="text-base font-semibold text-gray-900 mb-1">
                  {item.cola}%
                </span>
                <div
                  className="w-full bg-blue-800 rounded-t-md transition-all duration-300"
                  style={{ height: `${Math.max(heightPercent, 2)}%` }}
                  role="img"
                  aria-label={`${item.year}: ${item.cola}% COLA`}
                />
                <span className="text-sm md:text-base text-gray-600 mt-2 font-medium">
                  {item.year}
                </span>
              </div>
            );
          })}

          {/* 2027 forecast — dashed band */}
          <div className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="text-base font-semibold text-blue-800 mb-1 whitespace-nowrap">
              {forecastLow}–{forecastHigh}%
            </span>
            <div
              className="w-full rounded-t-md border-2 border-dashed border-blue-800 bg-blue-100"
              style={{
                height: `${Math.max((forecastHigh / maxCola) * 100, 2)}%`,
              }}
              role="img"
              aria-label={`2027 forecast range: ${forecastLow}% to ${forecastHigh}%`}
            />
            <span className="text-sm md:text-base text-blue-800 mt-2 font-semibold">
              2027*
            </span>
          </div>
        </div>

        <p className="text-base text-gray-600 mb-4">
          *2027 value is a forecast range based on current CPI-W data, not an
          official SSA figure.
        </p>

        <div className="text-center">
          <a
            href="/social-security-cola-history"
            className="inline-block text-lg text-blue-800 hover:underline font-semibold"
          >
            View full COLA history (1975–2026) →
          </a>
        </div>
      </div>
    </section>
  );
}
