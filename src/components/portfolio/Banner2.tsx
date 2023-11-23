"use client";

import { v4 as uuidv4 } from "uuid";
import cars from "@/data/cars";
import Slider from "../interface/Slider";

const Banner2 = () => {
  const carElement = cars.map((car) => (
    <Slider images={car.images} key={uuidv4()}>
      <h2 className="text-[32px] text-white">{car.name}</h2>
    </Slider>
  ));

  return <section className="gradient-gotham">{carElement}</section>;
};

export default Banner2;
