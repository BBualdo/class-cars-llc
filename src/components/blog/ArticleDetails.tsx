"use client";

import { ArticleType } from "@/data/articles";
import { ibarra } from "@/fonts/fonts";
import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import parse from "html-react-parser";
import { Link } from "react-scroll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ArticleDetails = ({
  currentArticle,
}: {
  currentArticle: ArticleType;
}) => {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.3, 0.3, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute z-0 w-full border-b-2 border-gold xs:h-[200px] md:h-[300px]"
      >
        <Image
          alt=""
          src={currentArticle.bannerUrl}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-black px-10 xs:h-[200px] md:h-[300px]">
        <motion.h1
          variants={fadeIn("down", 0.8, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${ibarra.className} gradient-sand-beam upper z-10 bg-clip-text text-center font-extrabold text-transparent xs:max-md:text-[40px] xs:max-md:leading-10`}
        >
          {currentArticle.title}
        </motion.h1>
      </div>
      <div className="flex justify-center py-10 xs:max-lg:px-10">
        <div className="flex flex-col gap-10 lg:min-w-[1200px]">
          <div>
            <h2 className="max-w-[1200px] text-center text-white xs:max-md:text-base">
              {currentArticle.description}
            </h2>
          </div>
          <div className="flex flex-col gap-6 border-y border-gold py-4 text-white">
            <p>Spis treści:</p>
            <ul className="flex flex-col items-start gap-2">
              {currentArticle.sections.map((section) => (
                <div
                  key={section.id}
                  className="flex cursor-pointer items-center gap-1 transition-all duration-200 hover:text-gold"
                >
                  <NavigateNextIcon className="text-base" />
                  <Link smooth to={section.title}>
                    {section.title}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          {currentArticle.sections.map((section) => (
            <div
              key={section.id}
              className="flex gap-2 text-white lg:max-w-[1200px]"
            >
              <section id={section.title} className="flex flex-col gap-4">
                <h2>{section.title}</h2>
                <div className="flex flex-col gap-2">
                  {parse(section.content)}
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
