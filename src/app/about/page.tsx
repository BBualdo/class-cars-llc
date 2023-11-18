import { merriweather } from "@/fonts/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex gap-20 min-h-screen p-24">
      <div>
        <Image
          src=""
          alt="Owner Picture"
          width={300}
          className="border-2 shadow-[0_10px_300px_20px] shadow-gold border-gold w-[300px] h-[400px]"
        />
      </div>
      <div className="flex-1">
        <p>
          Pasję do samochodów odziedziczyłem po ojcu, który był handlarzem.
          Sprzedał i kupił około 500 pojazdów, a ja towarzyszyłem mu w tych
          przedsięwzięciach jako młody chłopak. Już w wieku 8 lat, w tajemnicy
          przed mamą, otrzymałem pierwszego quada, którym jeździłem z ojcem po
          torach motocrossowych. W młodości, między 13 a 16 rokiem życia, brałem
          udział w zawodach motocrossowych. Odnosiłem tam pewne sukcesy, min.
          <span className="text-gold">XXX</span>.
        </p>
      </div>
    </main>
  );
}
