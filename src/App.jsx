import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./globalStyle";
import Body from "./sections/Body";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Body />
    </Router>
  </>
);

export default App;
