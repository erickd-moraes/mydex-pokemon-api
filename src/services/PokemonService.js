import HttpClient from './utils/HttpClient';

class PokemonService {
  constructor() {
    this.HttpClient = new HttpClient('https://pokeapi.co/api/v2');
  }

  async listPokemons(limit = 20, offset = 0) {
    return this.HttpClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
  }

  async listPokemonsDetails(pokemon) {
    return Promise.all(
      pokemon.map(async (pokemonDetail) => {
        const response = await fetch(pokemonDetail.url);
        return response.json();
      }),
    );
  }
}

export default new PokemonService();
