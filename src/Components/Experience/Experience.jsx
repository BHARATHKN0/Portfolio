import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className='experience' id='Experience'>
        <div className='achievement'>
            <div className='circle' style={{color:darkMode? '#4a0ffd': ''}}>10+</div>
            <span>Courses</span>
            <span>Completed Certificate</span>
            
        </div>
        <div className="achievement">
            <div className="circle" style={{color:darkMode? '#4a0ffd': ''}}>5+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:darkMode? '#4a0ffd': ''}}>4</div>
            <span>Achievements</span>
            <span>Done</span>
        </div>
      
    </div>
  )
}

export default Experience
