import React from 'react'
import fbIcon from '../../../assets/fb-icon.png'
import instaIcon from '../../../assets/insta-icon.png'
import twitterIcon from '../../../assets/twitter-icon.png'
import githubIcon from '../../../assets/github-icon.png'

//css
import './SocialMedia.css'

function SocialMedia() {
  return (
    <div className='social-media__wrapper'>
        <p>Follow us</p>
        <div className="social-media__icons">
            <img src={fbIcon} alt="fbIcon" />
            <img src={instaIcon} alt="instaIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
            <a href="https://github.com/ratikhachv/travel-website" target="_blanck"><img src={githubIcon} alt="githubIcon" /></a>
        </div>
    </div>
  )
}

export default SocialMedia