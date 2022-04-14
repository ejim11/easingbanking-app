import React, { useEffect, useRef, useContext } from "react";

import classes from "./FirstSection.module.scss";
import Button from "../../UI/Button";
import advertImg from "../../../Assets/image-mockups.png";

import headContext from "../../../store/head-context";

const FirstSection = () => {
  const ctx = useContext(headContext);

  const containerRef = useRef(null);

  const callBackFn = (entries, observer) => {
    console.log(entries[0]);
    const [entry] = entries;

    if (!entry.isIntersecting) {
      ctx.changeStickyHeader(true);
    } else {
      ctx.changeStickyHeader(false);
    }
  };

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  };

  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(callBackFn, options);

    if (current) observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
        console.log(current);
      }
    };
  }, [containerRef]);
  return (
    <section className={classes.firstSection} ref={containerRef}>
      <div className={classes["firstSection__left"]}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop for spending, saving, budgeting, investing, and much more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <div className={classes["firstSection__right"]}>
        <img src={advertImg} alt="advert img" />
      </div>
    </section>
  );
};

export default FirstSection;
