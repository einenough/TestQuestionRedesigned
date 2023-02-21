import React from "react";
import styled from "styled-components";

const HeaderForSIH = styled.h1`
  display: block;
  clear: both;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: white;
  margin-left: 20px;
  font-family: "Rubik", sans-serif;
`;

const HeaderForSI = () => {
  return <HeaderForSIH></HeaderForSIH>;
};

export default HeaderForSI;
