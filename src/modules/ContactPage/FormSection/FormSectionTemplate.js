import React from 'react'
import "./FormSectionTemplate.css"
export default function FormSectionTemplate(props) {
  return (
    <>
    <div className='formSectionDiv'>
      {props.TextParagraphComponent}
      {props.InputComponent}
      {props.MessageComponent}
    </div>
    </>
  )
}
