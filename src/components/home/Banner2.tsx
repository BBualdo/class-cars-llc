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
          ClassCars posiada bogate doświadczenie w sprowadzaniu różnych rodzajów samochodów
          w tym aut klasycznych, terenowych, luksusowych oraz kolekcjonerskich.
          Oferujemy kompleksową obsługę na każdym etapie procesu importu. 
          Zaczynamy od znalezienia idealnego samochodu zgodnie z Twoimi 
          preferencjami, a następnie zajmujemy się dostarczeniem go do portu, włącznie
          z przygotowaniem wszystkich niezbędnych dokumentów. 
          Zapewniamy bezpieczny transport pojazdu do Europy, dbając o jego ochronę 
          na każdym etapie podróży. Na koniec zajmujemy się finalizacją wszelkich 
          formalności, w tym odprawą celną i oraz dostawą pod dom, co sprawia, że cały
          proces jest dla Ciebie prosty i przejrzysty. Wybierz klasę i komfort, jakiego szukasz, a my 
          zajmiemy się resztą, gwarantując pełne zadowolenie i bezproblemowe 
          sprowadzenie wymarzonego samochodu z Dubaju. 
        </p>
        <Link href="/import-auta-z-dubaju" className="peer z-10 w-full py-5">
          <div className="peer flex w-full items-center justify-center font-bold uppercase text-white xs:gap-4 xs:text-[12px] md:gap-10 md:text-[24px] lg:text-[32px]">
            Import Auta z Dubaju - Proces
            <KeyboardDoubleArrowRight className="xs:text-base md:text-[40px] lg:text-[60px]" />
          </div>
        </Link>
        <div className="gradient-gold transition-translate absolute bottom-0 w-full -translate-x-full duration-500 peer-hover:translate-x-0 xs:h-[5px] md:h-[10px]" />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7, 0.7, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex-1"
      >
        <Image
          alt=""
          src="/template-images/desert.avif"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </section>
  );
};

export default Banner2;
