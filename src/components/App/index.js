import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import PokemonService from '../../services/PokemonService';

import PokemonCard from '../PokemonCard';

import { Container } from './styles';

export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const listPokemons = await PokemonService.listPokemons();
        const pokemonsURL = listPokemons.results;

        const listPokemonsDetails = (
          await PokemonService.listPokemonsDetails(pokemonsURL)
        );

        setAllPokemons(listPokemonsDetails);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemons();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        {allPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container>
    </ThemeProvider>
  );
}
