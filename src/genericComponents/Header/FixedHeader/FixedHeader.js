import React from 'react'
import HeaderNav from './components/HeaderNav'
import FixedHeaderTemplate from './FixedHeaderTemplate'
import SearchbarDropdown from './components/SearchbarDropdown'

function FixedHeader() {
  return (
    <FixedHeaderTemplate 
    navigation={<HeaderNav/>}
    searchIcon={<SearchbarDropdown/>}
    />
  )
}

export default FixedHeader