"use client";

import importProcess from "@/data/import-process";
import { merriweather } from "@/fonts/fonts";
import clsx from "clsx";
import { useState } from "react";

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const stepButtons = importProcess.map((step) => (
    <button
      onClick={() => setSelectedStep(Number(step.id) - 1)}
      className={clsx(
        "relative border border-gold px-10 py-2 font-bold text-white hover:bg-gold/50",
        {
          "gradient-gold top-[2px] border-b-black":
            Number(step.id) - 1 === selectedStep,
        },
      )}
    >
      Krok {step.id}
    </button>
  ));
  const steps = importProcess.map((step, index) => (
    <div className="flex flex-col items-center gap-10 p-8 text-white">
      <h3 className="gradient-gold bg-clip-text text-[40px] font-bold text-transparent">
        {step.title}
      </h3>
      <p className="w-1/2 text-2xl font-bold">{step.description}</p>
    </div>
  ));

  return (
    <section className="flex flex-col items-center p-8">
      <h2 className={`${merriweather.className} text-[40px] text-white`}>
        Proces Zakupu Pojazdu z Dubaju:{" "}
        <span className="gradient-gold bg-clip-text text-transparent">
          Krok po Kroku
        </span>
      </h2>
      <div className="w-3/4 flex-col items-center justify-center">
        <div className="mt-12 flex items-center justify-center">
          {stepButtons}
        </div>
        <div className="border border-gold text-center">
          {steps[selectedStep]}
        </div>
      </div>
    </section>
  );
};

export default Process;
