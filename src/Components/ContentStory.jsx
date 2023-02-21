import React from "react";
import styled from "styled-components";
const ContentStoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-image: url("../assets/image\ 184.png");
  background-size: 500px 680px;
`;
const ContentStory = () => {
  return <ContentStoryDiv></ContentStoryDiv>;
};

export default ContentStory;
