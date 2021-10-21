import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  height: ${({ size }) => (size === 'small' ? '20' : '30')}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
  filter: invert(15%) sepia(0%) saturate(192%) hue-rotate(183deg) brightness(100%) contrast(85%);
  border-radius: 3px;
  margin: 2px;
  padding: 3px;

  img {
    height: 10px;
  }

  span {
    margin-left: 3px;
    font-size: 10px;
  }

  &:hover {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(322deg) brightness(118%) contrast(102%);
  }
`;

const ButtonSquare = ({ size, source, added }) => (
  <Button size={size}>
    <img src={source} alt="imagedesc" />
    {added && <span>{added}</span>}
  </Button>
);

export default ButtonSquare;
