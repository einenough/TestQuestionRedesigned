import React from "react";
import styled from "styled-components";
import { GrMenu } from "@react-icons/all-files/gr/GrMenu";

const HamburgerHeadDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HamburgerHead = styled.header`
  display: flex;
  justify-content: flex-end;
`;
const ButtonWithIcon = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(117, 190, 218, 0);
  cursor: pointer;
`;

const HamburgerMenu = ({ defaultState, setDefaultState }) => {
  return (
    <HamburgerHeadDiv>
      <HamburgerHead>
        <ButtonWithIcon onClick={() => setDefaultState(!defaultState)}>
          <GrMenu />
        </ButtonWithIcon>
      </HamburgerHead>
    </HamburgerHeadDiv>
  );
};

export default HamburgerMenu;
