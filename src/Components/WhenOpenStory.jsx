import React from "react";
import styled from "styled-components";
import imageTest4 from "../icons/image_185.png";
import imageTest5 from "../icons/back.png";

const WindowTwo = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 841px;
  height: 100%;
`;

const Window = styled.div`
  position: relative;
  background: white;
  box-sizing: border-box;
  width: 736px;
  height: 100%;
  background-image: url("../icons/back.png");
  backgroud-size: 736px 863px;
  z-index: 5;
  float: left;
`;

const HeaderOfOpenStory = styled.h1`
  position: relative;
  padding-top: 44px;
  padding-left: 21px;
  padding-bottom: 20px;
`;

const ImageOfOpenStory = styled.img`
  height: 361px;
  width: 689px;
`;
const FirstP = styled.p`
  display: flex;
  color: grey;
  flex-direction: column;
  position: relative;
  padding-top: 20px;
`;
const SecondP = styled.p`
  display: flex;
  margin-bottom: 10px;
`;
const ThirdP = styled.p`
  display: flex;
  align-items: center;
  color: grey;
  position: relative;
  padding-top: 20px;
`;
const DivOfP = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 59px;
  margin-left: 10px;
`;
const DivOfSecondP = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 59px;
`;
const DivOfThirdP = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
`;
const DivOfFourP = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 59px;
  margin-left: 10px;
  margin-top: 40px;
`;
const FourP = styled.p`
  display: flex;
  justify-content: center;
  color: grey;
  width: 71%;
`;
const SixP = styled.p`
  display: flex;
  margin-bottom: 10px;
  width: 65%;
  height: 100%;
  justify-content: center;
`;
const OnOfLast = styled.p`
  position: relative;
  padding-top: 60px;
  font-family: "Rubik", sans-serif;
`;
const SecondHeader = styled.h2`
  margin-top: 72px;
  margin-bottom: 30px;
`;

const LastP = styled.p`
  font-family: "Rubik", sans-serif;
`;
const ClosedButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: white;
  float: left;
`;
const DivForBtn = styled.div`
  width: 105px;
  height: 100%;
  float: right;
  display: flex;
  align-items: flex-start;
`;
const RectangleForBtn = styled.div`
  display: flex;
  background: grey;
  width: 2px;
  height: 95px;
  float: left;
  margin-right: 80px;
`;
const WhenOpenStory = ({ hideStories, setHideStories }) => {
  return (
    <WindowTwo>
      <Window>
        <HeaderOfOpenStory>Как научиться вставать пораньше</HeaderOfOpenStory>
        <ImageOfOpenStory src={imageTest4} alt="maybe"></ImageOfOpenStory>
        <DivOfThirdP>
          <DivOfP>
            <FirstP>#Tag (Катеегория)</FirstP>
            <SecondP>Красота и здоровье</SecondP>
          </DivOfP>
          <DivOfSecondP>
            <ThirdP>Статья</ThirdP>
            <p>ссылка</p>
          </DivOfSecondP>
        </DivOfThirdP>
        <DivOfFourP>
          <FourP>Время чтения</FourP>
          <SixP>5-7мин</SixP>
        </DivOfFourP>

        <OnOfLast>
          Не переставлять будильник, не говорить «ещё пять минут» и не
          собираться потом в дикой спешке. Рассказываем, как приучить себя
          вставать настолько рано, насколько нужно. И, по возможности, не
          роптать.
        </OnOfLast>
        <SecondHeader>Используйте солнечный свет</SecondHeader>

        <LastP>
          Утром сразу откройте шторы — это поможет быстрее проснуться. Если в
          вашем часовом поясе световой день слишком короткий, настройте «умный»
          будильник — пусть он имитирует солнечное утро: такой свет по утрам
          помогает регулировать циркадные ритмы, а это улучшает сон.
        </LastP>
      </Window>
      <DivForBtn>
        <ClosedButton onClick={() => setHideStories((hideStories = false))}>
          <RectangleForBtn></RectangleForBtn>
        </ClosedButton>
      </DivForBtn>
    </WindowTwo>
  );
};

export default WhenOpenStory;
