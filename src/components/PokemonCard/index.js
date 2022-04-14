import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Type } from './styles';

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/${pokemon.name}`}>
      <Card backgroundColor={pokemon.types[0].type.name}>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
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
          front_default: PropTypes.string.isRequired,
        }),
      }),
    }),
    types: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};
