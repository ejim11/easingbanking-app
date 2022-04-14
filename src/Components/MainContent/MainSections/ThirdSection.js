import React, { useRef, useState, useEffect } from "react";

import GridBox from "../../UI/GridBox";
import classes from "./ThirdSection.module.scss";

import pic1 from "../../../Assets/image-currency.jpg";
import pic2 from "../../../Assets/image-restaurant.jpg";
import pic3 from "../../../Assets/image-plane.jpg";
import pic4 from "../../../Assets/image-confetti.jpg";

const ThirdSection = () => {
  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const latestArticle = [
    {
      key: "L1",
      pic: pic1,
      person: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: `The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`,
    },
    {
      key: "L2",
      pic: pic2,
      person: "Wilson Hutton",
      title: "Treat your without worrying about money",
      text: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...",
    },
    {
      key: "L3",
      pic: pic3,
      person: "Wilson Hutton",
      title: " Take your Easybank card wherever you go",
      text: ` We want you to enjoy your travels. This is why we don't charge any fees on purchases 
      while you're abroad. We'll even show you…`,
    },
    {
      key: "L4",
      pic: pic4,
      person: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: `After a lot of hard work by the whole team, we're excited to launch our closed beta. 
      It's easy to request an invite through the site...`,
    },
  ];

  let content = latestArticle.map((item) => (
    <div
      className={`${classes.articleItem}  ${isVisible ? classes.anim1 : ""}`}
      key={item.key}
    >
      <div className={classes["articleItem-img"]}>
        <img src={item.pic} alt="article pic" />
      </div>
      <div className={classes["articleItem-info"]}>
        <p className={classes["articleItem-person"]}>By {item.person}</p>
        <h3>
          <a href="http://medium.com">{item.title}</a>
        </h3>
        <p className={`${classes["articleItem-text"]} `}>{item.text}</p>
      </div>
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
      className={`${classes.Thirdsct}  ${classes.invisible} ${
        isVisible ? classes.visible : ""
      }`}
      ref={containerRef}
    >
      <h2 className={`${isVisible ? classes.anim : ""}`}>Latest Articles</h2>
      <GridBox className={classes.articleBox}>{content}</GridBox>
    </section>
  );
};

export default ThirdSection;
