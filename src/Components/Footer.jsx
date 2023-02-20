import React from "react";
import styled from "styled-components";

const FooterOfFooter = styled.footer``;

const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0px 15px;
  gap: 16px;
`;

const Footer = () => {
  return (
    <FooterOfFooter>
      <FooterDiv></FooterDiv>
    </FooterOfFooter>
  );
};

export default Footer;
