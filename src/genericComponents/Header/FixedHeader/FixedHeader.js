import React from 'react'
import HeaderNav from './components/HeaderNav'
import FixedHeaderTemplate from './FixedHeaderTemplate'

function FixedHeader() {
  return (
    <FixedHeaderTemplate 
    navigation={<HeaderNav/>}
    languageBtn={<div className='language-btn'></div>}
    />
  )
}

export default FixedHeader