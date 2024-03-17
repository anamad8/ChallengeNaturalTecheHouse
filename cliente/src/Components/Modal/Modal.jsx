import React, { useContext } from 'react';
import style from '../../styles/Modal.module.css'

export const Modal = ({setModal, pokemon}) => {

    return (
        <div className={style.modal_container} >
            <div className={style.modal_detalles}>
                <button className={style.modal_cerrar} onClick={() => {setModal(false)}}>X</button>
                <div className={style.modal_titulo}>
                    <h2>{pokemon.name}</h2>
                    <div className={style.modal_column}>
                        <div className={style.modal_column_img}>
                            <img
                                className={style.character}
                                alt={pokemon.name}
                                src={pokemon.image2}
                                width="250px"
                                height="250px"
                            />
                        </div>

                        <div className={style.modal_column_info}>
                        <p>Ataque:  {pokemon.attack}</p>
                        <p>defensa: {pokemon.defense}</p>
                        <p>Velocidad: {pokemon.speed}</p>
                        <p>Altura: {pokemon.height}</p>
                        <p>Peso: {pokemon.weight}</p>
                        {pokemon.types &&
                            pokemon.types.map((type, index) => {
                                return (
                                    <p key={index}>
                                        Tipo: {type.name}
                                    </p>
                                );
                        })}

                        </div>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}


