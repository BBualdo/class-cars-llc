"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio4 = () => {
  return (
    <section className="flex w-full py-20">
      <div className="w-full">
        <div className="flex w-full flex-col px-4 xs:gap-2 md:gap-10">
          <motion.div
            variants={fadeIn("", 0.5, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full justify-center"
          >
            <div className="bg-europe bg-cover bg-center bg-no-repeat md:w-3/4 lg:w-1/2">
              <div className="w-full p-8 backdrop-brightness-[0.2]">
                <p className="text-center font-bold text-white md:text-[20px] lg:text-[26px]">
                  Importem samochodów zajmuję się od{" "}
                  <span className="text-gold">2017</span> roku. Wszystko zaczęło
                  się od importu aut z Niemiec, co dało mi solidne podstawy do
                  zrozumienia europejskiego rynku motoryzacyjnego. Wkrótce potem
                  rozszerzyłem działalność na import samochodów z Włoch i
                  Francji, co pozwoliło mi na poznanie różnorodności
                  europejskiego rynku.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("", 0.5, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full justify-center"
          >
            <div className="bg-usa bg-cover bg-center bg-no-repeat md:w-3/4 lg:w-1/2">
              <div className="w-full p-8 backdrop-brightness-[0.2]">
                <p className="text-center font-bold text-white md:text-[20px] lg:text-[26px]">
                  Z czasem, moje zainteresowanie przeniosło się na rynek
                  amerykański. Przeprowadzka do Kalifornii, w Stanach
                  Zjednoczonych, otworzyła przede mną nowe możliwości i
                  pozwoliła zgłębić tamtejszy rynek samochodowy. To
                  doświadczenie było nieocenione i znacznie wzbogaciło moją
                  wiedzę oraz umiejętności w dziedzinie handlu autami.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("", 0.5, 1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full justify-center"
          >
            <div className="bg-uae bg-cover bg-center bg-no-repeat md:w-3/4 lg:w-1/2">
              <div className="w-full p-8 backdrop-brightness-[0.2]">
                <p className="text-center font-bold text-white md:text-[20px] lg:text-[26px]">
                  Następnie, podczas wizyty w Emiratach Arabskich, dostrzegłem
                  potencjał rynku motoryzacyjnego w Dubaju. Tutejszy rynek
                  oferuje atrakcyjne cenowo samochody, które stanowią ciekawą
                  propozycję dla kolekcjonerów oraz miłośników motoryzacji.
                  Równolegle, oprócz prężnej działalności w Emiratach Arabskich,
                  rozpocząłem import samochodów ze Szwecji, uzupełniając tym
                  samym moje doświadczenie o kolejny ważny kierunek europejski.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio4;
