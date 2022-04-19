import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/pokedex" component={Home} exact />
      <Route path="/pokedex/:id" component={PokemonDetails} />
    </Switch>
  );
}
