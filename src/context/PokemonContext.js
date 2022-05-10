import PropTypes from 'prop-types';
import {
  createContext, useState, useCallback, useEffect, useMemo,
} from 'react';

import PokemonService from '../services/PokemonService';

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [basePokemons, setBasePokemons] = useState([]);
  const [listPokemons, setListPokemons] = useState([]);
  const [previousPokemons, setPreviousPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const loadPokemons = useCallback(async () => {
    try {
      setIsLoading(true);

      const requestPokemons = await PokemonService.listPokemons();
      setPreviousPokemons(requestPokemons.previous);
      setNextPokemons(requestPokemons.next);

      setBasePokemons(requestPokemons);

      if (requestPokemons.results !== undefined) {
        const requestPokemonsDetails = (
          await PokemonService.listPokemonsDetails(requestPokemons.results)
        );

        setListPokemons(requestPokemonsDetails);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const handlePreviousLoadPokemons = useCallback(async () => {
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

    setListPokemons(listPrevPokemonsDetails);
    setPreviousPokemons(listPrevPokemons.previous);
    setNextPokemons(listPrevPokemons.next);
    setIsLoading(false);
  }, [previousPokemons]);

  const handleNextLoadPokemons = useCallback(async () => {
    setIsLoading(true);

    const getURLSearch = new URL(nextPokemons);

    const listNextPokemons = (
      await PokemonService.listPokemons(`/pokemon${getURLSearch.search}`)
    );
    const nextPokemonsURL = listNextPokemons.results;

    const listNextPokemonsDetails = (
      await PokemonService.listPokemonsDetails(nextPokemonsURL)
    );

    setListPokemons(listNextPokemonsDetails);
    setNextPokemons(listNextPokemons.next);
    setPreviousPokemons(listNextPokemons.previous);
    setIsLoading(false);
  }, [nextPokemons]);

  const memorizedPokemonContext = useMemo(() => (
    {
      basePokemons,
      previousPokemons,
      nextPokemons,
      isloading,
      listPokemons,
      onPreviousLoadPokemons: handlePreviousLoadPokemons,
      onNextLoadPokemons: handleNextLoadPokemons,
    }
  ), [basePokemons,
    previousPokemons,
    nextPokemons,
    isloading,
    listPokemons,
    handlePreviousLoadPokemons,
    handleNextLoadPokemons,
  ]);

  return (
    <PokemonContext.Provider value={memorizedPokemonContext}>
      {children}
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
