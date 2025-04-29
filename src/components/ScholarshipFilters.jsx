import React from 'react';
import { motion } from 'framer-motion';
import { Globe, GraduationCap } from 'lucide-react';

const ScholarshipFilters = ({ selectedCountry, onFilter }) => {
  const countries = ['All', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'];
  
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 md:gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {countries.map((country) => (
        <motion.button
          key={country}
          className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            selectedCountry === country 
              ? 'bg-[#0A192F] text-white shadow-lg' 
              : 'bg-[#F5F7FA] text-[#0A192F] hover:bg-gray-200'
          }`}
          onClick={() => onFilter(country)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {country === 'All' ? (
            <Globe className="mr-2 h-5 w-5" />
          ) : (
            <GraduationCap className="mr-2 h-5 w-5" />
          )}
          {country}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ScholarshipFilters;