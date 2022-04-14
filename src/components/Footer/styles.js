import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  padding: 0 60px;
  background: ${({ theme }) => theme.colors.primary.main};
  border-top-left-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};
  border-top-right-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};

  span {
    color: ${({ theme }) => theme.colors.gray[100]};
    margin-right: 24px;
  }

  img:first-of-type {
    margin-right: 16px;
    transition: transform ${({ theme }) => theme.transition};

    &:hover {
      transform: ${({ theme }) => theme.moreScale};
    }
  }
`;
