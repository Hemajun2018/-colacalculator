import { COLA_DATA } from "@/lib/cola-data";

const faqs = [
  {
    question: "What is the official COLA for 2027?",
    answer: `The Social Security Administration announced a ${COLA_DATA.officialCOLA}% COLA for 2027 on ${COLA_DATA.announcementLabel} — the largest increase since 2023.`,
  },
  {
    question: "When was the 2027 COLA announced?",
    answer:
      "The Social Security Administration announced the 2027 COLA on October 14, 2026, based on Q3 2026 CPI-W data. Increased payments begin in January 2027 (SSI payments go out on December 31, 2026).",
  },
  {
    question: "How is COLA calculated?",
    answer:
      "COLA is based on the Consumer Price Index for Urban Wage Earners and Clerical Workers (CPI-W). SSA compares the average CPI-W for July, August, and September (Q3) of the current year to Q3 of the previous year. The percentage increase becomes the COLA for the following January.",
  },
  {
    question: "Is the 2027 COLA higher than 2026?",
    answer: `Yes. The 2027 COLA is ${COLA_DATA.officialCOLA}%, up from ${COLA_DATA.currentCOLA}% in 2026 — the largest increase in four years.`,
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
