"use client";

import { fadeIn } from "@/utils/fadeIn";
import { allison } from "@/fonts/fonts";
import { motion } from "framer-motion";

const OwnerName = () => {
  return (
    <motion.h2
      variants={fadeIn("down", 1.2, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${allison.className} gradient-gold bg-clip-text text-[100px] text-transparent xs:max-md:text-[64px]`}
    >
      Martin Adam
    </motion.h2>
  );
};

export default OwnerName;
