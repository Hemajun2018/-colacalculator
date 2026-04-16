import { COLA_DATA } from "@/lib/cola-data";

const faqs = [
  {
    question: "What is the projected COLA for 2027?",
    answer: `Based on current CPI-W data, the 2027 Social Security COLA is projected to be between ${COLA_DATA.forecastRange.low}% and ${COLA_DATA.forecastRange.high}%. The official announcement will be made by SSA in mid-October 2026.`,
  },
  {
    question: "When will the 2027 COLA be announced?",
    answer:
      "The Social Security Administration (SSA) typically announces the annual COLA in mid-October. The 2027 COLA is expected to be announced around October 15, 2026, based on Q3 2026 CPI-W data.",
  },
  {
    question: "How is COLA calculated?",
    answer:
      "COLA is based on the Consumer Price Index for Urban Wage Earners and Clerical Workers (CPI-W). SSA compares the average CPI-W for July, August, and September (Q3) of the current year to Q3 of the previous year. The percentage increase becomes the COLA for the following January.",
  },
  {
    question: "Will the 2027 COLA be higher than 2026?",
    answer: `The 2026 COLA was ${COLA_DATA.currentCOLA}%. Current projections suggest the 2027 COLA may be similar or slightly higher, ranging from ${COLA_DATA.forecastRange.low}% to ${COLA_DATA.forecastRange.high}%, depending on inflation trends through Q3 2026.`,
  },
  {
    question: "What does a low COLA mean for retirees?",
    answer:
      "A low COLA means your Social Security benefits may not keep pace with actual living cost increases, particularly for healthcare, housing, and food. When Medicare Part B premiums rise faster than the COLA, the net increase in your check may be even smaller.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between text-lg font-semibold text-gray-900 cursor-pointer py-4 list-none">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-600 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-lg text-gray-600 pb-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
