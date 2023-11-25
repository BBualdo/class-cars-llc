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
      className="flex gap-10 py-20"
    >
      <div className="relative h-[400px] w-[400px] rounded-lg border-4 border-gold shadow-[0_0_40px] shadow-gold/50">
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
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Pasję do samochodów odziedziczyłem po ojcu, który był handlarzem.
          Sprzedał i kupił około 500 pojazdów, a ja towarzyszyłem mu w tych
          przedsięwzięciach jako młody chłopak. Już w wieku 8 lat, w tajemnicy
          przed mamą, otrzymałem pierwszego quada, którym jeździłem z ojcem po
          torach motocrossowych. W młodości, między 13 a 16 rokiem życia, brałem
          udział w zawodach motocrossowych. Odnosiłem tam pewne sukcesy, min.
          <span className="text-gold"> [...]</span>.
        </p>
      </div>
    </motion.section>
  );
};

export default Bio1;
