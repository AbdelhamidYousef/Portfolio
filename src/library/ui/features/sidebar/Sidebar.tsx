import { useState } from 'react';
import { useKeydown } from '@/library/hooks';
import { SidebarToggleButton } from './SidebarToggleButton';
import { SidebarContent } from './SidebarContent';
import type { IconListItem } from '@/library/ui/features/lists';

interface SidebarProps {
  content: {
    profilePicUrl: string;
    navLinks: string[];
    socials: IconListItem[];
  };
}

/**
 * Sidebar component for the header and menu
 *
 * @example
 * <Sidebar
 *  content={{
 *    profilePicUrl: 'https://example.com/profile.jpg',
 *    navLinks: ['Home', 'About', 'Contact'],
 *    socials: [
 *      { id: 1, title: 'Linkedin', iconName: 'linkedin', link: 'https://www.linkedin.com/in/your-profile' },
 *      { id: 2, title: 'GitHub', iconName: 'github', link: 'https://github.com/your-username' },
 *      { id: 3, title: 'Email', iconName: 'email', link: 'mailto:your@email.com' }
 *    ]
 *  }} />
 */
export const Sidebar = ({ content }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useKeydown('Escape', closeSidebar);

  return (
    <aside>
      <SidebarToggleButton
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <SidebarContent
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        content={content}
      />
    </aside>
  );
};
