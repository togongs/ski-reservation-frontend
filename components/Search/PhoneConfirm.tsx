import Link from 'next/link';
import React, { useCallback, useState, useEffect } from 'react';
import ButtonStyle from '../Button/ButtonStyle';
import Timer from '../Timer';

const NUMBER_REGEX = /[^0-9]/g;
const PHONE_REGEX = /(\d{3})(\d{4})(\d)/;

const PhoneConfirm = ({ handleComponent, label }: any) => {
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const [inputPhone, setInputPhone] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);
  const [confirmNumber, setConfirmNumber] = useState<string>('');

  const checkRegex = useCallback((e: any) => {
    let value = e.target.value;
    let result;
    let regex;
    console.log('e.target.id', e.target.id);
    switch (e.target.id) {
      case 'phone':
        value = value.replace(NUMBER_REGEX, '');
        value = value.replace(PHONE_REGEX, '$1-$2-$3');
        result = value.slice(0, 13);
        setInputPhone(result);
        break;
      default:
        return;
    }
  }, []);

  const toggleTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsvisible(true);
    setReset(true);
  };

  return (
    <>
      <Link href="/termsconfirm">
        <a>
          <h3>휴대폰 본인확인</h3>
        </a>
      </Link>
      <div style={{ border: '1px solid black', padding: '20px 0' }}>
        <div style={{ borderBottom: '1px solid black' }}>
          <input
            type="text"
            placeholder="휴대폰 번호 입력"
            style={{ border: 'none' }}
            onChange={checkRegex}
            id={'phone'}
            value={inputPhone}
          />
        </div>
        <div>
          <ButtonStyle
            color={reset ? '#18A0FB' : '#646464'}
            onClick={(e: any) => toggleTimer(e)}
          >{`${reset ? `재요청` : `인증`}`}</ButtonStyle>
          {isVisible && <Timer />}
          <input
            type="number"
            placeholder="인증번호"
            style={{ border: 'none' }}
            value={confirmNumber}
            onChange={(e) => setConfirmNumber(e.target.value)}
          />
        </div>
      </div>
      <p>
        <b>{label} 찾기는 번호 인증을 한 회원님만 이용이 가능</b>한
        서비스입니다. <br></br>번호 인증을 하지 않았을 경우에는 {label}를 찾기
        어렵습니다.
      </p>
      <ButtonStyle
        onClick={handleComponent}
        color={confirmNumber && inputPhone ? '#18A0FB' : '#646464'}
      >
        계속하기
      </ButtonStyle>
    </>
  );
};

export default PhoneConfirm;
