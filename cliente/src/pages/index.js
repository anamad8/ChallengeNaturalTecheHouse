import React, { useContext, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { allPokemonContext } from '../context/AllPokemon/allPokemon.state'; 
import Card from "../Components/Card/Card.jsx";
import Pagination from "../Components/Pagination/Pagination.jsx";
import style from '../styles/Home.module.css'
import NavBar from "../Components/NavBar/NavBar.jsx";
import { Modal } from "../Components/Modal/Modal.jsx";


export default function Home() {
  const { pokemonData, currentPage, totalPages, nextPage, prevPage, goToPage, isLoading  } = useContext(allPokemonContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modal, setModal] = useState(false); // Estado del modal
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para el Pokémon seleccionado

  const [darkMode, setDarkMode] = useState(false)

  // Calcular los índices de los Pokémon que se mostrarán en la página actual
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  let currentPokemon = [];

  // Si hay un término de búsqueda, mostrar los resultados de búsqueda
  if (searchTerm !== "") {
    currentPokemon = searchResults.slice(startIndex, endIndex);
  } else {
    // Asegurarnos de que pokemonData es un array
    currentPokemon = Array.isArray(pokemonData) ? pokemonData.slice(startIndex, endIndex) : [];
  }


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filtrar los Pokémon por nombre
    const filteredPokemon = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredPokemon);
  };

    // Función para manejar el click en un Pokémon en el Card
    const handlePokemonClick = (pokemon) => {
      setSelectedPokemon(pokemon);
      setModal(true); 
    };

    return (
      <>
        <NavBar
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}

            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handlePosition={() => setDarkMode(!darkMode)}

        />
    
        {isLoading === true ? (
          <div className={style.loading}>
          <TypeAnimation
            className={style.animacion}
            sequence={["Cargando pokemons", 1000, "espere por favor.", 1000]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </div>
        ) : (
          <div className={`${style.home_container} ${darkMode ? style['dark-mode'] : style['light-mode']}`}>
            <div className={style.characters}>
              {currentPokemon.map((pokemon) => (
                <Card 
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  image2={pokemon.image2}
                  hp={pokemon.hp}
                  attack={pokemon.attack}
                  defense={pokemon.defense}
                  speed={pokemon.speed}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  types={pokemon.types}
                  key={pokemon.id}
                  setModal={setModal} 
                  handlePokemonClick={() => handlePokemonClick(pokemon)}
                />
              ))}
            </div>
    
            <div className={style.pagination}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={nextPage}
                prevPage={prevPage}
                goToPage={goToPage}
              />
            </div>
          </div>
        )}
    
        {modal && <Modal setModal={setModal} modal={modal} pokemon={selectedPokemon} />}
      </>
    );
    
}
