import React from 'react'

const PokemonStatsBar = ({ hp, attack, defense, spatk, spdef, speed, total }) => {
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
    <div className='PokemonBody__base-stats-container'>
        <table className="PokemonBody__base-stats">
        <tbody>
            <tr>
                <td><b>HP</b></td>
                <td>{hp}</td>
                <td>
                    <div style={{"--final-width": hp + "em", backgroundColor: barColor[0]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Ataque</b></td>
                <td>{attack}</td>
                <td>
                    <div style={{"--final-width": attack + "em", backgroundColor: barColor[1]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Defesa</b></td>
                <td>{defense}</td>
                <td>
                    <div style={{"--final-width": defense + "em", backgroundColor: barColor[2]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Sp.Atq</b></td>
                <td>{spatk}</td>
                <td>
                    <div style={{"--final-width": spatk + "em", backgroundColor: barColor[3]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Sp.Def</b></td>
                <td>{spdef}</td>
                <td>
                    <div style={{"--final-width": spdef + "em", backgroundColor: barColor[4]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Velocidade</b></td>
                <td>{speed}</td>
                <td>
                    <div style={{"--final-width": speed + "em", backgroundColor: barColor[5]}} className='PokemonBody__base-stats-bar'></div>
                </td>
            </tr>
            <tr>
                <td><b>Total</b></td>
                <td>{total}</td>
            </tr>
        </tbody>


        </table>

    </div>
  )
}

export default PokemonStatsBar