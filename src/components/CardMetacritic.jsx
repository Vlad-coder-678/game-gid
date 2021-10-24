import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 27px;
  height: 25px;
  top: 10px;
  right: 10px;
  font-size: 14px;
  font-weight: 900;
  background-color: transparent;
  color: #6dc849;
  border: 1px solid #6dc849;
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardMetacritic = ({ metacritic }) => <Wrap>{metacritic}</Wrap>;

export default CardMetacritic;
