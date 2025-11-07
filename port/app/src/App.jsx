import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Hero and section components
import Carouseltxt from './components/Carouseltxt';
import Carouselup from './components/Carouselup';

// Page sections
import Tools from './pages/Tools';
import Journey from './pages/Journey';
import Recents from './pages/Recents';
import Contacts from './pages/Contacts';

// Standalone pages
import Contactinfo from './pages/Contactinfo';
import MobileApp from './pages/MobileApp';
import Custom from './pages/Custom';

// Optional carousel
import CircleCarousel from './components/CircleCarousel';

function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-2 bg-black text-white "  >
          <div><Carouseltxt /></div>
          <div><Carouselup /></div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tool" className="bg-[#161a22] py-8">
        <Tools />
      </section>

      {/* Journey Section */}
      <section id="journey" className="bg-gray-300 py-8">
        <Journey />
      </section>

      {/* Works Section */}
      <section id="works" className="bg-[#161a22] py-8">
        <Recents />
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="bg-[#0c111b] text-white py-8">
        <Contacts />
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactinfo" element={<Contactinfo />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
