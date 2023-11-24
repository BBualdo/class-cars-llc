import Image from "next/image";

const Bio11 = () => {
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
          Mimo sukcesów i rozwoju biznesu, moje podejście pozostaje takie samo –
          kieruję się pasją i intuicją, a satysfakcja moich klientów jest dla
          mnie najważniejsza. W przyszłości planuję rozszerzyć moją działalność
          o bardziej zróżnicowane modele i marki, eksplorując nowe rynki i
          możliwości. Moim celem jest stać się uznawany nie tylko jako handlarz,
          ale jako ekspert i ambasador kultury motoryzacyjnej.
        </p>
      </div>
    </section>
  );
};

export default Bio11;
