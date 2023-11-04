import RubberChars from "../../shared/RubberChars";
import Socials from "../../shared/Socials";
import Download from "./Download";

const Footer = () => {
  return (
    <footer className="lg:ml-72 px-5 lg:px-10 py-10 flex flex-col items-center gap-y-6 xs:gap-y-7 xl:flex-row xl:justify-between relative z-footer bg-gray-50 dark:bg-gray-900">
      <h2 className="font-bold text-3xl text-slate-600 hover:text-primary-600 uppercase transition-all duration-300 dark:text-gray-50">
        <RubberChars>Get In Touch</RubberChars>
      </h2>

      <Socials
        containerClasses="flex gap-5 xl:gap-14"
        elementClasses="w-6 h-6 md:w-8 md:h-8 text-slate-600 hover:text-primary-600 transition-all duration-300 focus-within:border-b-2 focus-within:border-slate-600 focus-within:border-spacing-2 dark:text-gray-50 dark:hover:text-primary-400 focus-within:focus:border-slate-400"
      />

      <Download />
    </footer>
  );
};

export default Footer;
