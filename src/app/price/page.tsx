import importPrice from "@/data/import-price";
import { merriweather } from "@/fonts/fonts";

export default function Page() {
  const importPriceElements = importPrice.map((condition) => (
    <li key={condition.id}>
      {condition.id}. {condition.title}: {condition.description}
    </li>
  ));

  return (
    <main className="flex min-h-screen flex-col p-24 text-white">
      <h1 className={merriweather.className}>
        Szczegółowy Przegląd Kosztów Importu Samochodów ze Zjednoczonych
        Emiratów Arabskich
      </h1>

      <ol>{importPriceElements}</ol>
    </main>
  );
}
