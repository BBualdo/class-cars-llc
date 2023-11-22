"use client";

import { alpha } from "@/fonts/fonts";
import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner5 = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.5, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="gradient-light-gold flex w-full flex-col items-center xs:px-4 xs:py-10 md:px-20 md:py-20"
    >
      <h2
        className={`${alpha.className} gradient-gotham_hover max-w-[1000px] bg-clip-text text-center font-bold text-transparent md:text-[40px] md:leading-[48px] lg:text-[52px] lg:leading-[72px]`}
      >
        Bezpieczeństwo Twojego samochodu to nasz priorytet.
      </h2>
      <p className="mt-10 max-w-[1200px] text-center font-bold text-black xs:text-[14px] md:text-[24px]">
        Specjalizujemy się w imporcie aut z Dubaju, przykładając ogromną wagę do
        bezpieczeństwa i ochrony każdego pojazdu. Nasze samochody są
        transportowane w specjalnie przygotowanych kontenerach, które gwarantują
        najwyższy poziom zabezpieczenia. Dzięki starannie zaplanowanemu
        procesowi transportowemu, nasi klienci mogą być spokojni o stan swoich
        luksusowych pojazdów. W ClassCars każdy samochód jest traktowany z
        największą troską, zapewniając, że dotrze do celu w nienaruszonym
        stanie.
      </p>
      <Link
        href="/portfolio"
        className="gradient-gotham hover:gradient-gotham_hover mt-12 rounded-full text-center font-bold text-white transition-all duration-200 xs:px-4 xs:py-2 xs:max-md:text-[14px] md:px-12 md:py-4"
      >
        Odkryj naszą wyjątkową kolekcję samochodów!
      </Link>
    </motion.section>
  );
};

export default Banner5;
