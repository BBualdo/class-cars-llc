"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio6 = () => {
  return (
    <section className="gradient-gray flex w-full flex-col gap-10 p-20">
      <motion.div
        variants={fadeIn("right", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative h-[400px] w-full border-8 border-white"
      >
        <Image
          alt=""
          src="/template-images/event.avif"
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
      </motion.div>
      <motion.p
        variants={fadeIn("left", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-[26px] font-bold text-black"
      >
        W mojej pracy, oprócz oczywiście pasji, ważny jest klient, dlatego też
        na bieżąco jestem z trendami rynkowymi i technologicznymi. Często
        uczęszczam na targi motoryzacyjne, aukcje i spotkania branżowe, aby
        poszerzać swoją wiedzę i sieć kontaktów. Interakcje z innymi
        entuzjastami samochodów, kolekcjonerami i specjalistami są dla mnie
        niezwykle cenne – każda rozmowa to okazja do nauki i wymiany
        doświadczeń. Bardzo ważnym aspektem mojej działalności jest również
        marketing i prezentacja samochodów. Starannie fotografuję każdy pojazd,
        opisuję jego historię oraz unikalne cechy.
      </motion.p>
    </section>
  );
};

export default Bio6;
