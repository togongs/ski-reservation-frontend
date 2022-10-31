import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const FooterBox = styled.div`
  border-top: 1px solid #d5d6de;
`;
const FooterContent = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
  justify-content: space-between;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterContent style={{ display: 'flex' }}>
          <div>
            <div>로고</div>
            <div>사업자 정보</div>
            <div>문의처 123-4567</div>
            <div>Copyright ⓒ All Rights Reserved</div>
          </div>
          <div>
            <div>자주 묻는 질문</div>
            <div>개인정보처리방침</div>
            <div>약관 및 정책</div>
            <div>문의처 123-4567</div>
          </div>
        </FooterContent>
      </Container>
    </FooterBox>
  );
};

export default Footer;
