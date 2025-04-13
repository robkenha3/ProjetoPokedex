import React from 'react'
import { Link } from "react-router-dom"
import PokemonStatsBar from './PokemonStatsBar';
import { arrayTypes } from '../assets/database/arrayTypes';
import Type from './Type';

export const PokemonBody = ({ id, name, sprites, type, species, height, weight, nextId, backId, nextName, backName, hp, attack, defense, spatk, spdef, speed, total }) => {
    return (
        <div className='PokemonBody'>
            <div className='PokemonBody__header'>
                <Link to={'/gen1/' + backId}>
                    {backId === '' ? <div></div> : <button>{backName}</button>}
                </Link>
                <h1>{name}</h1>
                <Link to={'/gen1/' + nextId}>
                    {nextId === '' ? console.log("erro") : <button>{nextName}</button>}
                </Link>
            </div>
            <hr/>

            <div className='PokemonBody__container'>
                <div className='PokemonBody__sprites'>
                    <img key={name} src={sprites} alt={"Sprite do " + name}></img>
                </div>

                <div className="PokemonBody__info-container">
                    <p><b>Pokedéx Nº </b>{id}</p>

                    <hr/>

                    <div>    
                        <b>Tipo</b><Type type={type} id={arrayTypes.map(el => el.id)}/>
                    </div>

                    <hr/>
                    <p><b>Espécie </b>{species}</p>
                    <hr/>
                    <p><b>Altura </b>{height}</p>
                    <hr/>
                    <p><b>Peso </b>{weight}</p>
                </div>

                <PokemonStatsBar hp={hp} attack={attack} defense={defense} spatk={spatk} spdef={spdef} speed={speed} total={total}/>
            </div>
        <br/>
        <br/>
        </div>


    )
}

