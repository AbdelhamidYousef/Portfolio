import Proptypes from "prop-types";
import Socials from "../../shared/Socials";
import Nav from "./Nav";
import ProfilePic from "./ProfilePic";

const SidebarContent = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "" : "opacity-0 invisible"
      } fixed left-0 top-0 h-screen z-sidebarContainer lg:opacity-100 lg:visible`}
    >
      <div
        className={`${
          isSidebarOpen ? "w-screen" : "w-0"
        } absolute inset-0 bg-gray-900/30 lg:hidden`}
        onClick={closeSidebar}
      ></div>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-60 lg:w-72 h-full bg-primary-600 transition-all duration-300 lg:translate-x-0`}
      >
        <div className="h-full grid place-content-center text-center lg:animate-bounceRight">
          <ProfilePic />
          <Nav closeSidebar={closeSidebar} />
          <Socials
            containerClasses="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-5"
            elementClasses="w-7 h-7 text-gray-50 hover:text-primary-200 cursor-help focus-within:drop-shadow-[0_0_10px_#fff]"
          />
        </div>
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  isSidebarOpen: Proptypes.bool.isRequired,
  closeSidebar: Proptypes.func.isRequired,
};

export default SidebarContent;
