import Image from "next/image";

const Bio4 = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Importem samochodów zajmuję się od{" "}
          <span className="text-gold"> [...]</span> roku. Wszystko zaczęło się
          od importu aut z Niemiec, co dało mi solidne podstawy do zrozumienia
          europejskiego rynku motoryzacyjnego. Wkrótce potem rozszerzyłem
          działalność na import samochodów z Włoch i Francji, co pozwoliło mi na
          poznanie różnorodności europejskiego rynku.
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

export default Bio4;
