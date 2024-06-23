import { articles } from "@/data/articles";
import { MetadataRoute } from "next";

const articlesSitemap: MetadataRoute.Sitemap = articles.map((article) => ({
  url: `https://www.classcarsllc.com/blog/${article.slug}`,
  lastModified: article.dateAdded,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.classcarsllc.com/",
      priority: 1,
    },
    {
      url: "https://www.classcarsllc.com/o-classcars",
      priority: 0.9,
    },
    {
      url: "https://www.classcarsllc.com/import-auta-z-dubaju/",
      priority: 0.6,
    },
    {
      url: "https://www.classcarsllc.com/koszt-sprowadzenia-auta-z-dubaju/",
      priority: 0.6,
    },
    {
      url: "https://www.classcarsllc.com/samochody-z-dubaju/",
      priority: 0.9,
    },
    {
      url: "https://www.classcarsllc.com/import-samochodow-z-dubaju-faq/",
      priority: 0.8,
    },
    {
      url: "https://www.classcarsllc.com/kontakt/",
      priority: 0.9,
    },
    {
      url: "https://www.classcarsllc.com/blog/",
      priority: 0.5,
    },
    ...articlesSitemap,
  ];
}
