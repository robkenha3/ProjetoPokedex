import React from 'react'
import { useNavigate } from 'react-router-dom';

const Type = ({ type, id }) => {
  const navigate = useNavigate();

  const newButton = type.split("/");
  const type1 = newButton[0];
  const type2 = newButton[1] 

  const firstButton = () => {
    navigate("/tipo/" + type1)
  }

  const secondButton = () => {
    navigate("/tipo/" + type2)
  }

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

  
  return (  
    <>
        <div className={`Type Type${id}`}>
            <div key={id} style={{backgroundColor:`${rgbType[0]}`}} className="ButtonType" onClick={firstButton}>{newButton[0]}</div>

            {newButton.length === 2 ? <div style={{backgroundColor: rgbType[1]}} className="ButtonType" onClick={secondButton}>{newButton[1]}</div> : ''}
        </div>
    </>
  )
}

export default Type