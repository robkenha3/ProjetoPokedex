import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemListPokemon } from '../components/ItemListPokemon.js'
import ItemListPokemonHeader from '../components/ItemListPokemonHeader.js'

const PokemonGen = () => {
  const { gen } = useParams();
  console.log(gen)
  let genName = '';
  if(gen === "gen1") {
    genName = "Kanto";
  } else if(gen === "gen2") {
    genName = "Johto";
  } else if(gen === "gen3") {
    genName = "Hoenn"
  }
  
  return (
    <div className='PokemonGen'>
      <div className="ItemListPokemon">
        <ItemListPokemonHeader />
        <h2>{genName}</h2>
        <br/>
      </div>
      <ItemListPokemon />
    </div>
  )
}

export default PokemonGen