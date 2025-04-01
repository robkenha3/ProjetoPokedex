import React from "react";
import { Link } from "react-router-dom"

export const ItemPokemon = ({ id, name, species, type, height, weigth, img }) => {
    return (
        <div className="ItemPokemon">
            <Link to={"/" + id}>
                <img src={img} alt={`Imagem do ${name}`}></img>
            </Link>
        </div>

    )
}