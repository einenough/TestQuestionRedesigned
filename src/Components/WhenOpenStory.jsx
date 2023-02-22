import React from "react";
import styled from "styled-components";

const Window = styled.div`
  box-sizing: border-box;
  width: 736px;
  height: 863px;
`;
const WhenOpenStory = () => {
  return (
    <Window>
      <h1>Как научиться вставать пораньше</h1>
      <img src="./icons/image_184.png" alt="image" />
      <p>Tag</p>
      <p>красота</p>
      <p>Статья</p>
      <p>ссылка</p>
      <p>время</p>
      <p>5-7мин</p>
      <p>
        Не переставлять будильник, не говорить «ещё пять минут» и не собираться
        потом в дикой спешке. Рассказываем, как приучить себя вставать настолько
        рано, насколько нужно. И, по возможности, не роптать.
      </p>
      <h2>Используйте солнечный свет</h2>
      <p>
        Утром сразу откройте шторы — это поможет быстрее проснуться. Если в
        вашем часовом поясе световой день слишком короткий, настройте «умный»
        будильник — пусть он имитирует солнечное утро: такой свет по утрам
        помогает регулировать циркадные ритмы, а это улучшает сон.
      </p>
    </Window>
  );
};

export default WhenOpenStory;
