import Banner1 from "@/components/home/Banner1";
import Banner2 from "@/components/home/Banner2";
import Banner3 from "@/components/home/Banner3";
import Banner4 from "@/components/home/Banner4";
import Banner5 from "@/components/home/Banner5";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Auta z Dubaju - Import Samochodów | ClassCars",
  description:
    "ClassCars - Import Auta z Dubaju do Polski. Oferujemy kompleksową obsługę, bezpieczny transport i atrakcyjne ceny. Sprawdź naszą ofertę!",
  keywords: ["Auta z Dubaju"],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://classcarsllc.com" key="canonical" />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden text-black">
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <Banner5 />
      </main>
    </>
  );
}
