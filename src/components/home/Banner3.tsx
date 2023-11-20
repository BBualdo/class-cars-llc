"use client";

import { blackOps } from "@/fonts/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner3 = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.1, 1, 0.5)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className="py-10 w-full h-[1200px] flex flex-col items-center gap-20"
    >
      <h2
        className={`${blackOps.className} lg:text-[40px] uppercase text-center`}
      >
        Nasze usługi
      </h2>
      <p className="text-center md:text-[20px] lg:text-[24px] xs:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] leading-8">
        W ClassCars nie ma rzeczy niemożliwych.
        <br /> Jako liderzy w branży importu samochodów z Dubaju, posiadamy
        ponad 10 lat doświadczenia w spełnianiu nawet najbardziej wyrafinowanych
        wymagań naszych klientów. Nasza firma to synonim ekspertyzy i
        profesjonalizmu, oferując usługi na najwyższym poziomie.
      </p>
      <div className="w-full xs:px-4 md:px-20 lg:px-40 flex-1 grid xs:max-lg:grid-rows-3 lg:grid-cols-3 xs:max-md:gap-y-4 md:max-lg:gap-y-10 lg:gap-x-10">
        <motion.button
          variants={fadeIn("right", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-left"
        ></motion.button>
        <motion.button
          variants={fadeIn("up", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-center"
        ></motion.button>
        <motion.button
          variants={fadeIn("left", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-right"
        ></motion.button>
      </div>
    </motion.section>
  );
};

export default Banner3;
