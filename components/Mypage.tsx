import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';

interface IUser {
  id: number;
  name?: string;
  login_id: string;
  email: string;
  phone?: string;
}

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<any[]>();
  console.log('userInfo', userInfo);
  // const dispath = useDispatch<AppDispatch>();
  // const { login_id, name, phone } = useSelector((state: IUser) => state);

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
      <div>
        {userInfo?.map((user: IUser) => (
          <>
            <div>아이디: {user.login_id}</div>
            <div>이름: {user.name}</div>
            <div>메일: {user.email}</div>
            <div>휴대폰: {user.phone}</div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Mypage;
