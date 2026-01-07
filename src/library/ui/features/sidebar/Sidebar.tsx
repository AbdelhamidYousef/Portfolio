import { useState } from 'react';
import { useKeydown } from '@/library/hooks/useKeydown';
import SidebarToggleButton from './SidebarToggleButton';
import { SidebarContent } from './SidebarContent';

interface SocialItem {
  id: string | number;
  title: string;
  iconName: string;
  link: string;
}

interface SidebarProps {
  content: {
    profilePicUrl: string;
    navLinks: string[];
    socials: SocialItem[];
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
  // State for the sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Function to close the sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  // Use the useKeydown hook to close the sidebar when the Escape key is pressed
  useKeydown('Escape', closeSidebar);

  // Return the sidebar component
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
