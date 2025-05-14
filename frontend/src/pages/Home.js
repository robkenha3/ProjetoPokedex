import React from 'react'
import { ItemListPokemonRandom } from '../components/ItemListPokemonRandom.js'
import ItemListPokemonHeader from '../components/ItemListPokemonHeader.js'

const Home = () => {
  return (
    <div className='Home'>
      <div className="ItemListPokemon">
        <ItemListPokemonHeader />
        <br/>
      </div>
      <ItemListPokemonRandom />
    </div>
  )
}

export default Home