import PropTypes from 'prop-types';

import Navigation from '../Navigation';

import { Container } from './styles';

export default function SearchHeader({
  disabled,
  prevNavigation,
  nextNavigation,
}) {
  return (
    <Container>
      <input type="text" placeholder="Procure pelo nome do seu Pokémon..." />

      <Navigation
        disabled={disabled}
        prevNavigation={prevNavigation}
        nextNavigation={nextNavigation}
      />
    </Container>
  );
}

SearchHeader.propTypes = {
  prevNavigation: PropTypes.func.isRequired,
  nextNavigation: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
