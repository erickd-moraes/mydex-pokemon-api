/* eslint-disable react/prop-types */
import arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export default function Navigation({ disabled, prevNavigation, nextNavigation }) {
  return (
    <Container>
      <button type="button" disabled={disabled} onClick={prevNavigation}>
        <img src={arrow} alt="seta pra esquerda" />
      </button>
      <button type="button" onClick={nextNavigation}>
        <img src={arrow} alt="seta pra direita" />
      </button>
    </Container>
  );
}
