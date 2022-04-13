import { Card } from './styles';

export default function PokemonCard() {
  return (
    <Card href="/">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" />

      <strong>Charmander</strong>

      <div className="type">
        <span>Fire</span>
      </div>
    </Card>
  );
}
