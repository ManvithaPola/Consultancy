import React from 'react';
import { motion } from 'framer-motion';

const ScholarshipsHero = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Find Scholarships for Your Dream Education Abroad
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We guide you to financial assistance opportunities worldwide.
          </motion.p>
          
          <motion.button 
            className="bg-[#FFC300] text-[#0A192F] font-bold py-3 px-8 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 195, 0, 0.5)"
            }}
          >
            Explore Scholarships
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
    </div>
  );
};

export default ScholarshipsHero;