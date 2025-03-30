import React from 'react';

const PromoCard = ({ title, basePrice, ingredients, onSelectPromo }) => {
  return (
    <div 
      className="relative group bg-white shadow-2xl rounded-3xl overflow-hidden 
      transform transition-all duration-500 hover:scale-105 hover:shadow-4xl 
      border-2 border-transparent hover:border-red-500 cursor-pointer"
      onClick={() => onSelectPromo(title)}
    >
      <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
        ${basePrice.toFixed(2)}
      </div>
      
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 
        bg-gradient-to-r from-red-500 to-pink-600 
        text-transparent bg-clip-text">{title}</h2>
        
        <div className="space-y-2">
          {Object.entries(ingredients).map(([category, description]) => (
            <div key={category} className="flex items-center">
              <span className="font-semibold text-gray-600 mr-2 capitalize">
                {category.replace('_', ' ')}:
              </span>
              <span className="text-gray-800">{description}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 
      bg-gradient-to-r from-red-400 to-pink-600 
      transform origin-left scale-x-0 group-hover:scale-x-100 
      transition-transform duration-500"></div>
    </div>
  );
};

export default PromoCard;

// DONE