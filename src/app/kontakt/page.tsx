import Banner1 from "@/components/contact/Banner1";
import Banner2 from "@/components/contact/Banner2";
import ContactForm from "@/components/contact/ContactForm";
import GoogleAPI from "@/components/contact/GoogleAPI";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kontakt - Import Auta z Emiratów Arabskich | ClassCars",
  description:
    "Skontaktuj się z ClassCars - ekspertami w imporcie auta z Emiratów Arabskich. Jesteśmy tu, aby odpowiedzieć na Twoje pytania i pomóc w realizacji Twojego wymarzonego samochodu.",
  keywords: ["Import Auta z Emiratów Arabskich"],
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://classcarsllc.com/kontakt"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Banner1 />
        <div className="gradient-light-gold">
          <Banner2 />
          <div className="flex gap-10 xs:p-4 xs:max-md:flex-col md:p-20">
            <ContactForm />
            <GoogleAPI />
          </div>
        </div>
      </main>
    </>
  );
}
