import React from 'react'
import FooterLogo from './components/FooterLogo'
import SocialMedia from './components/SocialMedia'
import FooterTemplate from './FooterTemplate'

export default function Footer() {
  return (
    <>
    <FooterTemplate
    footerLogo={<FooterLogo/>}
    footerLink={<g></g>}
    fooetrServices={<g></g>}
    footerContact={<g></g>}
    icons={<SocialMedia/>}/>
    </>
  )
}
