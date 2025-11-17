
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';


const Carousel = () => {
  return (
    <div className='w-full max-w-full mx-auto h-[65vh] min-h-[250px]'>
      <Swiper
        direction="vertical"
        modules={[Pagination, Autoplay]}
      
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className='rounded-lg max-w-full h-full '
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='slide-item'>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 text-black z-10 px-2 sm:px-4 max-w-full max-h-full animate-slide-up">
   <img src='/Group 3 (5).jpg' className='w-full h-full object-cover' alt="Slide 2" />
       
      
</div>

  </div>
          </div>
        </SwiperSlide>

            <SwiperSlide>
          <div className='slide-item'>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 text-black z-10 px-2 sm:px-4 max-w-full animate-slide-up">
 
           <img src='/Group 3 (5).jpg' className='w-full h-full object-cover' alt="Slide 2" />
   
</div>

  </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
export default Carousel;

