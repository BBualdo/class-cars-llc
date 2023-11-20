import Banner1 from "@/components/home/Banner1";
import Banner2 from "@/components/home/Banner2";
import Banner3 from "@/components/home/Banner3";
import Banner4 from "@/components/home/Banner4";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4 />
    </main>
  );
}
