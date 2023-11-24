"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio2 = () => {
  return (
    <section className="flex h-[600px] w-full gap-10">
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex w-full items-center justify-center"
      >
        <Image
          alt=""
          src="/template-images/mechanics.avif"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="blur-[2px]"
        />
        <div className="absolute">
          <p className="max-w-[800px] text-center text-[26px] font-bold text-white/70">
            Pierwsze kroki w świecie motoryzacji stawiałem jako młody chłopak.
            Początek mojej pasji motoryzacyjnej rozpocząłem od nabycia starego
            Volkswagena Polo. Był to niewielki wydatek, zaledwie 200 zł.
            Zaangażowałem się w proces kompleksowej renowacji samochodu,
            wykonując wszystkie prace własnoręcznie. Praca, którą w niego
            włożyłem, okazała się opłacalna – ostatecznie sprzedałem Volkswagena
            Polo za 510 zł. Ta transakcja była moim pierwszym udanym deal’em
            samochodowym i otworzyła mi oczy na potencjał, jaki niesie ze sobą
            świat motoryzacji.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio2;
