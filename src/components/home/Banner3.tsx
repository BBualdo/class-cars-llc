"use client";

import { alpha } from "@/fonts/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import { Mouse, SwipeUp, TouchApp } from "@mui/icons-material";

const Banner3 = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.1, 1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex min-h-[1200px] w-full flex-col items-center py-10 xs:gap-4 md:gap-10"
    >
      <h2
        className={`${alpha.className} text-center uppercase md:text-[32px] lg:text-[40px]`}
      >
        Nasze usługi
      </h2>
      <p className="px-4 text-center font-bold leading-5 xs:max-w-[400px] xs:text-[10px] md:max-w-[600px] md:text-[16px] md:leading-8 lg:max-w-[800px] lg:text-[20px]">
        W ClassCars nie ma rzeczy niemożliwych.
        <br /> Jako liderzy w branży importu samochodów z Dubaju, posiadamy
        ponad 10 lat doświadczenia w spełnianiu nawet najbardziej wyrafinowanych
        wymagań naszych klientów. Nasza firma to synonim ekspertyzy i
        profesjonalizmu, oferując usługi na najwyższym poziomie.
      </p>
      <div className="grid w-full flex-1 xs:px-4 xs:max-lg:grid-rows-3 xs:max-md:gap-y-4 md:px-20 md:max-lg:gap-y-10 lg:grid-cols-3 lg:gap-x-10 lg:px-40">
        <motion.div
          variants={fadeIn("right", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group relative h-full w-full overflow-hidden bg-classic bg-left bg-no-repeat xs:max-lg:bg-auto"
        >
          <div className="gradient-gotham absolute top-0 flex w-full translate-x-0 items-center justify-center gap-2 py-2 font-bold uppercase text-white transition-all duration-200 group-hover:-translate-x-full">
            Więcej informacji
            <Mouse className="xs:max-md:hidden" />
            <TouchApp className="md:hidden" />
          </div>
          <div className="flex h-full w-full translate-y-full items-center justify-center bg-black/70 text-white transition-all duration-300 group-hover:translate-y-0">
            <p className="gradient-sand-beam bg-clip-text px-4 font-bold text-transparent xs:max-md:text-[12px]">
              Specjalizujemy się w znalezieniu idealnych samochodów zgodnie z
              indywidualnymi preferencjami naszych klientów. Dzięki naszej
              rozległej wiedzy i doświadczeniu, jesteśmy w stanie zaoferować nie
              tylko najlepsze pojazdy, ale także najkorzystniejsze warunki
              importu. Naszym celem jest zapewnienie, że każdy aspekt procesu
              importu jest dla Ciebie wygodny, bezpieczny i bezproblemowy.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group relative h-full w-full overflow-hidden bg-classic bg-center bg-no-repeat xs:max-lg:bg-auto"
        >
          <div className="gradient-gotham absolute top-0 flex w-full translate-x-0 items-center justify-center gap-2 py-2 font-bold uppercase text-white transition-all duration-200 group-hover:-translate-x-full">
            Więcej informacji
            <Mouse className="xs:max-md:hidden" />
            <TouchApp className="md:hidden" />
          </div>
          <div className="flex h-full w-full translate-y-full items-center justify-center bg-black/70 text-white transition-all duration-300 group-hover:translate-y-0">
            <p className="gradient-sand-beam bg-clip-text px-4 font-bold text-transparent xs:max-md:text-[12px]">
              W ClassCars każdy detal ma znaczenie. Zajmujemy się wszystkim – od
              starannej selekcji i zakupu pojazdu, poprzez bezpieczny transport,
              aż po kompleksową obsługę celno-prawną transport z portu do kraju
              docelowego. Nasza usługa eliminuje wszelkie wyzwania związane z
              importem, oferując Ci pełną spokojność i satysfakcję.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group relative h-full w-full overflow-hidden bg-classic bg-right bg-no-repeat xs:max-lg:bg-auto"
        >
          <div className="gradient-gotham absolute top-0 flex w-full translate-x-0 items-center justify-center gap-2 py-2 font-bold uppercase text-white transition-all duration-200 group-hover:-translate-x-full">
            Więcej informacji
            <Mouse className="xs:max-md:hidden" />
            <TouchApp className="md:hidden" />
          </div>
          <div className="flex h-full w-full translate-y-full items-center justify-center bg-black/70 text-white transition-all duration-300 group-hover:translate-y-0">
            <p className="gradient-sand-beam bg-clip-text px-4 font-bold text-transparent xs:max-md:text-[12px]">
              Wybierając ClassCars, wybierasz partnera, który rozumie Twoje
              potrzeby i jest w stanie zrealizować Twoje motoryzacyjne marzenia
              w najbardziej efektywny i satysfakcjonujący sposób. Jesteśmy tu,
              aby przekształcić proces importu w przyjemne i ekscytujące
              doświadczenie, zapewniając, że Twój nowy samochód z Dubaju
              przekroczy wszystkie Twoje oczekiwania.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner3;
