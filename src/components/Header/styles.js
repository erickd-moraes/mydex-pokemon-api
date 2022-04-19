import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 112px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 0 60px;

  nav {

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.gray[100]};
      font-weight: bold;
      transition: color ${({ theme }) => theme.transition};

      &:hover {
        color: ${({ theme }) => theme.colors.secondary.main};
      }

      img {
        margin-right: 8px;
      }
    }
  }
`;
