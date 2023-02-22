import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./components/HamburgerMenu";
import HrUnderMenu from "./components/HrUnderMenu";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";

import StoryItem from "./components/StoryItem";
const AppWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

function App() {
  const data = [
    {
      id: 1,
      name: "Статьи",
      indicator: "#F5F879",
      photos: [],
      title: "Как научиться вставать пораньше",
      description: "И чувствовать себя бодро весь день",
    },
    {
      id: 2,
      name: "Курсы",
      indicator: "#42A2D9",
      photos: [],
      title: "Как восстанавливаться не выезжая из города",
      description: "Простые упражнения для полного восстановления сил",
    },
    {
      id: 3,
      name: "Медиа",
      indicator: "#42D963",
      photos: [],
      title: "Начните медитировать уже сейчас",
      description: "6 медитаций на каждый день",
    },
  ];
  const [openWindow, setOpenWindow] = useState(false);
  const [storiesVisible, setStoriesVisible] = useState(0);
  const [defaultState, setDefaultState] = useState(true);
  return (
    <AppWrapper>
      <HamburgerMenu
        href="/"
        defaultState={defaultState}
        setDefaultState={setDefaultState}
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
              />
            );
          })}
        </FooterDiv>
      </FooterOfFooter>
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
