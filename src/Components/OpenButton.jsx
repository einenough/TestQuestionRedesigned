import React from "react";
import HeaderForSI from "./HeaderForSI";
import PForSI from "./PForSI";
import styled from "styled-components";
import imageTest from "../icons/image_184.png";
import imageTest2 from "../icons/1212.png";
import ContentStory from "./ContentsStory";
import WhenOpenStory from "./WhenOpenStory";

const ContentStoryDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  //   background-image: url(${(props) => props});
`;

const WrapperOfAll = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const OpenButton = ({
  item,
  openWindow,
  setOpenWindow,
  image,
  setIsOpen,
  isOpen,
  setStoriesVisible,
  storiesVisible,
  hideStories,
  setHideStories,
}) => {
  console.log(item);
  return (
    <WrapperOfAll
      Wrap
      item={item}
      image={image}
      // onClick={() => setOpenWindow(!openWindow)}
    >
      <ContentStoryDiv setIsOpen={setIsOpen} isOpen={isOpen}>
        <ContentStory
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          onClick={(item = 0) => {
            setStoriesVisible(item);
            // setOpenWindow(!isOpen);
            console.log(storiesVisible);
            console.log(openWindow);
          }}
          image={image}
          item={item}
          hideStories={hideStories}
          setHideStories={setHideStories}
        />
      </ContentStoryDiv>
    </WrapperOfAll>
  );
};
export default OpenButton;
