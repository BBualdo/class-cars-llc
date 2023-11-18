import importProcess from "@/data/import-process";
import { merriweather } from "@/fonts/fonts";

export default function Page() {
  const processElements = importProcess.map((step) => (
    <div key={step.id} className="flex items-start gap-6">
      <div className="border-2 border-gold p-3 rounded-full inline-block">
        <p className="uppercase text-center font-bold text-sm leading-[19px]">
          Krok
          <br />
          {step.id}
        </p>
      </div>
      <div>
        <h2>{step.title}</h2>
        <p>{step.description}</p>
      </div>
    </div>
  ));
  return (
    <main className="flex min-h-screen flex-col p-24 text-white">
      <h1 className={merriweather.className}>
        Proces Zakupu Pojazdu z Dubaju: Krok po Kroku
      </h1>

      <div className="mt-12 flex flex-col gap-12">{processElements}</div>
    </main>
  );
}
