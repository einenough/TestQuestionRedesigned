import React from "react";
import styled from "styled-components";

const ParagraphDiv = styled.div`
  display: flex;
  height: 113.07px;
  width: 501px;
`;

const ParagraphP = styled.p`
  font-family: "Rubik", sans-serif;
  padding-left: 20px;
`;

const Paragraph = () => {
  return (
    <ParagraphDiv>
      <ParagraphP>
        {" "}
        Наши эксперты подготовили 16 курсов и более 70 статей в 6 категориях:
        Фитнес, Питание, Осознанность, Сон, Отдых, Психология и Образ жизни.
        Занимайтесь в комфортном темпе.
      </ParagraphP>
    </ParagraphDiv>
  );
};

export default Paragraph;
