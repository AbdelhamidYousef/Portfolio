interface ProfilePicProps {
  imageUrl: string;
}

/**
 * ProfilePic component for the sidebar
 *
 * @example
 * <ProfilePic imageUrl="https://example.com/profile.jpg" />
 */
const ProfilePic = ({ imageUrl }: ProfilePicProps) => {
  return (
    <img
      src={imageUrl}
      alt="Profile Picture"
      data-title-bottom="Profile Picture"
      className="w-40 h-40 rounded-full border-6 border-white/60 shadow-sm mb-10 dark:border-white/40"
    />
  );
};

export default ProfilePic;
