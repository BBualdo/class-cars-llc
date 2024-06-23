import { articles } from "@/data/articles";
import Article from "@/components/blog/Article";

const ArticleList = () => {
  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-x-10 gap-y-20 p-4 lg:grid-cols-2">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
