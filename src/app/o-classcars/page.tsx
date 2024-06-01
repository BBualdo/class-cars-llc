import Banner1 from "@/components/about/Banner1";
import Bio1 from "@/components/about/Bio1";
import Bio2 from "@/components/about/Bio2";
import Bio3 from "@/components/about/Bio3";
import Bio4 from "@/components/about/Bio4";
import Bio5 from "@/components/about/Bio5";
import Bio6 from "@/components/about/Bio6";
import Bio7 from "@/components/about/Bio7";
import OwnerName from "@/components/about/OwnerName";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importer Samochodów z Dubaju do Polski i Europy | ClassCars",
  description:
    "Poznaj ClassCars - ekspertów w imporcie samochodów z Dubaju do Polski i Europy. Dowiedz się więcej o naszej misji, wartościach i doświadczeniu w branży motoryzacyjnej. Twoi zaufani specjaliści w imporcie aut z Emiratów Arabskich",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <div className="flex flex-col items-center">
        <OwnerName />
        <Bio1 />
        <Bio2 />
        <Bio3 />
        <Bio4 />
        <Bio5 />
        <Bio6 />
        <Bio7 />
      </div>
    </main>
  );
}
