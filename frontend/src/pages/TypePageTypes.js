import React from 'react'
import { ItemListPokemonFilter } from '../components/ItemListPokemonFilter.js'
import { arrayPokemon } from '../assets/database/pokemon151.js'
import { arrayTypes } from '../assets/database/arrayTypes.js'
import { useParams } from 'react-router'
import Type from '../components/Type.js'

const TypePageTypes = () => {
  const currentType = useParams();

  // const pokemonTypes = arrayPokemon.map(el => el.type.split('/'));
  // const pokemonCurrentType = pokemonTypes.filter((el,i) => {return el[i] === currentType})
  // console.log(pokemonCurrentType)

  const colorTypeBar = {
    "Normal": ["#8C8662", "#AEA77B"],
    "Fogo": ["#C53626", "#F84330"],
    "Água": ["#1187B7", "#15A9E5"],
    "Elétrico": ["#CBB929", "#FFE733"],
    "Grama": ["#67991C", "#81C124"],
    "Gelo": ["#73ACBF", "#90D7ED"],
    "Lutador": ["#C65617", "#F86B1C"],
    "Veneno": ["#6e4259", "#89526f"],
    "Terra": ["#957858", "#C2A587"],
    "Voador": ["#159abd", "#20c2f1"],
    "Psíquico": ["#60396E", "#784A8B"],
    "Inseto": ["#1f5c30", "#267639"],
    "Pedra": ["#584F48", "#6E645A"],
    "Fantasma": ["#5D49B8", "#7D6CDC"],
    "Dragão": ["#a0892c", "#C6AB38"],
    "Fada": ["#be407f", "#ee4f9f"],
  }

  const pageType = arrayTypes.find(el => el.type === currentType.tipo);

  return (
    <div className='TypePageTypes' style={{backgroundColor: colorTypeBar[currentType.tipo][1]}}>
        <div className='TypePageTypes__bar-color-top' style={{backgroundColor: colorTypeBar[currentType.tipo][0]}}></div>
        <div className="TypePageTypes__container">
          <div className='TypePageTypes__description'>
            <div>
              <h1>Ataque <span>pros & cons</span></h1>
              <br/>
              <div className='TypePageTypes__description-atk'>
                {pageType.attackProsCons?.notVeryEffective 
                  ? 
                  <div>
                    <h2>Movimento do tipo {currentType.tipo} não são efetivos contra:</h2>
                    <div>
                      {pageType.attackProsCons.notVeryEffective.map(el => {
                        return <Type type={el}/>  
                      })}
                    </div>
                    <br/>
                  </div>
                  :
                  <div></div>
                }

                {pageType.attackProsCons?.superEffective 
                  ? 
                  <div>
                    <h2>Movimento do tipo {currentType.tipo} são super efetivos contra:</h2>
                    <div>
                      {pageType.attackProsCons.superEffective.map(el => {
                        return <Type type={el}/>
                      })}
                    </div>
                    <br/>
                  </div>
                  :
                  <div></div>
                }

                {pageType.attackProsCons?.noEffect 
                  ?
                  <div>
                    <h2>Movimento do tipo {currentType.tipo} não tem efeito contra:</h2>
                    {pageType.attackProsCons.noEffect.map(el => {
                      return <Type type={el}/>
                    })}
                  </div> 
                  :
                  <div></div>
                }
              </div>
            </div>

            <div>
              <h1>Defesa <span>pros & cons</span></h1>
              <br/>
              <div className='TypePageTypes__description-def'>
                {pageType.defenseProsCons?.noEffect
                  ?
                  <div>
                    <h2>Esses tipos não tem efeito contra Pokémon do tipo {currentType.tipo}:</h2>
                    {pageType.defenseProsCons.noEffect.map(el => {
                      return <Type type={el}/>
                    })}
                    <br/>
                    <br/>
                  </div>
                  :
                  <div></div>
                }

                {pageType.defenseProsCons?.notVeryEffective
                  ?
                  <div>
                    <h2>Esses tipos não são efetivos contra Pokémon do tipo {currentType.tipo}:</h2>
                    {pageType.defenseProsCons.notVeryEffective.map(el => {
                      return <Type type={el}/>
                    })}
                    <br/>
                    <br/>
                  </div>
                  :
                  <div></div>
                }

                {pageType.defenseProsCons?.superEffective
                  ?
                  <div>
                    <h2>Esses tipos são super efetivos contra Pokémon do tipo {currentType.tipo}:</h2>
                    {pageType.defenseProsCons.superEffective.map(el => {
                      return <Type type={el}/>
                    })}
                  </div>
                  :
                  <div></div>
                }

              </div>
            </div>

          </div>

          
          <div className="TypePageTypes__type-filter">
            <ItemListPokemonFilter currentParams={currentType.tipo}/>
          </div>
          

        </div>
        <div className='TypePageTypes__bar-color-bottom' style={{backgroundColor: colorTypeBar[currentType.tipo][0]}}></div>


    </div>
  )
}

export default TypePageTypes