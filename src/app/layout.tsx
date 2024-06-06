import { config } from "@/lib/config";
import { GoogleTagManager } from '@next/third-parties/google';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { raleway } from '@/styles/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-5KRGVNK6" />
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
