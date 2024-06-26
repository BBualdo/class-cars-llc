"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Bio3 = () => {
  return (
    <section className="flex h-[300px] gap-10 xs:max-lg:flex-col lg:py-20">
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1"
      >
        <p className="px-10 text-center font-bold text-white md:text-[20px] lg:text-[26px]">
          Po zdobyciu tytułu magistra filologii angielskiej, skupiłem się na
          temacie alternatywnych inwestycji, szczególnie unikatowych samochodów
          zabytkowych, co notabene, było tematem mojej pracy magisterskiej:
          <span className="text-gold">
            {" "}
            „Alternative Investing: Investing in classic and unique vehicles”.
          </span>
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
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default Bio3;
