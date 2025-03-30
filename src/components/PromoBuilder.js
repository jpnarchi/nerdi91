import React, { useState } from 'react';

const ingredientOptions = {
  bases: ['Arroz Morado', 'Arroz Blanco', 'Pepino', 'Maduro'],
  proteinas: ['Camarón', 'Kamicama', 'Pollo', 'Portobello', 'Salmón', 'Tofu'],
  rellenos: ['Aguacate', 'Mango', 'Pepino', 'Plátano Maduro', 'Queso Crema', 'Zanahoria Blanca', 'Zanahoria-Zuquini'],
  coberturas: ['Aguacate', 'Ajonjolí', 'Cebollín', 'Quinua', 'Maduro'],
  bebidas: ['Té', 'Limonada Jengibre', 'Agua con Gas', 'Agua sin Gas'],
  salsas: ['Soya', 'Anguila', 'Frutos Amarillos', 'Mayo Chipotle'],
  extras: ['Tempura', 'Crocante', 'Proteína Extra', 'Relleno Extra', 'Cobertura Extra']
};

const PromoBuilder = ({ promo, onOrderComplete }) => {
  const [selectedIngredients, setSelectedIngredients] = useState({
    bases: [], proteinas: [], rellenos: [], 
    coberturas: [], bebidas: [], salsas: [], extras: []
  });

  const updateIngredients = (category, ingredient) => {
    setSelectedIngredients(prev => {
      const currentSelection = prev[category];
      const maxSelections = {
        'Promo Infantil': { 
          bases: 1, proteinas: 1, rellenos: 2, 
          coberturas: 2, bebidas: 1, salsas: 2, extras: 2 
        },
        'Promo Personal': { 
          bases: 1, proteinas: 2, rellenos: 3, 
          coberturas: 3, bebidas: 1, salsas: 2, extras: 2 
        },
        'Promo Familiar': { 
          bases: 2, proteinas: 3, rellenos: 6, 
          coberturas: 6, bebidas: 2, salsas: 3, extras: 3 
        }
      }[promo];

      const newSelection = currentSelection.includes(ingredient)
        ? currentSelection.filter(item => item !== ingredient)
        : (currentSelection.length < maxSelections[category] 
            ? [...currentSelection, ingredient] 
            : currentSelection);

      return { ...prev, [category]: newSelection };
    });
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-6">
      <h2 className="text-4xl font-bold text-center 
      bg-gradient-to-r from-green-500 to-emerald-600 
      text-transparent bg-clip-text">{promo}</h2>
      
      {Object.entries(ingredientOptions).map(([category, options]) => (
        <div key={category} className="bg-gray-50 p-4 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
            {category.replace('-', ' ')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {options.map(ingredient => (
              <button
                key={ingredient}
                onClick={() => updateIngredients(category, ingredient)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${selectedIngredients[category].includes(ingredient) 
                    ? 'bg-green-500 text-white scale-105' 
                    : 'bg-white text-gray-700 border hover:bg-green-50 hover:border-green-300'}`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>
      ))}
      
      <button
        onClick={() => onOrderComplete(selectedIngredients)}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 
        text-white py-4 rounded-full text-xl font-bold 
        hover:from-green-600 hover:to-emerald-700 
        transition-all duration-500 transform hover:scale-105"
      >
        Confirmar Pedido
      </button>
    </div>
  );
};

export default PromoBuilder;