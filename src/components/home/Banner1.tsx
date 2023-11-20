"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner1 = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("right", 0.3, 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="absolute w-full h-[600px] z-0"
      >
        <Image
          src="/template-images/5.jpg"
          alt=""
          width={1920}
          height={600}
          className="h-[600px] object-cover"
        />
      </motion.div>
      <div className="w-full px-10 h-[600px] flex flex-col gap-4 items-center justify-center bg-black">
        <motion.h1
          variants={fadeIn("down", 0.8, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-transparent xs:max-md:text-[40px] bg-clip-text text-center xs:max-md:leading-10 font-extrabold z-10 gradient-gold`}
        >
          Witamy w ClassCarsLLC
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1.2, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-white text-[24px] xs:max-md:text-[14px] font-extrabold text-center z-10 md:w-5/6 lg:w-1/2`}
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
