import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Controls from './Controls';
import Content from './Content';

const Wrap = styled.div``;

const Main = () => (
  <Wrap>
    <Title />
    <Controls />
    <Content />
  </Wrap>
);

export default Main;
