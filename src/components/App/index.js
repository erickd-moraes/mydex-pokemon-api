import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';
import Footer from '../Footer';

import { PokemonProvider } from '../../context/PokemonContext';

export default function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Header />
          <Routes />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </PokemonProvider>
  );
}
