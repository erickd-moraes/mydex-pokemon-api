import { useContext } from 'react';

import arrow from '../../assets/images/icons/arrow.svg';
import { PokemonContext } from '../../context/PokemonContext';

import { Container } from './styles';

export default function Navigation() {
  const {
    previousPokemons,
    nextPokemons,
    onPreviousLoadPokemons,
    onNextLoadPokemons,
  } = useContext(PokemonContext);

  return (
    <Container>
      <button
        type="button"
        disabled={!previousPokemons}
        onClick={onPreviousLoadPokemons}
      >
        <img src={arrow} alt="seta pra esquerda" />
      </button>

      <button
        type="button"
        disabled={!nextPokemons}
        onClick={onNextLoadPokemons}
      >
        <img src={arrow} alt="seta pra direita" />
      </button>
    </Container>
  );
}
