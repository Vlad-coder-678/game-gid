import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Main from '../components/Main';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Home = () => (
  <Wrap>
    <NavBar />
    <Main />
  </Wrap>
);

export default Home;
