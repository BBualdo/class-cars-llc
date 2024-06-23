import ArticleList from "@/components/blog/ArticleList";
import Banner1 from "@/components/blog/Banner1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ClassCarsLLC",
  description:
    "Interesują Cię samochody z Dubaju? Szukasz porad i ciekawostek dotyczących importu aut? Odwiedź blog ClassCars, aby znaleźć szczegółowe informacje o procesie importu aut oraz najlepszych praktykach zakupu aut z Dubaju.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <ArticleList />
    </main>
  );
}
