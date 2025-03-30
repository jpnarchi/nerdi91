import React, { useState } from 'react';
import ExtrasModal from './ExtrasModal';

const ExtrasButton = ({ onExtrasSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 
        text-white p-4 rounded-full shadow-2xl 
        transform hover:scale-110 transition-all duration-300 z-40 
        flex items-center space-x-2 hover:shadow-xl"
      >
        <span className="text-2xl">🍣</span>
        <span className="font-bold">Extras Gourmet</span>
      </button>

      <ExtrasModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onExtrasSelect={onExtrasSelect}
      />
    </>
  );
};

export default ExtrasButton;