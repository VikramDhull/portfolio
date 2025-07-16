import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-main">
      <h1>
        Ready To Take Your <br />
        Digital Presence <br /> To The Next Level?
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
          <Button color="error" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
