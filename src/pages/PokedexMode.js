import React from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'

const ButtonEffect = () => {
    
}


const PokedexMode = () => {
  return (
    <div className='PokedexMode'>
        <div className='PokedexMode__container'>

          <div className = "PokedexMode__background"></div>
          
          <img style={{position: "relative", zIndex: 1}} src={Pokedex} alt="Imagem da Pokédex"></img>

          <div className="PokedexMode__button">
            <button onClick={() => {}}></button>
            <button onClick={() => {}}></button>
          </div>

          <div className="PokedexMode__circle-button">
            <button onClick={() => {}}></button>
          </div>
          
        </div>
    </div>
  )
}

export default PokedexMode