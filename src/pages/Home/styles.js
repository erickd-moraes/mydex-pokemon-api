import styled from 'styled-components';

export const Container = styled.main`
  margin: 128px 60px;

  .content {
    display: flex;
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

export const Filter = styled.aside`
  width: 364px;
  height: 600px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => `${theme.largeBorderRadius}px`};
  margin-left: 60px;
`;
