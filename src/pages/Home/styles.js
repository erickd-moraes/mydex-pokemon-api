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

export const ListPokemonsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1376px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};
  padding: 64px 32px;
`;

export const Filter = styled.section`
  width: 364px;
  height: 600px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};
  margin-left: 60px;
`;
