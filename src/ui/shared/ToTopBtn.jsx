import UpArrow from "../svgs/UpArrow";
import { useActiveSection } from "../../context/ActiveSection";

const ToTopBtn = () => {
  const { activeSection } = useActiveSection();
  const hidden =
    !activeSection || activeSection === "about" || activeSection === "contact";

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      } fixed right-5 bottom-5 sm:right-10 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 z-10 grid place-content-center hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all duration-300`}
    >
      <span className="w-5 h-5 sm:w-6 sm:h-6 text-white">
        <UpArrow />
      </span>
    </button>
  );
};

export default ToTopBtn;
