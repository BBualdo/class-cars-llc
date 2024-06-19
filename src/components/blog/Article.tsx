import { ArticleType } from "@/data/articles";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <a href={article.slug}>
      <div className="flex cursor-pointer flex-col items-center gap-6 rounded-2xl border-4 border-black p-10 text-white transition-all duration-200 hover:border-gold">
        <div className="relative h-[200px] w-[800px] -skew-x-12">
          <Image src={article.bannerUrl} alt="" fill objectFit="cover" />
        </div>
        <div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        <p>Dodany: {formatDate(article.dateAdded)}</p>
      </div>
    </a>
  );
};

export default Article;
