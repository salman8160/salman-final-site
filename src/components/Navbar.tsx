'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Writing', href: '/writing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Book', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-20 top-0 bg-black/90 backdrop-blur-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Salman Tabrez
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden bg-black border-t border-gray-700"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
