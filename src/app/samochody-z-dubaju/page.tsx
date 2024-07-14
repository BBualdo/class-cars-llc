import Banner1 from "@/components/portfolio/Banner1";
import Banner3 from "@/components/portfolio/Banner3";
import type { Metadata } from "next";
import Head from "next/head";
import Banner2 from "@/components/portfolio/Banner2";

export const metadata: Metadata = {
  title: "Samochody z Dubaju - Portfolio Importowanych Aut | ClassCars",
  description:
    "Zobacz nasze samochody-z-dubaju samochodów importowanych z Dubaju. Klasyczne, terenowe i kolekcjonerskie auta w najlepszym stanie. ClassCars - Twoje marzenie o idealnym samochodzie.",
  keywords: ["Samochody z Dubaju"],
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://classcarsllc.com/samochody-z-dubaju"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden text-black">
        <Banner1 />
        <Banner2 />
        <Banner3 />
      </main>
    </>
  );
}
