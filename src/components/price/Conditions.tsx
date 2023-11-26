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
      <div className="flex items-center gap-5">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-gold text-[28px] font-bold">
          <p className={ibarra.className}>{expense.id}</p>
        </div>
        <h3 className="font-bold md:text-[24px]">{expense.title}</h3>
      </div>
      <div className="flex w-full items-center justify-center text-center text-[24px]">
        {expense.description}
      </div>
    </motion.div>
  ));

  return (
    <section className="flex flex-col items-center px-20 py-10">
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
      <div className="flex flex-col items-center gap-10 py-20">{expenses}</div>
    </section>
  );
};

export default Conditions;
