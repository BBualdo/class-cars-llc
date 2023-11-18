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
        "border-y border-gold px-6 py-2 -skew-x-12 text-base hover:text-white transition-all font-bold duration-300 not-italic",
        { "bg-gold hover:bg-gold": pathname === link.href },
        { "bg-none hover:bg-gold/30 ": pathname !== link.href }
      )}
    >
      {link.name}
    </Link>
  ));

  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ClassCars Logo"
            width={100}
            height={100}
            className="hover:scale-110 transition-all duration-300"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center uppercase">{linkElements}</div>
    </nav>
  );
};

export default Navbar;
