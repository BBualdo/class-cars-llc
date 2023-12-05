"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import Image from "next/image";

const Bio5 = () => {
  return (
    <section className="gradient-red flex h-[800px] xs:max-lg:flex-col xs:max-lg:gap-10 lg:py-20">
      <div className="flex flex-1 flex-col gap-4 xs:px-2 md:px-10">
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
          użytkową, ale i inwestycyjną. Każdy samochód, który kupuję i
          sprzedaję, traktuję jak projekt – starannie analizuję jego stan,
          historię, by następnie dokonać niezbędnych napraw i modyfikacji.
          Fascynuje mnie przywracanie dawnej świetności tym klasycznym maszynom.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative order-[-1] flex-1 rounded-lg"
      >
        <Image
          alt=""
          src="/template-images/g-class.avif"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default Bio5;
