import React, { useCallback, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const NUMBER_REGEX = /[^0-9]/g;
const PHONE_REGEX = /(\d{3})(\d{4})(\d)/;

const IdSearch = () => {
  const [inputPhone, setInputPhone] = useState('');

  const checkRegex = useCallback((e: any) => {
    let value = e.target.value;
    let result;
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

  return (
    <Container>
      <Form.Group className="mb-3">
        <div style={{ display: 'flex' }}>
          <Form.Control
            type="text"
            placeholder="휴대전화"
            onChange={checkRegex}
            id={'phone'}
            value={inputPhone}
            autoComplete="off"
          />
          <button>인증번호 받기</button>
        </div>
        <Form.Control type="text" placeholder="인증번호" autoComplete="off" />
        <button>다음</button>
      </Form.Group>
    </Container>
  );
};

export default IdSearch;
