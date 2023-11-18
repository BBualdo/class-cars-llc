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
        "w-[180px] text-center py-2 transition-all font-bold duration-300",
        { "bg-gold hover:bg-gold": pathname === link.href },
        { "bg-transparent hover:bg-gold/30": pathname !== link.href }
      )}
    >
      <p className="skew-x-12">{link.name}</p>
    </Link>
  ));

  const links2Elements = links2.map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx(
        "w-[180px] text-center py-2 transition-all font-bold duration-300",
        { "bg-gold hover:bg-gold": pathname === link.href },
        { "bg-transparent hover:bg-gold/30": pathname !== link.href }
      )}
    >
      <p className="skew-x-12">{link.name}</p>
    </Link>
  ));

  return (
    <nav className="relative flex flex-col items-center">
      <div className="flex-1 flex items-center justify-between w-full px-[10vw] py-5 border-b border-gold">
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
      <div className="flex-1 flex -skew-x-12 items-center justify-between uppercase min-w-5/6 border-b border-gold/50">
        <div className="flex flex-1 items-center">
          <div className="flex-1 flex items-center pr-20">{links1Elements}</div>
          <div className="flex-1"></div>
          <div className="flex-1 flex items-center pl-20">{links2Elements}</div>
        </div>
      </div>
      <Link href="/" className="relative -top-16 backdrop-blur-sm">
        <Image
          src="/logo.png"
          alt="ClassCars Logo"
          width={90}
          height={90}
          className="hover:scale-110 transition-all duration-300 relative right-1"
          priority
        />
      </Link>
    </nav>
  );
};

export default Navbar;
