import React, { useState } from 'react';

const extras = [
  { name: 'Tempura', price: 0.50, icon: '🍤' },
  { name: 'Crocante', price: 0.50, icon: '🥢' },
  { name: 'Proteína Extra', price: 0.50, icon: '🐟' },
  { name: 'Relleno Extra', price: 0.50, icon: '🥑' },
  { name: 'Cobertura Extra', price: 0.50, icon: '🌱' }
];

const ExtrasModal = ({ isOpen, onClose, onExtrasSelect }) => {
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extra) => {
    setSelectedExtras(prev => 
      prev.includes(extra) 
        ? prev.filter(e => e !== extra)
        : [...prev, extra]
    );
  };

  const calculateTotal = () => {
    return selectedExtras.length * 0.50;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Extras Gourmet
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            ✖️
          </button>
        </div>

        <div className="space-y-4">
          {extras.map((extra) => (
            <div 
              key={extra.name}
              onClick={() => toggleExtra(extra)}
              className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 
                ${selectedExtras.includes(extra) 
                  ? 'bg-gradient-to-r from-indigo-100 to-purple-100 scale-105' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{extra.icon}</span>
                <span className="font-semibold text-gray-800">{extra.name}</span>
              </div>
              <div className={`text-lg font-bold 
                ${selectedExtras.includes(extra) 
                  ? 'text-indigo-600' 
                  : 'text-gray-500'}`}>
                +${extra.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Total Extras:</span>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            ${calculateTotal().toFixed(2)}
          </span>
        </div>

        <button 
          onClick={() => {
            onExtrasSelect(selectedExtras);
            onClose();
          }}
          className="w-full mt-6 py-4 rounded-full 
          bg-gradient-to-r from-indigo-600 to-purple-600 
          text-white font-bold text-lg 
          hover:from-indigo-700 hover:to-purple-700 
          transition-all duration-300 transform hover:scale-105"
        >
          Confirmar Extras
        </button>
      </div>
    </div>
  );
};

export default ExtrasModal;