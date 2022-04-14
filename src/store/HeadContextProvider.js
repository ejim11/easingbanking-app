import React, { useState } from "react";

import headContext from "./head-context";

const HeadContextProvider = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  const onChangeStickerHeader = ( val)=> {
      setIsSticky(val)
  }

  return (
    <headContext.Provider
      value={{
        isSticky: isSticky,
        changeStickyHeader: onChangeStickerHeader,
      }}
    >
      {props.children}
    </headContext.Provider>
  );
};

export default HeadContextProvider;
