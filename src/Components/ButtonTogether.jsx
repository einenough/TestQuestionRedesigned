import React from "react";
import styled from "styled-components";

const ButtonTogetherBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 53px;
`;

const ButtonTogether = (
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow
) => {
  return <ButtonTogetherBtn></ButtonTogetherBtn>;
};

export default ButtonTogether;
