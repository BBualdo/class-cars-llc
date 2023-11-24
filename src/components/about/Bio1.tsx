import Image from "next/image";

const Bio1 = () => {
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
          Pasję do samochodów odziedziczyłem po ojcu, który był handlarzem.
          Sprzedał i kupił około 500 pojazdów, a ja towarzyszyłem mu w tych
          przedsięwzięciach jako młody chłopak. Już w wieku 8 lat, w tajemnicy
          przed mamą, otrzymałem pierwszego quada, którym jeździłem z ojcem po
          torach motocrossowych. W młodości, między 13 a 16 rokiem życia, brałem
          udział w zawodach motocrossowych. Odnosiłem tam pewne sukcesy, min.
          <span className="text-gold"> [...]</span>.
        </p>
      </div>
    </section>
  );
};

export default Bio1;
