import { Facebook, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[14px] text-gold">Znajdź Nas Na</p>
      <div className="flex flex-col gap-4">
        <Link
          aria-label="Like our Facebook page"
          href="https://www.facebook.com/ClassCars.LLC/"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 text-white transition-all duration-200 hover:text-gold"
        >
          <Facebook className="text-[40px]" />
          Facebook
        </Link>
        <Link
          aria-label="Follow us on Instagram"
          href="https://www.instagram.com/classcars.lifestyle/"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 text-white transition-all duration-200 hover:text-gold"
        >
          <Instagram className="text-[40px]" />
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default Socials;
