import Image from "next/image";

const Bio5 = () => {
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
          Z czasem, moje zainteresowanie przeniosło się na rynek amerykański.
          Przeprowadzka do Kalifornii, w Stanach Zjednoczonych, otworzyła przede
          mną nowe możliwości i pozwoliła zgłębić tamtejszy rynek samochodowy.
          To doświadczenie było nieocenione i znacznie wzbogaciło moją wiedzę
          oraz umiejętności w dziedzinie handlu autami.
        </p>
      </div>
    </section>
  );
};

export default Bio5;
