import React from "react";
import styled from "styled-components";
import HeaderForSI from "./HeaderForSI";
import PForSI from "./PForSI";

const Wrapper = styled.div`
  z-index: 5;
  margin-bottom: 2rem;
`;
const ImgInDiv = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
`;
const MainDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
const ContentStory = ({ image, item }) => {
  return (
    <MainDiv>
      {item.photos.map((image) => (
        <ImgInDiv src={image}></ImgInDiv>
      ))}
      <Wrapper>
        <HeaderForSI>{item.title}</HeaderForSI>
        <PForSI>{item.description}</PForSI>
      </Wrapper>
    </MainDiv>
  );
};

export default ContentStory;
