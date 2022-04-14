import { useEffect, useState } from 'react';

import PokemonService from '../../services/PokemonService';
import PokemonCard from '../../components/PokemonCard';

import arrow from '../../assets/images/icons/arrow.svg';

import {
  Container, FindPokemons, ListPokemonsContainer, Filter,
} from './styles';

export default function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [previousPokemons, setPreviousPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const listPokemons = await PokemonService.listPokemons();
        const pokemonsURL = listPokemons.results;

        setPreviousPokemons(listPokemons.previous);
        setNextPokemons(listPokemons.next);

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

  async function handlePreviousLoadPokemons() {
    if (!previousPokemons) return;
    const getURLSearch = new URL(previousPokemons);

    const listPrevPokemons = (
      await PokemonService.listPokemons(`/pokemon${getURLSearch.search}`)
    );
    const prevPokemonsURL = listPrevPokemons.results;

    const listPrevPokemonsDetails = (
      await PokemonService.listPokemonsDetails(prevPokemonsURL)
    );

    setAllPokemons(listPrevPokemonsDetails);
    setPreviousPokemons(listPrevPokemons.previous);
    setNextPokemons(listPrevPokemons.next);
  }

  async function handleNextLoadPokemons() {
    const getURLSearch = new URL(nextPokemons);

    const listNextPokemons = (
      await PokemonService.listPokemons(`/pokemon${getURLSearch.search}`)
    );
    const nextPokemonsURL = listNextPokemons.results;

    const listNextPokemonsDetails = (
      await PokemonService.listPokemonsDetails(nextPokemonsURL)
    );

    setAllPokemons(listNextPokemonsDetails);
    setNextPokemons(listNextPokemons.next);
    setPreviousPokemons(listNextPokemons.previous);
  }

  return (
    <Container>
      <FindPokemons>
        <input type="text" placeholder="Procure pelo nome do seu Pokémon..." />

        <div className="navigation">
          <button type="button" onClick={handlePreviousLoadPokemons}>
            <img src={arrow} alt="seta pra esquerda" />
          </button>
          <button type="button" onClick={handleNextLoadPokemons}>
            <img src={arrow} alt="seta pra direita" />
          </button>
        </div>
      </FindPokemons>

      <div className="content">
        <ListPokemonsContainer>
          {allPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ListPokemonsContainer>

        <Filter />
      </div>
    </Container>
  );
}
