import importProcess from "@/data/import-process";
import { merriweather } from "@/fonts/fonts";

export default function Page() {
  const processElements = importProcess.map((step) => (
    <li>
      {step.id}. {step.title}: {step.description}
    </li>
  ));
  return (
    <main className="flex min-h-screen flex-col p-24 text-white">
      <h1 className={merriweather.className}>
        Proces Zakupu Pojazdu z Dubaju: Krok po Kroku
      </h1>
      <ol>{processElements}</ol>
    </main>
  );
}
