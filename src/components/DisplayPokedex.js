import React from "react";


export const DisplayPokedex = ({ currentPokemon, name }) => {
    return (
        <div className="DisplayPokedex">
            <div className="DisplayPokedex__gif-container">
                <img src={currentPokemon} alt={`Gif do pokemon ${name}`}/>
            </div>

        </div>
        


    )
}