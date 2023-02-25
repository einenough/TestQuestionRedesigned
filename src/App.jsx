import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./components/HamburgerMenu";
import HrUnderMenu from "./components/HrUnderMenu";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import imageTest from "./icons/image_184.png";
import imageTest2 from "./icons/1212.png";
import StoryItem from "./components/StoryItem";
import { data } from "./mocks/mockData";
import WhenOpenStory from "./components/WhenOpenStory";
// filter: ${(props) => (props.hideStories ? "blur(5px)" : "none")};

const AppWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;
const HalfWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  filter: ${(props) => (props.hideStories ? "blur(5px)" : "none")};
`;

function App() {
  const ArrayOfImg = [{ number: imageTest }, { number: imageTest2 }];
  const [hideStories, setHideStories] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  const [storiesVisible, setStoriesVisible] = useState(0);
  const [defaultState, setDefaultState] = useState(true);
  return (
    <AppWrapper>
      <HalfWrapper hideStories={hideStories}>
        <HamburgerMenu
          href="/"
          defaultState={defaultState}
          setDefaultState={setDefaultState}
          setHideStories={setHideStories}
          hideStories={hideStories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openWindow={openWindow}
          setOpenWindow={setOpenWindow}
          storiesVisible={storiesVisible}
          setStoriesVisible={setStoriesVisible}
        />
        <HrUnderMenu />
        <Title />
        <Paragraph />
        <FooterOfFooter>
          <FooterDiv>
            {data.map((item) => {
              return (
                <StoryItem
                  key={item.id}
                  item={item}
                  setStoriesVisible={setStoriesVisible}
                  storiesVisible={storiesVisible}
                  image={ArrayOfImg}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  openWindow={openWindow}
                  setOpenWindow={setOpenWindow}
                  hideStories={hideStories}
                  setHideStories={setHideStories}
                />
              );
            })}
            {/* {isOpen === true && <WhenOpenStory />} */}
          </FooterDiv>
        </FooterOfFooter>
      </HalfWrapper>
      {hideStories === true && (
        <WhenOpenStory
          hideStories={hideStories}
          setHideStories={setHideStories}
        />
      )}
    </AppWrapper>
  );
}
const FooterOfFooter = styled.footer``;

const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0px 15px;
  gap: 16px;
`;
export default App;
