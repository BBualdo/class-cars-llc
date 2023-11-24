import Image from "next/image";

const Bio6 = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Następnie, podczas wizyty w Emiratach Arabskich, dostrzegłem potencjał
          rynku motoryzacyjnego w Dubaju. Tutejszy rynek oferuje atrakcyjne
          cenowo samochody, które stanowią ciekawą propozycję dla kolekcjonerów
          oraz miłośników motoryzacji. Równolegle, oprócz prężnej działalności w
          Emiratach Arabskich, rozpocząłem import samochodów ze Szwecji,
          uzupełniając tym samym moje doświadczenie o kolejny ważny kierunek
          europejski.
        </p>
      </div>
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
    </section>
  );
};

export default Bio6;
