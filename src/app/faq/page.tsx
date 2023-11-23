import Accordions from "@/components/faq/Accordions";
import Banner1 from "@/components/faq/Banner1";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden text-black">
      <Banner1 />
      <Accordions />
    </main>
  );
}
