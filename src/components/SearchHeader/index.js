import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navigation from '../Navigation';

import search from '../../assets/images/icons/search.svg';

import { Container } from './styles';

export default function SearchHeader() {
  const history = useHistory();

  const [name, setName] = useState('');

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmitSearch(event) {
    event.preventDefault();
    history.push(`/pokedex/${name}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          placeholder="Insira o nome completo do Pokémon"
          onChange={handleInputChange}
          value={name}
        />

        <button type="submit" disabled={!name}>
          <img src={search} alt="pesquisar pokémon" />
        </button>
      </form>

      <Navigation />
    </Container>
  );
}
