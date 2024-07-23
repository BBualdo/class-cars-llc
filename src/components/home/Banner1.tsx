"use client";

import { ibarra } from "@/fonts/fonts";
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
          alt=""
          src="/template-images/viper.avif"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="flex w-full flex-col items-center gap-4 bg-black px-10 xs:h-[400px] xs:pt-10 md:h-[600px] md:pt-20">
        <motion.h1
          variants={fadeIn("down", 0.8, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${ibarra.className} gradient-sand-beam z-10 bg-clip-text text-center font-extrabold text-transparent xs:max-md:text-[40px] xs:max-md:leading-10`}
        >
          ClassCars - Auta z Dubaju
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1.2, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`z-10 text-center text-[20px] font-extrabold text-white xs:max-md:text-[12px] md:w-5/6 lg:w-1/2`}
        >
          W świecie importu samochodów, szczegóły są kluczem do sukcesu. 
          Dzięki naszej obecności w Dubaju, oferujemy kompleksową usługę 
          sprowadzania samochodów z tego egzotycznego rynku. 
          Nasza specjalność to wyjątkowe auta, które zadowolą zarówno klientów indywidualnych, jak i firmy. 
          ClassCars zapewnia najwyższą jakość i pełne wsparcie przy imporcie aut z Dubaju.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner1;
