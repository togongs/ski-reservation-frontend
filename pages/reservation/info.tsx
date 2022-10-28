import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

const Lessoninfo = () => {
  const router = useRouter();
  const pid = router.query.pid;
  console.log('pid', pid);
  return (
    <Container>
      <Header />
      강습예약 상세페이지 상품{pid}
    </Container>
  );
};

export default Lessoninfo;
