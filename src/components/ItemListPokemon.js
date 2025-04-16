import React from 'react'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'


export const ItemListPokemon = () => {

    return(

        <div className="ItemListPokemon">

            <div className='ItemListPokemon__conteiner'>
                {arrayPokemon.map((el) => {
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