import Image from "next/image";
import CompanyDetails from "./CompanyDetails";
import Conversation from "./Conversation";
import Menu from "./Menu";
import Socials from "./Socials";
import Credits from "./Credits";

const Footer = () => {
  return (
    <footer className="flex items-center bg-black p-10 xs:max-lg:flex-col">
      <div className="lg:w-[200px]">
        <Image
          src="/logo-200x200.png"
          alt="ClassCars Logo"
          width={200}
          height={200}
          className="w-[100px]"
        />
      </div>
      <div className="flex w-full justify-between xs:max-lg:flex-col">
        <CompanyDetails />
        <Conversation />
        <Menu />
        <Socials />
        <Credits />
      </div>
    </footer>
  );
};

export default Footer;
