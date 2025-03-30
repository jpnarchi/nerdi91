import React from 'react';

const ChefPromoButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-yellow-500 text-white 
        p-4 rounded-full shadow-2xl transform hover:scale-110 
        transition-all duration-300 z-40 flex items-center 
        space-x-2 hover:bg-yellow-600"
    >
      <span className="text-2xl">👨‍🍳</span>
      <span className="font-bold">Promo del Chef</span>
    </button>
  );
};

export default ChefPromoButton;