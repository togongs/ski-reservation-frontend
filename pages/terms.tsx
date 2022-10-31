import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';

const Terms = () => {
  return (
    <button type="submit">
      <Link href="/register">
        <a>확인</a>
      </Link>
    </button>
  );
};

export default Terms;
