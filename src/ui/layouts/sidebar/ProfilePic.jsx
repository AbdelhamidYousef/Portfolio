import { profilePic } from "../../../assets";

const ProfilePic = () => {
  return (
    <img
      src={profilePic}
      alt="Profile Picture"
      data-title-bottom="Profile Picture"
      className="w-40 h-40 rounded-full border-6 border-white/60 shadow mb-10"
    />
  );
};

export default ProfilePic;
