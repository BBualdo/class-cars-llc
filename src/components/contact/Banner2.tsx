"use client";

import { fadeIn } from "@/utils/fadeIn";
import { MailOutline, Place, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="flex gap-2 py-10 xs:px-4 xs:max-lg:flex-col md:px-20">
      <motion.div
        variants={fadeIn("right", 0.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-gotham flex flex-1 items-center justify-center gap-4 p-2 text-white shadow-2xl shadow-black"
      >
        <Place className="text-[40px]" />
        <div className="font-bold">
          <p>Hor Al Anz - Deira</p>
          <p>Dubai - United Arab Emirates</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 1, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-gotham flex flex-1 items-center justify-center gap-4 p-2 text-white shadow-2xl shadow-black"
      >
        <MailOutline className="text-[40px]" />
        <div className="flex flex-col gap-2">
          <a
            href="mailto:inquiry@classcarsllc.com"
            className="inline text-white transition-all duration-200 hover:text-gold"
          >
            inquiry@classcarsllc.com
          </a>
          <a
            href="mailto:classcars.uae@gmail.com"
            className="inline text-white transition-all duration-200 hover:text-gold"
          >
            classcars.uae@gmail.com
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 1.5, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-gotham flex flex-1 items-center justify-center gap-4 p-2 text-white shadow-2xl shadow-black"
      >
        <WhatsApp className="text-[40px]" />
        <a
          href="tel:+971509021467"
          className="inline text-white transition-all duration-200 hover:text-gold"
        >
          +971-50-902-1467
        </a>
      </motion.div>
    </section>
  );
};

export default Banner2;
