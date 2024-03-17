import "@/styles/globals.css";
import { AllPokemonState } from '../context/AllPokemon/allPokemon.state';
import { PokemonNameState } from '../context/pokemonTypes/pokemonName.state.js';

export default function App({ Component, pageProps }) {
  return (
    <AllPokemonState>
      {/* <PokemonNameState> */}
        <Component {...pageProps} />
      {/* </PokemonNameState> */}
    </AllPokemonState>
  );
}