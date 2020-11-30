import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>
        2020, Developed with{" "}
        <FavoriteIcon fontSize="small" style={{ color: "#c93434" }} /> by{" "}
        <span className="name">Loucif RAKEM</span>
      </span>
      <div className="buttons">
        <a href="https://www.linkedin.com/in/lrakem/">
          <LinkedInIcon className="footer_icon" />
        </a>
        <a href="https://github.com/Loucif-RAKEM/morpion-app">
          <GitHubIcon className="footer_icon" />
        </a>
        <a href="mailto:rakem.loucif@gmail.com">
          <MailIcon className="footer_icon" />
        </a>
        <a href="https://icons8.com">
          <img
            src={process.env.PUBLIC_URL + "/icons8-icons8-48.png"}
            alt="icons8 logo"
            style={{ height: "30px", width: "30px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
