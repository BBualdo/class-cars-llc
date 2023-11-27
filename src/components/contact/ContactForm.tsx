"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcomponents/ui/form";
import { Input } from "@/shadcomponents/ui/input";
import { Button } from "@/shadcomponents/ui/button";
import { Textarea } from "@/shadcomponents/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Imię i nazwisko musi mieć co najmniej 6 znaków." }),
  email: z.string().email({ message: "Nieprawidłowy e-mail." }),
  message: z
    .string()
    .min(10, { message: "Wiadomość jest za krótka." })
    .max(2000, { message: "Wiadomość jest za długa." }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="p-20 text-black">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Imię i Nazwisko</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="Jan Kowalski" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Email</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="jan.kowalski@gmail.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Wiadomość</FormLabel>
                  <FormMessage />
                </div>

                <FormControl>
                  <Textarea placeholder="Jak możemy pomóc?" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Wyślij</Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
