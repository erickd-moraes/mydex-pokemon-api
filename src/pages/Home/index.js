import { useEffect, useState } from 'react';

import PokemonService from '../../services/PokemonService';

import PokemonCard from '../../components/PokemonCard';
import SearchHeader from '../../components/SearchHeader';
import SearchFooter from '../../components/SearchFooter';
import Loader from '../../components/Loader';

import { Container, ListPokemonsContainer, Filter } from './styles';

export default function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [previousPokemons, setPreviousPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);

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
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, []);

  const handlePreviousLoadPokemons = async () => {
    setIsLoading(true);

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
    setIsLoading(false);
  };

  const handleNextLoadPokemons = async () => {
    setIsLoading(true);

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
    setIsLoading(false);
  };

  return (
    <Container>
      <Loader isLoading={isloading} />

      <SearchHeader
        disabled={!previousPokemons}
        prevNavigation={handlePreviousLoadPokemons}
        nextNavigation={handleNextLoadPokemons}
      />

      <div className="content">
        <ListPokemonsContainer>
          {allPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ListPokemonsContainer>

        <Filter />
      </div>

      <SearchFooter
        disabled={!previousPokemons}
        prevNavigation={handlePreviousLoadPokemons}
        nextNavigation={handleNextLoadPokemons}
      />
    </Container>
  );
}
