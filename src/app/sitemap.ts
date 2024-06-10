import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.classcarsllc.com/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.classcarsllc.com/o-classcars",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.classcarsllc.com/import-auta-z-dubaju/",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://www.classcarsllc.com/koszt-sprowadzenia-auta-z-dubaju/",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://www.classcarsllc.com/samochody-z-dubaju/",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.classcarsllc.com/import-samochodow-z-dubaju-faq/",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.classcarsllc.com/kontakt/",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
