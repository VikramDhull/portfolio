import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import hero from "../../assets/hero.png";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
function Hero() {
  return (
    <div className="hero" id="home">
      <div>
        <p>Hello,</p>
        <p>
          I'm <b>Vikram Dhull</b>
        </p>
        <p>Full-stack developer</p>
        <div className="hero-action">
          <Button color="error" variant="outlined" startIcon={<DownloadIcon />}>
            Resume
          </Button>
          <AnchorLink href="#contact">
            <Button color="error" variant="outlined" startIcon={<MailIcon />}>
              Contact
            </Button>
          </AnchorLink>
        </div>
      </div>
      <img src={hero} alt="" />
    </div>
  );
}

export default Hero;
