import "./Contact.css";
import github from "../../assets/github.jpg";
import linkedin from "../../assets/linkedin.png";
import leetcode from "../../assets/leetcode.jpg";
import instagram from "../../assets/instagram.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <h1 className="contact-main-heading">Contact</h1>
        <div className="contact-body">
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

          <div className="contact-form">
            <div className="form-main">
              <h1>
                Ready To Take Your Digital Presence <br /> To The Next Level?
              </h1>

              <form>
                <div className="form">
                  <div className="name-row">
                    <TextField
                      className="custom-textfield"
                      label="First Name"
                      variant="outlined"
                    />
                    <TextField
                      className="custom-textfield"
                      label="Last Name"
                      variant="outlined"
                    />
                  </div>

                  <TextField
                    label="Email"
                    variant="outlined"
                    className="custom-textfield"
                  />
                  <TextField
                    label="What's on your mind"
                    variant="outlined"
                    multiline
                    rows={6}
                    className="custom-textfield"
                  />
                  <Button
                    color="error"
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
