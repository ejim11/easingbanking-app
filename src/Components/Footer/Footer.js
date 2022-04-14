import React from "react";

import Button from "../UI/Button";
import MediaSVG from "../UI/MediaSVG";
import icon from "../../Assets/logo2.svg";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__first-div"]}>
        <div className={classes["footer__logo-box"]}>
          <img src={icon} alt="logo svg" />
        </div>
        <div>
          <MediaSVG />
        </div>
      </div>
      <div className={classes["footer__second-div"]}>
        <nav>
          <ul>
            <li>
              <a href="http://google.com">About Us</a>
            </li>
            <li>
              <a href="http://google.com">Contact</a>
            </li>
            <li>
              <a href="http://google.com">Blog</a>
            </li>
            <li>
              <a href="http://google.com">Careers</a>
            </li>
            <li>
              <a href="http://google.com">Support</a>
            </li>
            <li>
              <a href="http://google.com">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes["footer__third-div"]}>
        <Button>Request Invite</Button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
