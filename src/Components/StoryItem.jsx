import React from "react";
import styled from "styled-components";
import OpenStories from "./OpenStories";
import FooterBtn from "./FooterBtn";
import BorderBtn from "./BorderBtn";
import StoriesStyle from "./Stories";
import OpenButton from "./OpenButton";

const StoryItem = ({
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow,
}) => {
  return (
    <StoriesStyle onClick={() => setStoriesVisible(item.id)}>
      {storiesVisible === item.id && <OpenStories />}
      <ButtonTogetherBtn>
        <FooterBtn item={item} />
        <BorderBtn color={item.indicator} />
      </ButtonTogetherBtn>
      {storiesVisible === item.id && (
        <OpenButton openWindow={openWindow} setOpenWindow={setOpenWindow} />
        {openWindow && (<OpenStories />)}
      )}
    </StoriesStyle>
  );
};

const ButtonTogetherBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 53px;
`;
export default StoryItem;
