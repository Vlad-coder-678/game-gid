import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./utils/reportWebVitals";

import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("react17"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
