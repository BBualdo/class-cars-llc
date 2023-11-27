"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import { ibarra, merriweather } from "@/fonts/fonts";
import importPrice from "@/data/import-price";

const Conditions = () => {
  const expenses = importPrice.map((expense, index) => (
    <motion.div
      variants={fadeIn("", 0.5, 1, 2.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      key={expense.id}
      className="flex w-full flex-col items-center gap-6 rounded-lg border border-gold bg-black p-4"
    >
      <div className="flex items-center gap-5 xs:max-md:flex-col">
        <div className="flex items-center justify-center rounded-full border-2 border-gold font-bold xs:h-[40px] xs:w-[40px] xs:text-[20px] md:h-[60px] md:w-[60px] md:text-[28px]">
          <p className={ibarra.className}>{expense.id}</p>
        </div>
        <h3 className="text-center font-bold xs:text-[20px] md:text-[24px]">
          {expense.title}
        </h3>
      </div>
      <div className="flex w-full items-center justify-center text-center md:text-[20px] lg:text-[24px]">
        {expense.description}
      </div>
    </motion.div>
  ));

  return (
    <section className="gradient-gotham-mix flex flex-col items-center py-10 xs:px-4 md:px-20">
      <motion.h2
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${merriweather.className} text-center text-[20px] text-white md:text-[28px] lg:w-3/4 lg:text-[40px]`}
      >
        Szczegółowy Przegląd Kosztów Importu Samochodów ze{" "}
        <span className="gradient-uae bg-clip-text text-transparent">
          Zjednoczonych Emiratów Arabskich
        </span>
      </motion.h2>
      <div className="flex flex-col items-center gap-10 xs:py-8 md:py-20">
        {expenses}
      </div>
    </section>
  );
};

export default Conditions;
