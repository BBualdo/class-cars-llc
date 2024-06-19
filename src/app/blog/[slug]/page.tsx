import ArticleDetails from "@/components/blog/ArticleDetails";
import { articles } from "@/data/articles";

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
