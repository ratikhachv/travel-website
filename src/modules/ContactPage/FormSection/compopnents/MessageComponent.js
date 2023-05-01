import React from 'react'
import "./MessageComponent.css"
export default function MessageComponent() {
  return (
    <div className='messageDiv'>
    <div className='messageInputDiv'>
    <p>Message :</p>
    <textarea className='messageInput' name="text" rows="14" cols="10" resize= "none" > </textarea>
    </div>
    <div className='sendDiv'>
      <p className='send-P-tag'>Send</p>
    </div>
  
  </div>
  )
}
