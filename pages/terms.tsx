import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import ButtonStyle from '../components/Button/ButtonStyle';
import RegisterHeader from '../components/Header/RegisterHeader';

const Terms = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [checkStatus, setCheckStatus] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const router = useRouter();

  const toggleModal = () => {
    setModal((modal) => !modal);
  };

  const handleAgree = () => {
    setCheckStatus(true);
    setModal((modal) => !modal);
  };

  const handleCheckAll = () => {
    !isChecked || !checkStatus || !isChecked2 || !isChecked3 || !isChecked4
      ? alert('모두 체크하세요')
      : router.push('/termsconfirm');
  };

  useEffect(() => {
    isChecked &&
      checkStatus &&
      isChecked2 &&
      isChecked3 &&
      isChecked4 &&
      setCheckAll(true);
  }, [isChecked, checkStatus, isChecked2, isChecked3, isChecked4]);

  return (
    <>
      <RegisterHeader />
      <Container>
        <h1>이용약관에 동의해주세요</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <Form.Check
            type="radio"
            label={`만 14세 이상입니다.`}
            onClick={() => setIsChecked(true)}
            defaultChecked={isChecked}
          />
          <div onClick={toggleModal}>
            <Form.Check
              type="radio"
              label={`이용약관`}
              defaultChecked={checkStatus ? true : checkStatus}
            />
          </div>
          <Form.Check
            type="radio"
            label={`전자금융거래 이용약관`}
            onClick={() => setIsChecked2(true)}
            defaultChecked={isChecked2}
          />
          <Form.Check
            type="radio"
            label={`개인정보 수집 이용에 대한 동의`}
            onClick={() => setIsChecked3(true)}
            defaultChecked={isChecked3}
          />
          <Form.Check
            type="radio"
            label={`개인정보 제공 동의`}
            onClick={() => setIsChecked4(true)}
            defaultChecked={isChecked4}
          />
        </div>

        <ButtonStyle
          color={`${checkAll ? '#18A0FB' : '#646464'}`}
          type="submit"
          onClick={handleCheckAll}
        >
          동의하고 계속하기
        </ButtonStyle>
      </Container>

      <Modal show={modal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>이용약관</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          **제1장 총칙** <br></br>
          제1조 (목적) 이 약관은 주식회사 탑스키스쿨(이하 &quot;회사&quot;라
          합니다)이 제공<br></br>
          하는 스키강습예약(www.top.io, 이하 &quot서비스&quot라 합니다) 및 관련
          제반 서비<br></br>스의 이용조건 및 절차에 관하여 회사와 회원간의 권리
          의무 및 책임사항, <br></br> 기타 필요한 사항을 규정함을 목적으로
          합니다.
        </Modal.Body>
        <Modal.Footer>
          <ButtonStyle color="#18A0FB" onClick={handleAgree}>
            동의
          </ButtonStyle>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Terms;
