import React from 'react'
import "./InputComponent.css"
export default function InputComponent() {
  return (
    <>
   <div className='InputFormDiv'>
<div className='input-P-tag'>
        <p className='pNameTag'>Name :</p>
        <input className='nameInputTag' type='text' placeholder='Input your name'></input>
    </div>
    <div className='input-P-tag'>
        <p className='pEmailTag'>Email :</p>
        <input className='emailInputTag' type='email' placeholder='Email'></input>
    </div>
    </div>
    </>
  )
}
