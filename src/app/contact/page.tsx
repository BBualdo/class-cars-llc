import Banner1 from "@/components/contact/Banner1";
import Banner2 from "@/components/contact/Banner2";
import ContactForm from "@/components/contact/ContactForm";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Banner1 />
      <div className="gradient-light-gold">
        <Banner2 />
        <ContactForm />
      </div>
    </main>
  );
}
