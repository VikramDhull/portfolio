import "./ProfileCard.css";
import about from "../../assets/about-photo.png";

import { Email, Instagram } from "@mui/icons-material";

const ProfileCard = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <img src={about} alt="" className="profile-avatar" />
        <h2 className="profile-name">Vikram Dhull</h2>
        <p className="profile-title">Full-Stack Developer</p>
        <p className="profile-title">Specializing in MERN Stack</p>
        <p className="profile-location">Bhiwani, India</p>
        <div className="profile-icons">
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Email />
          </a>
        </div>

        <button className="profile-button">Linkedin Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
