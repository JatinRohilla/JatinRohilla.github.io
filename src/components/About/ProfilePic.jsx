import profilePic from "../../assets/images/profile-pic.jpg";
import useHover from "../../hooks/use-hover";

const ProfilePic = () => {
  const [isHovering] = useHover();

  return (
    <div
      className={`profile-pic-wrapper ${
        !isHovering && "before:mix-blend-screen"
      }`}
    >
      <div>
        <img
          src={profilePic}
          alt="profile picture"
          className="block rounded-md aspect-square"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
