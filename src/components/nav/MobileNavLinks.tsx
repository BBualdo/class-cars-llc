"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { links1, links2 } from "@/data/navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Place, WhatsApp } from "@mui/icons-material";

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
      className="flex flex-col translate-y-[89px] uppercase"
    >
      {links1.concat(links2).map((link) => (
        <Link
          onClick={toggle}
          href={link.href}
          key={link.key}
          className={clsx(
            "w-full px-7 py-2 transition-all font-bold duration-300",
            {
              "gradient-gold text-black": pathname === link.href,
              "bg-transparent hover:gradient-gold_hover":
                pathname !== link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
      <div className="flex flex-col ml-6 gap-4 mt-6">
        <button className="text-gold hover:text-white transition-all duration-200 flex items-center gap-1">
          <Place />
          Znajdź nas
        </button>
        <Link
          href="tel:+971509021467"
          className="text-gold hover:text-white transition-all duration-200 normal-case flex items-center gap-1"
        >
          <WhatsApp />
          WhatsApp
        </Link>
      </div>
    </motion.div>
  );
};
