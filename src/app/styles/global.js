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
    font-family: Roboto, Source Sans Pro;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.surface.background};
  }

  fieldset{
    border-width: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-block-end: 0px;
    padding-block-start: 0px;
    padding-inline-end: 0px;
    padding-inline-start: 0px;
    border-style: none;
    border-color: unset;
    border-image: none;
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

export const GlobalStylesForStorybook = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body, html {
    height: 100vh;
  }

  body {
    font-family: Roboto, Source Sans Pro;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  fieldset{
    border-width: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-block-end: 0px;
    padding-block-start: 0px;
    padding-inline-end: 0px;
    padding-inline-start: 0px;
    border-style: none;
    border-color: unset;
    border-image: none;
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
