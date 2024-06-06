import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { raleway } from "@/fonts/fonts";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/interface/ScrollToTop";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { config } from "@/lib/config";
import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body>{children}</body>
    </html>
  )
}

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
        <GoogleAnalytics gaId={config.gKey} />
      </html>
    </StyledEngineProvider>
  );
}
