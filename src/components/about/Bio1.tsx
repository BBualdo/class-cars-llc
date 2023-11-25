"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio1 = () => {
  return (
    <motion.section
      variants={fadeIn("right", 1.3, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex gap-10 xs:max-md:flex-col xs:max-md:items-center xs:max-md:px-4 md:py-20"
    >
      <div className="relative w-full rounded-lg border-4 border-gold shadow-[0_0_40px] shadow-gold/50 xs:h-[300px] md:h-[400px] md:w-[400px]">
        <Image
          alt="Picture of ClassCars Owner"
          src="/template-images/owner.avif"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1">
        <p className="font-bold text-white xs:max-md:text-center md:max-w-[800px] md:text-[20px] lg:text-[26px]">
          Zamiłowanie do samochodów odziedziczyłem po swoim ojcu oraz dziadku,
          którzy to zajmowali się międzynarodowym handlem oraz serwisem pojazdów
          specjalistycznych, obejmującym nie tylko Polskę, ale całą Europę. Jako
          młody chłopiec często towarzyszyłem im w tej pracy. Już w wieku 8 lat,
          w tajemnicy przed mamą, otrzymałem pierwszego quada, którym jeździłem
          z ojcem po torach motocrossowych. W młodości, między 13 a 16 rokiem
          życia, brałem udział w zawodach motocrossowych. Odnosiłem tam pewne
          sukcesy, min.
          <span className="text-gold">
            {" "}
            2 miejsce w Yamaha Junior Cup w Gdańsku, 3 miejsce w zawodach
            Quadmania w Gdyni, 4 miejsce w zawodach MP HighSpeed QuadCross w
            Borkowie.
          </span>
        </p>
      </div>
    </motion.section>
  );
};

export default Bio1;
