// vendor imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// local imports
// store
import store from "store/store";
// utilities
import reportWebVitals from "utilities/reportWebVitals";
// components
import App from "App";
// styles
import GlobalStyle from "globalStyle";

const root = ReactDOM.createRoot(document.getElementById("react"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
