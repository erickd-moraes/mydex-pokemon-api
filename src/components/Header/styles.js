import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  width: calc(100% - 120px);
  height: 120px;
  margin: auto;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 32px;
`;
