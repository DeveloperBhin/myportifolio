import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Carouseltxt from './components/Carouseltxt';
import Carouselup from './components/Carouselup';

import Tools from './pages/Tools';
import Journey from './pages/Journey';
import Recents from './pages/Recents';
import Contacts from './pages/Contacts';
import Contactinfo from './pages/Contactinfo';
import MobileApp from './pages/MobileApp';
import Custom from './pages/Custom';
import CircleCarousel from './components/CircleCarousel';

function HomePage() {
  return (
    <>
      <div id="home" className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black">
          <div><Carouseltxt /></div>
          <div><Carouselup /></div>
        </div>
      </div>

      <div id="tool" className="bg-[#161a22]">
        <Tools />
      </div>

      <div id="journey" className="bg-gray-300">
        <Journey />
      </div>

      <div id="works" className="bg-[#161a22]">
        <Recents />
      </div>

      <div id="contacts" className="bg-[#0c111b] p-3">
        <Contacts />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contactinfo" element={<Contactinfo />} />
        <Route path="/MobileApp" element={<MobileApp />} />
        <Route path="/Custom" element={<Custom />} />
        {/* You can add more routes here as needed */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
