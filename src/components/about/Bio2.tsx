import Image from "next/image";

const Bio2 = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Pierwsze kroki w świecie motoryzacji stawiałem jako młody chłopak.
          Początek mojej pasji motoryzacyjnej rozpocząłem od nabycia starego
          Volkswagena Polo. Był to niewielki wydatek, zaledwie 200 zł.
          Zaangażowałem się w proces kompleksowej renowacji samochodu, wykonując
          wszystkie prace własnoręcznie. Praca, którą w niego włożyłem, okazała
          się opłacalna – ostatecznie sprzedałem Volkswagena Polo za 510 zł. Ta
          transakcja była moim pierwszym udanym deal’em samochodowym i otworzyła
          mi oczy na potencjał, jaki niesie ze sobą świat motoryzacji.
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

export default Bio2;
