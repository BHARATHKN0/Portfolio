import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume2 from './Resume2.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Services = () => {
  const transition={duration:2, type:'spring'}
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>Computer engineering student with strong programming skills,<br/> Completed projects in software development.<br/> Possesses excellent communication and teamwork skills.<br/> Quick learner and critical thinker.</span>
        <a href={Resume2} download>
        <button className='button s-button'>Download CV</button>

        </a>
        <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      {/* first card  */}
      <div className="cards">
            <motion.div
            whileInView={{left: '22rem'}}
            initial={{left: '10%'}}
            transition={transition}
            
            style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Visual Designer, Sketch, Photoshop, Adobe'}
            />
            </motion.div>
            {/* second card  */}
            <motion.div 
            whileInView={{left: '5rem'}}
            initial={{left: '10%'}}
            transition={transition}  
            
            style={{top:"12rem", left:"-4rem"}}>
              <Card
                emoji={Glasses}
                heading={"Developer"}
                detail={"HTML, CSS3, Javascript, React, MongoDB"}
                />
            </motion.div>
            <motion.div 
            whileInView={{left: '25rem'}}
            initial={{left: '10%'}}
            transition={transition}
            
            style={{top:"19rem", left:"12rem"}}>
              <Card
                emoji={Humble}
                heading={"Programming Languages"}
                detail={"Python, Java (Basic), C, C++, MySQL, PHP"}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background:'var(--purple}'}}></div>
       </div>
    </div>
  )
}

export default Services
