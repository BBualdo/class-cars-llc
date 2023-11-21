"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner1 = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("right", 0.3, 0.5, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute z-0 w-full border-b-2 border-gold xs:h-[400px] md:h-[600px]"
      >
        <Image
          alt="Dodge Viper on the red background"
          src="/template-images/viper.avif"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-black px-10 xs:h-[400px] md:h-[600px]">
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
