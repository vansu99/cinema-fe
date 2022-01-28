import { colors } from './colors'
import { typography } from './typography'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    font-size: 62.5%;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${typography.family.base}
    color: ${colors.textWhite};
    background-color: ${colors.bodyColor};
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }
  .d-flex {
    display: flex;
  }
`;

export default GlobalStyle;
