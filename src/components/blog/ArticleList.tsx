"use client";

import { articles } from "@/data/articles";
import Article from "@/components/blog/Article";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const ArticleList = () => {
  return (
    <motion.section
      variants={fadeIn("", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-20 flex flex-col items-center gap-4"
    >
      <h3 className="gradient-gold bg-clip-text font-black text-transparent xs:text-2xl md:text-4xl">
        Artykuły
      </h3>
      <div className="grid w-full grid-cols-1 place-items-center gap-x-10 gap-y-20 p-4 lg:grid-cols-2">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </motion.section>
  );
};

export default ArticleList;
