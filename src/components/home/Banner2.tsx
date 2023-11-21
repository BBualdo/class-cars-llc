"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import { alpha } from "@/fonts/fonts";
import Link from "next/link";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

const Banner2 = () => {
  return (
    <section className="flex w-full bg-black">
      <motion.div
        variants={fadeIn("right", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative w-2/3 bg-black flex flex-col xs:gap-4 md:gap-10 items-center justify-center"
      >
        <h2
          className={`${alpha.className} md:text-[40px] lg:text-[52px] text-center text-transparent bg-clip-text gradient-beam uppercase`}
        >
          Import Aut z Dubaju
        </h2>
        <p className="xs:text-[12px] md:text-[16px] lg:text-[20px] text-white font-bold text-center xs:px-4 md:px-20 lg:px-10 md:max-w-[730px] lg:max-w-[900px]">
          Specjalizujemy się w imporcie luksusowych aut z Dubaju do Europy.
          Twoje marzenie o ekskluzywnym pojeździe teraz stanie się
          rzeczywistością. Oferujemy kompleksową obsługę - od znalezienia
          idealnego samochodu, poprzez bezpieczny transport, aż po finalizację
          wszystkich formalności. Z nami każdy etap importu jest prosty i
          przejrzysty. Wybierz klasę i komfort, jakiego szukasz, a my zadbamy o
          resztę.
        </p>
        <Link href="/import" className="peer py-5 w-full z-10">
          <div className="peer text-white xs:text-[12px] md:text-[24px] lg:text-[32px] w-full flex items-center justify-center xs:gap-4 md:gap-10 font-bold uppercase">
            Sprawdź jak to działa
            <KeyboardDoubleArrowRight className="xs:text-base md:text-[40px] lg:text-[60px]" />
          </div>
        </Link>
        <div className="absolute bottom-0 gradient-gold xs:h-[5px] md:h-[10px] w-full -translate-x-full peer-hover:translate-x-0 transition-translate duration-500" />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7, 0.5, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 bg-six bg-center bg-no-repeat bg-cover"
      ></motion.div>
    </section>
  );
};

export default Banner2;
