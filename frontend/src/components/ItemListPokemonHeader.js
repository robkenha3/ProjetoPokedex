import React from 'react'
import Logo from '../assets/Images/logo.png'
import PikachuHi from '../assets/Images/PikachuHi.png'
import SchyterHi from '../assets/Images/ScyhterHi.png'

const ItemListPokemonHeader = () => {
  return (
    <>
        <img className="logo" src={Logo} alt="Logo Pokémon"></img>
        <h2>Geração 1</h2>
        <br/>
        <img src={PikachuHi}/>
    </>
  )
}

export default ItemListPokemonHeader