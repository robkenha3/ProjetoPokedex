import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemListPokemon } from '../components/ItemListPokemon.js'
import ItemListPokemonHeader from '../components/ItemListPokemonHeader.js'

const PokemonGen = () => {
  const { gen } = useParams();
  console.log(gen)
  let genNum = 0;
  if(gen === "gen1") {
    genNum = 1;
  } else if(gen === "gen2") {
    genNum = 2;
  }
  return (
    <>
      <div className="ItemListPokemon">
        <ItemListPokemonHeader />
        <h2>Geração {genNum}</h2>
        <br/>
      </div>
      <ItemListPokemon />
    </>
  )
}

export default PokemonGen