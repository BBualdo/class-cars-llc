import Image from "next/image";
import CompanyDetails from "./CompanyDetails";
import Conversation from "./Conversation";
import Menu from "./Menu";
import Socials from "./Socials";
import Credits from "./Credits";

const Footer = () => {
  return (
    <footer className="bg-black py-10 md:px-10">
      <div className="flex pb-5 xs:max-lg:flex-col xs:max-lg:items-center xs:max-lg:gap-10">
        <div className="lg:w-[200px]">
          <Image
            src="/logo-200x200.png"
            alt="ClassCars Logo"
            width={200}
            height={200}
            className="w-[100px]"
          />
        </div>
        <div className="flex w-full flex-1 justify-around xs:max-md:flex-col xs:max-md:items-center xs:max-md:gap-10 lg:justify-between">
          <div className="flex xs:max-lg:flex-col xs:max-lg:gap-10 xs:max-md:items-center lg:flex-1 lg:justify-around">
            <CompanyDetails />
            <Conversation />
          </div>
          <div className="flex xs:max-lg:flex-col xs:max-lg:gap-10 lg:flex-1 lg:justify-around">
            <Menu />
            <Socials />
          </div>
        </div>
      </div>
      <Credits />
    </footer>
  );
};

export default Footer;
