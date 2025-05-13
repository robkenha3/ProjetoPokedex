import React from 'react'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'

function fisherYates(arrayCopy) {
    for(let i = arrayPokemon.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [[arrayCopy[i], arrayCopy[j]]] = [[arrayCopy[j],arrayCopy[i]]]
    }
    return arrayCopy;
}
// console.log(arrayPokemon.length)

export const ItemListPokemonRandom = () => {
    let arrayPokemonCopy = fisherYates([...arrayPokemon]);
    // console.log(arrayPokemonCopy)
  return(

        <div className="ItemListPokemon">
            
            <div className='ItemListPokemon__conteiner'>
                {arrayPokemonCopy.map((el) => {
                    return <ItemPokemon 
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        species={el.species}
                        type={el.type}  
                        height={el.height}
                        weight={el.weight}
                        img={el.img}
                    />   
                })}
    
            </div>
            <br/>
            <br/>
            <br/>
        </div>

    )


}