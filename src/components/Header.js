import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3480/3480467.png" 
            alt="KitoSushi Logo" 
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-3xl font-bold 
          bg-gradient-to-r from-red-500 to-pink-600 
          text-transparent bg-clip-text">KitoSushi</h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition">Inicio</a>
          <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition">Menú</a>
          <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;