import React from "react";
import Type from "./Type";
import PokemonStatsBar from "./PokemonStatsBar";


export const DisplayPokedex = ({ currentPokemon, name, type, hp, attack, defense, spatk, spdef, speed, total }) => {
    return (
        <div className="DisplayPokedex">
            <div className="DisplayPokedex__gif-container">
                <img src={currentPokemon} alt={`Gif do pokemon ${name}`}/>
            </div>

            <div className="DisplayPokedex__type-container">
                <Type type={type}/>
            </div>

            {/* <div className="DisplayPokedex__stats-bar-container">
                <PokemonStatsBar hp={hp} attack={attack} defense={defense} spatk={spatk} spdef={spdef} speed={speed} total={total}/>
            </div> */}
        </div>
        


    )
}