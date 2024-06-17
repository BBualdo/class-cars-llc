import ArticleList from "@/components/blog/ArticleList";
import Banner1 from "@/components/blog/Banner1";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <ArticleList />
    </main>
  );
}
