"use client";

import { motion } from "framer-motion";

import Banner1 from "@/components/about/Banner1";
import Bio1 from "@/components/about/Bio1";
import Bio2 from "@/components/about/Bio2";
import Bio3 from "@/components/about/Bio3";
import Bio4 from "@/components/about/Bio4";
import Bio5 from "@/components/about/Bio5";
import Bio6 from "@/components/about/Bio6";
import Bio7 from "@/components/about/Bio5";
import Bio8 from "@/components/about/Bio6";
import Bio9 from "@/components/about/Bio7";

import { allison } from "@/fonts/fonts";
import { fadeIn } from "@/utils/fadeIn";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <div className="flex flex-col items-center gap-20">
        <motion.h2
          variants={fadeIn("down", 1.2, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${allison.className} gradient-gold bg-clip-text text-[100px] text-transparent`}
        >
          Martin Adam
        </motion.h2>
        <Bio1 />
        <Bio2 />
        <Bio3 />
        <Bio4 />
      </div>
    </main>
  );
}
