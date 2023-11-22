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
      <div className="flex h-auto w-[400px] flex-col gap-4">
        <div className="group relative flex h-[300px] w-full items-center overflow-hidden">
          <ArrowBackIosNew
            className="absolute left-0 z-40 -translate-x-full cursor-pointer bg-black/70 p-1 text-[40px] transition-all duration-300 group-hover:translate-x-0"
            onClick={prevImage}
          />
          <Image
            src={images[current]}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <ArrowForwardIos
            className="absolute right-0 z-40 translate-x-full cursor-pointer bg-black/70 p-1 text-[40px] transition-all duration-300 group-hover:translate-x-0"
            onClick={nextImage}
          />
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-1">
          {images.map((image, index) => (
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
