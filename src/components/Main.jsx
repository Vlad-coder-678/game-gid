import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Controls from './Controls';
import Content from './Content';

const Wrap = styled.div`
  width: calc(100% - 200px);
`;

const Main = () => (
  <Wrap>
    <Title />
    <Controls />
    <Content />
  </Wrap>
);

export default Main;
