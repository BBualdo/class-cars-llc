import { v4 as uuidv4 } from "uuid";

import cars from "@/data/cars";
import Image from "next/image";

export default function Page() {
  const carsElements = cars.map((car) => (
    <div key={uuidv4()} className="flex">
      <div className="flex-1 flex flex-col gap-2 items-center">
        <div>
          {car.images.map((image) => (
            <Image src={image} alt={car.name} width={1000} height={1000} />
          ))}
        </div>
        <div>
          {car.images.map((image) => (
            <button className="w-[10px] h-[10px] rounded-full bg-gold"></button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h2>{car.name}</h2>
      </div>
    </div>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white bg-black">
      {carsElements}
    </main>
  );
}
