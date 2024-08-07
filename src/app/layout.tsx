import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { raleway } from "@/fonts/fonts";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/interface/ScrollToTop";
import React from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { config } from "@/lib/config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <html lang="pl-PL">
        <GoogleAnalytics gaId="G-HPSDS9J65W" />
        <GoogleTagManager gtmId="GTM-5KRGVNK6" />
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
