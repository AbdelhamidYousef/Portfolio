import { PropTypes } from "prop-types";
import { navLinks } from "../../../htmlContent/sidebar";
import { useEffect } from "react";

const Nav = ({ activeSection, toggleSidebar }) => {
  useEffect(() => {
    const callback = (e) => {
      if (e.key === "Escape") toggleSidebar();
    };

    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [toggleSidebar]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    toggleSidebar();
  };

  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`${
              activeSection === link ? "text-white" : "text-white/50"
            } hover:text-white/90 mb-4 text-lg font-semibold uppercase text-white`}
          >
            <a
              href={`#${link}`}
              onClick={(e) => scrollToSection(e, link)}
              className="focus:outline-none focus:border-b-2 focus:border-current focus:border-spacing-2"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  activeSection: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Nav;
