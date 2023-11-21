"use client";

import Image from "next/image";
import Link from "next/link";

import { links1, links2 } from "@/data/navbar-links";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Place, WhatsApp } from "@mui/icons-material";

import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "@/utils/useDimensions";
import { MobileNavLinks } from "./MobileNavLinks";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const pathname = usePathname();

  const links1Elements = links1.map((link) => (
    <Link
      key={link.key}
      href={link.href}
      className={clsx(
        "py-2 text-center font-bold transition-all duration-300 md:w-[120px] lg:w-[180px]",
        {
          "gradient-gold text-black": pathname === link.href,

          "hover:gradient-gold_hover bg-transparent": pathname !== link.href,
        },
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
        "py-2 text-center font-bold transition-all duration-300 md:w-[120px] lg:w-[180px]",
        {
          "gradient-gold text-black": pathname === link.href,

          "hover:gradient-gold_hover bg-transparent": pathname !== link.href,
        },
      )}
    >
      <p className="skew-x-12">{link.name}</p>
    </Link>
  ));

  return (
    <nav className="relative flex flex-col items-center bg-black text-white">
      <div className="flex w-full flex-1 items-center justify-between border-b border-gold px-7 py-4 md:px-[10vw] md:py-5">
        {/* Mobile Navbar */}
        <div className="md:hidden">
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="gradient-gotham_hover absolute left-0 top-0 z-20 h-[440px] w-[50vw] rounded-b-lg"
              variants={sidebar}
            >
              <MobileNavLinks toggle={() => toggleOpen()} />
            </motion.div>

            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
        </div>
        {/* Mobile Navbar Logo */}
        <Link href="/" className="relative md:hidden">
          <Image
            src="/logo.png"
            alt="ClassCars Logo"
            width={90}
            height={90}
            className="w-[60px] transition-all duration-300 hover:scale-110"
            priority
          />
        </Link>
        <div className="flex flex-1 items-center gap-1 xs:max-md:hidden">
          <button className="flex items-center gap-1 text-gold transition-all duration-200 hover:text-white">
            <Place />
            Znajdź nas
          </button>
        </div>
        <div className="relative top-8 flex-1 border-b border-black xs:max-md:hidden"></div>
        <div className="flex flex-1 items-center justify-end gap-1 xs:max-md:hidden">
          <Link
            href="tel:+971509021467"
            className="flex items-center gap-1 text-gold transition-all duration-200 hover:text-white"
          >
            <WhatsApp />
            WhatsApp
          </Link>
        </div>
      </div>
      <div className="min-w-5/6 flex flex-1 -skew-x-12 items-center justify-between uppercase xs:max-md:hidden">
        <div className="flex flex-1 items-center">
          <div className="mr-14 flex flex-1 items-center border-b border-gold">
            {links1Elements}
          </div>
          <div className="ml-14 flex flex-1 items-center border-b border-gold">
            {links2Elements}
          </div>
        </div>
      </div>
      <Link href="/" className="absolute top-10 z-10 xs:max-md:hidden">
        <Image
          src="/logo.png"
          alt="Link to Menu, ClassCars Logo"
          width={90}
          height={90}
          className="relative right-1 transition-all duration-300 hover:scale-110"
          priority
        />
      </Link>
    </nav>
  );
};

export default Navbar;
