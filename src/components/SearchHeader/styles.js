import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1376px;
  margin-bottom: 32px;

  input {
    width: 480px;
    height: 64px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[300]};
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.gray[100]};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};
    border: 2px solid transparent;
    transition: border-color ${({ theme }) => theme.transition};
    outline: none;

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
