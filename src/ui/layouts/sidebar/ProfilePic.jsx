import profilePic from "../../../assets/images/profile.webp";

const ProfilePic = () => {
  return (
    <a
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      title="Profile Picture"
      className={` cursor-pointer mb-8 `}
    >
      <img
        src={profilePic}
        alt="Profile Picture"
        data-title-bottom="Profile Picture"
        className="w-40 h-40 rounded-full border-6 border-white/60 shadow"
      />
    </a>
  );
};

export default ProfilePic;
