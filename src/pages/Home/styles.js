import styled from 'styled-components';

export const Container = styled.div`
  margin: 128px 60px;

  .content {
    display: flex;
  }
`;

export const FindPokemons = styled.section`
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
    border-radius: 32px;
    border: 2px solid transparent;
    transition: border-color .2s ease-in;
    outline: none;

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .navigation {
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

      &:last-of-type {
        margin-left: 8px;

        img {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const ListPokemonsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1376px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 32px;
  padding: 64px 32px;
`;

export const Filter = styled.section`
  width: 364px;
  height: 600px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 32px;
  margin-left: 60px;
`;
