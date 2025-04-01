import React from 'react'
import { Link } from "react-router-dom"

export const PokemonBody = ({ id, name, sprites, type, species, height, weight, nextId, backId, nextName, backName, hp, attack, defense, spatk, spdef, speed, total }) => {
    const newButton = type.split("/");

    let backGround = "";
    let rgbType = [];

    newButton.map((el) => {
        switch (el) {
            case "Fogo":
                backGround = "rgb(255, 95, 66)";
                break;
            case "Água":
                backGround = "rgb(51, 153, 255)";
                break;
            case "Grama":
                backGround = "rgb(119, 204, 85)";
                break;
            case "Terra":
                backGround = "rgb(226, 197, 110)";
                break;
            case "Voador":
                backGround = "rgb(153, 168, 255)"
                break;
            case "Normal":
                backGround = "rgb(182, 182, 168)";
                break;
            case "Elétrico":
                backGround = "rgb(255, 211, 81)";
                break;
            case "Gelo":
                backGround = "rgb(102, 204, 255)";
                break;
            case "Lutador":
                backGround = "rgb(197, 110, 95)";
                break;
            case "Veneno":
                backGround = "rgb(170, 85, 153)";
                break;
            case "Psíquico":
                backGround = "rgb(255, 110, 168)";
                break;
            case "Inseto":
                backGround = "rgb(182, 197, 66)";
                break;
            case "Pedra":
                backGround = "rgb(197, 182, 124)";
                break;
            case "Fantasma":
                backGround = "rgb(124, 124, 197)";
                break;
            case "Dragão":
                backGround = "rgb(139, 124, 240)";
                break;
            case "Escuridão":
                backGround = "rgb(139, 110, 95)";
                break;
            case "Ferro":
                backGround = "rgb(170, 170, 187)";
                break;
            case "Fada":
                backGround = "rgb(238, 153, 238)";
                break;
            default:
                backGround = "white";
            }

            rgbType.push(backGround);                
    })

    let barColor = [];
    let arrayStats = [hp, attack, defense, spatk, spdef, speed];
    for(let el of arrayStats) {
        if(el >= 0 && el < 30) {
            barColor.push("rgb(243, 68, 68)")
        } else if(el >= 30 && el < 50) {
            barColor.push("rgb(255, 127, 15)");
        } else if(el >= 50 && el < 90) {
            barColor.push("rgb(255, 221, 87)");
        } else if(el >= 90 && el < 120){
            barColor.push("rgb(160, 229, 21)");
        } else if(el >= 120 && el < 150) {
            barColor.push("rgb(35, 205, 94)");
        } else {
            barColor.push("rgb(0, 194, 184)");
        }
    }

    return (
        <div className='PokemonBody'>
            <div className='PokemonBody__header'>
                <Link to={'/' + backId}>
                    {backId === '' ? <div></div> : <button>{backName}</button>}
                </Link>
                <h1>{name}</h1>
                <Link to={'/' + nextId}>
                    {nextId === '' ? console.log("erro") : <button>{nextName}</button>}
                </Link>
            </div>
            <hr/>

            <div className='PokemonBody__container'>
                <div className='PokemonBody__sprites'>
                    <img src={sprites} alt={"Sprite do " + name}></img>
                </div>

                <div className="PokemonBody__info-container">
                    <p><b>Pokedéx Nº </b>{id}</p>

                    <hr/>

                    <div>
                        <b>Tipo</b>
                        <div style={{backgroundColor:`${rgbType[0]}`}} className="ButtonType">{newButton[0]}</div>
                        {newButton.length === 2 ? <div style={{backgroundColor: rgbType[1]}} className="ButtonType">{newButton[1]}</div> : ''}
                    </div>

                    <hr/>
                    <p><b>Espécie </b>{species}</p>
                    <hr/>
                    <p><b>Altura </b>{height}</p>
                    <hr/>
                    <p><b>Peso </b>{weight}</p>
                </div>

                <div className='PokemonBody__base-stats-container'>
                   <table className="PokemonBody__base-stats">
                    <tbody>
                        <tr>
                            <td><b>HP</b></td>
                            <td>{hp}</td>
                            <td>
                                <div style={{width: hp + "em", backgroundColor: barColor[0]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Ataque</b></td>
                            <td>{attack}</td>
                            <td>
                                <div style={{width: attack + "em", backgroundColor: barColor[1]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Defesa</b></td>
                            <td>{defense}</td>
                            <td>
                                <div style={{width: defense + "em", backgroundColor: barColor[2]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Sp.Atq</b></td>
                            <td>{spatk}</td>
                            <td>
                                <div style={{width: spatk + "em", backgroundColor: barColor[3]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Sp.Def</b></td>
                            <td>{spdef}</td>
                            <td>
                                <div style={{width: spdef + "em", backgroundColor: barColor[4]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Velocidade</b></td>
                            <td>{speed}</td>
                            <td>
                                <div style={{width: speed + "em", backgroundColor: barColor[5]}} className='PokemonBody__base-stats-bar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Total</b></td>
                            <td>{total}</td>
                        </tr>
                    </tbody>


                   </table>

                </div>
            </div>
        <br/>
        <br/>
        </div>


    )
}

