import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import { Container } from './styles';

export default function SearchFooter({
  disabled,
  prevNavigation,
  nextNavigation,
}) {
  return (
    <Container>
      <Navigation
        disabled={disabled}
        prevNavigation={prevNavigation}
        nextNavigation={nextNavigation}
      />
    </Container>
  );
}

SearchFooter.propTypes = {
  prevNavigation: PropTypes.func.isRequired,
  nextNavigation: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
