import React, {useState, useEffect} from 'react'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import PokemonCards from './PokemonCards.js'


export const ItemListPokemonFilter = ({ currentParams }) => {
    const [FilteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {

        const formatType = arrayPokemon.map(el => {
            return typeof el.type === "string" ? el.type.split("/") : ["unknown"]
        });
    
        // colocar ({}) retorna um objeto diretamente (não precisa dar return)
        // o spread (...) vai fazer uma cópia superficial de arrayPokemon, não afetando o arrayPokemon original e não interferindo em seu uso em qualquer lugar da aplicação
        const newArrayPokemon = arrayPokemon.map((el, i) => ({
            ...el,
            type: formatType[i]
        }))
    
        const newArrayPokemonFilter = newArrayPokemon.filter(el => {
            return el.type?.[0] === currentParams || el.type?.[1] === currentParams;
        })
    
        setFilteredPokemon(newArrayPokemonFilter)

        // O componente só renderiza a cada mudança/atualização de currentParams
    }, [currentParams])
    
    return(

        <div className="ItemListPokemonFilter">

            <div className='ItemListPokemonFilter__conteiner'>
                {FilteredPokemon.map(el => {
                    return <PokemonCards 
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        species={el.species}
                        type={currentParams}
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