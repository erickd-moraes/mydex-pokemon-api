import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import PokemonCard from '../PokemonCard';

import { Container } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <PokemonCard />
      </Container>
    </ThemeProvider>
  );
}
