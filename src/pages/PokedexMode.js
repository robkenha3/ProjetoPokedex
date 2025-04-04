import React, { useState } from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'
import { DisplayPokedex } from '../components/DisplayPokedex.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'

export const PokedexMode = () => {

  let [ currentPokemon, setFirstPokemon ]  = useState(arrayPokemon[0]);
  
  let backPokemon = () => {
    setFirstPokemon(previousState => {
      let currentIndex = arrayPokemon.findIndex(pokemon => pokemon.id === previousState.id);
      if (currentIndex <= 0) return previousState;
  
      return arrayPokemon[currentIndex - 1];
    });
  }
  
  let nextPokemon = () => {
    setFirstPokemon(previousState => {
      let currentIndex = arrayPokemon.findIndex(pokemon => pokemon.id === previousState.id);
      if (currentIndex >= arrayPokemon.length - 1) return previousState;
  
      return arrayPokemon[currentIndex + 1];
    });
  }

  
  
  return (
  <div className='PokedexMode'>
    <div className='PokedexMode__container'>

        <div className = "PokedexMode__background">
          <DisplayPokedex currentPokemon={currentPokemon.gif} name={currentPokemon.name} type={currentPokemon.type} hp={currentPokemon.hp} attack={currentPokemon.attack} defense={currentPokemon.defense} spatk={currentPokemon.spatk} spdef={currentPokemon.spdef} speed={currentPokemon.speed} total={currentPokemon.total}/>
        </div>

        <img style={{position: "relative", zIndex: 1}} src={Pokedex} alt="Imagem da Pokédex"></img>

        <div className="PokedexMode__button">
            <button className="PokedexMode__button-back" onClick={backPokemon}></button>

            <button className="PokedexMode__button-next" onClick={nextPokemon}></button>
        </div>

        <div className="PokedexMode__circle-button">
            <button onClick={() => {}}></button>
        </div>

    </div>
  </div>

  )
}

