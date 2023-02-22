import React from "react";
import ContentStory from "./ContentStory";
import HeaderForSI from "./HeaderForSI";
import PForSI from "./PForSI";

const OpenButton = ({ item, openWindow, setOpenWindow }) => {
  return (
    <ContentStory onClick={() => setOpenWindow(!openWindow)}>
      <HeaderForSI>{item.title}</HeaderForSI>
      <PForSI>{item.description}</PForSI>
    </ContentStory>
  );
};
export default OpenButton;
