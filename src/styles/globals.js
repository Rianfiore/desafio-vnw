// Libs
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const ThemeContainer = ThemeProvider;

export const GlobalStyles = createGlobalStyle`

  
* {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }

  a {
    color: inherit;
  text-decoration: inherit;
  font-weight: 400;
  }
`;
