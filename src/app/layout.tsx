import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Backdrop from "@/components/Backdrop";

import { raleway } from "@/fonts/fonts";
import { StyledEngineProvider } from "@mui/material";

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
    <StyledEngineProvider injectFirst>
      <html lang="en">
        <body className={`${raleway.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </StyledEngineProvider>
  );
}
