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
      <p className="text-center md:text-[20px] lg:text-[24px] xs:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] leading-8 font-semibold">
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
          className="group w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-left overflow-hidden"
        >
          <div className="h-full bg-black/70 w-full translate-y-full group-hover:translate-y-0 flex items-center justify-center text-white transition-all duration-300">
            <p className="font-bold px-4 text-transparent bg-clip-text gradient-sand-beam">
              Specjalizujemy się w znalezieniu idealnych samochodów zgodnie z
              indywidualnymi preferencjami naszych klientów. Dzięki naszej
              rozległej wiedzy i doświadczeniu, jesteśmy w stanie zaoferować nie
              tylko najlepsze pojazdy, ale także najkorzystniejsze warunki
              importu. Naszym celem jest zapewnienie, że każdy aspekt procesu
              importu jest dla Ciebie wygodny, bezpieczny i bezproblemowy.
            </p>
          </div>
        </motion.button>
        <motion.button
          variants={fadeIn("up", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-center overflow-hidden"
        >
          <div className="h-full bg-black/70 w-full translate-y-full group-hover:translate-y-0 flex items-center justify-center text-white transition-all duration-300">
            <p className="font-bold px-4 text-transparent bg-clip-text gradient-sand-beam">
              W ClassCars każdy detal ma znaczenie. Zajmujemy się wszystkim – od
              starannej selekcji i zakupu pojazdu, poprzez bezpieczny transport,
              aż po kompleksową obsługę celno-prawną transport z portu do kraju
              docelowego. Nasza usługa eliminuje wszelkie wyzwania związane z
              importem, oferując Ci pełną spokojność i satysfakcję.
            </p>
          </div>
        </motion.button>
        <motion.button
          variants={fadeIn("left", 0.3, 1, 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group w-full h-full bg-two xs:max-lg:bg-auto bg-no-repeat bg-right overflow-hidden"
        >
          <div className="h-full bg-black/70 w-full translate-y-full group-hover:translate-y-0 flex items-center justify-center text-white transition-all duration-300">
            <p className="font-bold px-4 text-transparent bg-clip-text gradient-sand-beam">
              Wybierając ClassCars, wybierasz partnera, który rozumie Twoje
              potrzeby i jest w stanie zrealizować Twoje motoryzacyjne marzenia
              w najbardziej efektywny i satysfakcjonujący sposób. Jesteśmy tu,
              aby przekształcić proces importu w przyjemne i ekscytujące
              doświadczenie, zapewniając, że Twój nowy samochód z Dubaju
              przekroczy wszystkie Twoje oczekiwania.
            </p>
          </div>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Banner3;
