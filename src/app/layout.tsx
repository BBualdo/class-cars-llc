import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { raleway } from "@/fonts/fonts";
import { StyledEngineProvider } from "@mui/material";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/interface/ScrollToTop";

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
