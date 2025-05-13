import React from 'react'
import { useParams } from 'react-router'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'


export const ItemListPokemon = () => {
    const { gen } = useParams();
    // console.log(gen)

    let pokemonGen1;
    if(gen === "gen1") {
        pokemonGen1 = arrayPokemon.filter((el) => {
            return el.id <= '0151'
        })
    }

    let pokemonGen2;
    if(gen === "gen2") {
        pokemonGen2 = arrayPokemon.filter((el) => {
            return el.id > '0151' && el.id <= '0251'
        })
    }
    // console.log(pokemonGen2)
    
    return(

        <div className="ItemListPokemon">
            
            <div className='ItemListPokemon__conteiner'>
                {gen === "gen1" && pokemonGen1.map((el) => {
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

                {gen === "gen2" && pokemonGen2.map((el) => {
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