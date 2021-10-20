import React from 'react';
import styled from 'styled-components';

const Wrap = styled.a`
  max-width: 590px;
  display: flex;
  flex-direction: row;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  @media screen and (max-width: 768px) {
    max-width: 290px;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  position: relative;
  width: 30%;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 90%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    max-width: 290px;
    height: 300px;
    width: 90%;
  }
`;

const RightContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

// eslint-disable-next-line object-curly-newline
const Card = ({ img, title, desc, path }) => (
  <Wrap href={path}>
    <LeftContent>
      <img src={img} alt={title} />
    </LeftContent>
    <RightContent>
      <h2>{title}</h2>
      <p>{desc}</p>
    </RightContent>
  </Wrap>
);

export default Card;
