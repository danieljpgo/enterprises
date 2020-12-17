import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body, html {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea, select {

  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6{
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul {
    list-style: none;
  }

  legend{
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
`;

// @TODO pensar se devo manter o padrão de exportação nomial ou usar export default