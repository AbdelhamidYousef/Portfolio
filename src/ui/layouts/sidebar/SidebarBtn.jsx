import Proptypes from "prop-types";
import Bars from "../../svgs/Bars";
import Close from "../../svgs/Close";

const SidebarBtn = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="lg:hidden fixed left-5 top-5 w-11 h-11 rounded-full bg-slate-700/80 z-sidebarBtn grid place-content-center hover:bg-slate-700/70 outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-300"
    >
      <span
        className={`${
          isSidebarOpen ? "hidden" : "block"
        } w-5 h-5 text-gray-50 relative -top-px`}
      >
        <Bars />
      </span>
      <span
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } w-5 h-5 text-gray-50 relative -top-[3px]`}
      >
        <Close />
      </span>
    </button>
  );
};

SidebarBtn.propTypes = {
  isSidebarOpen: Proptypes.bool.isRequired,
  toggleSidebar: Proptypes.func.isRequired,
};

export default SidebarBtn;
