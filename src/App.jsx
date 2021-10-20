import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './globalStyle';
import Header from './sections/Header';
import Body from './sections/Body';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
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
