import React from "react";
import styled from "styled-components";
import OpenStories from "./OpenStories";
import Stories from "./Stories";
import ButtonTogether from "./ButtonTogether";
import FooterBtn from "./FooterBtn";
import BorderBtn from "./BorderBtn";
import ContentStory from "./ContentStory";
import HeaderForSI from "./HeaderForSI";
import PForSI from "./PForSI";

const StoryItem = ({
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow,
}) => {
  return (
    <Stories onClick={() => setStoriesVisible(item.id)}>
      {storiesVisible === item.id && <OpenStories />}
      <ButtonTogether>
        <FooterBtn />
        <BorderBtn color={item.indicator} />
      </ButtonTogether>
      {storiesVisible === item.id && (
        <ContentStory onClick={() => setOpenWindow(openWindow(true))}>
          <HeaderForSI>{item.title}</HeaderForSI>
          <PForSI>{item.description}</PForSI>
        </ContentStory>
      )}
    </Stories>
  );
};

export default StoryItem;
