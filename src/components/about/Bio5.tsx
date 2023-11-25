"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio5 = () => {
  return (
    <section className="gradient-red flex flex-col gap-10 px-10 py-20">
      <motion.p
        variants={fadeIn("down", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-[26px] font-bold text-white"
      >
        Mój konik to samochody, takie jak: Nissan Patrol, Wrangler czy G-klasa,
        ze względu na ich zabezpieczenie przed korozją – to duży atut na rynku
        europejskim. Szczególnie cenię sobie samochody klasyczne, które są
        proste w budowie i pozwalają na łatwą ocenę oraz naprawę ewentualnych
        uszkodzeń. W przyszłości chciałbym wprowadzić na rynek więcej
        nietypowych samochodów, takich jak: Bronco 1, Hummer H1, czy rzadkie
        modele Aston Martin.
      </motion.p>

      <motion.div
        variants={fadeIn("", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-offroad h-[400px] w-full bg-cover bg-fixed bg-center bg-no-repeat opacity-70 shadow-[0_0_40px] shadow-red-700"
      />

      <motion.p
        variants={fadeIn("up", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-[26px] font-bold text-white"
      >
        W mojej opinii samochody terenowe to niezawodność i wytrzymałość. Widzę
        w nich nie tylko wartość użytkową, ale i inwestycyjną. Każdy samochód,
        który kupuję i sprzedaję, traktuję jak projekt – starannie analizuję
        jego stan, historię, by następnie dokonać niezbędnych napraw i
        modyfikacji. Fascynuje mnie przywracanie dawnej świetności tym
        klasycznym maszynom.
      </motion.p>
    </section>
  );
};

export default Bio5;
