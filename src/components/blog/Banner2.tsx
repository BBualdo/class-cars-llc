"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner2 = () => {
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
          Witaj na naszym blogu związanym z autami z Emiratów Arabskich, Szwecji
          i USA, gdzie zgłębiamy tajniki importu samochodów z tych zakątków
          świata!
        </h2>
        <p className="text-center md:text-base lg:text-[24px]">
          Nasza specjalizacja to import aut z Dubaju, a także z Szwecji i USA.
          Pragniemy dostarczyć Ci nie tylko informacje o procesie importu, ale
          również ciekawostki, które sprawią, że zrozumiesz, dlaczego warto
          zainteresować się zakupem samochodu właśnie z tych miejsc.
        </p>
      </div>
    </motion.section>
  );
};

export default Banner2;
