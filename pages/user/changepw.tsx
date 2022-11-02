import React, { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import ButtonStyle from '../../components/Button/ButtonStyle';
import Footer from '../../components/Footer';
import ChangePwHeader from '../../components/Header/ChangePwHeader';
import { UserInfoBox } from '../../components/Search/ConfirmedUserInfo';
import PhoneConfirm from '../../components/Search/PhoneConfirm';

const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

const ERROR_MSG = {
  invalidPw: '아래 조건을 만족하는 비밀번호를 작성해주세요',
  invalidPwCheck: '비밀번호가 일치하지 않습니다',
};

const ChangePw = () => {
  const [changeComponent, setChangeComponent] = useState<boolean>(false);
  const [inputNewPw, setInputNewPw] = useState<string>('');
  const [checkNewPw, setcheckNewPw] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // 유효성 검사
  const checkRegex = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      let regex;
      let result;
      switch (e.target.id) {
        // 1. DB에 원래 pw랑 같을때 가드 해줘야함
        case 'password':
          setInputNewPw(value);
          regex = PW_REGEX;
          result = regex.test(value);
          if (value !== '' && !result) {
            setErrorMsg(ERROR_MSG.invalidPw);
          } else {
            setErrorMsg('');
          }
          break;
        case 'passwordCheck':
          setcheckNewPw(value);
          // pw랑 같은지 비교
          value = value.replace(inputNewPw, '');
          if (value !== '' && !result) {
            setErrorMsg(ERROR_MSG.invalidPwCheck);
          } else {
            setErrorMsg('');
          }
          break;
        default:
          return;
      }
    },
    [inputNewPw],
  );

  const handleComponent = () => {
    setChangeComponent(true);
  };
  return (
    <>
      <ChangePwHeader />
      <h3>새로운 비밀번호를 입력해주세요</h3>
      {!changeComponent ? (
        <PhoneConfirm label={`비밀번호`} handleComponent={handleComponent} />
      ) : (
        <>
          <UserInfoBox>
            {/* 아이디/비밀번호 뒷자리 3자리 ***표시하기 해야함 */}
            <span>아이디 : who??</span>
          </UserInfoBox>
          <p style={{ color: 'red' }}>{errorMsg}</p>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            value={inputNewPw}
            id={'password'}
            onChange={checkRegex}
          />
          <Form.Control
            type="password"
            placeholder="새 비밀번호 확인"
            value={checkNewPw}
            id={'passwordCheck'}
            onChange={checkRegex}
          />
          <p>
            비밀번호는 영문 대/소문자, 특수문자, 숫자가 포함된<br></br> 8자리
            이상의 번호로 설정해주세요.
          </p>
          <ButtonStyle
            color={`${
              inputNewPw === checkNewPw && inputNewPw && checkNewPw
                ? '#18A0FB'
                : '#646464'
            }`}
            type="submit"
            style={{ width: '100%' }}
          >
            비밀번호 재설정하기
          </ButtonStyle>
        </>
      )}
      <Footer />
    </>
  );
};

export default ChangePw;
