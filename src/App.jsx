import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './globalStyle';
import Header from './sections/Header';
import Body from './sections/Body';

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Router>
      <Header />
      <Body />
    </Router>
  </Container>
);

export default App;
