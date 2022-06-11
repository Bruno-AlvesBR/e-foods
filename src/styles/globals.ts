import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    list-style: none;
  };

  body {
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: #aaaaaa30;
    color: 2c;
  };
`;
