import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-image: url('/images/background.svg');
    background-size: cover;
  }
`;

export default GlobalStyle