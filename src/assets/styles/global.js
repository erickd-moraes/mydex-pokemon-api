import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  button {
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
