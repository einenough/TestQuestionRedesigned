import React from "react";
import styled from "styled-components";

const BorderBtnSpan = styled.span`
  width: 14px;
  height: 14px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
`;

const BorderBtn = (props) => {
  return (
    <BorderBtnSpan style={{ backgroundColor: props.color }}></BorderBtnSpan>
  );
};

export default BorderBtn;
