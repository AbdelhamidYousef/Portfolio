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
              activeSection === link ? "text-white" : "text-white/70"
            } group mb-4 text-lg font-semibold uppercase hover:text-white/95`}
          >
            <a
              href={`#${link}`}
              onClick={(e) => scrollToSection(e, link)}
              className="relative outline-none"
            >
              {link}
              <span className="absolute -left-[5%] top-[115%] w-[110%] h-0.5 bg-current transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100 "></span>
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
