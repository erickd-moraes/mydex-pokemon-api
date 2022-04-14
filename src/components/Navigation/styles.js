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
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      transition: all .2s ease-in;

      &:hover {
        transform: scale(1.05);
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
        transform: scale(0.8);
      }

      &:last-of-type {
        margin-left: 8px;

        img {
          transform: rotate(180deg);
        }
      }
    }
`;
