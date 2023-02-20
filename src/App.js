import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";

const AppWrapper = styled.div`
display:flex;
flex-direction:column
width:100%;
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
    </AppWrapper>
  );
}

export default App;
