"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner5 = () => {
  return (
    <motion.section
      variants={fadeIn("right", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full items-center justify-center p-4"
    >
      <div className="flex flex-col gap-4 text-white lg:max-w-[1200px]">
        <h3 className="text-center font-bold xs:text-[20px] md:leading-[24px] lg:text-[32px]">
          Ciekawostki i Porady
        </h3>
        <p className="text-center md:text-base lg:text-[20px]">
          Nasz blog to nie tylko twarde fakty, ale również interesujące
          ciekawostki ze świata motoryzacji. Czy wiesz, jakie są najnowsze
          trendy wśród luksusowych samochodów w Dubaju? A może chcesz poznać
          historie ludzi, którzy już zdecydowali się na import samochodu i
          podzielić się swoimi doświadczeniami? Skupimy się głównie na
          ciekawostkach z życia codziennego przy użytkowaniu samochodów w
          Dubaju, Szwecji oraz USA. W związku z tym, że kraje te są oddalone od
          Europy, mają ciekawe rozwiązania, regulacje oraz przepisy, które mogą
          być intrygujące lub godne podziwu. Nasze artykuły dostarczą Ci
          inspiracji i praktycznych porad, które pomogą w podjęciu decyzji o
          zakupie samochodu z zagranicy.
        </p>
      </div>
    </motion.section>
  );
};

export default Banner5;
