import ArticleList from "@/components/blog/ArticleList";
import Banner1 from "@/components/blog/Banner1";
import Head from "next/head";
import Banner2 from "@/components/blog/Banner2";
import { Metadata } from "next";
import Banner3 from "@/components/blog/Banner3";
import Banner4 from "@/components/blog/Banner4";
import Banner5 from "@/components/blog/Banner5";
import Banner6 from "@/components/blog/Banner6";

export const metadata: Metadata = {
  title: "Blog | ClassCarsLLC",
  description:
    "Interesują Cię samochody z Dubaju? Szukasz porad i ciekawostek dotyczących importu aut? Odwiedź blog ClassCars, aby znaleźć szczegółowe informacje o procesie importu aut oraz najlepszych praktykach zakupu aut z Dubaju.",
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://classcarsllc.com/blog"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <Banner5 />
        <Banner6 />
        <ArticleList />
      </main>
    </>
  );
}
