import { scrollToSection } from '@/library/utils';
import { useActiveSection } from '@/library/contexts/activeSection';

interface NavProps {
  navLinksContent: readonly string[];
  closeSidebar?: () => void;
}

/**
 * Nav component for the sidebar menu
 * Highlights the currently active section based on scroll position
 *
 * @example
 * <Nav navLinksContent={['Home', 'About', 'Contact']} closeSidebar={closeSidebar} />
 */
export const Nav = ({ navLinksContent, closeSidebar }: NavProps) => {
  const { activeSection } = useActiveSection();

  return (
    <nav>
      <ul>
        {navLinksContent.map((link) => {
          const isActive = link.toLowerCase() === activeSection?.toLowerCase();

          return (
            <li
              key={link}
              className={`
                group mb-4 text-lg font-semibold uppercase transition-colors duration-200
                ${isActive ? 'text-white' : 'text-white/70 hover:text-white/95'}
              `}
            >
              <a
                href={`#${link}`}
                onClick={(e) => {
                  scrollToSection(e, link);
                  closeSidebar?.();
                }}
                className="relative outline-hidden group"
              >
                {link}
                <span
                  className={`
                    absolute -left-[5%] top-[115%] w-[110%] h-0.5 bg-current transition-all duration-300 origin-left
                    scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
