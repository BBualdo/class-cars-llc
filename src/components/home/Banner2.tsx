"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import { alpha } from "@/fonts/fonts";
import Link from "next/link";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Image from "next/image";

const Banner2 = () => {
  return (
    <section className="flex w-full bg-black">
      <motion.div
        variants={fadeIn("right", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex w-2/3 flex-col items-center justify-center bg-black pt-4 xs:gap-4 md:gap-10"
      >
        <h2
          className={`${alpha.className} gradient-beam bg-clip-text text-center uppercase text-transparent md:text-[40px] lg:text-[52px]`}
        >
          Import Aut z Dubaju
        </h2>
        <p className="text-center font-bold text-white xs:px-4 xs:text-[10px] md:max-w-[730px] md:px-20 md:text-[16px] lg:max-w-[900px] lg:px-10 lg:text-[20px]">
          Specjalizujemy się w imporcie luksusowych aut z Dubaju do Europy.
          Twoje marzenie o ekskluzywnym pojeździe teraz stanie się
          rzeczywistością. Oferujemy kompleksową obsługę - od znalezienia
          idealnego samochodu, poprzez bezpieczny transport, aż po finalizację
          wszystkich formalności. Z nami każdy etap importu jest prosty i
          przejrzysty. Wybierz klasę i komfort, jakiego szukasz, a my zadbamy o
          resztę.
        </p>
        <Link href="/import" className="peer z-10 w-full py-5">
          <div className="peer flex w-full items-center justify-center font-bold uppercase text-white xs:gap-4 xs:text-[12px] md:gap-10 md:text-[24px] lg:text-[32px]">
            Sprawdź jak to działa
            <KeyboardDoubleArrowRight className="xs:text-base md:text-[40px] lg:text-[60px]" />
          </div>
        </Link>
        <div className="gradient-gold transition-translate absolute bottom-0 w-full -translate-x-full duration-500 peer-hover:translate-x-0 xs:h-[5px] md:h-[10px]" />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7, 0.5, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex-1"
      >
        <Image
          alt="Man in the cabrio on the desert with Dubai buildings in the background"
          src="/template-images/desert.avif"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </section>
  );
};

export default Banner2;
