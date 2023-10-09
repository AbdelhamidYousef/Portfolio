import { PropTypes } from "prop-types";
import Bars from "../../svgs/Bars";
import Close from "../../svgs/Close";

const SidebarToggleBtn = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="lg:hidden fixed left-5 top-5 w-12 h-12 rounded-full bg-slate-700/60 z-30 grid place-content-center hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-slate-700  transition-all duration-300"
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
        } w-5 h-5 text-gray-50 relative -top-0.5`}
      >
        <Close />
      </span>
    </button>
  );
};

SidebarToggleBtn.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default SidebarToggleBtn;
