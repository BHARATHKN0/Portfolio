import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>bharath.0kn@gmail.com</span>
        <div className='f-icons'>
          <a href='https://www.linkedin.com/in/bharath-k-n-0b859b250/' target='blank'><Linkedin color='white' size='3rem' /></a>
            <a href='https://github.com/BHARATHKN0' target='blank'><Github color='white' size='3rem' /></a>
            <a href='https://www.instagram.com/b_h_a_r_a_t_h_987/' target='blank'><Insta color='white' size='3rem' /></a>


        </div>
      </div>
    </div>
  )
}

export default Footer
