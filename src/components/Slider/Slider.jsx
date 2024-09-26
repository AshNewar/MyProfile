import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./slider.css"
import ProjectCard from '../Projects/ProjectCard';

const Slider=({Projects}) => {
  return (
    <div className="container">
      <Swiper
        autoPlay={{ delay: 3000 }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div 
            className='project-content section_margin swiper-wrapper'>
            {Projects?.map((project, index) => (
              <SwiperSlide className='ss'>
                <ProjectCard key={index} title={project.title} src={project.src} desc={project.description} index={index} />
              </SwiperSlide>

            ))}
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <MdArrowBack size={20} color='black'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <MdArrowForward  size={20} color='black'/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;