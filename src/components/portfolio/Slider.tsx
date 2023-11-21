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
    <div className="flex w-full gap-10 bg-darkGrey xs:p-2 xs:max-md:flex-col md:p-8">
      <div className="flex flex-col items-center gap-2">
        <div className="group relative flex items-center overflow-hidden">
          <ArrowBackIosNew
            className="absolute left-0 -translate-x-full cursor-pointer bg-black/70 p-1 text-[40px] transition-all duration-300 group-hover:translate-x-0"
            onClick={prevImage}
          />
          <Image
            src={images[current]}
            alt=""
            width={400}
            height={300}
            className="h-[300px] w-[400px]"
          />
          <ArrowForwardIos
            className="absolute right-0 translate-x-full cursor-pointer bg-black/70 p-1 text-[40px] transition-all duration-300 group-hover:translate-x-0"
            onClick={nextImage}
          />
        </div>

        <div className="flex items-center gap-1">
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
