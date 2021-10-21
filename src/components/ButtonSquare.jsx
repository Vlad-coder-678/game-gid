import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  ${({ size }) => size === 'small' && 'width: auto;'}
  ${({ size }) => size === 'medium' && 'width: 30px;'}
  height: ${({ size }) => (size === 'small' ? '20' : '30')}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
  ${({ size }) => size !== 'big' && 'filter: invert(15%) saturate(192%) hue-rotate(183deg) contrast(85%);'}
  border-radius: 3px;
  margin: 2px;
  padding: 3px;

  img {
    ${({ size }) => size === 'small' && 'height: 10px;'}
    ${({ size }) => size === 'medium' && 'height: 15px;'}
    ${({ size }) => size === 'big' && 'height: 30px;'}
  }

  span {
    margin-left: 3px;
    font-size: 10px;
  }

  &:hover {
    ${({ size }) => size !== 'big' && 'filter: invert(100%) saturate(7500%) hue-rotate(322deg) brightness(118%);'}
  }
`;

const ButtonSquare = ({ size, source, added }) => (
  <Button size={size}>
    <img src={source} alt="imagedesc" />
    {added && <span>{added}</span>}
  </Button>
);

export default ButtonSquare;
