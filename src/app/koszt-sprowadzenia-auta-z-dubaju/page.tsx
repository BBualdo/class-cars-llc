import Banner1 from "@/components/price/Banner1";
import Conditions from "@/components/price/Conditions";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Koszt Importu Samochodu z Dubaju - Kalkulator Opłat | ClassCars",
  description:
    "Sprawdź koszt importu samochodu z Dubaju do Polski. Użyj naszego kalkulatora opłat, aby dowiedzieć się więcej o kosztach i procedurach. ClassCars - transparentność i bezpieczeństwo transakcji.",
  keywords: ["Koszt sprowadzenia Auta z Dubaju"],
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://classcarsllc.com/koszt-sprowadzenia-auta-z-dubaju"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden bg-black text-white">
        <Banner1 />
        <Conditions />
      </main>
    </>
  );
}
