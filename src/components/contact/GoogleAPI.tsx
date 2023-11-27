"use client";

import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";

const GoogleAPI = () => {
  return (
    <motion.section
      variants={fadeIn("left", 0.3, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex-1 bg-white"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1805.2606083071064!2d55.4074049!3d25.1856395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f612bff6895ef%3A0x3437adf8fd6ccad2!2sDawood%201%20Building!5e0!3m2!1spl!2spl!4v1701110807361!5m2!1spl!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </motion.section>
  );
};

export default GoogleAPI;
