import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';

const Productinfo = () => {
  const router = useRouter();
  const pid = router.query.pid;
  console.log('pid', pid);
  return (
    <>
      <Header />
      강습예약 상세페이지 상품{pid}
    </>
  );
};

export default Productinfo;
