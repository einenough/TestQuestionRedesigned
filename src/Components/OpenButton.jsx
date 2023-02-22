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
}) => {
  console.log(item);
  return (
    <WrapperOfAll
      item={item}
      image={image}
      onClick={() => setOpenWindow(!openWindow)}
    >
      <ContentStoryDiv onClick={() => console.log(setIsOpen(!isOpen))}>
        {isOpen ? (
          setStoriesVisible(0) && <WhenOpenStory />
        ) : (
          <ContentStory image={image} item={item} />
        )}
      </ContentStoryDiv>
    </WrapperOfAll>
  );
};
export default OpenButton;
