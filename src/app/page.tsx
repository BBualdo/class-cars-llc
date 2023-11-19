"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black bg-black">
      <motion.div
        variants={fadeIn("right", 0.3, 0.7)}
        initial={"hidden"}
        whileInView={"show"}
        className="absolute bg-five bg-no-repeat bg-center bg-cover w-full h-[600px] z-0"
      />
      <div className="w-full h-[600px] flex items-center justify-center">
        <motion.h1
          variants={fadeIn("up", 0.8, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 to-yellow-100 font-extrabold z-10`}
        >
          Witamy w ClassCarsLLC
        </motion.h1>
      </div>
    </main>
  );
}
