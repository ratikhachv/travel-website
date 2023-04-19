import React from 'react'
import FixedHeaderTemplate from './FixedHeaderTemplate'

function FixedHeader() {
  return (
    <FixedHeaderTemplate 
    navigation={<div className='navigation'></div>}
    languageBtn={<div className='language-btn'></div>}
    />
  )
}

export default FixedHeader