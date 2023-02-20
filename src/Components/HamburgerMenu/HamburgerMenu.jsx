import React from "react";
import styled from "styled-components";

const HamburgerHead = styled.header`
  display: flex;
  justify-content: flex-end;
`;
const ButtonWithIcon = styled.button`
  width: 35px;
  height: 35px;
  background: url(${(props) => props.imgUrl})
  border: none;
  margin: 0 auto;
  display: block;
`;

const HamburgerMenu = ({ defaultState, setDefaultState }) => {
  return (
    <HamburgerHead>
      <ButtonWithIcon
        onClick={() => setDefaultState(!defaultState)}
        imgUrl="Hamburger_icon.svg.png"
      ></ButtonWithIcon>
    </HamburgerHead>
  );
};

export default HamburgerMenu;
