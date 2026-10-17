import { COLA_DATA } from "@/lib/cola-data";

export function COLAChart() {
  const recent = COLA_DATA.historicalCOLAs.slice(0, 10).reverse();
  const maxCola = Math.max(...recent.map((d) => d.cola));

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Recent COLA History
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Social Security cost-of-living adjustments over the past 10 years,
          including the official 2027 COLA of {COLA_DATA.officialCOLA}%.
        </p>

        {/* Bar chart - pure CSS */}
        <div className="flex items-end gap-2 md:gap-4 h-64 mb-4">
          {recent.map((item) => {
            const heightPercent =
              maxCola > 0 ? (item.cola / maxCola) * 100 : 0;
            const is2027 = item.year === COLA_DATA.targetYear;

            return (
              <div
                key={item.year}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <span
                  className={`text-base font-semibold mb-1 ${
                    is2027 ? "text-blue-800" : "text-gray-900"
                  }`}
                >
                  {item.cola}%
                </span>
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${
                    is2027
                      ? "bg-blue-600 ring-2 ring-blue-800"
                      : "bg-blue-800"
                  }`}
                  style={{ height: `${Math.max(heightPercent, 2)}%` }}
                  role="img"
                  aria-label={`${item.year}: ${item.cola}% COLA${
                    is2027 ? " (official)" : ""
                  }`}
                />
                <span
                  className={`text-sm md:text-base mt-2 font-medium ${
                    is2027 ? "text-blue-800 font-semibold" : "text-gray-600"
                  }`}
                >
                  {item.year}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-base text-gray-600 mb-4">
          *2027 is the official SSA figure, announced{" "}
          {COLA_DATA.announcementLabel}.
        </p>

        <div className="text-center">
          <a
            href="/social-security-cola-history"
            className="inline-block text-lg text-blue-800 hover:underline font-semibold"
          >
            View full COLA history (1975–2027) →
          </a>
        </div>
      </div>
    </section>
  );
}
