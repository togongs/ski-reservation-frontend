import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  z-index: 1001;
`;

const ModalContent = styled.div`
  width: 350px;
  height: 500px;
  background-color: gainsboro;
  padding: 25px;
`;

const ModalCloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 5px 25px;

  p {
    cursor: pointer;
  }
`;

interface IModalProps {
  closeModal: () => void;
}

function Modal({ closeModal }: IModalProps) {
  return (
    <Container>
      <ModalBackground />
      <ModalContainer>
        <ModalContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          labore sint impedit, optio mollitia quae soluta possimus itaque
          obcaecati unde expedita laudantium ducimus distinctio quasi rerum
          molestiae velit, quibusdam cum.
        </ModalContent>
        <ModalCloseWrapper>
          <p>오늘 하루 더 이상 보지 않기</p>
          <p onClick={closeModal}>닫기</p>
        </ModalCloseWrapper>
      </ModalContainer>
    </Container>
  );
}

export default Modal;
