import Banner1 from "@/components/about/Banner1";
import Bio1 from "@/components/about/Bio1";
import Bio10 from "@/components/about/Bio10";
import Bio11 from "@/components/about/Bio11";
import Bio2 from "@/components/about/Bio2";
import Bio3 from "@/components/about/Bio3";
import Bio4 from "@/components/about/Bio4";
import Bio5 from "@/components/about/Bio5";
import Bio6 from "@/components/about/Bio6";
import Bio7 from "@/components/about/Bio7";
import Bio8 from "@/components/about/Bio8";
import Bio9 from "@/components/about/bio9";

import { allison } from "@/fonts/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <div className="flex flex-col items-center gap-10 p-10">
        <h2
          className={`${allison.className} gradient-gold bg-clip-text text-[100px] text-transparent`}
        >
          Martin Adam
        </h2>
        <Bio1 />
        <Bio2 />
        <Bio3 />
        <Bio4 />
        <Bio5 />
        <Bio6 />
        <Bio7 />
        <Bio8 />
        <Bio9 />
        <Bio10 />
        <Bio11 />
      </div>
    </main>
  );
}
