import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-image: url('/images/background.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle