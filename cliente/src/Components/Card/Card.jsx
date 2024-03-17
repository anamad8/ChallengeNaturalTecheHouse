import React, { useState } from 'react';
import style from '../../styles/Card.module.css';

const Card = ({ id, name, image, image2, hp, attack, defense, speed, height, weight, types, setModal, handlePokemonClick }) => {
    
    const getTypeClass = (type) => {
        // Normalizar el nombre del tipo para que coincida con las clases CSS
        const normalizedType = type.toLowerCase();
        return style[normalizedType] || ''; // Si la clase existe, la usa; de lo contrario, devuelve una cadena vacía
    };
    
    return (
        <div className={style.card} onClick={handlePokemonClick}>
            <div className={style.wrapper}>
                <div className={style.card_container_title}>
                    <span className={style.card_title}>{name}</span>
                    {typeof id === "number" ? (
                        <span className={style.card_title}>#{id}</span>
                    ) : (
                        <span></span>
                    )}
                </div>
                {image && <img className={style.cover_image} src={image} alt={name}  width="200px"
                    height="200px"/>}

                <div className={style.container_types}>
                    {types &&
                        types.map((type, index) => {
                            return (
                                <span className={`${style[type.name]} ${getTypeClass(type.name)}`} key={index}>
                                    {type.name}
                                </span>

                            );
                        })}
                </div>
            </div>

            {image2 && (
                <img
                    className={style.character}
                    alt={name}
                    src={image2}
                    width="250px"
                    height="250px"
                />
            )}
        </div>
    );
};

export default Card;
