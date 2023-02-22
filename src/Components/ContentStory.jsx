import React from "react";
import styled from "styled-components";
import image_184 from "./icons";

const ContentStoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  background-size: 500px 680px;
`;
const ContentStory = ({ children }) => {
  return <ContentStoryDiv>{children}</ContentStoryDiv>;
};

export default ContentStory;
