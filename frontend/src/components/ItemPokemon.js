import React from "react";
import { Link } from "react-router-dom"

export const ItemPokemon = ({ id, name, species, type, height, weigth, img }) => {
    let gen = ''
    if(id <= "0151") {
        gen = 'gen1'
    } else if(id > '0151' && id <= '0251') {
        gen = 'gen2'
    } else if(id > '0251' && id <= '0386') {
        gen = 'gen3'
    }
    
    return (
        <div className="ItemPokemon">
            <Link to={`/${gen}/${id}`}>
                <img /*style={{filter: id > "0251" ? "contrast(160%) brightness(90%) saturate(170%)" : "none"}}*/ src={img} alt={`Imagem do ${name}`}></img>
            </Link>
        </div>

    )
}