"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner6 = () => {
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
          Zapraszamy do Lektury
        </h3>
        <p className="text-center md:text-base lg:text-[20px]">
          Zachęcamy Cię do regularnego odwiedzania naszego bloga i śledzenia
          najnowszych wpisów. Nasza strona to kompendium wiedzy dla każdego
          miłośnika motoryzacji, który myśli o imporcie samochodu. Dowiesz się,
          dlaczego Dubaj jest idealnym miejscem do zakupu luksusowych,
          terenowych, klasycznych, egzotycznych i unikatowych aut, oraz jakie
          modele cieszą się największą popularnością. Poznasz również, co
          oferują samochody ze Szwecji i USA, jakie są różnice między autami z
          Europy a tymi z Ameryki oraz jakie formalności musisz załatwić, aby
          sprowadzić samochód z tych krajów. Odkryj fascynujący świat importu
          samochodów i dołącz do naszej społeczności!
        </p>
      </div>
    </motion.section>
  );
};

export default Banner6;
