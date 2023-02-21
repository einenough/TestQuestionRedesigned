import React from "react";
import styled from "styled-components";

const FooterBtnP = styled.p`
  background-color: #333333;
  color: white;
  font-family: "Rubik", sans-serif;
`;
const FooterBtn = ({ item }) => {
  return <FooterBtnP>{item.name}</FooterBtnP>;
};

export default FooterBtn;
