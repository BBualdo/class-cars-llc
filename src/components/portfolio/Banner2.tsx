"use client";

import { v4 as uuidv4 } from "uuid";
import cars from "@/data/cars";
import Slider from "../interface/Slider";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner2 = () => {
  const carElement = cars.map((car) => (
    <Slider images={car.images} key={uuidv4()}>
      <h2 className="text-[32px] text-white">{car.name}</h2>
    </Slider>
  ));

  return (
    <motion.section
      variants={fadeIn("right", 0.5, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="gradient-gotham-mix"
    >
      {carElement}
    </motion.section>
  );
};

export default Banner2;
