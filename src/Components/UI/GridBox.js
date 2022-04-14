import React from "react";

import classes from "./GridBox.module.scss";

const GridBox = (props) => {
  return (
    <div className={`${classes.gridbox} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default GridBox;
