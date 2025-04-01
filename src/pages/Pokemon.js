import React from 'react'
import { useParams } from 'react-router'
import { PokemonBody}  from '../components/PokemonBody'
import { arrayPokemon } from '../assets/database/pokemon151.js'

export const Pokemon = () => {
    const { id } = useParams();

    
    // const pokemon = arrayPokemon.find((pk) => {return pk.id === id})     O método find itera sobre o array e encontra o valor do array se determinada condição for satisfeita
    // console.log(pokemon)
    let nextId = (Number(id) + 1).toString().padStart(4, '0');
    let backId = (Number(id) - 1).toString().padStart(4, '0');
    let nextName = '';
    let backName = '';


    for(let poke of arrayPokemon) {
        if(poke.id === nextId) {
            nextName = poke.name;
        }else if(nextId === '0152') {
            nextId = '';
        }
        if(poke.id === backId) {
            backName = poke.name;
        }else if(backId === '0000') {
            backId = '';
        }
    }
    // console.log(nextName);
    // console.log(backName);
        

    return (
        <div>
            {arrayPokemon.map((pk, i) => {
                if(id === pk.id) {
                    return <PokemonBody 
                        key={i}
                        id={pk.id}
                        name={pk.name}
                        type={pk.type}
                        species={pk.species}
                        height={pk.height}
                        weight={pk.weight}
                        sprites={pk.sprites}
                        nextId={nextId}
                        backId={backId}
                        nextName={nextName}
                        backName={backName}
                        hp={pk.hp}
                        attack={pk.attack}
                        defense={pk.defense}
                        spatk={pk.spatk}
                        spdef={pk.spdef}
                        speed={pk.speed}
                        total={pk.total}
                    />
                }
            })}

   
        </div>

    )

}