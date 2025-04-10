import React, { useState } from 'react'
import Pokedex from '../assets/Images/Pokédex.jpg'
import { DisplayPokedex } from '../components/DisplayPokedex.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import { arrayTypes } from '../assets/database/arrayTypes.js'

export const PokedexMode = () => {

  let [ currentPokemon, setFirstPokemon ]  = useState(arrayPokemon[0]);
  
  let backPokemon = () => {
    setFirstPokemon(previousState => {
      let currentIndex = arrayPokemon.findIndex(pokemon => pokemon.id === previousState.id);
      if (currentIndex <= 0) return previousState;
  
      return arrayPokemon[currentIndex - 1];
    });
  }
  
  let nextPokemon = () => {
    setFirstPokemon(previousState => {
      let currentIndex = arrayPokemon.findIndex(pokemon => pokemon.id === previousState.id);
      if (currentIndex >= arrayPokemon.length - 1) return previousState;
  
      return arrayPokemon[currentIndex + 1];
    });
  }

    let splitType = arrayPokemon.map((el) => {
      return el.type.split("/");
    })
    
    let bgType = [];
    splitType.forEach((el, i) => {
      bgType.push(`bg-${splitType[i][0]}`)
      
    })
    console.log(bgType.join(" "));
    
   

    // let typeBg = [];
    // for(let i=0; i < splitType.length; i++) {
    //     if(splitType[i][0] === "Normal") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Normal").img})`);
    //     }
    //     else if(splitType[i][0] === "Fogo") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Fogo").img})`);
    //     }
    //     else if(splitType[i][0] === "Água") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Água").img})`);
    //     }
    //     else if(splitType[i][0] === "Elétrico") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Elétrico").img})`);
    //     }
    //     else if(splitType[i][0] === "Grama") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Grama").img})`);
    //     }
    //     else if(splitType[i][0] === "Gelo") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Gelo").img})`);
    //     }
    //     else if(splitType[i][0] === "Lutador") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Lutador").img})`);
    //     }
    //     else if(splitType[i][0] === "Veneno") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Veneno").img})`);
    //     }
    //     else if(splitType[i][0] === "Terra") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Terra").img})`);
    //     }
    //     else if(splitType[i][0] === "Voador") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Voador").img})`);
    //     }
    //     else if(splitType[i][0] === "Psíquico") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Psíquico").img})`);
    //     }
    //     else if(splitType[i][0] === "Inseto") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Inseto").img})`);
    //     }
    //     else if(splitType[i][0] === "Pedra") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Pedra").img})`);
    //     }
    //     else if(splitType[i][0] === "Fantasma") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Fantasma").img})`);
    //     }
    //     else if(splitType[i][0] === "Dragão") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Dragão").img})`);
    //     }
    //     else if(splitType[i][0] === "Fada") {
    //       typeBg.push(`url(${arrayTypes.find(el => el.type === "Fada").img})`);
    //   }
    // }
    // console.log(typeBg);
  
  return (
  <div className='PokedexMode'>
    <div className='PokedexMode__container'>

        <div className = {`PokedexMode__background ${bgType.join(" ")}`} >
          <DisplayPokedex currentPokemon={currentPokemon.gif} name={currentPokemon.name} type={currentPokemon.type} hp={currentPokemon.hp} attack={currentPokemon.attack} defense={currentPokemon.defense} spatk={currentPokemon.spatk} spdef={currentPokemon.spdef} speed={currentPokemon.speed} total={currentPokemon.total}/>
        </div>

        <img style={{position: "relative", zIndex: 0}} src={Pokedex} alt="Imagem da Pokédex"></img>

        <div className="PokedexMode__button">
            <button className="PokedexMode__button-back" onClick={backPokemon}></button>

            <button className="PokedexMode__button-next" onClick={nextPokemon}></button>
        </div>

        <div className="PokedexMode__circle-button">
            <button onClick={() => {}}></button>
        </div>

    </div>
  </div>

  )
}