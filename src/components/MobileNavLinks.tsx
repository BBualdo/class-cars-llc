"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { links1, links2 } from "@/data/navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
      className="flex flex-col translate-y-[89px]"
    >
      {links1.concat(links2).map((link) => (
        <Link
          onClick={toggle}
          href={link.href}
          key={link.key}
          className={clsx(
            "w-full text-center py-2 transition-all font-bold duration-300",
            {
              "bg-gold hover:bg-gold": pathname === link.href,
              "bg-transparent hover:bg-gold/30": pathname !== link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </motion.div>
  );
};
