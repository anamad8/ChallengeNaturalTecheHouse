import axios from "axios";
import clienteAxios from "../config/axios";

export async function getAllPokemonApi() {
    return axios.get('/allPokemonhttp://localhost:8080/v0/allPokemon');
}