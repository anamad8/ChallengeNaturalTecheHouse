import express from 'express';
import { getPokemonByTypes } from '../controller/getPokemonByTypes.js';
import { getPokemonByName } from '../controller/getPokemonByName.js';
import { getAllPokemon } from '../controller/getAllPokemon.js';
import { getAllByType } from '../controller/getAllByTypes.js';

const router = express.Router();

router.get('/pokemonType', getPokemonByTypes);
router.get('/pokemonName', getPokemonByName);
router.get('/allPokemon', getAllPokemon);
router.get('/allTypePokemon', getAllByType);


export { router };



