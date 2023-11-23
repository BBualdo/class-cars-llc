"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

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
    <div className="flex w-full gap-10 xs:p-2 xs:max-md:flex-col md:p-8">
      <div
        aria-label="Image Slider"
        className="flex h-auto w-[400px] flex-col gap-4"
      >
        <div className="group relative flex h-[300px] w-full items-center overflow-hidden">
          <button
            aria-label="Previous Image"
            className="absolute left-0 z-40 -translate-x-full bg-black/70 p-1 transition-all duration-300 focus-visible:translate-x-0 group-hover:translate-x-0"
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
              width={400}
              height={300}
              style={{
                translate: `${-100 * current}%`,
                aspectRatio: 3 / 2,
                objectFit: "cover",
              }}
              priority={current === index}
              className="transition-translate duration-300"
            />
          ))}

          <button
            aria-label="Next Image"
            className="absolute right-0 z-40 translate-x-full bg-black/70 p-1 transition-all duration-300 group-hover:translate-x-0 group-focus-visible:translate-x-0"
          >
            <ArrowForwardIos className="text-[32px]" onClick={nextImage} />
          </button>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Choose image button: ${index}`}
              onClick={() => setCurrent(index)}
              className={`${
                index === current ? "bg-gold" : "bg-transparent"
              } h-[14px] w-[20px] -skew-x-12 border border-gold`}
            />
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Slider;
