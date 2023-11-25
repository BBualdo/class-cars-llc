"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio4 = () => {
  return (
    <section className="flex w-full py-20">
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative h-[1000px] w-full"
      >
        <Image
          alt=""
          src="/template-images/map.avif"
          fill
          style={{ objectFit: "cover" }}
          className="blur-[2px]"
        />
        <div className="absolute flex h-full w-full flex-col px-4 xs:justify-center xs:max-md:gap-2 md:justify-around">
          <motion.div
            variants={fadeIn("left", 0.5, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full"
          >
            <div className="bg-gray-700/70 p-4 md:w-3/4">
              <p className="text-white/80 xs:text-[15px] md:text-[18px] lg:text-[24px]">
                Importem samochodów zajmuję się od{" "}
                <span className="text-gold">2017</span> roku. Wszystko zaczęło
                się od importu aut z Niemiec, co dało mi solidne podstawy do
                zrozumienia europejskiego rynku motoryzacyjnego. Wkrótce potem
                rozszerzyłem działalność na import samochodów z Włoch i Francji,
                co pozwoliło mi na poznanie różnorodności europejskiego rynku.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.7, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full justify-end"
          >
            <div className="bg-gray-700/70 p-4 md:w-3/4">
              <p className="text-white/80 xs:text-[15px] md:text-[18px] lg:text-[24px]">
                Z czasem, moje zainteresowanie przeniosło się na rynek
                amerykański. Przeprowadzka do Kalifornii, w Stanach
                Zjednoczonych, otworzyła przede mną nowe możliwości i pozwoliła
                zgłębić tamtejszy rynek samochodowy. To doświadczenie było
                nieocenione i znacznie wzbogaciło moją wiedzę oraz umiejętności
                w dziedzinie handlu autami.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.9, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full"
          >
            <div className="bg-gray-700/70 p-4 md:w-3/4">
              <p className="text-white/80 xs:text-[15px] md:text-[18px] lg:text-[24px]">
                Następnie, podczas wizyty w Emiratach Arabskich, dostrzegłem
                potencjał rynku motoryzacyjnego w Dubaju. Tutejszy rynek oferuje
                atrakcyjne cenowo samochody, które stanowią ciekawą propozycję
                dla kolekcjonerów oraz miłośników motoryzacji. Równolegle,
                oprócz prężnej działalności w Emiratach Arabskich, rozpocząłem
                import samochodów ze Szwecji, uzupełniając tym samym moje
                doświadczenie o kolejny ważny kierunek europejski.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio4;
