import PropTypes from 'prop-types';

/**
 * ProfilePic component for the sidebar
 *
 * @param {Object} props - The component props
 * @param {string} props.imageUrl - The URL of the profile picture
 *
 * @returns {React.ReactElement} The ProfilePic component
 *
 * @example
 * <ProfilePic imageUrl="https://example.com/profile.jpg" />
 * <ProfilePic imageUrl="https://example.com/profile.jpg" title="Profile Picture" />
 */
const ProfilePic = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Profile Picture"
      data-title-bottom="Profile Picture"
      className="w-40 h-40 rounded-full border-6 border-white/60 shadow-sm mb-10 dark:border-white/40"
    />
  );
};

ProfilePic.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProfilePic;
