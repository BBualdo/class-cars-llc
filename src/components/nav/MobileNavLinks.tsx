"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { links1, links2 } from "@/data/navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Facebook, Instagram, Telegram, WhatsApp } from "@mui/icons-material";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavLinks = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={variants}
      className="flex translate-y-[89px] flex-col uppercase"
    >
      {links1.concat(links2).map((link) => (
        <Link
          onClick={toggle}
          href={link.href}
          key={link.key}
          className={clsx(
            "w-full px-7 py-2 font-bold transition-all duration-300",
            {
              "gradient-gold text-black": pathname === link.href + "/",
              "hover:gradient-gold_hover bg-transparent":
                pathname !== link.href + "/",
            },
          )}
        >
          {link.name}
        </Link>
      ))}
      <div className="ml-6 mt-6 flex flex-col gap-4">
        <a
          href="https://t.me/+wrcTDAu0w6oxMTI8"
          target="_blank"
          className="flex items-center gap-1 normal-case text-gold transition-all duration-200 hover:text-white"
        >
          <Telegram />
          Telegram
        </a>
        <a
          href="tel:+971509021467"
          className="flex items-center gap-1 normal-case text-gold transition-all duration-200 hover:text-white"
        >
          <WhatsApp />
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/ClassCars.LLC/"
          target="_blank"
          className="flex items-center gap-1 normal-case text-gold transition-all duration-200 hover:text-white"
        >
          <Facebook />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/classcars.lifestyle/"
          className="flex items-center gap-1 normal-case text-gold transition-all duration-200 hover:text-white"
        >
          <Instagram />
          Instagram
        </a>
      </div>
    </motion.div>
  );
};
