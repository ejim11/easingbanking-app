import React from "react";

const headContext = React.createContext({
  isSticky: false,
  changeStickyHeader: () => {},
});

export default headContext;
