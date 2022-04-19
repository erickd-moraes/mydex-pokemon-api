import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PokemonService from '../../services/PokemonService';

export default function PokemonDetails() {
  const params = useParams();
  const pokemonName = params.id;

  const [pokemonDetails, setPokemonsDetails] = useState([]);

  useEffect(() => {
    async function loadPokemonDetails() {
      try {
        const data = await PokemonService.listPokemons(`/pokemon/${pokemonName}`);
        setPokemonsDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemonDetails();
  }, [pokemonName]);

  return (
    <h1>{pokemonDetails.name}</h1>
  );
}
