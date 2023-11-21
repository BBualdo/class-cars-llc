import { v4 as uuidv4 } from "uuid";

import cars from "@/data/cars";
import Slider from "@/components/portfolio/Slider";

export default function Page() {
  const carElement = cars.map((car) => (
    <Slider images={car.images} key={uuidv4()}>
      <h2>{car.name}</h2>
    </Slider>
  ));
  return (
    <main className="min-h-screen items-center justify-between p-24 text-white bg-black">
      {carElement}
    </main>
  );
}
