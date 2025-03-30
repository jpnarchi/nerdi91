import React, { useState } from 'react';
import Header from './components/Header';
import PromoCard from './components/PromoCard';
import PromoBuilder from './components/PromoBuilder';
import ExtrasButton from './components/ExtrasButton';

function App() {
  const [currentView, setCurrentView] = useState('promos');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const promos = {
    'Promo Infantil': {
      basePrice: 12.99,
      ingredients: {
        bases: '1 base',
        proteinas: '1 proteína',
        rellenos: '2 rellenos',
        coberturas: '2 coberturas',
        bebidas: '1 bebida',
        salsas: '2 salsas'
      }
    },
    'Promo Personal': {
      basePrice: 16.99,
      ingredients: {
        bases: '1 base',
        proteinas: '2 proteínas',
        rellenos: '3 rellenos',
        coberturas: '3 coberturas',
        bebidas: '1 bebida',
        salsas: '2 salsas'
      }
    },
    'Promo Familiar': {
      basePrice: 23.99,
      ingredients: {
        bases: '2 bases',
        proteinas: '3 proteínas',
        rellenos: '6 rellenos',
        coberturas: '6 coberturas',
        bebidas: '2 bebidas',
        salsas: '3 salsas'
      }
    }
  };

  const handlePromoSelect = (promo) => {
    setSelectedPromo(promo);
    setCurrentView('builder');
  };

  const handleOrderComplete = (order) => {
    const totalExtrasPrice = selectedExtras.reduce((total, extra) => total + 0.50, 0);
    const finalOrder = {
      ...order,
      extras: selectedExtras,
      extrasTotal: totalExtrasPrice
    };

    console.log('Pedido completado:', finalOrder);
    alert(`¡Pedido realizado con éxito! Extras: $${totalExtrasPrice.toFixed(2)}`);
    setCurrentView('promos');
    setSelectedExtras([]);
  };

  const handleExtrasSelect = (extras) => {
    setSelectedExtras(extras);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {currentView === 'promos' && (
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(promos).map(([title, promo]) => (
              <PromoCard
                key={title}
                title={title}
                basePrice={promo.basePrice}
                ingredients={promo.ingredients}
                onSelectPromo={handlePromoSelect}
              />
            ))}
          </div>
        )}
        
        {currentView === 'builder' && selectedPromo && (
          <PromoBuilder 
            promo={selectedPromo} 
            onOrderComplete={handleOrderComplete}
          />
        )}

        <ExtrasButton onExtrasSelect={handleExtrasSelect} />
      </div>
    </div>
  );
}

export default App;

