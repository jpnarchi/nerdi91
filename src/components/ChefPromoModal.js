import React from 'react';

const ingredientOptions = {
  bases: ['Arroz Blanco', 'Arroz Negro', 'Base Integral'],
  proteinas: ['Salmón', 'Atún', 'Camarón', 'Pulpo', 'Pez Blanco'],
  rellenos: ['Queso', 'Aguacate', 'Pepino', 'Zanahoria', 'Mango'],
  coberturas: ['Ajonjolí', 'Masago', 'Nori', 'Cebollín'],
  bebidas: ['Té Verde', 'Refresco', 'Agua', 'Jugo Natural'],
  salsas: ['Soya', 'Teriyaki', 'Picante', 'Wasabi'],
  postres: ['Mochi', 'Flan', 'Helado', 'Fruta']
};

const ChefPromoModal = ({ isOpen, onClose, chefSelection, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">🧑‍🍳 Selección del Chef</h2>
        
        <div className="space-y-4">
          {Object.entries(chefSelection).map(([category, ingredients]) => (
            <div key={category} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold capitalize mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {ingredients.map(ingredient => (
                  <span 
                    key={ingredient} 
                    className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button 
            onClick={onClose} 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefPromoModal;