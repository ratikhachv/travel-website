import React from 'react'
import group from "./assets/Group.png"
import "./WhyChooseItem.css"
export default function WhyChooseItem(props) {
  return (
   <>
   <div className="whyChooseUsDiv">
       <img className="whyChooseUsImg" src={group}></img>
       <p>{props.whyChooseUsTitle}Best price guarantee</p>
       <p className="whyChooseUsLorem">{props.whyChooseUsLorem}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
   </>
  )
}
