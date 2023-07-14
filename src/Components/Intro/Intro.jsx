import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import mine from '../../img/mine.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

const Intro = () => {
  const transition ={ duration: 2, type: "spring"}

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color: darkMode? 'white':''}}> Hey! I Am </span>
                <span>Bharath</span>
                <span>Full Stack Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>
            <Link spy={true} to ='Contact' smooth={true} >
            <button className='button i-button' id='Hire'>Hire me</button>
            </Link>

            <div className='i-icons'>
                
               <a href='https://github.com/BHARATHKN0' target='blank'> <img src={Github} alt='Github'  /></a>
                <a href='https://www.linkedin.com/in/bharath-k-n-0b859b250/' target='blank'><img src={LinkedIn} alt='Linkedin' /></a>
                <a href='https://www.instagram.com/b_h_a_r_a_t_h_987/' target='blank'><img src={Instagram} alt='Instagram' /></a>
            </div>
        </div>
      <div className='i-right'> 
      <img src={Vector1} alt='' />
      <img src={Vector2} alt="" />
      <img src={mine} alt='' />
      < motion.img
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}} 
        transition={transition} 
        src={glassesimoji} alt=''
      /> 

      <motion.div 
      initial={{top: '-4%', left:'74%'}}
      whileInView={{left: '68%'}}
      transition={transition}
      
      style={{top:'-4%', left:'68%'}}
      className='floating-div'>

        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
      </motion.div>

      <motion.div 
      initial={{top: '55%'}}
      whileInView={{left:'1.1rem'}}
      transition={transition}
      
      style={{top:'18rem', left:'0rem'}}
      className='floating-div'>
        <FloatingDiv image={thumbup} txt1='Best Designer' />
      </motion.div>

      {/*blur divs*/}
      <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
      <div className='blur' style={{background:'#c1f6ff', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
