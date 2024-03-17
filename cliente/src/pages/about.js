import React, {useState} from 'react'
import NavBar from '../Components/NavBar/NavBar.jsx'
import style from '../styles/About.module.css'
import logo from '../img/logo-sin-fondo.png'

const About = () => {

    const [about, setAbout] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    const pdfUrl = "https://drive.google.com/file/d/1k2AQyak1V_mggzkComdnk3TjZLaq7d4-/view?usp=sharing"

    return (
        <>
            <NavBar  about={about}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                handlePosition={() => setDarkMode(!darkMode)}
            />

            <div className={`${style.about_container} ${darkMode ? style['dark-mode'] : style['light-mode']}`}>
                <h1>Fullstack Challenge</h1>
                <div className={style.about_img} ></div>
                <div className={style.about_p} >
                    <p>Desarrollar una aplicación de Pokédex utilizando React para el frontend y Node.js con
                        para el backend. El backend actuará como un BFF (Backend For Frontend) y
                        consumirá datos de la API oficial de Pokémon (https://pokeapi.co/).
                    </p>
                    <h2>Le dejo los items los culaes pude llegar a realizar:</h2>
                    <h3>Requisitos del frontend (React con Next.js):</h3>
                    <li> Crear una página principal que muestre una lista de Pokémon, con al menos los nombres, estadísticas y tipos.</li>
                    <li>Permitir a los usuarios hacer click en un Pokémon para ver detalles adicionales.</li>
                    <li>Implementar una función de búsqueda para encontrar Pokémon por nombre o tipo.</li>

                    <h3>Requisitos del frontend (React con Next.js):</h3>
                    <li>Crear un servidor Express que sirva la aplicación React</li>
                    <li>Implementa endpoints en el backend para proporcionar al frontend únicamente
                        la información necesaria de la API de pokeapi.co, evitando enviar datos innecesarios.
                    </li>
                    <li>Manejar las solicitudes de búsqueda y filtrar los resultados en el backend antes de enviarlos al frontend</li>

                    <h3>Extras (opcional):</h3>
                    <li>Agregar paginación a la lista de Pokémon para mostrar solo un número limitado de Pokémon por página.</li>
                    <li>Utilizar un estado global para gestionar el tema de la aplicación. Por ejemplo,
                        permite a los usuarios cambiar entre un tema claro y oscuro.
                    </li>
                    <li>Manejar las solicitudes de búsqueda y filtrar los resultados en el backend antes de enviarlos al frontend</li>
                </div>
                
                <a
                    className={style.cv_link}
                    href={pdfUrl}
                    target="_blank"
                    download="Mi_CV.pdf"
                >
                    Mi CV
                </a>
                
            </div>
        </>
    )
}

export default About
