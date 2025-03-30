import React from 'react';
import { motion } from 'framer-motion';

const Unknown = ({ message = "Página no encontrada" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4"
    >
      <div className="text-9xl mb-6 animate-bounce">🍣</div>
      <div className="bg-white shadow-2xl rounded-3xl p-8 text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
          Ups! Página no Encontrada
        </h1>
        <p className="text-xl text-gray-600 mb-6">{message}</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 
          text-white rounded-full hover:from-green-700 hover:to-emerald-700 
          transition-all duration-300"
        >
          Volver al Inicio
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Unknown;

// DONE