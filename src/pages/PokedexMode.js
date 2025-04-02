import React from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'
import DisplayPokedex from '../components/DisplayPokedex.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const PokedexMode = () => {
  let { id } = useParams();
  // const ButtonBack = () => {  
  
  // }

    let nextId = (Number(id) + 1).toString().padStart(4, '0');
    let backId = (Number(id) - 1).toString().padStart(4, '0');
    let nextName = '';
    let backName = '';
  
  let pokemon = arrayPokemon.find((el) => {
    return el.id = id;
  })
  console.log(pokemon);


  return (
      <div className='PokedexMode'>
          <div className='PokedexMode__container'>

            <div className = "PokedexMode__background"></div>
            
            <img style={{position: "relative", zIndex: 1}} src={Pokedex} alt="Imagem da Pokédex"></img>

            <div className="PokedexMode__button">
              {/* <Link to="/"> */}
                <button className="PokedexMode__button-back" onClick={() => {}}></button>
              {/* </Link> */}

              {/* <Link to="/"> */}
                <button className="PokedexMode__button-next" onClick={() => {}}></button>
              {/* </Link> */}
            </div>

            <div className="PokedexMode__circle-button">
              <button onClick={() => {}}></button>
            </div>
            
          </div>
      </div>
  )
}

