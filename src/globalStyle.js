import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }
  
  html, body {
    width: 100%;
    height: 100%;
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
