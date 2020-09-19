import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>
        Developped by <span className="name">Loucif RAKEM</span> in 2020
      </span>
      <div className="buttons">
        <a href="https://www.linkedin.com/in/lrakem/">
          <LinkedInIcon fontSize="large" color="primary" />
        </a>
        <a href="https://github.com/Loucif-RAKEM/morpion-app">
          <GitHubIcon fontSize="large" color="action" />
        </a>
        <a href="mailto:rakem.loucif@gmail.com">
          <MailIcon fontSize="large" color="secondary" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
