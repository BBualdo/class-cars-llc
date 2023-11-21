"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";

const Banner1 = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("right", 0.3, 0.5, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute z-0 h-[600px] w-full border-b-2 border-gold bg-ten bg-cover bg-center bg-no-repeat"
      />
      <div className="flex h-[600px] w-full flex-col items-center justify-center gap-4 bg-black px-10">
        <motion.h1
          variants={fadeIn("down", 0.8, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`gradient-gold z-10 bg-clip-text text-center font-extrabold text-transparent xs:max-md:text-[40px] xs:max-md:leading-10`}
        >
          Witamy w ClassCars
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1.2, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`z-10 text-center text-[24px] font-extrabold text-white xs:max-md:text-[14px] md:w-5/6 lg:w-1/2`}
        >
          W świecie importu samochodów, szczegóły są kluczem do sukcesu. Dzięki
          naszej obecności w Dubaju, oferujemy kompleksową usługę importu
          samochodów z tego egzotycznego rynku. Obsługujemy zarówno klientów
          indywidualnych, jak i firmy.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner1;
