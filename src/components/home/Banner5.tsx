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
      className="w-full flex flex-col items-center xs:py-10 xs:px-4 md:py-20 md:px-20 bg-gradient-gold"
    >
      <h2
        className={`${alpha.className} md:text-[40px] lg:text-[52px] max-w-[1000px] font-bold text-center text-transparent bg-clip-text gradient-gotham_hover md:leading-[48px] lg:leading-[72px]`}
      >
        Bezpieczeństwo Twojego samochodu to nasz priorytet.
      </h2>
      <p className="md:text-[24px] max-w-[1200px] font-bold text-center text-black mt-10">
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
        className="text-white text-center font-bold gradient-gotham xs:py-2 md:py-4 xs:px-4 md:px-12 rounded-full hover:gradient-gotham_hover transition-all duration-200 mt-12"
      >
        Odkryj naszą wyjątkową kolekcję samochodów!
      </Link>
    </motion.section>
  );
};

export default Banner5;
