import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BsArrowLeft, BsHouseDoor } from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';
import { Drawer } from 'antd';

const SearchHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // 메뉴의 초기값을 false로 설정
  const router = useRouter();

  const toggleSide = () => {
    console.log('isOpen', isOpen);
    setIsOpen((isOpen) => !isOpen); // on,off 개념 boolean
  };

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
          <div onClick={() => router.back()}>
            <BsArrowLeft />
          </div>
          <ul>
            <li></li>
          </ul>
          <div>아이디/비밀번호 찾기</div>
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
            <Link href="/">
              <BsHouseDoor />
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

export default SearchHeader;
