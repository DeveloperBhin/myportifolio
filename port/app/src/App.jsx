import './App.css' 
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Swiper,SwiperSlide} from 'swiper/react';



import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Carouselup from './components/Carouselup';
import Carouseltxt from './components/Carouseltxt';


import Tools from './pages/Tools';

import Journey from './pages/journey';
import Recents from './pages/Recents';

import Contacts from './pages/Contacts';


import MobileApp from './pages/MobileApp';
import Custom from './pages/Custom';

import CircleCarousel from './components/CircleCarousel';
import { Link } from 'react-router-dom';



function App() {
 
  return (
    <>
      <Navbar/>
          <div id="home" className=" bg-gray-100">  <div>
      <div className='grid grid-cols-2 bg-black'>
        <div>
        <Carouseltxt/>
        </div>
        <div>
        <Carouselup/>
        </div>

      </div>
      
  </div></div>
<div id="tool" className=" bg-[#161a22]">
   <Tools/>
 </div>
<div id="journey" className="h-screen bg-gray-300">
   <Journey/>
</div>
<div id="works" className="bg-[#161a22]"><Recents/></div>
<div id="contacts" className="bg-[#0c111b] p-3">  <Contacts/></div>

      
  
    
    </>
  );
};

export default App