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
    <div className="w-full bg-darkGrey flex p-8 gap-10">
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex items-center">
          <ArrowBackIosNew
            className="absolute left-0 bg-black/70 cursor-pointer text-[40px] p-1"
            onClick={prevImage}
          />

          <Image
            src={images[current]}
            alt=""
            width={400}
            height={300}
            className="w-[400px] h-[300px]"
          />

          <ArrowForwardIos
            className="absolute right-0 bg-black/70 cursor-pointer text-[40px] p-1"
            onClick={nextImage}
          />
        </div>

        <div className="flex items-center gap-1">
          {images.map((image) => (
            <button className="w-[20px] h-[14px] -skew-x-12 bg-gold"></button>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Slider;
