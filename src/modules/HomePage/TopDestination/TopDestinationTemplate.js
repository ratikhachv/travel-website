import React from 'react'
import './TopDestinationTemplate.css'
export default function TopDestinationTemplate(props) {
  return (
    <div className='TopDestinationTemplateSection'>
        {props.boxes}
    </div>
  )
}