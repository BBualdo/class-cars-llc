import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { raleway } from "@/fonts/fonts";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/interface/ScrollToTop";

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
          <ScrollToTop />
          <Footer />
        </body>
      </html>
    </StyledEngineProvider>
  );
}
