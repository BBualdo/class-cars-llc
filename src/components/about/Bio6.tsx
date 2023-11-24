import Image from "next/image";

const Bio6 = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1">
        <p className="max-w-[800px] text-[26px] font-bold text-white">
          W mojej opinii samochody terenowe to niezawodność i wytrzymałość.
          Widzę w nich nie tylko wartość użytkową, ale i inwestycyjną. Każdy
          samochód, który kupuję i sprzedaję, traktuję jak projekt – starannie
          analizuję jego stan, historię, by następnie dokonać niezbędnych napraw
          i modyfikacji. Fascynuje mnie przywracanie dawnej świetności tym
          klasycznym maszynom.
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
