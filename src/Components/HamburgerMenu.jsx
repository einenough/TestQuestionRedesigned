import React from "react";
import styled from "styled-components";
import { GrMenu } from "@react-icons/all-files/gr/GrMenu";

const HamburgerHeadDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
`;

const HamburgerHead = styled.header`
  display: flex;
  justify-content: flex-end;
`;
const ButtonWithIcon = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(117, 190, 218, 0);
  cursor: pointer;
  position: relative;
  z-index: 100;
`;
const ExampleButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: blue;
  cursor: pointer;
  border: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
`;
const HamburgerMenu = ({
  defaultState,
  setDefaultState,
  storiesVisible,
  setStoriesVisible,
  openWindow,
  setOpenWindow,
  isOpen,
  setIsOpen,
  hideStories,
  setHideStories,
}) => {
  return (
    <HamburgerHeadDiv>
      {/* <ExampleButton
        onClick={() => {
          setDefaultState((defaultState = true));
          setStoriesVisible((storiesVisible = 0));
          setOpenWindow((openWindow = false));
          setIsOpen((isOpen = 0));
          setHideStories((hideStories = false));
          console.log("work");
        }}
      /> */}

      <HamburgerHead>
        <ButtonWithIcon
          onClick={() => {
            setDefaultState((defaultState = true));
            setStoriesVisible((storiesVisible = 0));
            setOpenWindow((openWindow = false));
            setIsOpen((isOpen = 0));
            setHideStories((hideStories = false));
            console.log("work");
          }}
        >
          <GrMenu />
        </ButtonWithIcon>
      </HamburgerHead>
    </HamburgerHeadDiv>
  );
};

export default HamburgerMenu;
