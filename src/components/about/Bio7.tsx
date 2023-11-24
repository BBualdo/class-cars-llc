import Image from "next/image";

const Bio7 = () => {
  return (
    <section className="flex gap-10">
      <div className="relative h-[400px] w-[400px] rounded-lg border-4 border-gold shadow-[0_0_40px] shadow-gold/50">
        <Image
          alt="Picture of ClassCars Owner"
          src="/template-images/owner.avif"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Mój konik to samochody, takie jak: Nissan Patrol, Wrangler czy
          G-klasa, ze względu na ich zabezpieczenie przed korozją – to duży atut
          na rynku europejskim. Szczególnie cenię sobie samochody klasyczne,
          które są proste w budowie i pozwalają na łatwą ocenę oraz naprawę
          ewentualnych uszkodzeń. W przyszłości chciałbym wprowadzić na rynek
          więcej nietypowych samochodów, takich jak: Bronco 1, Hummer H1, czy
          rzadkie modele Aston Martin.
        </p>
      </div>
    </section>
  );
};

export default Bio7;
