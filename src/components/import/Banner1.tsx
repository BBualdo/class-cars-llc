"use client";

import { ibarra } from "@/fonts/fonts";
import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner1 = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("right", 0.3, 0.3, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute z-0 w-full border-b-2 border-gold xs:h-[200px] md:h-[300px]"
      >
        <Image
          alt=""
          src="/template-images/import.avif"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-black px-10 xs:h-[200px] md:h-[300px]">
        <motion.h1
          variants={fadeIn("down", 0.8, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${ibarra.className} gradient-sand-beam upper z-10 bg-clip-text text-center font-extrabold text-transparent xs:max-md:text-[40px] xs:max-md:leading-10`}
        >
          Proces Importu Auta z Dubaju
        </motion.h1>
      </div>
    </section>
  );
};

export default Banner1;
