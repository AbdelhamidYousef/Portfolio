import Proptypes from 'prop-types';
import FullWidthOverlay from '../../simple-components/FullWidthOverlay';
import ProfilePic from '../../simple-components/ProfilePic';
import Nav from '../Nav';
import Socials from '../../footer/socials/Socials';

/**
 * SidebarContent component for the sidebar
 *
 * @param {Object} props - The component props
 * @param {boolean} props.isSidebarOpen - Whether the sidebar is open
 * @param {Function} props.closeSidebar - The function to close the sidebar
 * @param {Object} props.content - The content of the sidebar
 * @param {string} props.content.profilePicUrl - The URL of the profile picture
 * @param {Array} props.content.navLinks - The navigation links
 * @param {Array} props.content.socials - The social links
 * @param {string} props.content.socials.id - The id of the social link
 * @param {string} props.content.socials.title - The title of the social link
 * @param {string} props.content.socials.iconName - The icon name of the social link
 * @param {string} props.content.socials.link - The link of the social link
 *
 * @returns {React.ReactElement} The SidebarContent component
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
const SidebarContent = ({ isSidebarOpen, closeSidebar, content }) => {
  return (
    <div className="fixed left-0 top-0 h-screen z-sidebarContainer lg:opacity-100 lg:visible">
      <FullWidthOverlay isOpen={isSidebarOpen} onClick={closeSidebar} />

      {/* Sidebar Content */}
      <div
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-screen sm:w-96 bg-primary-600 transition-all duration-300 lg:translate-x-0 dark:bg-gray-900 dark:border-r dark:border-gray-800 h-full grid place-content-center text-center lg:animate-bounceRight
        `}
      >
        <ProfilePic imageUrl={content.profilePicUrl} />

        <Nav navLinksContent={content.navLinks} closeSidebar={closeSidebar} />

        <Socials
          containerClasses="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-5"
          itemClasses="w-7 h-7 text-gray-50 cursor-help"
          socialsContent={content.socials}
        />
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  isSidebarOpen: Proptypes.bool.isRequired,
  closeSidebar: Proptypes.func.isRequired,
  content: Proptypes.object.isRequired,
};

export default SidebarContent;
