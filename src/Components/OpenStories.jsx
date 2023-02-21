import React from "react";
import styled from "styled-components";

const OpenStoriesStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 456px;
  height: 734px;
  height: fit-content;
  background-color: #333333;
  transition: all 1s ease-in-out;
`;

const OpenStories = ({
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow,
}) => {
  return <OpenStoriesStyle></OpenStoriesStyle>;
};

export default OpenStories;
