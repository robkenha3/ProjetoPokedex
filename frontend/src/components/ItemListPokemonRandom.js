import React, { useState, useEffect} from 'react'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'

// Ordenar o array randomicamente
function fisherYates(arrayCopy) {
    for(let i = arrayPokemon.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [[arrayCopy[i], arrayCopy[j]]] = [[arrayCopy[j],arrayCopy[i]]]
    }
    return arrayCopy;
}

export const ItemListPokemonRandom = () => {
    const [seeMore, setSeeMore] = useState(156);
    const [arrayPokemonCopy, setArrayPokemonCopy] = useState([]);
    const [findPokemon, setFindPokemon] = useState('');
    
    useEffect(() => {
        const shuffle = fisherYates([...arrayPokemon]);
        setArrayPokemonCopy(shuffle);
    }, [])

    const expandList = () => {
        setSeeMore((previousState) => previousState + 104)
    }

    const nameFiltered = arrayPokemonCopy.filter(el => el.name.toLowerCase().includes(findPokemon.toLowerCase()))
    console.log(nameFiltered);
    
    // const search = (event) => {
    //     setFindPokemon((previousState) => {
    //         return nameFiltered.filter(el => {
    //             if(el === event.target.value) {
    //                 return previousState = event.target.value;
    //             }
                
    //         })
    //     })
    // }


  return(

        <div className="ItemListPokemon">
            <div className='ItemListPokemon__search'>
                <label for="pokemonName" className='text1'>Digite o nome do Pokémon</label>
                <input type="text" placeholder='pesquisar' id="pokemonName" onChange={(event) => setFindPokemon(event.target.value)}></input>
                <p className='text1'>Pokémons Encotrados: <span>{nameFiltered.length}</span></p> 
            </div>
            <br/>
            <div className='ItemListPokemon__conteiner'>
                {nameFiltered.slice(0, seeMore).map((el, i) => {
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
            <div className="ItemListaPokemonRandom__see-more" onClick={expandList}>Ver mais</div>
            <br/>
            <br/>
        </div>

    )


}