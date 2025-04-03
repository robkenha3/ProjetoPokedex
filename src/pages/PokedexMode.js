import React from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'
import { DisplayPokedex } from '../components/DisplayPokedex.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import { useParams, Link } from 'react-router-dom'


export const PokedexMode = () => {
  let { id } = useParams();

  let currentPokemon = arrayPokemon.find((el) => {
    return el.id === id;
  })
  
  let backPokemon = arrayPokemon[arrayPokemon.findIndex((el) => el.id === id) - 1] || null;

  let nextPokemon = arrayPokemon[arrayPokemon.findIndex(el => el.id === id) + 1] || null;

  return (
  <div className='PokedexMode'>
    <div className='PokedexMode__container'>

        <div className = "PokedexMode__background">
          <DisplayPokedex pokemon={currentPokemon} backPokemon={backPokemon} nextPokemon={nextPokemon}/>
        </div>

        <img style={{position: "relative", zIndex: 1}} src={Pokedex} alt="Imagem da Pokédex"></img>

        <div className="PokedexMode__button">
        {/* <Link to="/"> */}
            <button className="PokedexMode__button-back" onClick={() => {}}></button>
        {/* </Link> */}

        {/* <Link to="/"> */}
            <button className="PokedexMode__button-next" onClick={() => {}}></button>
        {/* </Link> */}
        </div>

        <div className="PokedexMode__circle-button">
            <button onClick={() => {}}></button>
        </div>

    </div>
  </div>

  )
}

