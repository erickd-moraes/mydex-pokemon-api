import styled from 'styled-components';

export const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(256px - 32px);
  padding: 24px;
  margin: 0 16px;
  margin-bottom: 32px;
  border-radius: 24px;
  border: 3px solid transparent;
  transition: transform .2s ease-in;

  &:hover {
    transform: scale(1.05)
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    transform: translateX(50%);
    width: 100%;
    height: 100%;
    background: ${({ theme, backgroundColor }) => theme.colors.pokemonTypes[backgroundColor]};
    border-radius: 24px;
    opacity: 0.5;
    z-index: -1;
  }

  img {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }

  strong {
    font-size: 20px;
    text-transform: capitalize;
    margin-top: 24px;
  }

  .type {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`;

export const Type = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 32px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFF;
  background: ${({ theme, typeNameColor }) => theme.colors.pokemonTypes[typeNameColor]};
  border-radius: 8px;

  &:first-of-type {
    margin-right: 16px;
  }
`;
