import "./ProfileCard.css";
import about from "../../assets/about-photo.jpeg";

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
          <a
            href="https://www.instagram.com/vikramdhull.jordan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a href="#">
            <Email />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/vikramdhull/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="profile-button">Linkedin Profile</button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
