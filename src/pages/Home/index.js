import { useEffect, useState } from 'react';

import PokemonService from '../../services/PokemonService';
import PokemonCard from '../../components/PokemonCard';

import arrow from '../../assets/images/icons/arrow.svg';

import {
  Container, FindPokemons, ListPokemonsContainer, Filter,
} from './styles';

export default function Home() {
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
    <Container>
      <FindPokemons>
        <input type="text" placeholder="Procure pelo nome do seu Pokémon..." />

        <div className="navigation">
          <button type="button">
            <img src={arrow} alt="seta pra esquerda" />
          </button>
          <button type="button">
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
