import React, { Fragment } from "react";

import icons from "../../Assets/sprite.svg";

import classes from "./MediaSVG.module.scss";

const MediaSVG = () => {
  return (
    <Fragment>
      <a href="http://facebook.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-facebook`}></use>
        </svg>
      </a>
      <a href="http://youtube.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-youtube`}></use>
        </svg>
      </a>
      <a href="http://twitter.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-twitter`}></use>
        </svg>
      </a>
      <a href="http://pinterest.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-pinterest-with-circle`}></use>
        </svg>
      </a>
      <a href="http://instagram.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-instagram`}></use>
        </svg>
      </a>
    </Fragment>
  );
};

export default MediaSVG;
