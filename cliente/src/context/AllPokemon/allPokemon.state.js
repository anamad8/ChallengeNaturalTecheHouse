import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const allPokemonContext = createContext();

export const AllPokemonState = (props) => {

    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pokemonData, setPokemonData] = useState([]);
    const [typesPokemon, setTypesPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar si está cargando

    console.log("data", isLoading)
    // Funcion donde me trae todos los Pokémon del backend
    const getAllPokemon = async () => {
        setIsLoading(true); // Comienza la carga
        try {
            const response = await axios.get('http://localhost:8080/v0/allPokemon');
            const totalPokemon = response.data.findPoke.length;
            setTotalPages(Math.ceil(totalPokemon / perPage));
            setPokemonData(response.data.findPoke);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false); // Termina la carga
        }
    };

    // Función para obtener los Pokémon por nombre
    const getPokemonByName = async (name) => {
        setIsLoading(true); // Comienza la carga
        try {
            const response = await axios.get(`http://localhost:8080/v0/pokemonName?name=${name}`);
            setTypesPokemon(response.data.findPoke);
        } catch(err) {
            console.log(err);
            setTypesPokemon([]); 
        } finally {
            setIsLoading(false); // Termina la carga
        }
    };

    // Función para obtener todos los nombres de los tipo de Pokémon (select)
    const getAllByType = async () => {
        setIsLoading(true); // Comienza la carga
        try {
            const response = await axios.get(`http://localhost:8080/v0/allTypePokemon`);
            setTypesPokemon(response.data.findPoke);
        } catch(err) {
            console.log(err);
            setTypesPokemon([]); 
        } finally {
            setIsLoading(false); // Termina la carga
        }
    };

    // Función para obtener todos los tipo de Pokémon
    const getPokemonByTypes = async (type) => {
        setIsLoading(true); // Comienza la carga
        try {
            const response = await axios.get(`http://localhost:8080/v0/pokemonType?type=${type}`);
            const totalPokemon = response.data.findPoke.length;
            setTotalPages(Math.ceil(totalPokemon / perPage));
            setPokemonData(response.data.findPoke);
        } catch(err) {
            console.log(err);
            setPokemonData([]); 
        } finally {
            setIsLoading(false); // Termina la carga
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        getAllPokemon();
        getAllByType();
    }, []);

    return (
        <allPokemonContext.Provider
        value={{
            pokemonData,
            currentPage,
            totalPages,
            nextPage,
            prevPage,
            goToPage,
            getAllPokemon,
            getAllByType,
            getPokemonByName,
            typesPokemon,
            getPokemonByTypes,
            isLoading // Agregar isLoading al contexto
        }}
        >
        {props.children}
        </allPokemonContext.Provider>
    );
};

export const usePagination = () => {
    return useContext(allPokemonContext);
};
