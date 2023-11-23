"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Slider = ({
  images,
  children,
}: {
  images: string[];
  children: React.ReactNode;
}) => {
  const [current, setCurrent] = useState<number>(0);

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <motion.div
      variants={fadeIn("right", 0.4, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full xs:gap-4 xs:p-2 xs:max-md:flex-col md:gap-10 md:p-8"
    >
      <div
        aria-label="Image Slider"
        className="flex h-auto flex-col gap-4 md:w-[400px] lg:w-[500px]"
      >
        <div className="group relative flex w-full items-center overflow-hidden rounded-md border-4 border-white bg-black text-white md:h-[300px] lg:h-[400px]">
          <button
            aria-label="Previous Image"
            className="absolute left-0 z-40 -translate-x-full bg-black/70 p-1 transition-all duration-300 hover:text-gold focus-visible:translate-x-0 group-hover:translate-x-0"
          >
            <ArrowBackIosNew className="text-[32px]" onClick={prevImage} />
          </button>

          {images.map((image, index) => (
            <Image
              loading={`${current === index ? "eager" : "lazy"}`}
              aria-hidden={current !== index}
              key={index}
              src={image}
              alt=""
              width={500}
              height={400}
              style={{
                translate: `${-100 * current}%`,
                aspectRatio: 3 / 2,
                objectFit: "cover",
              }}
              priority={current === index}
              className="transition-translate duration-300 xs:max-md:w-full"
            />
          ))}

          <button
            aria-label="Next Image"
            className="absolute right-0 z-40 translate-x-full bg-black/70 p-1 transition-all duration-300 hover:text-gold group-hover:translate-x-0 group-focus-visible:translate-x-0"
          >
            <ArrowForwardIos className="text-[32px]" onClick={nextImage} />
          </button>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center xs:gap-2 md:gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Choose image button: ${index}`}
              onClick={() => setCurrent(index)}
              className={`${
                index === current ? "bg-gold" : "bg-transparent"
              } h-[16px] w-[24px] -skew-x-12 border border-gold hover:border-white md:h-[14px] md:w-[20px]`}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 xs:max-md:order-[-1] xs:max-md:text-center">
        {children}
      </div>
    </motion.div>
  );
};

export default Slider;
