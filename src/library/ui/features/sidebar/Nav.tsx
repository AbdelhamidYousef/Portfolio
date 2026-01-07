/**
 * Function to scroll to a section
 */
const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();

  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });
};

interface NavProps {
  navLinksContent: string[];
  closeSidebar?: () => void;
}

/**
 * Nav component for the header menu
 *
 * @example
 * <Nav
 *  navLinksContent={['Home', 'About', 'Contact']}
 *  closeSidebar={closeSidebar}
 * />
 */
const Nav = ({ navLinksContent, closeSidebar }: NavProps) => {
  return (
    <nav>
      <ul>
        {navLinksContent.map((link, i) => (
          <li
            key={i}
            className="group mb-4 text-lg font-semibold uppercase text-white/70 hover:text-white/95"
          >
            <a
              href={`#${link}`}
              onClick={(e) => {
                scrollToSection(e, link);
                typeof closeSidebar === 'function' && closeSidebar();
              }}
              className="relative outline-hidden group"
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

export default Nav;
