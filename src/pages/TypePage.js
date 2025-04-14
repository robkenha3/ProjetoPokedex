import React from 'react'
import Type from '../components/Type'
import { arrayTypes } from '../assets/database/arrayTypes'
import BackgroundType  from "../assets/Images/type.png"

const TypePage = () => {
  

  return (
    <div className="TypePage">
      <div className="TypePage__background">
        <img src={BackgroundType}/>
      </div>
      <div className='TypePage__grid'>
        {arrayTypes.map(el => {
          return <Type 
            type = {el.type}
            id = {el.id}
          />
        })}
      </div>
    </div>
  )
}

export default TypePage