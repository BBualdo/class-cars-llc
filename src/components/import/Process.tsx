"use client";

import importProcess from "@/data/import-process";
import { merriweather } from "@/fonts/fonts";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import parse from "html-react-parser";

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const stepButtons = importProcess.map((step) => (
    <motion.button
      key={step.id}
      variants={fadeIn("right", 0.5 * Number(step.id), 1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onClick={() => setSelectedStep(Number(step.id) - 1)}
      className={clsx(
        "relative border border-gold py-2 font-bold hover:bg-gold/50 xs:max-md:w-full md:px-5 lg:px-10",
        {
          "gradient-gold top-[2px] border-b-black text-white":
            Number(step.id) - 1 === selectedStep,
          "text-white/50": Number(step.id) - 1 !== selectedStep,
        },
      )}
    >
      Krok {step.id}
    </motion.button>
  ));

  const steps = importProcess.map((step) => (
    <div
      key={step.id}
      className="flex flex-col items-center p-8 text-white xs:gap-4 md:gap-10"
    >
      <h2 className="gradient-gold bg-clip-text font-bold text-transparent xs:text-[24px] md:text-[40px]">
        {step.title}
      </h2>
      <div className="flex w-full flex-col items-center gap-6 font-bold xs:text-base md:text-2xl">
        {parse(step.description)}
      </div>
    </div>
  ));

  return (
    <section className="gradient-gotham-mix flex flex-col items-center xs:p-2 md:p-8">
      <motion.h2
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${merriweather.className} text-center text-[28px] text-white lg:text-[40px]`}
      >
        Proces Zakupu Pojazdu z Dubaju:{" "}
        <span className="gradient-gold bg-clip-text text-transparent">
          Krok po Kroku
        </span>
      </motion.h2>
      <div className="flex-col items-center justify-center md:w-3/4 md:min-w-[750px] lg:min-w-[1055px]">
        <div className="mt-12 flex w-full items-center justify-center">
          {stepButtons}
        </div>
        <motion.div
          variants={fadeIn("right", 0.5, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:h -[324px] border border-gold bg-black text-center xs:max-md:rounded-b-lg md:rounded-lg"
        >
          {steps[selectedStep]}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
