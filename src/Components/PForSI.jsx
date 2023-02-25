import React from "react";

import styled from "styled-components";

const PForSIP = styled.p`
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-left: 20px;
  font-family: "Rubik", sans-serif;
`;

const PForSI = ({ children }) => {
  return <PForSIP>{children}</PForSIP>;
};

export default PForSI;
