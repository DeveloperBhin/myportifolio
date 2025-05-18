import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className='w-full max-w-full mx-auto'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className='rounded-lg max-w-full'
      >
        {/* Slide 1 */}
        <SwiperSlide>
                  <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/ds.jpg' className='w-full h-full object-cover' alt="Slide 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:left-10 text-white z-10 px-2 sm:px-4 max-w-full">
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
                EMPOWERING BUSINESS THROUGH CUSTOM APP AND WEB DEVELOPMENT SOLUTIONS.
              </h2>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                We build powerful and scalable mobile apps and websites that fit your unique needs.<br />
                From idea to launch, we create digital solutions that help your business grow.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
            <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/seo1.jpg' className='w-full h-full object-cover' alt="Slide 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:left-10 text-white z-10 px-2 sm:px-4 max-w-full">
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
                WE DELIVER INNOVATIVE DIGITAL PRODUCTS AND IT SERVICES TAILORED FOR YOUR SUCCESS.
              </h2>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                Whether it’s system development, maintenance, or tech support—we’ve got you covered.<br />
                Our team blends creativity and technology to provide solutions that work for you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
           <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/wb.jpg' className='w-full h-full object-cover' alt="Slide 3" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:left-10 text-white z-10 px-2 sm:px-4 max-w-full">
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
                FROM WEBSITES TO MOBILE APPS — WE TURN TECH IDEAS INTO POWERFUL REALITIES.
              </h2>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                Share your vision, and we’ll bring it to life with expert development and design.<br />
                We handle the tech so you can focus on what matters most—your business.
              </p>
            </div>
          </div>
        </SwiperSlide>
             <SwiperSlide>
           <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/cons.jpg' className='w-full h-full object-cover' alt="Slide 3" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:left-10 text-white z-10 px-2 sm:px-4 max-w-full">
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
            
  FROM STRATEGY TO SUCCESS — WE TURN BUSINESS CHALLENGES INTO GROWTH OPPORTUNITIES.
</h2>
<p className="text-xs sm:text-sm mt-1 sm:mt-2">
  Share your business goals, and we’ll craft data-driven strategies to help you achieve them.<br />
  We handle the planning, analysis, and execution so you can focus on scaling with confidence.
</p>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;