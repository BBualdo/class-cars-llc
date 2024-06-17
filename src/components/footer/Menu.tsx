"use client";

import { links1, links2 } from "@/data/navbar-links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const fullName = (linkName: string) => {
    if (linkName === "Import") {
      return "Proces Importu";
    } else if (linkName === "Koszty") {
      return "Koszty Importu";
    } else {
      return linkName;
    }
  };

  const linksElements = links1.concat(links2).map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx("transition-all duration-200 hover:text-gold", {
        "text-gold": link.href + "/" === pathname,
        "text-white": link.href + "/" !== pathname,
      })}
    >
      {fullName(link.name)}
    </Link>
  ));

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <p className="text-[14px] text-gold">Menu</p>
      <div className="flex gap-1 font-bold text-white xs:max-lg:flex-col lg:flex-col lg:gap-2">
        <Link
          href="/"
          className={clsx("transition-all duration-200 hover:text-gold", {
            "text-gold": pathname === "/",
            "text-white": pathname !== "/",
          })}
        >
          Strona Główna
        </Link>
        {linksElements}
        <Link
          href={"/blog"}
          className={clsx("transition-all duration-200 hover:text-gold", {
            "text-gold": "/blog" + "/" === pathname,
            "text-white": "/blog" + "/" !== pathname,
          })}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Menu;
