import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, IAuth } from '../redux/reducers/authReducer';
import { AppDispatch } from '../redux/store';
import { BsPersonFill } from 'react-icons/bs';

interface IGetAuthData {
  auth: {
    login_id: string | null;
    password: string | null;
    authenticate: boolean;
    error: object | null;
  };
}
const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { authenticate, login_id }: IAuth = useSelector(
    (state: IGetAuthData) => state.auth,
  );

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
    // <Navbar collapseOnSelect expand="lg">
    <Navbar expand="lg" style={{ borderBottom: '1px solid lightgray' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Brand href="/">
          <div
            className="lsssa"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsPersonFill />
            <span style={{ fontSize: '12px' }}>로그인/회원가입</span>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/reservation">브랜드 소개</Nav.Link>
            <Nav.Link href="/reservation">강습예약</Nav.Link>
            <Nav.Link href="/reservation">강사진 소개</Nav.Link>
            <Nav.Link href="/reservation">NFT 수료증 발행 안내</Nav.Link>
            <Nav.Link href="/reservation">마이페이지(예약조회)</Nav.Link>
            <Nav.Link href="/reservation">자주 묻는 질문</Nav.Link>
          </Nav>
          {/* <Nav>
            {authenticate ? (
              <>
                <Nav.Link onClick={logOut}>로그아웃</Nav.Link>
                <Nav.Link href="/user/mypage">마이페이지</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">로그인</Nav.Link>
            )}
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
