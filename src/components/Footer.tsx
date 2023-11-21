import Image from "next/image";

import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center bg-black p-10">
      <div className="flex-1">
        <Image
          src="/logo-200x200.png"
          alt="ClassCars Logo"
          width={200}
          height={200}
          className="w-[100px]"
        />
      </div>
      <div className="flex-1"></div>
      <div className="flex-1"></div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 gap-4">
          <Link
            aria-label="Like our Facebook page"
            href="https://www.facebook.com/ClassCars.LLC/"
            target="_blank"
            className="cursor-pointer text-white transition-all duration-200 hover:text-gold"
          >
            <Facebook className="text-[40px]" />
          </Link>
          <Link
            aria-label="Follow us on Instagram"
            href="https://www.instagram.com/classcars.lifestyle/"
            target="_blank"
            className="cursor-pointer text-white transition-all duration-200 hover:text-gold"
          >
            <Instagram className="text-[40px]" />
          </Link>
          <Link
            aria-label="Contact on WhatsApp"
            href="tel:+971509021467"
            className="cursor-pointer text-white transition-all duration-200 hover:text-gold"
          >
            <WhatsApp className="text-[40px]" />
          </Link>
        </div>
        <div>
          <p className="text-gray-400">© Copyright 2023 ClassCarsLLC</p>
          <p className="text-gray-400" id="credits" aria-hidden>
            Web Development By:{" "}
            <Link
              aria-labelledby="credits"
              href="https://github.com/BBualdo"
              target="_blank"
              className="transition-all duration-200 hover:text-gold"
            >
              BBualdo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
