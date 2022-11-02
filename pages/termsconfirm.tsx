import React, { useCallback, useState } from 'react';
import RegisterHeader from '../components/Header/RegisterHeader';
import { Form, Container, Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import Timer from '../components/Timer';
import Link from 'next/link';
import ButtonStyle from '../components/Button/ButtonStyle';

const NUMBER_REGEX = /[^0-9]/g;
const PHONE_REGEX = /(\d{3})(\d{4})(\d)/;

const Termsconfirm = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [isVisible, setIsvisible] = useState(false);
  const [inputPhone, setInputPhone] = useState('');
  const [reset, setReset] = useState(false);
  const [confirmNumber, setConfirmNumber] = useState<string>('');
  const toggleModal = () => {
    setModal((modal) => !modal);
  };
  const toggleTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsvisible(true);
    setReset(true);
  };

  const checkRegex = useCallback((e: any) => {
    let value = e.target.value;
    let result;
    let regex;
    console.log('e.target.id', e.target.id);
    switch (e.target.id) {
      case 'phone':
        value = value.replace(NUMBER_REGEX, '');
        value = value.replace(PHONE_REGEX, '$1-$2-$3');
        result = value.slice(0, 13);
        setInputPhone(result);
        break;
      default:
        return;
    }
  }, []);

  return (
    <>
      <RegisterHeader />
      <Container>
        <h1>휴대폰 본인확인</h1>
        <Form.Check
          type="radio"
          label={`약관 전체동의`}
          // onClick={() => setIsChecked2(true)}
          // checked={isChecked2}
        />
        <p>[필수] 휴대폰 본인확인 서비스 이용약관</p>
        <p onClick={toggleModal}>[필수] 휴대폰 통신사 이용약관</p>
        <p>[필수] 휴대폰 개인정보 수집 및 이용 동의서</p>
        <p>[필수] 휴대폰 고유식별정보 처리 동의서</p>

        <div style={{ border: '1px solid black', padding: '20px 0' }}>
          <div style={{ borderBottom: '1px solid black' }}>
            <input
              type="text"
              placeholder="휴대폰 번호 입력"
              style={{ border: 'none' }}
              onChange={checkRegex}
              id={'phone'}
              value={inputPhone}
            />
          </div>
          <div>
            <ButtonStyle
              color={`${reset ? '#18A0FB' : '#646464'}`}
              onClick={(e: any) => toggleTimer(e)}
              // 1. 재요청 눌렀을때 timer 리셋 기능 해야함
              // 2. 인증번호 유효성검사 해야함
            >
              {`${reset ? `재요청` : `인증`}`}
            </ButtonStyle>
            {isVisible && <Timer />}
            <input
              type="number"
              placeholder="인증번호"
              style={{ border: 'none' }}
              value={confirmNumber}
              onChange={(e) => setConfirmNumber(e.target.value)}
            />
          </div>
        </div>
        <Link href="/register">
          <a>
            <ButtonStyle
              color={`${inputPhone && confirmNumber ? '#18A0FB' : '#646464'}`}
            >
              계속하기
            </ButtonStyle>
          </a>
        </Link>
      </Container>
      <Footer />

      <Modal show={modal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>이용약관</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          **제1장 총칙** <br></br>
          제1조 (목적) 이 약관은 주식회사 탑스키스쿨(이하&quot;회사&quot;라
          합니다)이 제공<br></br>
          하는 스키강습예약(www.top.io, 이하 &quot;서비스&quot;라 합니다) 및
          관련 제반 서비<br></br>
          스의 이용조건 및 절차에 관하여 회사와 회원간의 권리 의무 및 책임사항,
          <br></br>
          기타 필요한 사항을 규정함을 목적으로 합니다.
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Termsconfirm;
