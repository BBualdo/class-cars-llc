"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black bg-black">
      <motion.div
        variants={fadeIn("right", 0.3, 0.7)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="absolute bg-five bg-no-repeat bg-center bg-cover w-full h-[600px] z-0"
      />
      <div className="w-full h-[600px] flex flex-col gap-4 items-center justify-center">
        <motion.h1
          variants={fadeIn("down", 0.8, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 to-yellow-100 font-extrabold z-10`}
        >
          Witamy w ClassCarsLLC
        </motion.h1>
        <motion.h2
          variants={fadeIn("up", 1.2, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-white font-extrabold text-center z-10 md:w-5/6 lg:w-1/2`}
        >
          W świecie importu samochodów, szczegóły są kluczem do sukcesu. Dzięki
          naszej obecności w Dubaju, oferujemy kompleksową usługę importu
          samochodów z tego egzotycznego rynku. Obsługujemy zarówno klientów
          indywidualnych, jak i firmy.
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 1.2, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-white bg-gradient-to-t from-orange-400 px-4 py-2 rounded-full to-yellow-200 font-extrabold z-10`}
        >
          <Link href="/portfolio">Sprawdź nasze auta</Link>
        </motion.div>
      </div>
    </main>
  );
}
