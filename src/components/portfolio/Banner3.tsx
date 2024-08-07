"use client";

import { v4 as uuidv4 } from "uuid";
import cars from "@/data/cars";
import Slider from "../interface/Slider";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner3 = () => {
  const carElement = cars.map((car) => (
    <Slider images={car.images} key={uuidv4()}>
      <h2 className="text-center text-gold xs:text-[16px] md:text-[14px] lg:text-[20px]">
        {car.name} <span className="font-normal">({car.year})</span>
      </h2>
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
      <div className="grid xs:grid-cols-1 xs:max-md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {carElement}
      </div>
    </motion.section>
  );
};

export default Banner3;
