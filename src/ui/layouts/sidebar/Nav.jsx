import { PropTypes } from "prop-types";
import { navLinks } from "../../../htmlContent/sidebar";
import { useActiveSection } from "../../../context/ActiveSection";

const Nav = ({ closeSidebar }) => {
  const { activeSection } = useActiveSection();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`${
              activeSection === link ? "!text-white" : ""
            } mb-4 text-lg font-semibold uppercase text-white/70 hover:text-white/95`}
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
  closeSidebar: PropTypes.func.isRequired,
};

export default Nav;

// ${
//   activeSection === link ? "text-white" : "text-white/50"
// }
