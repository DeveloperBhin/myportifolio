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

import Journey from './pages/Journey';
import Recents from './pages/Recents';

import Contacts from './pages/Contacts';
import Contactinfo from './pages/Contanctinfo'


import MobileApp from './pages/MobileApp';
import Custom from './pages/Custom';

import CircleCarousel from './components/CircleCarousel';
import { Link } from 'react-router-dom';
     import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';




  


function App() {
 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu after clicking
    }
  };
 
 
  return (
    <>

    <nav className='bg-neutral-950 text-pink-800 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-semibold'>
          {/* Your logo here */}
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-lg'>
          <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-300">Home</button></li>
          <li><button onClick={() => scrollToSection('tool')} className="hover:text-yellow-300">Tool&Tech</button></li>
          <li><button onClick={() => scrollToSection('journey')} className="hover:text-yellow-300">The Journey</button></li>
          <li><button onClick={() => scrollToSection('works')} className="hover:text-yellow-300">Recent Works</button></li>
          <li><button onClick={() => scrollToSection('contacts')} className="hover:text-yellow-300">Contacts</button></li>
        
         
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden mt-4 space-y-4 px-4 text-lg'>
          <li><button onClick={() => scrollToSection('home')} className="block hover:text-yellow-300">Home</button></li>
          <li><button onClick={() => scrollToSection('tool')} className="block hover:text-yellow-300">Tool&Tech</button></li>
          <li><button onClick={() => scrollToSection('journey')} className="block hover:text-yellow-300">The Journey</button></li>
          <li><button onClick={() => scrollToSection('works')} className="block hover:text-yellow-300">Recent Works</button></li>
          <li><button onClick={() => scrollToSection('contacts')} className="block hover:text-yellow-300">Contacts</button></li>
        </ul>
      )}
    
    </nav>
   
  

  

  





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
<div id="journey" className=" bg-gray-300">
   <Journey/>
</div>
<div id="works" className="bg-[#161a22]"><Recents/></div>
<div id="contacts" className="bg-[#0c111b] p-3">  <Contacts/></div>

   <Routes className="justify-center ">
      
      <Route path="Contactinfo/" element={

  <Contactinfo/>

        
        } 
        />   
  
    </Routes>
   
    </>
  );
};

export default App
