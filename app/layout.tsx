import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COLA_DATA } from "@/lib/cola-data";

const GA_ID = COLA_DATA.googleAnalyticsId;

export const metadata: Metadata = {
  metadataBase: new URL("https://colacalculator.com"),
  title: {
    default:
      "Social Security COLA 2027: Forecast & Free Calculator",
    template: "%s | COLA Calculator",
  },
  description:
    "Social Security COLA 2027 forecast: 2.8%–3.2%. Enter your current benefit to see your estimated 2027 Social Security increase, after Medicare Part B deductions.",
  authors: [{ name: "COLA Calculator" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colacalculator.com",
    siteName: "COLA Calculator",
    title: "Social Security COLA 2027: Forecast & Free Calculator",
    description:
      "Social Security COLA 2027 forecast (2.8%–3.2%). Free calculator — see your estimated 2027 benefit increase after Medicare.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Security COLA 2027: Forecast & Free Calculator",
    description:
      "Social Security COLA 2027 forecast (2.8%–3.2%). Free calculator — see your estimated 2027 benefit increase.",
  },
  other: {
    "geo.region": "US",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "COLA Calculator",
  url: "https://colacalculator.com",
  description:
    "Free Social Security COLA calculator and forecast tool for retirees.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "COLA Calculator",
  url: "https://colacalculator.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className="antialiased text-gray-900 bg-white"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Arial, sans-serif",
        }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
