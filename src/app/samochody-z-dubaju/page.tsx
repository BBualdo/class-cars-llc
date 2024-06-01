import Banner1 from "@/components/portfolio/Banner1";
import Banner2 from "@/components/portfolio/Banner2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samochody z Dubaju - Portfolio Importowanych Aut | ClassCars",
  description:
    "Zobacz nasze samochody-z-dubaju samochodów importowanych z Dubaju. Klasyczne, terenowe i kolekcjonerskie auta w najlepszym stanie. ClassCars - Twoje marzenie o idealnym samochodzie.",
  keywords: ["Samochody z Dubaju"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden text-black">
      <Banner1 />
      <Banner2 />
    </main>
  );
}
