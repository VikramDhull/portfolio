import "./Address.css";
import github from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import leetcode from "../../assets/leetcode.jpg";
import instagram from "../../assets/instagram.png";

const Address = () => {
  return (
    <div className="address">
      <h1>Reach Out to me!</h1>
      <p>imvikramdhull@gmail.com</p>
      <div className="address-social-links">
        <div className="address-social-link">
          <img src={github}></img>
          <a href="#">Github</a>
        </div>
        <div className="address-social-link">
          <img src={linkedin}></img>
          <a href="#">Linkedin</a>
        </div>
        <div className="address-social-link">
          <img src={leetcode}></img>
          <a href="#">Leetcode</a>
        </div>
        <div className="address-social-link">
          <img src={instagram}></img>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Address;
