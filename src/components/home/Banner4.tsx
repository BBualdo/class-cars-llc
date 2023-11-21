"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import { alpha } from "@/fonts/fonts";
import whyUs from "@/data/whyUs";
import { CheckCircle } from "@mui/icons-material";

const Banner4 = () => {
  const whyUsElements = whyUs.map((reason) => (
    <li key={reason.key} className="flex items-center gap-10 text-white">
      <CheckCircle />
      <p className="md:text-[20px] lg:text-[24px]">{reason.title}</p>
    </li>
  ));

  return (
    <section className="w-full bg-black flex md:max-lg:flex-col md:max-lg:h-screen xs:py-10 md:py-20">
      <div className="flex-1 xs:p-4 lg:p-10 grid xs:grid-rows-1 md:grid-rows-2 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:max-md:hidden">
        <motion.div
          variants={fadeIn("right", 0.3, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full"
        />
        <motion.div
          variants={fadeIn("right", 0.4, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-md:hidden"
        />
        <motion.div
          variants={fadeIn("right", 0.5, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("right", 0.6, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.6, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.5, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.4, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full xs:max-md:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.3, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-nine bg-no-repeat bg-center bg-fixed h-full w-full"
        />
      </div>
      <div className="flex-1 p-4">
        <motion.h2
          variants={fadeIn("left", 0.5, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${alpha.className} text-transparent bg-clip-text gradient-sand-beam md:text-[40px] lg:text-[52px] text-center uppercase leading-[60px]`}
        >
          Dlaczego ClassCars?
        </motion.h2>
        <motion.ul
          variants={fadeIn("left", 0.5, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-4 mt-4 px-5"
        >
          {whyUsElements}
        </motion.ul>
      </div>
    </section>
  );
};

export default Banner4;
