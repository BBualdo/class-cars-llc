import { v4 as uuidv4 } from "uuid";

import cars from "@/data/cars";
import Image from "next/image";

export default function Page() {
  const carsElements = cars.map((car) => (
    <div key={uuidv4()}>
      <h2>{car.name}</h2>
      <div>
        {car.images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white bg-black">
      {carsElements}
    </main>
  );
}
