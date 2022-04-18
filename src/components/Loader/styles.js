import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(248, 248, 248, 0.6);

  img {
    opacity: 0.8;
    animation: ${rotation} 2s infinite;
  }
`;
