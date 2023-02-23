import React from "react";
import styled from "styled-components";
import FooterBtn from "./FooterBtn";
import BorderBtn from "./BorderBtn";
import StoriesStyle from "./Stories";
import imageTest from "../icons/image_184.png";
import imageTest2 from "../icons/1212.png";
import OpenButton from "./OpenButton";
import Stories from "react-insta-stories";
import WhenOpenStory from "./WhenOpenStory";
import ContentStory from "./ContentsStory";

const ArrayOfImg = [{ number: imageTest }, { number: imageTest2 }];
const ImageDiv = styled.div`
  width: 456px;
  height: 734px;
  background-image: url(${imageTest});
`;
const StoryMainDiv = styled.div`
  display: block;
  position: fixed;
  box-sizing: border-box;
  width: 456px;
  height: 734px;
`;

const StoryItem = ({
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow,
  isOpen,
  setIsOpen,
  image,
  hideStories,
  setHideStories,
}) => {
  return (
    <StoriesStyle
      isOpen={storiesVisible === item.id}
      onClick={() => setStoriesVisible(item.id)}
    >
      <ButtonTogetherBtn>
        <FooterBtn item={item} />
        <BorderBtn color={item.indicator} />
      </ButtonTogetherBtn>
      {storiesVisible === item.id && (
        <OpenButton
          image={image}
          item={item}
          openWindow={openWindow}
          setOpenWindow={setOpenWindow}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setStoriesVisible={setStoriesVisible}
          storiesVisible={storiesVisible}
          hideStories={hideStories}
          setHideStories={setHideStories}
        />
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
