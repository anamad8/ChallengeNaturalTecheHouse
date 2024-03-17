import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const pokemonNmeContext = createContext();

export const PokemonNameState = (props) => {

    const [pokemonData, setPokemonData] = useState([]);
    

// Funcion donde me trae los Pokémon del backend por nombre
    const getPokemonByName = async () => {
        try {
            const response = await axios.get('http://localhost:8080/v0/pokemonName');
            // const totalPokemon = response.data.findPoke.length;
            // setTotalPages(Math.ceil(totalPokemon / perPage));
            setPokemonData(response.data.findPoke);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPokemonByName();
    }, []);

    return (
        <pokemonNmeContext.Provider
        value={{
            pokemonData,
            getPokemonByName
        }}
        >
        {props.children}
        </pokemonNmeContext.Provider>
    );
};
