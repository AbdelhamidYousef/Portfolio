import { PropTypes } from 'prop-types';
import { useActiveSection } from '../../../../context/ActiveSection';

/**
 * Function to scroll to a section
 *
 * @param {Event} e - The event object
 * @param {string} sectionId - The id of the section to scroll to
 *
 * @returns {void}
 *
 * @example
 * scrollToSection(e, 'about');
 */
const scrollToSection = (e, sectionId) => {
  e.preventDefault();

  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Nav component for the header menu
 *
 * @param {Object} props - The component props
 * @param {Array} props.data - The data for the nav
 * @param {Function} props.closeSidebar - The function to close the sidebar
 *
 * @returns {React.ReactElement} The Nav component
 *
 * @example
 * <Nav
 *  navLinksContent={navLinks}
 *  closeSidebar={closeSidebar}
 * />
 */
const Nav = ({ navLinksContent, closeSidebar }) => {
  const { activeSection } = useActiveSection();

  return (
    <nav>
      <ul>
        {navLinksContent.map((link, i) => (
          <li
            key={i}
            className={`
              ${activeSection === link ? 'text-white' : 'text-white/70'}
              group mb-4 text-lg font-semibold uppercase hover:text-white/95
            `}
          >
            <a
              href={`#${link}`}
              onClick={(e) => {
                scrollToSection(e, link);
                typeof closeSidebar === 'function' && closeSidebar();
              }}
              className="relative outline-none group"
            >
              {link}
              <span className="absolute -left-[5%] top-[115%] w-[110%] h-0.5 bg-current transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  closeSidebar: PropTypes.func,
  navLinksContent: PropTypes.array.isRequired,
};

export default Nav;
