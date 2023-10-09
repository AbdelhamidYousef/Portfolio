import { PropTypes } from "prop-types";
import { navLinks } from "../../../htmlContent/sidebar";

const Nav = ({ activeSection }) => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`${
              activeSection === link ? "text-white" : "text-white/50"
            } hover:text-white mb-4 text-lg font-semibold uppercase text-white`}
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
};

export default Nav;
