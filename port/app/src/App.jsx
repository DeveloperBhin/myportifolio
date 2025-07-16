import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Tools from './pages/Tools';
import Journey from './pages/Journey';
import Recents from './pages/Recents';
import Contacts from './pages/Contacts';
import Contactinfo from './pages/Contactinfo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/works" element={<Recents />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/contact-info" element={<Contactinfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
