import React, { useContext, useState } from "react";

import icon from "../../Assets/logo.svg";
import classes from "./Header.module.scss";

import Button from "../UI/Button";

import headContext from "../../store/head-context";
import icons from "../../Assets/sprite.svg";

const Header = () => {
  const ctx = useContext(headContext);

  const [menuDisplay, setMenuDisplay] = useState(false);

  const onToggleMenuHandler = () => {
    setMenuDisplay((prevState) => !prevState);
  };

  return (
    <div className={classes.head}>
      <header
        className={`${classes.header} ${ctx.isSticky ? classes.sticky : ""}`}
      >
        <div className={classes["header__logo-box"]}>
          <img src={icon} alt="logo svg" />
        </div>
        <nav
          className={`${
            menuDisplay ? classes["header-nav"] : classes.navHide
          } `}
        >
          <ul className={`${classes.navigation} `}>
            <li>
              <a href="www.google.com">Home</a>
            </li>
            <li>
              <a href="www.google.com">About</a>
            </li>
            <li>
              <a href="www.google.com">Contact</a>
            </li>
            <li>
              <a href="www.google.com">Blog</a>
            </li>
            <li>
              <a href="www.google.com">Career</a>
            </li>
          </ul>
        </nav>
        <Button>Request Invite</Button>
        <svg className={classes.iconToggle} onClick={onToggleMenuHandler}>
          <use
            xlinkHref={`${icons}#icon-${menuDisplay ? "cross" : "menu"}`}
          ></use>
        </svg>
      </header>
    </div>
  );
};

export default Header;
