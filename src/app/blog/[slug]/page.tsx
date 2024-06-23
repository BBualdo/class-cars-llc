import ArticleDetails from "@/components/blog/ArticleDetails";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const currentArticle = articles.find((a) => a.slug === params.slug);
  return {
    title: currentArticle!.title + " | ClassCarsLLC",
    description: currentArticle!.description,
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const currentArticle = articles.find((a) => a.slug === params.slug);
  if (currentArticle) {
    return <ArticleDetails currentArticle={currentArticle} />;
  }
}
