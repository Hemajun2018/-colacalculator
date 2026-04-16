import { MetadataRoute } from "next";
import { COLA_DATA } from "@/lib/cola-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(COLA_DATA.dataAsOf);

  return [
    {
      url: "https://colacalculator.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://colacalculator.com/2027-social-security-cola-forecast",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://colacalculator.com/social-security-cola-history",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://colacalculator.com/low-social-security-cola-2027",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://colacalculator.com/how-is-social-security-cola-calculated",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://colacalculator.com/social-security-changes-2027",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://colacalculator.com/about",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
