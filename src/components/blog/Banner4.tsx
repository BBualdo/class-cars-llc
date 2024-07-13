"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner4 = () => {
  return (
    <motion.section
      variants={fadeIn("right", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full items-center justify-center p-4"
    >
      <div className="flex flex-col gap-4 text-white lg:max-w-[1200px]">
        <h2 className="text-center md:text-[32px] md:leading-[40px] lg:text-[40px]">
          Import ze Szwecji i USA
        </h2>
        <p className="text-center md:text-base lg:text-[24px]">
          Chociaż skupiamy się głównie na Dubaju, nie zapominamy o Szwecji i
          USA. Samochody z tych krajów również mają wiele do zaoferowania.
          Zastanawiasz się, jakie są różnice między autami z Europy a tymi z
          Ameryki? Jakie formalności musisz załatwić, aby sprowadzić samochód z
          USA? A może interesują Cię ekologiczne rozwiązania oferowane przez
          szwedzkich producentów? Wszystkie te tematy znajdziesz w naszych
          wpisach.
        </p>
      </div>
    </motion.section>
  );
};

export default Banner4;
