import React from "react";
import styled from "styled-components";

const HeaderForSIH = styled.h1`
  display: block;

  flex-direction: row;
  align-items: flex-end;
  color: white;
  padding: 0 20px;
  font-family: "Rubik", sans-serif;
`;

const HeaderForSI = ({ children }) => {
  return <HeaderForSIH>{children}</HeaderForSIH>;
};

export default HeaderForSI;
