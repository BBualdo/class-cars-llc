import Banner1 from "@/components/contact/Banner1";
import ContactForm from "@/components/contact/ContactForm";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <ContactForm />
    </main>
  );
}
