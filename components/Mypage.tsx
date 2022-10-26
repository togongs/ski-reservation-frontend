import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth } from '../redux/reducers/authReducer';
import { AppDispatch } from '../redux/store';

interface IGetAuthData {
  auth: {
    login_id: string | null;
    name: string | null;
    phone: string | null;
    error: object | null;
  };
}

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log('userInfo', userInfo);
  // const dispath = useDispatch<AppDispatch>();
  const { login_id, name, phone }: IAuth = useSelector(
    (state: IGetAuthData) => state.auth,
  );
  console.log('login_id', login_id);

  const getUserInfo = useCallback(async () => {
    // 백엔드 api로 유저정보 가져오면 됨
    const url = '/data/db.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const users = data.users;
    setUserInfo(users);
    // dispath(getAllProducts(productList));
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <section>
      <h1>지금 유저정보는 더미데이터.. 나중에 db에서 가져와야함</h1>
      <div>
        <>
          <div>아이디: {login_id}</div>
          <div>이름: {name}</div>
          <div>휴대폰: {phone}</div>
        </>
      </div>
    </section>
  );
};

export default Mypage;
