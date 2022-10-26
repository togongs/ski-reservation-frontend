import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, authData, logout } from '../redux/reducers/authReducer';
import { AppDispatch } from '../redux/store';

type IState = {
  auth: {
    authenticate: boolean;
    login_id: string;
    password: string;
  };
};
const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { authenticate, login_id }: authData = useSelector(
    (state: IState) => state.auth,
  );

  const logOut = () => {
    console.log('user click logout');
    localStorage.clear();
    dispatch(logout({ login_id: '', password: '', authenticate: false }));
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
      dispatch(login({ login_id: id, authenticate: true, password: '' }));
    }
  }, [authenticate, dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/reservation">강습 예약</Nav.Link>
            <Nav.Link href="/reservationinfo">예약조회</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {authenticate ? (
              <>
                <Nav.Link href="/login">{login_id}님 환영합니다.</Nav.Link>
                <Nav.Link onClick={logOut}>로그아웃</Nav.Link>
                <Nav.Link href="/user/mypage">마이페이지</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">로그인</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="/">LOGO</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">강습 예약</Nav.Link>
    //         <Nav.Link href="/">예약조회</Nav.Link>
    //         <Nav.Link href="/login">로그인</Nav.Link>
    //         <Nav.Link href="/mypage">마이페이지</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
