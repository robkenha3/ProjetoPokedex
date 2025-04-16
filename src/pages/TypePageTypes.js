import React from 'react'
import { ItemListPokemonFilter } from '../components/ItemListPokemonFilter.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import { arrayTypes } from '../assets/database/arrayTypes.js'
import { useParams } from 'react-router'

const TypePageTypes = () => {
  const currentType = useParams();

  // const pokemonTypes = arrayPokemon.map(el => el.type.split('/'));
  // const pokemonCurrentType = pokemonTypes.filter((el,i) => {return el[i] === currentType})
  // console.log(pokemonCurrentType)

  return (
    <div className='TypePageTypes'>
        <div className="TypePageTypes__container">
          <div className='TypePageTypes__description'>
            <h1>Ataque <b>pros & cons</b></h1>
            <h2>Movimentos do tipo {currentType.tipo} não são efetivos contra</h2>
          </div>

          
          <div className="TypePageTypes__type-filter">
            <ItemListPokemonFilter currentParams={currentType.tipo}/>
          </div>


        </div>



    </div>
  )
}

export default TypePageTypes