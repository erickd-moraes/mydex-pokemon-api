import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Type } from './styles';

import thumbError from '../../assets/images/thumb-error.svg';

export default function PokemonCard({ pokemon }) {
  const thumbPokemon = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <Link to={`/pokedex/${pokemon.name}`}>
      <Card backgroundColor={pokemon.types[0].type.name}>
        <img
          width="176"
          height="186"
          src={thumbPokemon || thumbError}
          alt={pokemon.name}
        />

        <strong>{pokemon.name}</strong>

        <div className="type">
          {pokemon.types.map((type) => (
            <Type
              key={type.slot}
              typeNameColor={type.type.name}
            >
              {type.type.name}
            </Type>
          ))}
        </div>
      </Card>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        'official-artwork': PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
    types: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};
