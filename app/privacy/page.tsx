import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for COLA Calculator.",
  alternates: {
    canonical: "https://colacalculator.com/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <article className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Last updated: November 11, 2026
        </p>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>
              COLA Calculator does <strong className="text-gray-900">not collect, store, or transmit</strong> any personal financial information you enter into our calculator. All calculations happen directly in your browser. Your benefit amounts and any other input values are never sent to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Analytics
            </h2>
            <p>
              We use standard web analytics tools (such as Google Analytics) to understand how visitors use our site. These tools collect anonymous information like page views, browser type, and approximate location. They do not capture the values you enter in the calculator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Cookies
            </h2>
            <p>
              We use essential cookies to ensure the site functions properly, analytics cookies to improve our service, and advertising cookies to show ads (see below). You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Advertising
            </h2>
            <p className="mb-3">
              We use Google AdSense to display ads on this site. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.
            </p>
            <p className="mb-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet. Learn more in{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                how Google uses information from sites that use its services
              </a>
              .
            </p>
            <p>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              . You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at{" "}
              <a
                href="https://www.aboutads.info/choices/"
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aboutads.info
              </a>
              . Ads never receive the values you enter in the calculator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Third-Party Services
            </h2>
            <p>
              Our site may include links to third-party websites (such as SSA.gov). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Contact
            </h2>
            <p>
              For privacy-related questions, email us at{" "}
              <a
                href="mailto:support@colacalculator.com"
                className="text-blue-800 hover:underline"
              >
                support@colacalculator.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
