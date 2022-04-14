import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/MainContent/Main";
import Footer from "./Components/Footer/Footer";

import HeadContextProvider from "./store/HeadContextProvider";

import classes from "./App.module.scss";

function App() {
  return (
    <HeadContextProvider>
      <Header />
      <Main />
      <Footer />
    </HeadContextProvider>
  );
}

export default App;
