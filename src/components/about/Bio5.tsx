"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio5 = () => {
  return (
    <section className="gradient-red flex flex-col gap-10 md:px-10 md:py-20">
      <motion.p
        variants={fadeIn("down", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center font-bold text-white xs:max-md:px-4 md:text-[20px] lg:text-[26px]"
      >
        Doceniam samochody takie jak: Jeep Wrangler, Mercedes-Benz G-Class i
        Toyota Land Cruiser za ich prostotę i wielozadaniowość, a także ze
        względu na ich zabezpieczenie przed korozją – to duży atut na rynku
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
        className="w-full bg-offroad bg-cover bg-fixed bg-no-repeat opacity-70 shadow-[0_0_40px] shadow-red-700 xs:h-[300px] xs:bg-left md:h-[400px] md:bg-center"
      />

      <motion.p
        variants={fadeIn("up", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center font-bold text-white xs:max-md:px-4 md:text-[20px] lg:text-[26px]"
      >
        W mojej opinii samochody terenowe, znane ze swojej wytrzymałości i
        zdolności do radzenia sobie w trudnych warunkach terenowych, stanowią
        ikony motoryzacyjnego rzemiosła. Widzę w nich nie tylko wartość
        użytkową, ale i inwestycyjną. Każdy samochód, który kupuję i sprzedaję,
        traktuję jak projekt – starannie analizuję jego stan, historię, by
        następnie dokonać niezbędnych napraw i modyfikacji. Fascynuje mnie
        przywracanie dawnej świetności tym klasycznym maszynom.
      </motion.p>
    </section>
  );
};

export default Bio5;
