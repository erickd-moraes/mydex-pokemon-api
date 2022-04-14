import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;

  button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: ${({ theme }) => theme.colors.gray[100]};
      border: none;
      border-radius: ${({ theme }) => `${theme.smallBorderRadius}px`};
      box-shadow: ${({ theme }) => theme.boxShadow};
      transition: transform ${({ theme }) => theme.transition};

      &:hover {
        transform: ${({ theme }) => theme.moreScale};
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
        transform: ${({ theme }) => theme.lessScale};
      }

      &:last-of-type {
        margin-left: 8px;

        img {
          transform: rotate(180deg);
        }
      }
    }
`;
