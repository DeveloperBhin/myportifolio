import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react';

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
  );
};

export default Navbar;
