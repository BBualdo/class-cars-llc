import { ArticleType } from "@/data/articles";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import truncateString from "@/utils/truncateString";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <a href={article.slug}>
      <div className="relative flex cursor-pointer flex-col items-center gap-6 overflow-hidden rounded-2xl border-4 border-black text-white transition-all duration-200 hover:border-gold md:p-10">
        <div className="relative h-[200px] w-full md:-skew-x-12 lg:h-[300px] lg:min-w-[500px]">
          <Image src={article.bannerUrl} alt="" fill objectFit="cover" />
        </div>
        <div className="flex flex-col gap-4 xs:max-md:p-4">
          <h2 className="xs:max-md:text-center">{article.title}</h2>
          <p className="text-sm text-gold/70">
            Dodany: {formatDate(article.dateAdded)}
          </p>
          <p>{truncateString(article.description, 400)}</p>
        </div>
        <div>
          <p className="text-md animate-pulse text-gold">
            Kliknij by przeczytać
          </p>
        </div>
      </div>
    </a>
  );
};

export default Article;
