import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
  color: #fff;
  background-color: ${(prev) => prev.color};
  border-color: ${(prev) => prev.color};
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

const ButtonStyle = ({ ...props }: any) => {
  return <Buttons {...props}></Buttons>;
};

export default ButtonStyle;
