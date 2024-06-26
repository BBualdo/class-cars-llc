import Accordions from "@/components/faq/Accordions";
import Banner1 from "@/components/faq/Banner1";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title:
    "Najczęściej Zadawane Pytania o Import Samochodów z Dubaju | ClassCars",
  description:
    "Masz pytania dotyczące importu samochodów z Dubaju do Polski? Sprawdź nasze FAQ, gdzie znajdziesz odpowiedzi na najczęściej zadawane pytania. ClassCars - profesjonalna pomoc i doradztwo.",
  keywords: ["Import samochodów z Dubaju"],
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://classcarsllc.com/import-samochodow-z-dubaju-faq"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden text-black">
        <Banner1 />
        <Accordions />
      </main>
    </>
  );
}
