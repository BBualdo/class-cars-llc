"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner4 = () => {
  return (
    <motion.section
      variants={fadeIn("left", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full items-center justify-center p-4"
    >
      <div className="flex flex-col gap-4 text-white lg:max-w-[1200px]">
        <h3 className="text-center font-bold xs:text-[20px] md:leading-[24px] lg:text-[32px]">
          Import ze Szwecji i USA
        </h3>
        <p className="text-center md:text-base lg:text-[20px]">
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
