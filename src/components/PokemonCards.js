import React from 'react'
import { Link } from 'react-router';
import Type from './Type';

const PokemonCards = ({ id, name, species, type, height, weigth, img }) => {
    return (
        <div className='PokemonCards'>
            <Link to={"/gen1/" + id}>
                <img src={img} alt={"Imagem do Pokémon " + name}></img>            
            </Link>
            <div className='PokemonCards__description'>
                <span>#{id}</span>
                <h4>{name}</h4>
            </div>
        </div>

    )
}

export default PokemonCards;