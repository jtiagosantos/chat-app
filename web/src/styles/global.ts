import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    letter-spacing: 1px;
  }

  html, body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  html {
    @media(max-width: 1000px) {
      font-size: 93.75%;
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%; 
    }
  }
  
  body {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.bunker};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: none;
  }

  input, textarea {
    outline: none;
    border: none;
  }
`;
