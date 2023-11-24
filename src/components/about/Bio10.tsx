import Image from "next/image";

const Bio10 = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          Oprócz handlu samochodami, zajmuję się ich renowacją. Mam kilka
          projektów, gdzie odrestaurowuję klasyczne modele do ich oryginalnego
          stanu, co jest nie tylko wyzwaniem, ale i spełnieniem moich marzeń
          jako kolekcjonera. Uważam, że każdy samochód ma swoją duszę i
          historię, którą warto odkrywać i zachowywać dla przyszłych pokoleń.
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

export default Bio10;
