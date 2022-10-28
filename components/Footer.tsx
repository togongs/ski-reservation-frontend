import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const FooterBox = styled.div`
  border-top: 1px solid #d5d6de;
`;

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <footer>
          <div>©2022 Hanameee Corp. All rights reserved</div>
          <div>약관 및 정책</div>
          <div>개인정보처리방침</div>
          <div>도움말</div>
        </footer>
      </Container>
    </FooterBox>
  );
};

export default Footer;
