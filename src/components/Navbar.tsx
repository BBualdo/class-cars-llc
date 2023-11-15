"use client";

import Image from "next/image";
import Link from "next/link";

import { links } from "@/data/navbar-links";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkElements = links.map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx(
        "text-white text-base hover:text-gold hover:scale-110 hover:text-shadow-xl shadow-gold transition-all duration-300",
        { "text-gold": pathname === link.href }
      )}
    >
      {link.name}
    </Link>
  ));

  return (
    <nav className="flex items-center justify-between px-10 py-5 border-stone-900 border-b">
      <div className="flex items-center gap-10 uppercase">{linkElements}</div>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ClassCars Logo"
            width={100}
            height={100}
            className="hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
