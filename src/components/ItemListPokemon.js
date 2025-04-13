import React from 'react'
import { ItemPokemon } from './ItemPokemon.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import Logo from '../assets/Images/logo.png'
import PikachuHi from '../assets/Images/PikachuHi.png'
import SchyterHi from '../assets/Images/ScyhterHi.png'


export const ItemListPokemon = () => {

    return(

        <div className="ItemListPokemon">
            <img className="logo" src={Logo} alt="Logo Pokémon"></img>
            <h2>Geração 1</h2>
            <br/>
            <img src={PikachuHi}/>
            <img src={SchyterHi}/>

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