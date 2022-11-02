import React, { useCallback, useState, useEffect } from 'react';
import SearchHeader from '../../components/Header/SearchHeader';
import { Form, Container, Modal } from 'react-bootstrap';
import { Tabs } from 'antd';
import Footer from '../../components/Footer';
import ButtonStyle from '../../components/Button/ButtonStyle';
import PhoneConfirm from '../../components/Search/PhoneConfirm';
import ConfirmedUserInfo from '../../components/Search/ConfirmedUserInfo';

const SearchIdPassword = () => {
  const [isVisible, setIsvisible] = useState(false);
  const [inputName, setInputName] = useState<string>('');
  const [inputId, setInputId] = useState<string>('');
  const [reset, setReset] = useState(false);
  const [changeComponent, setChangeComponent] = useState<boolean>(false);
  const [changeComponentPw, setChangeComponentPw] = useState<boolean>(false);

  const checkRegex = useCallback((e: any) => {
    const value = e.target.value;
    let result;
    let regex;
    console.log('e.target.id', e.target.id);
    switch (e.target.id) {
      case 'name':
        setInputName(value);
        // regex = NAME_REGEX;
        // result = regex.test(value);
        // if (value !== '' && !result) {
        //   setErrorMsgName(ERROR_MSG.invalidName);
        // } else {
        //   setErrorMsgName('');
        // }
        break;
      case 'id':
        // 1. 이미 등록된 아이디인지 검사 로직 해야함
        setInputId(value);
        // regex = ID_REGEX;
        // result = regex.test(value);
        // if (value !== '' && !result) {
        //   setErrorMsgId(ERROR_MSG.invalidId);
        // } else {
        //   setErrorMsgId('사용 가능한 아이디입니다.');
        // }
        break;
      default:
        return;
    }
  }, []);

  const handleComponent = () => {
    setChangeComponent(true);
    // 휴대폰 인증이 됐다면
    if (changeComponent) {
      // 비밀번호 컴포넌트
      setChangeComponentPw(true);
    }
  };

  return (
    <>
      <SearchHeader />
      <Container>
        <Tabs defaultActiveKey="1" size={'large'}>
          <Tabs.TabPane tab="아이디 찾기" key="1">
            {!changeComponent ? (
              // 휴대폰 본인확인
              <PhoneConfirm
                handleComponent={handleComponent}
                label={`아이디`}
              />
            ) : (
              <ConfirmedUserInfo label={'아이디'} />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab="비밀번호 찾기" key="2">
            {!changeComponent ? (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="이름"
                    id={'name'}
                    value={inputName}
                    onChange={checkRegex}
                  />
                  <Form.Control
                    type="text"
                    placeholder="아이디"
                    id={'id'}
                    value={inputId}
                    onChange={checkRegex}
                  />
                </Form.Group>
                <ButtonStyle
                  onClick={handleComponent}
                  color={inputName && inputId ? '#18A0FB' : '#646464'}
                >
                  계속하기
                </ButtonStyle>
              </Form>
            ) : (
              <>
                {!changeComponentPw ? (
                  <PhoneConfirm
                    handleComponent={handleComponent}
                    label={`비밀번호`}
                  />
                ) : (
                  <ConfirmedUserInfo label={'비밀번호'} />
                )}
              </>
            )}
          </Tabs.TabPane>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default SearchIdPassword;
