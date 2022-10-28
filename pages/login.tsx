import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Form, Container, Row, Col, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authReducer';
import Header from '../components/Header';
import axios from 'axios';
import { AppDispatch } from '../redux/store';

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InnerBox = styled.div`
  width: 500px;
`;
const LinkTag = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const InputBox = styled.div`
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ID_REGEX = /^[a-z0-9_-]{5,20}$/;
const PW_REGEX = /^[a-zA-Z0-9]{8,16}$/;

const ERROR_MSG = {
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
};

const Login = () => {
  const [inputId, setInputId] = useState<string>(''); // 커스텀 에러메세지
  const [inputPw, setInputPw] = useState<string>(''); // 커스텀 에러메세지
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('click user login');
    saveToken();
    localStorage.setItem('id', inputId);
    // 백엔드 api로 유저 정보 저장
    dispatch(
      login({
        login_id: inputId,
        password: inputPw,
        authenticate: true,
        error: null,
      }),
    );
    router.push('/');
  };

  const saveToken = async () => {
    const url = '/data/db.json';
    // 나중에 axios로 대체
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const token = data.data.token;
    console.log('token', token);
    localStorage.setItem('token', token);
    setToken(token);
  };

  // const getUserData = async () => {
  //   const data = await axios.post('http://ski-user-backend/api/login');
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // 유효성 검사
  const checkRegex = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let regex;
    let result;
    switch (e.target.id) {
      case 'id':
        setInputId(value);
        regex = ID_REGEX;
        result = regex.test(value);
        if (value !== '' && !result) {
          setErrorMsg(ERROR_MSG.invalidId);
        } else {
          setErrorMsg('');
        }
        break;
      case 'password':
        setInputPw(value);
        regex = PW_REGEX;
        result = regex.test(value);
        if (value !== '' && !result) {
          setErrorMsg(ERROR_MSG.invalidPw);
        } else {
          setErrorMsg('');
        }
        break;
      default:
        return;
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SectionBox>
          <Link href="/">
            <h1>로고</h1>
          </Link>
          <InnerBox>
            <InputBox>
              <Form onSubmit={(e) => loginUser(e)}>
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="아이디"
                  value={inputId}
                  id={'id'}
                  onChange={checkRegex}
                />
                <Form.Control
                  type="password"
                  placeholder="비밀번호"
                  value={inputPw}
                  id={'password'}
                  onChange={checkRegex}
                />
                <div>{errorMsg}</div>
                <Button variant="secondary" type="submit">
                  로그인
                </Button>
              </Form>
            </InputBox>

            <LinkTag>
              <Link href="/user/idsearch">
                <a>아이디 찾기</a>
              </Link>
              <Link href="/user/pwsearch">비밀번호 찾기</Link>
              <Link href="/register">회원가입</Link>
            </LinkTag>
          </InnerBox>
        </SectionBox>
      </Container>
    </>
  );
};

export default Login;
