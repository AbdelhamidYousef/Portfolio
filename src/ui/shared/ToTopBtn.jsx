import { useActiveSection } from "../../context/ActiveSection";

const ToTopBtn = () => {
  const { activeSection } = useActiveSection();
  const hidden = !activeSection || activeSection === "about";

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      } fixed right-5 bottom-5 sm:right-10 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 z-toTopBtn grid place-content-center hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-950 transition-all duration-300`}
    >
      <span className="w-5 h-5 sm:w-6 sm:h-6 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          fill="currentColor"
        >
          <path d="m25.989 46.22 3.661-32.985 4.925 2.88c1.5.874 3.07-1.013 1.943-2.33L25.169.542a1.539 1.539 0 0 0-2.335 0l-11.35 13.243c-1.133 1.317.443 3.203 1.937 2.33l4.931-2.874 3.657 32.979c.256 2.366 3.724 2.367 3.98 0z"></path>{" "}
        </svg>
      </span>
    </button>
  );
};

export default ToTopBtn;
