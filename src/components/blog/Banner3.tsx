"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner3 = () => {
  return (
    <motion.section
      variants={fadeIn("right", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-10 flex w-full items-center justify-center p-4"
    >
      <div className="flex flex-col gap-4 text-white lg:max-w-[1200px]">
        <h3 className="text-center font-bold xs:text-[20px] md:leading-[24px] lg:text-[32px]">
          Dlaczego Emiraty Arabskie?
        </h3>
        <p className="text-center md:text-base lg:text-[20px]">
          Dubaj czy Abu Dhabi to prawdziwe królestwo luksusowych samochodów, ale
          to nie wszystko. Znajdziesz tam również ogromną ilość aut terenowych,
          klasycznych, egzotycznych oraz unikatowych, które w większości
          przypadków są świetnie zachowane. Spotkanie takich samochodów na
          polskich lub nawet europejskich drogach graniczy z cudem. Na naszym
          blogu dowiesz się, dlaczego Dubaj jest idealnym miejscem do zakupu
          samochodu, jakie są tamtejsze procedury importowe oraz jakie modele
          cieszą się największą popularnością. Czy wiesz, że wiele pojazdów z
          Dubaju to luksusowe samochody w doskonałym stanie technicznym,
          oferowane w atrakcyjnych cenach? Nasze artykuły pomogą Ci zrozumieć,
          jak znaleźć najlepsze okazje i uniknąć potencjalnych pułapek.
        </p>
      </div>
    </motion.section>
  );
};

export default Banner3;
