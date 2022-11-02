import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, IAuth } from '../../redux/reducers/authReducer';
import { AppDispatch } from '../../redux/store';
import { BsPersonFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import styled from 'styled-components';
import { Drawer } from 'antd';

interface IGetAuthData {
  auth: {
    login_id: string | null;
    password: string | null;
    authenticate: boolean;
    error: object | null;
  };
}

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // 메뉴의 초기값을 false로 설정
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { authenticate, login_id }: IAuth = useSelector(
    (state: IGetAuthData) => state.auth,
  );
  const toggleSide = () => {
    console.log('isOpen', isOpen);
    setIsOpen((isOpen) => !isOpen); // on,off 개념 boolean
  };
  const logOut = () => {
    console.log('user click logout');
    localStorage.clear();
    dispatch(
      logout({ login_id: '', password: '', authenticate: false, error: null }),
    );
    router.push('/');
  };

  // 로그인 유지
  useEffect(() => {
    // 리프레쉬 토큰은 localstorage에
    // 엑세스 토큰은 redux store에 저장하자
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    // console.log('token', token);
    if (token) {
      // login_id 보여주려면
      dispatch(
        login({ login_id: id, authenticate: true, password: '', error: null }),
      );
    }
  }, [authenticate, dispatch]);

  return (
    <>
      <Container>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70px',
          }}
        >
          <div id="toggle-btn">
            <AiOutlineMenu onClick={toggleSide} />
          </div>
          <ul>
            <li></li>
          </ul>
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <ul style={{ display: 'flex' }}>
            <li>
              <Link href="/reservation">
                <a>브랜드 소개</a>
              </Link>
            </li>
            <li>
              <Link href="/reservation">강습예약</Link>
            </li>
            <li>
              <Link href="/reservation">강사진 소개</Link>
            </li>
            <li>
              <Link href="/reservation">NFT 수료증 발행 안내</Link>
            </li>
            <li>
              <Link href="/reservation">마이페이지(예약조회)</Link>
            </li>
            <li>
              <Link href="/reservation">자주 묻는 질문</Link>
            </li>
          </ul>
          <div>
            <Link href="/login">
              <SignBox>
                <BsPersonFill />
                <span style={{ fontSize: '12px' }}>로그인/회원가입</span>
              </SignBox>
            </Link>
          </div>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={toggleSide}
            open={isOpen}
          >
            <p>
              <Link href="/reservation">강습예약</Link>
            </p>
            <p>
              <Link href="/reservation">강사진 소개</Link>
            </p>
            <p>
              <Link href="/reservation">NFT 수료증 발행 안내</Link>
            </p>
            <p>
              <Link href="/reservation">마이페이지(예약조회)</Link>
            </p>
            <p>
              <Link href="/reservation">자주 묻는 질문</Link>
            </p>
          </Drawer>
        </section>
      </Container>
    </>
  );
};

export default Header;
