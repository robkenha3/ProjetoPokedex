import React from 'react'
import { ItemListPokemon } from '../components/ItemListPokemon.js'
import ItemListPokemonHeader from '../components/ItemListPokemonHeader.js'

const Home = () => {
  return (
    <>
      <div className="ItemListPokemon">
        <ItemListPokemonHeader />
      </div>
      <ItemListPokemon />
    </>
  )
}

export default Home