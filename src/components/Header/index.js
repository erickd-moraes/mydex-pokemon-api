import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import pokedex from '../../assets/images/icons/pokedex.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo pokémon" />
      </Link>

      <nav>
        <Link to="/pokedex">
          <img src={pokedex} alt="pokédex" />
          Pokédex
        </Link>
      </nav>
    </Container>
  );
}
