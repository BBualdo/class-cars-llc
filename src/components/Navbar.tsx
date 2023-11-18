"use client";

import Image from "next/image";
import Link from "next/link";

import { links1, links2 } from "@/data/navbar-links";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Place, WhatsApp } from "@mui/icons-material";

const Navbar = () => {
  const pathname = usePathname();

  const links1Elements = links1.map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx(
        "hover:text-gold underline-offset-8 hover:underline transition-all font-bold duration-300",
        { "text-gold": pathname === link.href },
        { "text-white": pathname !== link.href }
      )}
    >
      {link.name}
    </Link>
  ));

  const links2Elements = links2.map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx(
        "hover:text-gold underline-offset-8 hover:underline transition-all font-bold duration-300",
        { "text-gold": pathname === link.href },
        { "text-white": pathname !== link.href }
      )}
    >
      {link.name}
    </Link>
  ));

  return (
    <nav className="flex flex-col items-center">
      <div className="flex-1 flex items-center justify-between w-full px-[20vw] py-10 border-b border-gold">
        <button className="text-gold hover:text-white transition-all duration-200 flex items-center gap-1">
          <Place />
          Znajdź nas
        </button>
        <Link
          href="tel:+971509021467"
          className="text-gold hover:text-white transition-all duration-200 flex items-center gap-1"
        >
          <WhatsApp />
          WhatsApp
        </Link>
      </div>
      <div className="flex-1 flex items-center uppercase w-4/6 py-2 border-b border-gold/50">
        <div className="flex flex-1 items-center">
          <div className="flex-1 flex sm:flex-col sm:max-xl:gap-4 xl:flex-row items-center justify-between pr-10">
            {links1Elements}
          </div>
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="ClassCars Logo"
                width={90}
                height={90}
                className="hover:scale-110 transition-all duration-300"
                priority
              />
            </Link>
          </div>
          <div className="flex-1 flex sm:flex-col sm:max-xl:gap-4 xl:flex-row items-center justify-between pl-10">
            {links2Elements}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
