import React, { useContext, useEffect, useState } from "react";
import { allPokemonContext } from '../../context/AllPokemon/allPokemon.state.js';
import style from "../../styles/Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar = ({ handleSearch, searchTerm, setSearchTerm,  darkMode, setDarkMode, handlePosition, about }) => {
    const { typesPokemon, getPokemonByTypes, getAllPokemon } = useContext(allPokemonContext);
    const [types, setTypes] = useState(typesPokemon);

    const onChangeTypes = (e) => {
        const selectedType = e.target.value;
        setTypes(selectedType);
    };

    useEffect(() => {
        setTypes(typesPokemon);
    }, [typesPokemon]);

    useEffect(() => {
        if (types.length !== 20 && types.length > 0 ){
            getPokemonByTypes(types);
        }else if(types.length === 0 ){
            getAllPokemon();
        }
    
    }, [types]);
    
// <div className={`${style.home_container} ${darkMode ? style['dark-mode'] : style['light-mode']}`}>
    return (
        <div className={style.nav_bar}>
            <div className={style.nav_container}>
                <div className={style.nav_menu_izquierda}>
                    <div className={style.menu}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </div>
                </div>
                {
                    about !== true  && (

                        <>
                            <div className={style.nav_menu_medio}>
                                <select className={style.filter_select} value={types} onChange={onChangeTypes}  >
                                <option value="">All Types</option>
                                    {typesPokemon?.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.nav_menu_derecha}>
                                <div className={style.searchbar}>
                                    <SearchBar 
                                        handleSearch={handleSearch}
                                        searchTerm={searchTerm}
                                        setSearchTerm={setSearchTerm}
                                    />  
                                </div>   
                            </div>
                        </>

                    )
                }
                
                    

                <div className={style.dark_mode}>
                {
                darkMode === true ? 
                    <button id="btn-darkMode" className={style.oscuro} onClick={handlePosition}><span className="toggle--label-background-oscuro"></span></button> 
                    :
                    <button id="btn-darkMode" className={style.claro} onClick={handlePosition}><span className="toggle--label-background-claro"></span></button>
                }                

                
        </div>
            </div>  
        </div>
    );    
};

export default NavBar;
