import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { oswald } from "@/fonts/fonts";

export const metadata: Metadata = {
  title:
    "ClassCars | Premium Importer of Luxury and Classic Cars from Dubai to Europe",
  description:
    "Your trusted partner in Dubai for importing luxury and classic vehicles to Europe. Experience seamless car buying, selling, trading, and international shipping with our unparalleled European expertise now in the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
