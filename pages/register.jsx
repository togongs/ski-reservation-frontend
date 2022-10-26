import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const ErrorMsgBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ERROR_MSG = {
  invalidName: '한글 또는 영문을 사용하세요. (특수기호, 공백 사용 불가)',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
  invalidPwCheck: '비밀번호가 일치하지 않습니다',
};

const NAME_REGEX = /^[가-힣]|[a-zA-Z]\s[a-zA-Z]$/;
const ID_REGEX = /^[a-z0-9_-]{5,20}$/;
const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
const NUMBER_REGEX = /[^0-9]/g;
const PHONE_REGEX = /(\d{3})(\d{4})(\d)/;
// const EMAIL_REGEX =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

const Register = () => {
  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputPasswordCheck, setInputPasswordCheck] = useState('');
  const [errorMsgName, setErrorMsgName] = useState('');
  const [errorMsgId, setErrorMsgId] = useState('');
  const [errorMsgPassword, setErrorMsgPassword] = useState('');
  const [errorMsgPasswordCheck, setErrorMsgPasswordCheck] = useState('');
  const inputRef = useRef(null);

  const checkRegex = useCallback((e) => {
    let value = e.target.value;
    let result;
    let regex;
    console.log('e.target.id', e.target.id);
    switch (e.target.id) {
      case 'name':
        setInputName(value);
        regex = NAME_REGEX;
        result = regex.test(value);
        if (value !== '' && !result) {
          setErrorMsgName(ERROR_MSG.invalidName);
        } else {
          setErrorMsgName('');
        }
        break;
      case 'id':
        setInputId(value);
        regex = ID_REGEX;
        result = regex.test(value);
        if (value !== '' && !result) {
          setErrorMsgId(ERROR_MSG.invalidId);
        } else {
          setErrorMsgId('');
        }
        break;
      case 'password':
        setInputPassword(value);
        regex = PW_REGEX;
        result = regex.test(value);
        if (value !== '' && !result) {
          setErrorMsgPassword(ERROR_MSG.invalidPw);
        } else {
          setErrorMsgPassword('');
        }
        break;
      case 'passwordCheck':
        setInputPasswordCheck(value);
        value = value.replace(PW_REGEX, '');
        if (value !== '' && !result) {
          setErrorMsgPasswordCheck(ERROR_MSG.invalidPwCheck);
        } else {
          setErrorMsgPasswordCheck('');
        }
        break;
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

  // 가입하기
  const userRegister = (e) => {
    e.preventDefault();
    console.log('user click register');
  };

  useEffect(() => {
    // input ID autoFocus
    inputRef.current.focus();
  }, []);

  return (
    <Container style={{ width: '500px' }}>
      <Link href="/">
        <h1>로고</h1>
      </Link>
      <Form onSubmit={(e) => userRegister(e)}>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            id={'name'}
            ref={inputRef}
            autoComplete="off"
            onChange={checkRegex}
            value={inputName}
          />
          <>{errorMsgName}</>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            id={'id'}
            onChange={checkRegex}
            value={inputId}
          />
          <>{errorMsgId}</>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            id={'password'}
            onChange={checkRegex}
            value={inputPassword}
          />
          <>{errorMsgPassword}</>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            id={'passwordCheck'}
            onChange={checkRegex}
            value={inputPasswordCheck}
            autoComplete="off"
          />
          <>{errorMsgPasswordCheck}</>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>휴대전화</Form.Label>
          <div style={{ display: 'flex' }}>
            <Form.Control
              type="text"
              placeholder="전화번호"
              onChange={checkRegex}
              id={'phone'}
              value={inputPhone}
              autoComplete="off"
            />
            <button>인증번호 받기</button>
          </div>
          <Form.Control type="text" placeholder="인증번호" autoComplete="off" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
