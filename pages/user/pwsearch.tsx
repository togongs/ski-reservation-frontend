import React from 'react';
import { Form } from 'react-bootstrap';

const PwSearch = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>휴대전화</Form.Label>
        <div style={{ display: 'flex' }}>
          <Form.Control type="text" placeholder="휴대전화" />
          <button>인증번호 받기</button>
        </div>
        <Form.Control type="text" placeholder="인증번호" autoComplete="off" />
        <button>다음</button>
      </Form.Group>
    </>
  );
};

export default PwSearch;
