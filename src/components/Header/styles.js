import styled from 'styled-components';

export const Container = styled.header`
  width: calc(100% - 120px);
  height: 120px;
  margin: auto;
  margin-top: 32px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 32px;
`;
