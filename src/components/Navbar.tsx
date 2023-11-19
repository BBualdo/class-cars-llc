"use client";

import Image from "next/image";
import Link from "next/link";

import { links1, links2 } from "@/data/navbar-links";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Place, WhatsApp, Menu } from "@mui/icons-material";

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
        "md:w-[120px] lg:w-[180px] text-center py-2 transition-all font-bold duration-300",
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
        "md:w-[120px] lg:w-[180px] text-center py-2 transition-all font-bold duration-300",
        { "bg-gold hover:bg-gold": pathname === link.href },
        { "bg-transparent hover:bg-gold/30": pathname !== link.href }
      )}
    >
      <p className="skew-x-12">{link.name}</p>
    </Link>
  ));

  return (
    <nav className="relative flex flex-col items-center">
      <div className="flex-1 flex items-center justify-between w-full px-7 md:px-[10vw] py-4 md:py-5 border-b border-gold">
        {/* Mobile Navbar */}
        <div className="md:hidden">
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="absolute top-0 left-0 h-[440px] rounded-b-lg w-[50vw] bg-darkGrey z-1"
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
            width={60}
            height={60}
            className="hover:scale-110 transition-all duration-300"
            priority
          />
        </Link>
        <button className="xs:max-md:hidden text-gold hover:text-white transition-all duration-200 flex items-center gap-1">
          <Place />
          Znajdź nas
        </button>
        <div className="xs:max-md:hidden flex-1 relative top-8 border-b border-black"></div>
        <Link
          href="tel:+971509021467"
          className="xs:max-md:hidden text-gold hover:text-white transition-all duration-200 flex items-center gap-1"
        >
          <WhatsApp />
          WhatsApp
        </Link>
      </div>
      <div className="xs:max-md:hidden flex-1 flex -skew-x-12 items-center justify-between uppercase min-w-5/6">
        <div className="flex flex-1 items-center">
          <div className="flex-1 flex items-center mr-14 border-b-2 border-gold/50">
            {links1Elements}
          </div>
          <div className="flex-1 flex items-center ml-14 border-b-2 border-gold/50">
            {links2Elements}
          </div>
        </div>
      </div>
      <Link href="/" className="absolute xs:max-md:hidden top-10">
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
