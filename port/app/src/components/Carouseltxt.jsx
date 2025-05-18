

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';



const Carousel = () => {
  return (
    <div className='w-full max-w-full mx-auto h-[50vh] min-h-[250px]'>
      <Swiper
        direction="vertical"
        modules={[Pagination, Navigation, Autoplay]}
     
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className='rounded-lg max-w-full h-full custom-swiper'
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='slide-item'>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 z-10 px-2 sm:px-4 max-w-full max-h-full animate-slide-up">
 
  <p className="text-xs sm:text-sm mt-1 sm:mt-2">
  <h1 className='text-white text-center text-4xl font-extrabold '>
 Norbeth Vitus

      </h1></p>
      <p><h4 className='text-white text-2xl font-bold'>
        Web App Developer</h4></p>
           <div class="grid grid-cols-5 text-center p-8 gap-3" >
      
        
        <div> 
      <a href=" https://github.com/DeveloperBhin" className=" text  ">
        <img src="/github (3).png "className="w-8   hover:bg-white  bg-pink-800 p-1 rounded-full"/>
     
        
    </a>
    </div> 
    <div> 
      <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=norbeth-vitus-916b63334" className=" text  ">
        <img src="/linkedin (5).png "className="w-8   hover:bg-white bg-pink-800 "/>
        
    </a>
    </div>
    <div> 
      <a href="https://wa.me/255747904950" className=" text  ">
        <img src="/whatsapp (8).png "className="w-8  hover:bg-white bg-pink-800 p-1 rounded-full"/>
        
    </a>
    </div>      
    
    
    
    

  
    </div>
</div>

  </div>
          </div>
        </SwiperSlide>

                 <SwiperSlide>
          <div className='slide-item'>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 z-10 px-2 sm:px-4 max-w-full max-h-full animate-slide-up">
 
  <p className="text-xs sm:text-sm mt-1 sm:mt-2">
  <h1 className='text-white text-center text-4xl font-extrabold '>
 Norbeth Vitus

      </h1></p>
      <p><h4 className='text-white text-2xl font-bold'>
        Web App Developer</h4></p>
           <div class="grid grid-cols-5 text-center p-8 gap-3" >
      
        
        <div> 
      <a href=" https://github.com/DeveloperBhin" className=" text  ">
        <img src="/github (3).png "className="w-8   hover:bg-white  bg-pink-800 p-1 rounded-full"/>
     
        
    </a>
    </div> 
    <div> 
      <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=norbeth-vitus-916b63334" className=" text  ">
        <img src="/linkedin (5).png "className="w-8   hover:bg-white bg-pink-800 "/>
        
    </a>
    </div>
    <div> 
      <a href="https://wa.me/255747904950" className=" text  ">
        <img src="/whatsapp (8).png "className="w-8  hover:bg-white bg-pink-800 p-1 rounded-full"/>
        
    </a>
    </div>      
    
    
    
    

  
    </div>
</div>

  </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};
export default Carousel;

