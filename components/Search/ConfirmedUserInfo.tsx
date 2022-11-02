import Link from 'next/link';
import React from 'react';
import ButtonStyle from '../Button/ButtonStyle';
import styled from 'styled-components';

export const UserInfoBox = styled.div`
  background-color: #18a0fb;
  color: #fff;
  height: 70px;
`;

const ConfirmedUserInfo = ({ label }: any) => {
  return (
    <section>
      <h3>고객님의 정보와 일치하는 {label} 입니다.</h3>
      <UserInfoBox>
        {/* 아이디/비밀번호 뒷자리 3자리 ***표시하기 해야함 */}
        <span>{label}: who??</span>
      </UserInfoBox>
      {label === '아이디' && <div>비밀번호를 잊으셨나요?</div>}

      <Link href="/login">
        <a>
          <ButtonStyle color="#18A0FB">로그인</ButtonStyle>
        </a>
      </Link>
    </section>
  );
};

export default ConfirmedUserInfo;
