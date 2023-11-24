import Image from "next/image";

const Bio3 = () => {
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
          Po zdobyciu tytułu magistra filologii angielskiej, skupiłem się na
          temacie alternatywnych inwestycji, szczególnie unikatowych samochodów
          zabytkowych, co notabene, było tematem mojej pracy magisterskiej:
          <span className="text-gold"> [...]</span>.
        </p>
      </div>
    </section>
  );
};

export default Bio3;
