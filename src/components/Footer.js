import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='Footer'>
            <p>&copy; Pokémon Pokédex, 2025. Imagens & nomes &copy; 1995-2025 Nintendo/Game Freak</p>
            <div className="Footer__display-pokedex">
                <Link to="/0143">
                    <img src="https://i.gifer.com/2FxB.gif" alt="gif Snorlax"></img>
                </Link>
            </div>
        </div>
        
    )




}