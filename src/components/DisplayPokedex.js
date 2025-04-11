import React from "react";
import Type from "./Type";
import PokemonStatsBar from "./PokemonStatsBar";


export const DisplayPokedex = ({ currentPokemon, name, type, hp, attack, defense, spatk, spdef, speed, total, height }) => {
    let formatedHeight = height.split(" ")[0];
    console.log(name, formatedHeight);

    return (
        <div className="DisplayPokedex">
            <div className="DisplayPokedex__gif-container">
                <img src={currentPokemon} alt={`Gif do pokemon ${name}`} style={{height: `${formatedHeight}em`}}/>
            </div>

            <div className="DisplayPokedex__type-stats-container">
                <div className="DisplayPokedex__type-container">
                    <Type type={type}/>
                </div>

                <div className="DisplayPokedex__stats-bar-container">
                    <PokemonStatsBar hp={hp} attack={attack} defense={defense} spatk={spatk} spdef={spdef} speed={speed} total={total}/>
                </div>
            </div>
        </div>
        


    )
}