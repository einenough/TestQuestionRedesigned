import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  width: 1080px;
  height: 294.96px;
  justify-content: space-evenly;
  align-items: stretch;
`;
const TitleHeader = styled.h1`
  font-family: "Rubik", sans-serif;
  padding-left: 42px;
  font-size: 45px;
`;

const Title = () => {
  return (
    <TitleDiv>
      <TitleHeader>
        Лучше — сайт, который поможет приобрести и не бросить полезные привычки.
        Бесплатные видеотренировки, аудиомедитации, программы и статьи для
        нормализации сна, питания и развития осознанности.
      </TitleHeader>
    </TitleDiv>
  );
};

export default Title;
