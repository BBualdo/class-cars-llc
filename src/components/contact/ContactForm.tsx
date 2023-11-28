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
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { config } from "@/lib/config";
import { enqueueSnackbar } from "notistack";

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
  const formRef = useRef<any>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        formRef.current,
        config.publicKey,
      )
      .then((result) => {
        if (result.status === 200) {
          enqueueSnackbar("Wiadomość wysłana!", { variant: "success" });
        }
      })
      .catch((error) => {
        if (error) {
          enqueueSnackbar("Nie udało się wysłać wiadomości.", {
            variant: "error",
          });
        }
      });
  }

  return (
    <motion.section
      variants={fadeIn("right", 0.3, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-1 flex-col gap-10 text-black"
    >
      <h2 className="text-center uppercase text-black">Napisz do Nas</h2>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 font-bold"
        >
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
          <Button
            type="submit"
            className="w-full font-bold uppercase tracking-widest"
          >
            Wyślij
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};

export default ContactForm;
