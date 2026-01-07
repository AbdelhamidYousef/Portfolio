import { scrollToSection } from '@/library/utils';

interface NavProps {
  navLinksContent: string[];
  closeSidebar?: () => void;
}

/**
 * Nav component for the sidebar menu
 *
 * @example
 * <Nav navLinksContent={['Home', 'About', 'Contact']} closeSidebar={closeSidebar} />
 */
export const Nav = ({ navLinksContent, closeSidebar }: NavProps) => (
  <nav>
    <ul>
      {navLinksContent.map((link) => (
        <li
          key={link}
          className="group mb-4 text-lg font-semibold uppercase text-white/70 hover:text-white/95"
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
            <span className="absolute -left-[5%] top-[115%] w-[110%] h-0.5 bg-current transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100 group-focus:scale-x-100" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
