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
    <section className="flex w-full bg-black xs:py-10 md:py-20 md:max-lg:h-screen md:max-lg:flex-col">
      <div className="grid flex-1 gap-2 xs:grid-cols-2 xs:grid-rows-1 xs:p-4 xs:max-md:hidden md:grid-rows-2 lg:grid-cols-4 lg:p-10">
        <motion.div
          variants={fadeIn("right", 0.3, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat"
        />
        <motion.div
          variants={fadeIn("right", 0.4, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-md:hidden"
        />
        <motion.div
          variants={fadeIn("right", 0.5, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("right", 0.6, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.6, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.5, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-lg:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.4, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat xs:max-md:hidden"
        />
        <motion.div
          variants={fadeIn("left", 0.3, 1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-lamborghini h-full w-full bg-fixed bg-center bg-no-repeat"
        />
      </div>
      <div className="flex-1 p-4">
        <motion.h2
          variants={fadeIn("left", 0.5, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${alpha.className} gradient-sand-beam bg-clip-text text-center uppercase leading-[60px] text-transparent md:text-[40px] lg:text-[52px]`}
        >
          Dlaczego ClassCars?
        </motion.h2>
        <motion.ul
          variants={fadeIn("left", 0.5, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 flex w-full flex-col gap-4 px-5"
        >
          {whyUsElements}
        </motion.ul>
      </div>
    </section>
  );
};

export default Banner4;
