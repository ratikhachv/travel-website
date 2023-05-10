import React from 'react'
import "./WhyChooseUsTemplate.css"
export default function WhyChooseUsTemplate(props) {
  return (
    <>
    <div className='WhyChooseUsDiv'>
      <div className='upDiv'>
         <p className='WhyChooseUs'>Why Choose Us ?</p>
         <p className='WhyChooseUsText'>These popular destinations have a lot to offer</p>
      </div>
      <div className='downDiv'>
        <div>{props.box}</div>
        <div>{props.box}</div>
        <div>{props.box}</div>
      </div>
    </div>
    </>
  )
}
