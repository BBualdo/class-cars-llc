import { articles } from "@/data/articles";
import Article from "@/components/blog/Article";

const ArticleList = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-20">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
