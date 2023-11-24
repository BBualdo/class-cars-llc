import Image from "next/image";

const Bio9 = () => {
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
          W mojej pracy, oprócz oczywiście pasji, ważny jest klient, dlatego też
          na bieżąco jestem z trendami rynkowymi i technologicznymi. Często
          uczęszczam na targi motoryzacyjne, aukcje i spotkania branżowe, aby
          poszerzać swoją wiedzę i sieć kontaktów. Interakcje z innymi
          entuzjastami samochodów, kolekcjonerami i specjalistami są dla mnie
          niezwykle cenne – każda rozmowa to okazja do nauki i wymiany
          doświadczeń. Bardzo ważnym aspektem mojej działalności jest również
          marketing i prezentacja samochodów. Starannie fotografuję każdy
          pojazd, opisuję jego historię oraz unikalne cechy.
        </p>
      </div>
    </section>
  );
};

export default Bio9;
