import React, { useRef, useState, useEffect } from "react";
import GridBox from "../../UI/GridBox";

import classes from "./SecondSection.module.scss";
import logo1 from "../../../Assets/icon-online.svg";
import logo2 from "../../../Assets/icon-budgeting.svg";
import logo3 from "../../../Assets/icon-onboarding.svg";
import logo4 from "../../../Assets/icon-api.svg";

const SecondSection = () => {
  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      key: "f1",
      logo: logo1,
      title: "Online Banking",
      text: `Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.`,
    },
    {
      key: "f2",
      logo: logo2,
      title: "Simple Build",
      text: `See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.`,
    },
    {
      key: "f3",
      logo: logo3,
      title: "Fast Onboarding",
      text: `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
    },
    {
      key: "f4",
      logo: logo4,
      title: "Open API",
      text: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
    },
  ];

  let content = features.map((item) => (
    <div className={classes.featureItem} key={item.key}>
      <div>
        <img src={item.logo} alt={features} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  ));

  const callBackFn = (entries, observer) => {
    // console.log(entries[0]);
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    setIsVisible(entry.isIntersecting);
    observer.unobserve(entry.target);
  };

  const options = {
    root: null,
    threshold: 0.15,
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
    <section
      className={`${classes.secondsct} ${classes.invisible} ${
        isVisible ? classes.visible : ""
      }`}
      ref={containerRef}
    >
      <h2 className={`${isVisible ? classes.anim : ""}`}>
        Why choose Easybank?
      </h2>
      <p className={`${isVisible ? classes.anim1 : ""}`}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your financies like never before.
      </p>
      <GridBox className={classes["feature-box"]}>{content}</GridBox>
    </section>
  );
};

export default SecondSection;
