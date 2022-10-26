import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IAuth } from '../redux/reducers/authReducer';

interface IGetAuthData {
  auth: {
    login_id: string | null;
    name: string | null;
    phone: string | null;
    error: object | null;
  };
}

const Mypage = () => {
  // const [userInfo, setUserInfo] = useState([]);
  // console.log('userInfo', userInfo);
  const { login_id, name, phone }: IAuth = useSelector(
    (state: IGetAuthData) => state.auth,
  );

  return (
    <section>
      <h1>지금 유저정보는 더미데이터.. 나중에 db에서 가져와야함</h1>
      <div>아이디: {login_id}</div>
      <div>이름: {name}</div>
      <div>휴대폰: {phone}</div>
    </section>
  );
};

export default Mypage;
