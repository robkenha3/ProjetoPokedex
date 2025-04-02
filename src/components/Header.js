import React from 'react'
import { Link } from 'react-router-dom'

export const Header= (props) => {
    return (
        <div className="Header">
            <div className='Header__circle-container'>
                <Link to="/">
                    <div className="Header__circle"></div>
                </Link>

                <div className="Header__tiny-circle"></div>
                <div className="Header__tiny-circle" style={{backgroundColor: 'yellow'}}></div>
                <div className="Header__tiny-circle" style={{backgroundColor: 'green'}}></div>
            </div>
            
            <div className="Header__menu">
                <div className="Header__line">
                    <div className="Header__diagonal-line"></div>
                    <div className="Header__horizontal-line">
                        <div className="Header__menu-option">
                            <Link to="/">
                                <div>Geração 1</div>
                            </Link>

                            <Link to="/tipo">
                                <div>Tipo</div>
                            </Link>

                            <Link to="/pokédex/0001">
                                <div>Modo Pokédex</div>
                            </Link>
                        </div> 
                    </div>  
                    
                </div>

                
                
            </div>
        </div>

    )
}