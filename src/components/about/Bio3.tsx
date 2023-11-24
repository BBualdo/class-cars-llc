"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Bio3 = () => {
  return (
    <section className="flex h-[300px] gap-10">
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1"
      >
        <p className="px-10 text-center text-[26px] font-bold text-white">
          Po zdobyciu tytułu magistra filologii angielskiej, skupiłem się na
          temacie alternatywnych inwestycji, szczególnie unikatowych samochodów
          zabytkowych, co notabene, było tematem mojej pracy magisterskiej:
          <span className="text-gold"> [...]</span>.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex-1 rounded-lg"
      >
        <Image
          alt=""
          src="/template-images/degree.webp"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default Bio3;
