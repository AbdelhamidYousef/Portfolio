interface ProfilePicProps {
  imageUrl: string;
  /** Style variant */
  variant?: 'sidebar' | 'decorated';
  className?: string;
}

/**
 * Profile picture component with style variants
 *
 * @example
 * // Sidebar style (round, for navigation)
 * <ProfilePic imageUrl="/profile.jpg" variant="sidebar" />
 *
 * // Decorated style (square with rotated backgrounds, for about section)
 * <ProfilePic imageUrl="/profile.jpg" variant="decorated" />
 */
const ProfilePic = ({
  imageUrl,
  variant = 'sidebar',
  className = '',
}: ProfilePicProps) => {
  if (variant === 'decorated') {
    return (
      <div
        className={`relative flex justify-center lg:justify-start ${className}`}
      >
        <div className="relative">
          {/* Decorative backgrounds */}
          <div className="absolute -inset-4 bg-primary-500/10 dark:bg-primary-500/5 rounded-2xl -rotate-6" />
          <div className="absolute -inset-4 bg-primary-600/10 dark:bg-primary-600/5 rounded-2xl rotate-3" />

          {/* Image */}
          <img
            src={imageUrl}
            alt="Profile"
            className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    );
  }

  // Sidebar variant (default)
  return (
    <img
      src={imageUrl}
      alt="Profile Picture"
      data-title-bottom="Profile Picture"
      className={`w-40 h-40 rounded-full border-6 border-white/60 shadow-sm mb-10 dark:border-white/40 ${className}`}
    />
  );
};

export default ProfilePic;
