import { Overlay, ProfilePic } from '@/library/ui/shared';
import { IconList, type IconListItem } from '@/library/ui/features/lists';
import Nav from './Nav';

interface SidebarContentProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  content: {
    profilePicUrl: string;
    navLinks: string[];
    socials: IconListItem[];
  };
}

/**
 * SidebarContent component for the sidebar
 *
 * @example
 * <SidebarContent
 *  isSidebarOpen={state}
 *  closeSidebar={handleCloseSidebar}
 *  content={{
 *    profilePicUrl: 'https://example.com/profile.jpg',
 *    navLinks: ['Home', 'About', 'Contact'],
 *    socials: [
 *      { id: 1, title: 'Linkedin', iconName: 'linkedin', link: 'https://www.linkedin.com/in/your-profile' },
 *      { id: 2, title: 'GitHub', iconName: 'github', link: 'https://github.com/your-username' },
 *      { id: 3, title: 'Email', iconName: 'email', link: 'mailto:your@email.com' }
 *    ]
 *  }}
 * />
 */
export const SidebarContent = ({
  isSidebarOpen,
  closeSidebar,
  content,
}: SidebarContentProps) => {
  return (
    <div
      className={`
        ${isSidebarOpen ? '' : 'opacity-0 invisible'}
        fixed left-0 top-0 h-dvh z-sidebar-container lg:opacity-100 lg:visible `}
    >
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />

      {/* Sidebar Content */}
      <div
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} graysca
          w-72 h-full bg-primary-600 transition-all duration-300 lg:translate-x-0 dark:bg-gray-900 dark:border-r dark:border-gray-800
        `}
      >
        <div className="h-full grid place-content-center text-center lg:animate-overshootRight-5">
          <ProfilePic imageUrl={content.profilePicUrl} />

          <Nav navLinksContent={content.navLinks} closeSidebar={closeSidebar} />

          <IconList
            content={content.socials}
            containerClasses="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-6"
            iconClasses="text-slate-100 fill-current w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};
