import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./Components/HamburgerMenu";
import HrUnderMenu from "./Components/HrUnderMenu";
import Title from "./Components/Title";
import Paragraph from "./Components/Paragraph";
import Footer from "./Components/Footer";
import StoryItem from "./Components/StoryItem";
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
        defaultState={defaultState}
        setDefaultState={setDefaultState}
      />
      <HrUnderMenu />
      <Title />
      <Paragraph />
      <Footer>
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
      </Footer>
    </AppWrapper>
  );
}

export default App;
