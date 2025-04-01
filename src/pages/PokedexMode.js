import React from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'

const PokedexMode = () => {
  return (
    <div className='PokedexMode'>
        <div className='PokedexMode__container'>
            <img src={Pokedex} alt="Imagem da Pokédex"></img>
        </div>
    </div>
  )
}

export default PokedexMode