import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-X: hidden;
  }

  body {
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    font-family: Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    letter-spacing: 0;
    background-color: #151515;
    color: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }

  button,
  a {
    background-color: transparent;
    outline: none;
    text-decoration: none;
    border: none;
    color: #fff;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
