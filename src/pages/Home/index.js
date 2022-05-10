import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

import PokemonCard from '../../components/PokemonCard';
import SearchHeader from '../../components/SearchHeader';
import SearchFooter from '../../components/SearchFooter';
import Loader from '../../components/Loader';

import { Container, ListPokemonsContainer, Filter } from './styles';

export default function Home() {
  const { listPokemons, isloading } = useContext(PokemonContext);

  return (
    <Container>
      <Loader isLoading={isloading} />

      <SearchHeader />

      <div className="content">
        <ListPokemonsContainer>
          {listPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ListPokemonsContainer>

        <Filter />
      </div>

      <SearchFooter />
    </Container>
  );
}
