import Image from "next/image";

import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex bg-black p-10 items-center">
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
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex gap-4">
          <Link
            href="https://www.facebook.com/ClassCars.LLC/"
            target="_blank"
            className="text-white cursor-pointer hover:text-gold transition-all duration-200"
          >
            <Facebook className="text-[40px]" />
          </Link>
          <Link
            href="https://www.instagram.com/classcars.lifestyle/"
            target="_blank"
            className="text-white cursor-pointer hover:text-gold transition-all duration-200"
          >
            <Instagram className="text-[40px]" />
          </Link>
          <Link
            href="tel:+971509021467"
            className="text-white cursor-pointer hover:text-gold transition-all duration-200"
          >
            <WhatsApp className="text-[40px]" />
          </Link>
        </div>
        <div>
          <p className="text-gray-500">© Copyright 2023 ClassCarsLLC</p>
          <p className="text-gray-500">
            Web Development By:{" "}
            <Link
              href="https://github.com/BBualdo"
              target="_blank"
              className="hover:text-gold transition-all duration-200"
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
