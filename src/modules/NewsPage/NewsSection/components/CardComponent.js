import React from 'react'
import card from "../../../../assets/card.jpg"
import "./CardComponent.css"
export default function CardComponent(props) {
  return (
     <div className='cardDiv'>
      <img className='cardImg' src={card}></img>
      <div>
        <p className='cardText'>{props.cardText}where can i go? 5 amazing countries that are open right now</p>
        <p className='cardDate'>{props.cardDate}September 19, 2022</p>
      </div>
    </div>
  )
}
