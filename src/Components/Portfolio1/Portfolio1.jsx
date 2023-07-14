import React from 'react'
import './Portfolio1.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Flaskp from "../../img/Flaskp.png";
import portfolio3 from "../../img/portfolio3.png";
import Web from "../../img/Web.png";
import Musicapp1 from "../../img/Musicapp1.png";
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio1 = () => {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>

        {/* heading  */}
      <span style={{color:darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider  */}
      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src={Flaskp} alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={portfolio3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Web} alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Musicapp1} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio1
