import React from "react";

import FirstSection from "./MainSections/FirstSection";
import classes from "./Main.module.scss";
import SecondSection from "./MainSections/SecondSection";
import ThirdSection from "./MainSections/ThirdSection";

const Main = () => {
  return (
    <main className={classes.main}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
};

export default Main;
