import { v4 as uuidv4 } from "uuid";

import cars from "@/data/cars";
import Slider from "@/components/portfolio/Slider";

export default function Page() {
  const carElement = cars.map((car) => (
    <Slider images={car.images} key={uuidv4()}>
      <h2 className="text-[32px]">{car.name}</h2>
    </Slider>
  ));
  return (
    <main className="gradient-light-gold min-h-screen p-24 text-white">
      <div className="gradient-gotham">{carElement}</div>
    </main>
  );
}
