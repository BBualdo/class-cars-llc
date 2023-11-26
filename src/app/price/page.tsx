import Banner1 from "@/components/price/Banner1";
import Conditions from "@/components/price/Conditions";

export default function Page() {
  return (
    <main className="gradient-gotham-mix flex min-h-screen flex-col overflow-hidden text-white">
      <Banner1 />
      <Conditions />
    </main>
  );
}
