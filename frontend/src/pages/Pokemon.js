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
    // const lastIndexPokemon = arrayPokemon.length -1 ;
    // console.log(arrayPokemon[lastIndexPokemon])
    // console.log(nextId)

    // Lógica do botão de ir para o próximo pokémon e pokémon anterior
    for(let poke of arrayPokemon) {
        if(poke.id === nextId) {
            nextName = poke.name;
            
        }else if(nextId === '0386') {
            nextId = '';
        }
        if(poke.id === backId) {
            backName = poke.name;
        }else if(backId === '0000') {
            backId = '';
        }
    }   
    
    // Função para separa os pokémons conforme a geração
    const getGen = (id) => {
        const num = parseInt(id)
        if(num <= 151) {
            return "gen1";
        } else if(num <= 251) {
            return "gen2";
        } else if(num <= 386) {
            return "gen3";
        }
        return "gen4";
    }
        

    // capturar a geração do proximo pokemon e do pokémon anterior para inserir na rota
    const gen = getGen(id);
    const nextGen = getGen(nextId)
    const backGen = getGen(backId)

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
                        gen={gen}
                        nextGen={nextGen}
                        backGen={backGen}
                    />
                }
            })}

   
        </div>

    )

}