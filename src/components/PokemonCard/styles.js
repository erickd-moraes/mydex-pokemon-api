import styled from 'styled-components';

export const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(256px - 32px);
  padding: 24px;
  margin: 0 16px;
  margin-bottom: 32px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    transform: translateX(50%);
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.pokemonTypes.fire};
    border-radius: 24px;
    opacity: 0.5;
    z-index: -1;
  }

  img {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  }

  strong {
    font-size: 20px;
    margin-top: 24px;
  }

  .type {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 32px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: #FFF;
      background: ${({ theme }) => theme.colors.pokemonTypes.fire};
      border-radius: 8px;

      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
`;
