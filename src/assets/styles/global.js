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
    background: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  button {
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
