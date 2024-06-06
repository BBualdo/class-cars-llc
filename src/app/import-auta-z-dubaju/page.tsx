import Banner1 from "@/components/import/Banner1";
import Process from "@/components/import/Process";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5KRGVNK6" />
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Import Auta z Dubaju - Bezpieczny i Szybki Proces | ClassCars",
  description:
    "Specjalizujemy się w imporcie aut z Dubaju do Polski. Zapewniamy bezpieczny i szybki proces, kompleksową obsługę oraz atrakcyjne ceny. Zrealizuj swoje marzenie o luksusowym samochodzie!",
  keywords: ["Import Auta z Dubaju"],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <Process />
    </main>
  );
}
