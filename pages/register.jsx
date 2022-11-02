import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import Timer from '../components/Timer';
import RegisterHeader from '../components/Header/RegisterHeader';
import ButtonStyle from '../components/Button/ButtonStyle';

const ErrorMsgBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ERROR_MSG = {
  invalidName: '한글 또는 영문을 사용하세요. (특수기호, 공백 사용 불가)',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidIdTrue: '사용 가능한 아이디입니다.',
  invalidPw: '아래 조건을 만족하는 비밀번호를 작성해주세요',
  invalidPwCheck: '비밀번호가 일치하지 않습니다',
};

const NAME_REGEX = /^[가-힣]|[a-zA-Z]\s[a-zA-Z]$/;
const ID_REGEX = /^[a-z0-9_-]{5,20}$/;
const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

const Register = () => {
  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordCheck, setInputPasswordCheck] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [inputCheckAll, setInputCheckAll] = useState(false);
  const [errorMsgcolor, setErrorMsgColor] = useState(false);
  const inputRef = useRef(null);

  const checkRegex = useCallback(
    (e) => {
      let value = e.target.value;
      let result;
      let regex;
      console.log('e.target.id', e.target.id);
      console.log('value', value);
      switch (e.target.id) {
        case 'name':
          setInputName(value);
          // regex = NAME_REGEX;
          // result = regex.test(value);
          // if (value !== '' && !result) {
          //   setErrorMsgName(ERROR_MSG.invalidName);
          // } else {
          //   setErrorMsgName('');
          // }
          break;
        case 'id':
          // 1. 이미 등록된 아이디인지 검사 로직 해야함
          setInputId(value);
          regex = ID_REGEX;
          result = regex.test(value);
          if (value !== '' && !result) {
            // value가 빈값이거나 regex test에 통과하지 못했다면
            setErrorMsgColor(false);
            setErrorMsg(ERROR_MSG.invalidId);
          } else if (value === '') {
            setErrorMsg('');
          } else {
            setErrorMsgColor(true);
            setErrorMsg(ERROR_MSG.invalidIdTrue);
          }
          break;
        case 'password':
          setInputPassword(value);
          regex = PW_REGEX;
          result = regex.test(value);
          if (value !== '' && !result) {
            setErrorMsgColor(false);
            setErrorMsg(ERROR_MSG.invalidPw);
          } else {
            setErrorMsg('');
          }
          break;
        case 'passwordCheck':
          setInputPasswordCheck(value);
          value = value.replace(inputPassword, ''); // pw랑 같은지 비교
          if (value !== '' && !result) {
            setErrorMsgColor(false);
            setErrorMsg(ERROR_MSG.invalidPwCheck);
          } else {
            setErrorMsg('');
          }
          break;
        default:
          return;
      }
    },
    [inputPassword],
  );

  useEffect(() => {
    console.log(errorMsgcolor);
    inputName && inputId && inputPassword && inputPasswordCheck
      ? setInputCheckAll(true)
      : setInputCheckAll(false);
  }, [inputName, inputId, inputPassword, inputPasswordCheck, errorMsgcolor]);

  // 가입하기
  const userRegister = (e) => {
    e.preventDefault();
    console.log('user click register');
  };

  return (
    <>
      <RegisterHeader />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Link href="/">
          <h1>로고</h1>
        </Link>
        {errorMsgcolor ? (
          <p style={{ color: '#043BFD' }}>{errorMsg}</p>
        ) : (
          <p style={{ color: 'red' }}>{errorMsg}</p>
        )}
        <div style={{ maxWidth: '400px' }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                id={'name'}
                ref={inputRef}
                autoComplete="off"
                onChange={checkRegex}
                value={inputName}
                placeholder="이름"
              />
            </Form.Group>
            <div>
              <Form.Group className="mb-3" style={{ display: 'flex' }}>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  id={'id'}
                  onChange={checkRegex}
                  value={inputId}
                  placeholder="아이디"
                />
                <ButtonStyle
                  id={'id'}
                  value={inputId}
                  color={`${inputId ? '#18A0FB' : '#646464'}`}
                  onClick={checkRegex}
                >
                  중복확인
                </ButtonStyle>
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                id={'password'}
                onChange={checkRegex}
                value={inputPassword}
                autoComplete="off"
                placeholder="비밀번호"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                id={'passwordCheck'}
                onChange={checkRegex}
                value={inputPasswordCheck}
                autoComplete="off"
                placeholder="비밀번호 확인"
              />
            </Form.Group>
            <p>
              비밀번호는 영문 대/소문자, 특수문자, 숫자가 포함된<br></br>
              8자리 이상의 번호로 설정해주세요.
            </p>
            <ButtonStyle
              color={`${
                inputCheckAll && errorMsg === '' ? '#18A0FB' : '#646464'
              }`}
              type="submit"
              onClick={(e) => userRegister(e)}
            >
              완료
            </ButtonStyle>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Register;
