import importProcess from "@/data/import-process";
import { merriweather } from "@/fonts/fonts";

const Process = () => {
  const processElements = importProcess.map((step) => (
    <div key={step.id} className="flex items-start gap-6 text-white">
      <div className="inline-block rounded-full border-2 border-gold p-3">
        <p className="text-center text-sm font-bold uppercase leading-[19px]">
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
    <section className="flex flex-col items-center py-8">
      <h2 className={`${merriweather.className} text-[40px] text-white`}>
        Proces Zakupu Pojazdu z Dubaju:{" "}
        <span className="gradient-gold bg-clip-text text-transparent">
          Krok po Kroku
        </span>
      </h2>
      <div className="mt-12 flex flex-col gap-12">{processElements}</div>
    </section>
  );
};

export default Process;
