"use client";

import Banner1 from "@/components/contact/Banner1";
import Banner2 from "@/components/contact/Banner2";
import ContactForm from "@/components/contact/ContactForm";
import GoogleAPI from "@/components/contact/GoogleAPI";
import { SnackbarProvider } from "notistack";

export default function Page() {
  return (
    <SnackbarProvider>
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
    </SnackbarProvider>
  );
}
