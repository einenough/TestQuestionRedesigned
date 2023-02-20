import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
  margin: 20px 0;
  padding: 0;
  height: 0;
  border: none;
  border-top: 1px solid #333;
`;

const HrUnderMenu = () => {
  return <Hr />;
};

export default HrUnderMenu;
