import PropTypes from 'prop-types';
import { useState } from 'react';
import { useKeydown } from '../../../../../hooks/useKeydown';
import SidebarToggleButton from './SidebarToggleButton';
import SidebarContent from './SidebarContent';

/**
 * Sidebar component for the header and menu
 *
 * @param {Object} props - The component props
 * @param {Object} props.content - The content of the sidebar
 * @param {string} props.content.profilePicUrl - The URL of the profile picture
 * @param {Array} props.content.navLinks - The navigation links
 * @param {Array} props.content.socials - The social links
 * @param {string} props.content.socials.id - The id of the social link
 * @param {string} props.content.socials.title - The title of the social link
 * @param {string} props.content.socials.iconName - The icon name of the social link
 * @param {string} props.content.socials.link - The link of the social link
 *
 * @returns {React.ReactElement} The Sidebar component
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
const Sidebar = ({ content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };
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

Sidebar.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Sidebar;
